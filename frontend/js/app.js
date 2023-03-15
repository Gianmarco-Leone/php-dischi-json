const app = Vue.createApp({
  data() {
    return {
      cds: [],
      showOverlay: false,
      activeCdIndex: 0,
    };
  },
  methods: {
    changeOverlay(index) {
      this.showOverlay = !this.showOverlay;
      this.activeCdIndex = index;
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
