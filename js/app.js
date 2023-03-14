const app = Vue.createApp({
  data() {
    return {
      cds: [],
    };
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
