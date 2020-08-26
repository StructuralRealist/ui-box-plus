import React from "react";

interface DeviceInfo {
  width: number;
  device: string;
}

const findDevice = (deviceWidth: number): string =>
  [
    ["mobile", 768],
    ["tablet", 1024],
    ["desktop", 1440],
    ["hd", Infinity],
  ].find(([_, width]) => deviceWidth < width)?.[0] as string;

export function useDeviceInfo(): DeviceInfo {
  const [state, setState] = React.useState({
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
