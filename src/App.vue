<template>
  <div id="app">
    <router-view name="header" />
      <div class="wrapper">
        <router-view />
      </div>
    <router-view name="produk" />
  </div>
</template>

<script>
export default {
  name: 'App',
 

  // data : function(){
  //   return {
  //     status_login: ''
  //   }
  // }
}
</script>


