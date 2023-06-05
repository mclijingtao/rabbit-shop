// 把components中所有组件都进行全局化注册
import ImageView from "./ImageView/ImageIndex.vue";
import Sku from "./XtxSku/index.vue";

export const componentPlugin = {
  install(app) {
    app.component("ImageIndex", ImageView);
    app.component("XtxSku", Sku);
  },
};
