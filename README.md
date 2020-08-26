# ui-box-plus
> It's 📦 ui-box with extras 🎁

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

A fast and powerful React UI primitive for building components using CSS-in-JS. 
Extends [ui-box](https://github.com/segmentio/ui-box) with CSS shorthands, multi-type CSS props
and integration with styled-components.

![](https://media.giphy.com/media/iOz3p2txHIo4U/giphy.gif)

## Install
☝️ Don't forget to install the peer dependencies as well.
```sh
npm install ui-box-plus ui-box styled-components
```

## Usage

```jsx
import Element from "ui-box-plus"

function Button(props) {
  return (
    <Element
      is="button" // Strings are taken 'as is'
      h="32px" // Most CSS shorthand notations are supported
      mb // Booleans are interpreted as 1 grid unit
      p={2} // Numbers are interpreted as number of grid units
      background={theme => theme.colors.warning} // Functions are given the styled component theme
      w={{desktop: 8, mobile: "100%"}} // Provide an object to handle different devices
      {...props}
    />
  )
}

function Example() {
  return <Button disabled margin="10px">Hi</Button>
}
```

## Release History

* 0.1.0
    * First release.

## License

Distributed under the MIT license. See ``LICENSE`` for more information.

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/ui-box-primitive.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ui-box-primitive
[npm-downloads]: https://img.shields.io/npm/dm/ui-box-primitive.svg?style=flat-square
