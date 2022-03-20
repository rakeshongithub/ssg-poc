/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
const { withModuleFederation, MergeRuntime } = require('@module-federation/nextjs-mf');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withTM = require('next-transpile-modules')(['services']);

const isAssetPrefix = process.env.BASE_PATH || '';

module.exports = withBundleAnalyzer(
  withTM({
    assetPrefix: isAssetPrefix,
    basePath: isAssetPrefix,
    env: {
      BASE_PATH: isAssetPrefix
    },
    images: {
      loader: 'akamai',
      path: ''
    },
    // mandatory config for SSG with next export command
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' }
      };
    },
    webpack5: true,
    webpack: (config, options) => {
      config.plugins.push(
        new options.webpack.container.ModuleFederationPlugin({
          name: 'postDetail',
          remoteType: 'var',
          remotes: {
            postDetail: 'postDetail'
          },
          exposes: {},
          shared: [
            {
              react: {
                eager: true,
                singleton: true,
                requiredVersion: false
              }
            },
            {
              'react-dom': {
                eager: true,
                singleton: true,
                requiredVersion: false
              }
            },
            {
              'styled-components': {
                eager: true,
                singleton: true
              }
            }
          ]
        })
      );
      config.module.rules.push({
        test: /_app.js/,
        loader: '@module-federation/nextjs-mf/lib/federation-loader.js'
      });

      return config;
    }
  })
);
