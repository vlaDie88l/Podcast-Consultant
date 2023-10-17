import { startDevServer } from '@cypress/vite-dev-server';

export default (on, config) => {
  on('dev-server:start', async options => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: 'vite.config.js',
      },
    });
  });

  return config;
};
