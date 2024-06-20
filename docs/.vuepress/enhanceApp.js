import jamUi from "../../packages/index.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
export default async ({
    Vue
}) => {
    if (typeof process === 'undefined') {
        Vue.use(jamUi)
        Vue.use(ElementUI)
    }
}
