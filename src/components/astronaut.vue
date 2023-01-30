<template>
    <lottie :options="defaultOptions" :height="height" :width="width" v-on:animCreated="handleAnimation">
    </lottie>
  </template>
  
  <script>
  import Lottie from "./Lottie.vue";
  import animationData from "../../public/36517-astronaut.json";
  
  export default {
    name: "astronaut",
    components: {
      lottie: Lottie,
    },
    props: {
      width: {
        type: Number,
        default: 3,
      },
      height: {
        type: Number,
        default: 3,
      },
      delay: {
        type: Number,
        default: 0
      }
    },
    mounted(){
      this.handleAnimation()
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
        setTimeout(()=>{
          anim.play();
        },this.delay)
      },
    },
    data() {
      return {
        defaultOptions: {
          name: "like",
          autoplay: false,
          animationData: animationData
        }
      };
    }
  };
  </script>
  
  <style scoped>
  .hidden {
    display: none;
  }
  </style>