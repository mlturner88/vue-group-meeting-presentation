Reveal.addEventListener("lists", function() {
  new Vue({
    el: "#list-example-app",
    data: function() {
      return {
        cities: [
          { name: "Knoxville", state: "TN" },
          { name: "Asheville", state: "NC" },
          { name: "Detroit", state: "MI" }
        ]
      };
    }
  });
});
