import Dotenv from 'dotenv-webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = (env: Record<string, string>) => {
  return {
    entry: './src/index.tsx',
    ...(env.production || !env.development
      ? {}
      : { devtool: 'eval-source-map' }),
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'build.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          },
          exclude: /build/
        },
        {
          test: /\.s?css$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devServer: {
      port: 3001,
      open: true,
      historyApiFallback: true
    },
    plugins: [
      new Dotenv({
        path: `./.env.${env.production || !env.development ? 'production' : 'development'}`
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
    ]
  };
};
