import React from "react";
import Box from "ui-box";
import { useTheme } from "styled-components";

import { useDeviceInfo } from "./hooks";

import { ElementProps } from "./types";
import {
  parseValues,
  pickAllowedAttrs,
  pickDataAttrs,
  resolveAlias,
} from "./utils";

const Element = React.forwardRef(
  ({ children, ...props }: ElementProps, ref) => {
    const theme = useTheme();
    const deviceInfo = useDeviceInfo();
    const resolvedProps = React.useMemo(
      () => parseValues(theme, deviceInfo.device, resolveAlias(props) as any),
      [props]
    );
    const allowedAttrs = React.useMemo(() => pickAllowedAttrs(resolvedProps), [
      resolvedProps,
    ]);

    return (
      <Box ref={ref as any} {...allowedAttrs} {...pickDataAttrs(props)}>
        {children}
      </Box>
    );
  }
);

Element.displayName = "Element";

Element.defaultProps = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

export default Element;
