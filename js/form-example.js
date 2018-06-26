Reveal.addEventListener("form", function() {
  var formComponent = {
    name: "VueFormComponent",
    props: {
      inputLabel: String,
      inputType: String,
      value: [String, Number, Object]
    },
    computed: {
      inputValue: {
        get: function() {
          return this.value;
        },
        set: function(value) {
          this.$emit("input", value);
        }
      }
    },
    template:
      '<div class="form-row">' +
      "<label>{{ inputLabel }}</label>" +
      '<input v-model="inputValue" :type="inputType" />' +
      "</div>"
  };

  new Vue({
    el: "#form-example-app",
    name: "FormExampleApp",
    data: function() {
      return {
        firstName: null,
        lastName: null
      };
    },
    components: {
      VueFormComponent: formComponent
    }
  });
});
