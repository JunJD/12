<template>
    <lottie :options="defaultOptions" :height="height" :width="width" v-on:animCreated="handleAnimation">
    </lottie>
  </template>
  
  <script>
  import Lottie from "./Lottie.vue";
//   import animationData from "../../public/cloud-icons.json";
  
  export default {
    name: "cloud",
    components: {
      lottie: Lottie,
    },
    props: {
      animationData: {
        type: Object,
        default: ()=>{}
      },
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
      },
      animationSpeed: {
        type: Number,
        default: 0.5
      }
    },
    mounted(){
      this.handleAnimation()
    },
    methods: {
      handleAnimation(anim) {
        this.anim = anim;
        setTimeout(()=>{
          anim.play();
        },this.delay)
        anim.setSpeed(this.animationSpeed);
      },
    },
    data() {
      return {
        defaultOptions: {
          name: "like",
          autoplay: false,
          animationData: this.animationData
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