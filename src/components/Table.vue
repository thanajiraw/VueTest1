<template>
  <v-app>
    <v-container fluid><h3 class="font-weight-light">List Table</h3></v-container>
    <v-data-table
      :headers="headers"
      :items="datad"
      :items-per-page="10"
      class="elevation-1"
    ></v-data-table>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Table",
  data() {
    return {
      datad: [],
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Data", value: "data" },
        { text: "Timestamp", value: "timestamp" },
        { text: "Data2", value: "data2" },
      ],
    };
  },
  mounted() {
    axios.get("https://swdapi.ddns.net:8090/data/ttntest").then((resp) => {
      this.datad = resp.data;
    });
  },
};
</script>

<style></style>
