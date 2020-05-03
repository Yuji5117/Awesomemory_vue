<template>
  <div id="app">
    <div id="nav">
      <Header />

      <main class="my-16 mx-auto">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    
    components: {
      Header
    }

  }
</script>

<style lang="stylus">

</style>
