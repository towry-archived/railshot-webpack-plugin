# railshot-webpack-plugin

Wepback plugin that works with `webpackrails` ruby gem.

## Install

Just run

```bash
npm install railshot-webpack-plugin
```

## Usage

Your `webpack.config.js` file

```js
var railshotPlugin = require('railshot-webpack-plugin');

// no entry here
module.exports = {
  plugins: [
    railshotPlugin()
  ]
}
```

## License

MIT
