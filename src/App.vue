<template>
  <div>
    <router-view/>
    <FooterView/>
  </div>
  
</template>
<script>
import  FooterView  from "./views/FooterView";

export default {
  components: {
    FooterView
  }
}
</script>
<style scoped>
  #app > div {
    z-index: 1;
  }
</style>