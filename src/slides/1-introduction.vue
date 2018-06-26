<template>
  <eg-transition>
    <div class="eg-slide" v-if="active">
      <div class="eg-slide-content">
        <h1 class="title">Welcome to Vue.js!</h1>
      </div>
    </div>
  </eg-transition>
</template>

<script>
import { Slide } from "eagle.js";

export default {
  name: "IntroductionSlide",
  mixins: [Slide]
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 1em;
}
</style>
