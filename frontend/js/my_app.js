const app = Vue.createApp({
  data() {
    return {
      cds: [],
      showOverlay: false,
      cdDetails: {},
    };
  },
  methods: {
    fetchDiscs() {
      axios
        .get("http://localhost/php-dischi-json/API/get-data.php")
        .then((response) => {
          this.cds = response.data;
        });
    },

    fetchDisc(title) {
      axios
        .get("http://localhost/php-dischi-json/API/get-data.php", {
          params: {
            title,
          },
        })
        .then((response) => {
          this.cdDetails = response.data;
        });
    },

    showInfo(title) {
      this.showOverlay = true;
      this.fetchDisc(title);
    },

    hideInfo() {
      this.showOverlay = false;
    },
  },
  created() {
    this.fetchDiscs();
  },
});
app.mount("#app");
