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
         style="display:block; text-align:center;"
         data-ad-layout="in-article"
         data-ad-format="fluid"
         data-ad-client="ca-pub-6765261154701378"
         data-ad-slot="6290453552">
     </ins>
  </div>
</template>
