<template>
  <div class="eg-slideshow" id="app">
    <introduction-slide></introduction-slide>
    <slide enter="fadeIn" leave="bounceOutLeft">Test 1</slide>
    <slide enter="fadeIn" leave="bounceOutLeft">Test 2</slide>
    <slide enter="fadeIn" leave="bounceOutLeft">Test 3</slide>
  </div>
</template>

<script>
import { Slideshow } from "eagle.js";
import IntroductionSlide from "./slides/1-introduction.vue";

export default {
  name: "AppSlideshow",
  mixins: [Slideshow],
  components: { IntroductionSlide }
};
</script>

<style lang="scss" scoped>
.eg-slideshow {
  background-color: white;
}
</style>
