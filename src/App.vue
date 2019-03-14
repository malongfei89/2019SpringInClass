<template>
  <div class="container" id="main">
    <Nav></Nav>
    <router-view/>
  </div>
</template>
<script>
import Nav from "@/components/Nav"
export default {
  components: {
    Nav
  }
}
</script>

<style lang="scss">

</style>
