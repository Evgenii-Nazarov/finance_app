import { defineConfig } from 'umi';
import theme from './src/theme';
import routes from './src/routes';

export default defineConfig({
  theme,
  routes,
  dva: {},
  nodeModulesTransform: {
    type: 'none',
  },
});
