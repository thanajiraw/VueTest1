<template>
  <div id="content">
    <!-- {{ datad }} -->
    <v-container ma-2 fluid>
      <v-row align="center" justify="space-around">
        <v-col>
          <v-card class="mx-auto white--text" max-width="344">
            <v-container class="success"
              ><v-icon color="white"> mdi-alert-circle-outline </v-icon
              >Upcomming Tasks</v-container
            >

            <v-card-title class="d-flex justify-center green--text"
              >1</v-card-title
            >
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto white--text" max-width="344">
            <v-container class="success"
              ><v-icon color="white"> mdi-alarm-snooze </v-icon>Late
              Tasks</v-container
            >

            <v-card-title class="d-flex justify-center yellow--text"
              >5</v-card-title
            >
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto white--text" max-width="344">
            <v-container class="success"
              ><v-icon color="white"> mdi-swap-horizontal </v-icon>Open
              Task</v-container
            >

            <v-card-title class="d-flex justify-center green--text"
              >0</v-card-title
            >
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto white--text" max-width="344">
            <v-container class="success"
              ><v-icon color="white"> mdi-check </v-icon>Completed
              Tasks</v-container
            >

            <v-card-title class="d-flex justify-center green--text"
              >1</v-card-title
            >
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto white--text" max-width="344">
            <v-container class="success"
              ><v-icon color="white"> mdi-alarm </v-icon>Overdue
              Task</v-container
            >

            <v-card-title class="d-flex justify-center red--text"
              >2</v-card-title
            >
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto white--text" max-width="344">
            <v-container class="success"
              ><v-icon color="white"> mdi-clock-time-four-outline </v-icon>Time
              spent</v-container
            >

            <v-card-title class="d-flex justify-center black--text"
              >24 hr</v-card-title
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <div class="green">
      <v-card>
        <v-toolbar color="success mb-4" dark flat>
          <v-toolbar-title>Assignment of Open Work Orders</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn class="orange">Start WO</v-btn>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="green" ></v-tabs-slider>

              <v-tab v-for="([icon, item], i) in items" :key="i">
                <div>
                  <v-icon color="black">{{ icon }}</v-icon>
                  <span class="black--text">
                    {{ item }}
                  </span>
                </div>
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab" >
          <v-tab-item>
            <Table />
          </v-tab-item>
          <v-tab-item>
            <Calendar :sensor="this.datedata" :datefilter="this.month"  v-if="this.datedata != [] && this.month != []"/>
          </v-tab-item>
          <v-tab-item>
            <Chart :data1="this.sumdata" :data2="this.month" />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </div>
</template>

<script>
import Table from "./Table.vue";
import Calendar from "./Calendar.vue";
import axios from "axios";
import Chart from "./Chart.vue";
import moment from "moment";

export default {
  name: "Content",
  components: {
    Table,
    Calendar,
    Chart,
  },
  data: () => ({
    alignments: ["start", "center", "end"],
    tab: null,
    items: [
      ["mdi-format-list-bulleted", "List"],
      ["mdi-calendar-text", "Calendar"],
      ["mdi-chart-bar", "Chart"],
      ["mdi-account-multiple", "User"],
    ],
    datad: [],
    month: [],
    sumdata: [],
    datedata:[]
  }),
  mounted() {
    axios
      .get("https://swdapi.ddns.net:8090/data/ttntest")
      .then((resp) => {
        this.fetchdata(resp.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    fetchdata(data) {
      data.forEach((element) => {
        this.sumdata.push(element);
        this.month.push(moment(element.timestamp).format("l"));
      });
      this.month = [...new Set(this.month)];
      
      this.formatdate(this.sumdata);
      
      this.countdate(this.sumdata);
    },
    formatdate(data) {
      data.forEach((i) => {
        let times = i.timestamp;
        this.times = moment(times).format("l");
        i.timestamp = this.times;
        
      });
      this.datedata = data
    },
    countdate(data) {
      var arr = [];
      for (var i = 0; i < data.length; i++) {
        arr[data[i].timestamp] = arr[data[i].timestamp] + 1 || 1;
      }
      this.sumdata = Object.values(arr);
    },
  },
};
</script>

<style>body{
  font-weight: 300;
}</style>
