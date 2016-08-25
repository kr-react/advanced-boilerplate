export default
{
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,

  // Faster transpiling for minor loose in formatting
  compact: "auto",

  // Keep origin information alive
  sourceMaps: "inline",

  presets:
  [
    // exponentiation
    "babel-preset-es2016",

    // JSX, Flow
    "babel-preset-react"
  ],

  plugins:
  [
    // just the parts from es2015 preset which are required for supporting
    // transform-object-rest-spread" support (which always must be transpiled)
    "transform-es2015-spread",
    "transform-es2015-destructuring",

    // function x(a, b, c,) { }
    "syntax-trailing-function-commas",

    // class { handleClick = () => { } }
    "transform-class-properties",

    // { ...todo, completed: true }
    "transform-object-rest-spread",

    // Polyfills the runtime needed
    [ "transform-runtime", { regenerator: false } ]
  ]
}