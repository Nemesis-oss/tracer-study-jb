// webpack.config.js

module.exports = {
    // ...
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader', // Tambahkan postcss-loader di sini
          ],
        },
      ],
    },
    // ...
  };
  