<template>
    <div id="app">
      <router-view />
    </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>


  <style lang="less">
  @import "style/index.less";
  .app{
    box-sizing: border-box;
    overflow-x: hidden;
    min-height: 100vh;
    background-color: #F8F8F8;
    position: relative;
  }
  .icon{
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  </style>