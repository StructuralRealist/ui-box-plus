# ui-box-plus
> It's 📦 ui-box with extras 🎁

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

A fast and powerful React UI primitive for building components using CSS-in-JS. 
Extends [ui-box](https://github.com/segmentio/ui-box) with CSS shorthands, multi-type CSS props
and integrates with [styled components](https://styled-components.com).

![](https://media.giphy.com/media/iOz3p2txHIo4U/giphy.gif)

## Install
☝️ Don't forget to install the peer dependencies as well.
```sh
npm install ui-box-plus ui-box styled-components
```

## Setup
Add the `ThemeProvider` from styled components to your app. There is only _one_ required
theme property: `gridSize: number`. This will be the size in pixels of one grid unit.

```jsx
<ThemeProvider theme={{gridSize: 12}}>...</ThemeProvider>
```

## Usage

### Component
```tsx
import El from "ui-box-plus";

const Button = (props) => (
    <El
      is="button" // Strings are taken 'as is'
      h="32px" // Most CSS shorthand notations are supported
      mb // Booleans are interpreted as 1 grid unit
      p={2} // Numbers are interpreted as number of grid units
      background={theme => theme.colors.warning} // Functions are given the styled component theme
      w={{desktop: 8, mobile: "100%"}} // Provide an object to handle different devices
      {...props}
    />
);

const Example = () => (
  <Button disabled mt={4}>Hi</Button>
);
```

### Hook
ui-box-plus exports a hook for getting information about the device. It's used by the Element component when you provide
an object prop. You may find it useful for creating responsive designs.

```tsx
import { useDeviceInfo } from "ui-box-plus";

const { width, device } = useDeviceInfo();

interface DeviceInfo {
  width: number;
  device: "mobile" | "tablet" | "desktop" | "hd";
}
```

## Release History

* 0.2.0
    * Export useDeviceInfo hook.
* 0.1.0
    * First release.

## License

Distributed under the MIT license. See ``LICENSE`` for more information.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/ui-box-plus.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ui-box-plus
[npm-downloads]: https://img.shields.io/npm/dm/ui-box-plus.svg?style=flat-square
