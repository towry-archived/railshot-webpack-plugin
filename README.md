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

module.exports = {
  entry: './entry.js',

  plugins: [
    railshotPlugin()
  ]
}
```

## License

MIT
