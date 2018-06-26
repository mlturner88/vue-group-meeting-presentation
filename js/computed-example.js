Reveal.addEventListener("computed", function() {
  new Vue({
    el: "#computed-example-app",
    data: function() {
      return {
        cities: [
          { name: "Knoxville", state: "TN" },
          { name: "Asheville", state: "NC" },
          { name: "Detroit", state: "MI" }
        ]
      };
    },
    computed: {
      sortedCities: function() {
        return _.sortBy(this.cities, ["name"]);
      }
    }
  });
});
