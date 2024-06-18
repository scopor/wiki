import {h} from 'vue'
import {useRoute} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/custom.css';
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import GoogleAdsense from './components/GoogleAdsense.vue';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // Register global components, if you don't want to use it, you don't need to add it
        ctx.app.component('vImageViewer', vImageViewer);
        ctx.app.component('GoogleAdsense', GoogleAdsense);
        // ...
    },
    setup() {
        // Get route
        const route = useRoute();
        // Using
        imageViewer(route);
    }
} satisfies Theme;
