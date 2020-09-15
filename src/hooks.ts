import React from "react";

type Device = "mobile" | "tablet" | "desktop" | "hd";

interface DeviceInfo {
  width: number;
  device: Device;
}

const findDevice = (deviceWidth: number): Device =>
  [
    ["mobile", 768],
    ["tablet", 1024],
    ["desktop", 1440],
    ["hd", Infinity],
  ].find(([_, width]) => deviceWidth < width)?.[0] as Device;

export function useDeviceInfo(): DeviceInfo {
  const [state, setState] = React.useState<DeviceInfo>({
    width: 0,
    device: "desktop",
  });

  React.useEffect(() => {
    const updateState = () =>
      setState({
        width: window.innerWidth,
        device: findDevice(window.innerWidth),
      });

    updateState();

    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("resize", updateState);
    };
  }, []);

  return state;
}
