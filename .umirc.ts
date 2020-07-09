import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/app1',
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  qiankun: {slave: {}},
  history: { type: 'hash' },
  publicPath: './'
});