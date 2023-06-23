<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const adsbygoogle = (window as any).adsbygoogle as any;
    adsbygoogle?.push({})
})
</script>

<template>
  <div class="google-adsense">
     <ins class="adsbygoogle"
         title="Google Ads" 
         style="display:block; text-align:center;"
         data-ad-layout="fluid"
         data-ad-format="auto"
         data-ad-client="ca-pub-6765261154701378"
         data-ad-slot="5012951352" data-full-width-responsive="true">
     </ins>
  </div>
</template>
