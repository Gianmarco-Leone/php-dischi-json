const app = Vue.createApp({
  data() {
    return {
      cds: [],
      showOverlay: false,
    };
  },
  methods: {
    changeOverlay() {
      this.showOverlay = !this.showOverlay;
    },
  },
  created() {
    axios
      .get("http://localhost/php-dischi-json/API/get-data.php")
      .then((response) => {
        this.cds = response.data;
      });
  },
});
app.mount("#app");
