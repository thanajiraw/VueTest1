<template>
  <div>
    <!-- {{datefilter}} -->
    <vc-calendar
      :is-expanded="true"
      :attributes="attributes"
      @dayclick="click($event)"
    ></vc-calendar>
    <div :key="divkey">
      <v-data-table
        :headers="headers"
        :items="tabledata"
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      tabledata: [],
      attributes: [
        {
          key: "today",
          highlight: false,
          dates: "1/8/2022",
        },
      ],
      dateclick: "",
      divkey: 0,
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
  name: "Calenndar",
  props: {
    sensor: Array,
    datefilter: Array,
  },
  mounted() {
    this.hightlightdate(this.datefilter);
    console.log(this.attributes);
  },
  methods: {
    hightlightdate(data) {
      data.forEach(x => {
        this.attributes.push({
          key: "today",
          highlight: true,
          dates: x,
        });

      })
    },
    click(date) {
      this.tabledata = [];
      this.dateclick = moment(date.id).format("l");

      this.datefill();
      this.divkey += 1;
    },
    datefill() {
      var data1 = this.dateclick;
      var data2 = this.sensor;
      data2.forEach((element) => {
        if (element.timestamp == data1) {
          this.tabledata.push(element);
        }
      });
      // console.log(this.tabledata);
    },
  },
};
</script>

<style></style>
