const app = Vue.createApp({
  data() {
    return {
      cds: [],
      showOverlay: false,
      activeCdIndex: 0,
    };
  },
  methods: {
    fetchCds() {
      axios
        .get("http://localhost/php-dischi-json/API/get-data.php")
        .then((response) => {
          this.cds = response.data;
        });
    },

    changeOverlay(index) {
      this.showOverlay = !this.showOverlay;
      this.activeCdIndex = index;
    },
  },
  created() {
    fetchCds();
  },
});
app.mount("#app");
