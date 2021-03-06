




<template>
  <lottie
    :options="defaultOptions"
    :width="width"
    :height="height"
    @animCreated="handleAnimation"
  />
</template>



<script>
import Lottie from "vue-lottie";
import Anim from "../assets/animations/conffeti.json";
export default {
  data() {
    return {
      width: 50,
      height: 50,
      defaultOptions: {
        animationData: Anim, //Json data to be used
        render: "svg", //The form to be rendered
        loop: true, //Is it redundant
        autoplay: true,

        // Whether to start automatically
      },

      defaultAnim: "",
    };
  },
  components: {
    Lottie,
  },
  methods: {
    handleAnimation() {
      this.defaultAnim = Anim;
    },
  },
};
