import DefaultTheme from 'vitepress/theme';
import GoogleAdsense from './components/GoogleAdsense.vue';
import './style/custom.css';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // app.component('GoogleAdsense', GoogleAdsense);
    }
}
