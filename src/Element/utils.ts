import { HTML_ATTRIBUTES, CSS_PROPS, CSS_ALIAS_MAP } from "./constants";
import { ElementProps, PropType, ThemeFn } from "./types";

const pick = (wl: string[]) => (obj: Record<string, unknown> = {}) =>
  wl.reduce((acc, key) => (obj[key] ? { ...acc, [key]: obj[key] } : acc), {});

const pickBy = (testFn: (value: any, key: string) => boolean) => (
  obj: Record<string, any> = {}
) =>
  Object.keys(obj).reduce(
    (acc, key) => (testFn(obj[key], key) ? { ...acc, [key]: obj[key] } : acc),
    {}
  );

const cond = <T>(conds: [(arg: T) => boolean, (arg: T) => any][]) => (
  input: T
) => conds.find(([cond]) => cond(input))?.[1](input);

export const pickDataAttrs = pickBy((_, key: string) =>
  RegExp(/^data-.+/).test(key)
);

export const pickAllowedAttrs = pick([...HTML_ATTRIBUTES, ...CSS_PROPS]);

export const cssAliasProps = Object.keys(
  CSS_ALIAS_MAP
) as (keyof ElementProps)[];

export const resolveAlias = (props: ElementProps): ElementProps => {
  const resolvedShorthandProps = cssAliasProps.reduce(
    (map, value) =>
      typeof props[value] !== "undefined"
        ? { ...map, [CSS_ALIAS_MAP[value]]: props[value] }
        : map,
    {}
  );

  return { ...props, ...resolvedShorthandProps };
};

export const parseValue = (
  theme: any,
  device: string,
  value: PropType
): string | undefined | null =>
  cond<PropType>([
    [(v) => typeof v === "undefined" || v === null, (v) => v],
    [(v) => typeof v === "boolean", () => `${theme.gridSize}px`],
    [
      (v) => typeof v === "number",
      (num) => `${theme.gridSize * (num as number)}px`,
    ],
    [
      (v) => typeof v === "function",
      (fn) => parseValue(theme, device, (fn as ThemeFn)(theme)),
    ],
    [
      (v) => typeof v === "object",
      (v) => parseValue(theme, device, (v as Record<string, PropType>)[device]),
    ],
    [() => true, String],
  ])(value);

export const parseValues = (
  theme: any,
  device: string,
  props: Record<string, PropType>
) =>
  Object.keys(props).reduce((acc, key) => {
    if (![...CSS_PROPS, ...cssAliasProps].includes(key)) {
      return { ...acc, [key]: props[key] };
    }
    return { ...acc, [key]: parseValue(theme, device, props[key]) };
  }, {});
