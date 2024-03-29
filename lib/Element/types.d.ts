import * as React from "react";
export declare type ThemeFn = (theme: any) => string | number | boolean | undefined;
export declare type PropType = string | number | boolean | ThemeFn | Record<string, string | number | boolean | ThemeFn | undefined> | undefined;
declare type SafeHTMLAttributes = Omit<React.AllHTMLAttributes<any>, "color" | "height" | "width" | "as" | "size">;
export interface ElementProps extends SafeHTMLAttributes {
    is?: string;
    ai?: PropType;
    alignItems?: PropType;
    animation?: PropType;
    b?: PropType;
    background?: PropType;
    backgroundColor?: PropType;
    backgroundSize?: PropType;
    bd?: PropType;
    bdb?: PropType;
    bdc?: PropType;
    bdl?: PropType;
    bdr?: PropType;
    bdrs?: PropType;
    bdt?: PropType;
    bg?: PropType;
    border?: PropType;
    borderBottom?: PropType;
    borderBottomWidth?: PropType;
    borderBottomLeftRadius?: PropType;
    borderBottomRightRadius?: PropType;
    borderColor?: PropType;
    borderLeft?: PropType;
    borderLeftWidth?: PropType;
    borderRadius?: PropType;
    borderRight?: PropType;
    borderRightWidth?: PropType;
    borderStyle?: PropType;
    borderTop?: PropType;
    borderTopWidth?: PropType;
    borderTopLeftRadius?: PropType;
    borderTopRightRadius?: PropType;
    borderWidth?: PropType;
    bottom?: PropType;
    boxShadow?: PropType;
    c?: PropType;
    children?: any;
    color?: PropType;
    cursor?: PropType;
    d?: PropType;
    display?: PropType;
    ff?: PropType;
    flex?: PropType;
    flexBasis?: PropType;
    flexDirection?: PropType;
    flexWrap?: PropType;
    fontFamily?: PropType;
    fontSize?: PropType;
    fontStyle?: PropType;
    fontVariant?: PropType;
    fontWeight?: PropType;
    fv?: PropType;
    fw?: PropType;
    fx?: PropType;
    fxd?: PropType;
    fxw?: PropType;
    fz?: PropType;
    h?: PropType;
    height?: PropType;
    jc?: PropType;
    justifyContent?: PropType;
    l?: PropType;
    left?: PropType;
    lh?: PropType;
    lineHeight?: PropType;
    m?: PropType;
    mah?: PropType;
    margin?: PropType;
    marginBottom?: PropType;
    marginLeft?: PropType;
    marginRight?: PropType;
    marginTop?: PropType;
    maw?: PropType;
    maxHeight?: PropType;
    maxWidth?: PropType;
    mb?: PropType;
    mih?: PropType;
    minHeight?: PropType;
    minWidth?: PropType;
    miw?: PropType;
    ml?: PropType;
    mr?: PropType;
    mt?: PropType;
    op?: PropType;
    opacity?: PropType;
    overflow?: PropType;
    overflowX?: PropType;
    overflowY?: PropType;
    p?: PropType;
    padding?: PropType;
    paddingBottom?: PropType;
    paddingLeft?: PropType;
    paddingRight?: PropType;
    paddingTop?: PropType;
    pb?: PropType;
    pl?: PropType;
    position?: PropType;
    pr?: PropType;
    pt?: PropType;
    r?: PropType;
    ref?: React.Ref<any>;
    resize?: PropType;
    right?: PropType;
    t?: PropType;
    ta?: PropType;
    textAlign?: PropType;
    textOverflow?: PropType;
    textTransform?: PropType;
    top?: PropType;
    tt?: PropType;
    userSelect?: PropType;
    va?: PropType;
    verticalAlign?: PropType;
    w?: PropType;
    whiteSpace?: PropType;
    width?: PropType;
    wordBreak?: PropType;
    zIndex?: PropType;
}
export {};
//# sourceMappingURL=types.d.ts.map