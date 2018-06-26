Reveal.addEventListener("conditional", function() {
  new Vue({
    el: "#conditional-example-app",
    data: function() {
      return {
        index: 0
      };
    },
    methods: {
      toggle: function() {
        var newIndex = this.index + 1;
        this.index = newIndex > 2 ? 0 : newIndex;
      }
    }
  });
});
