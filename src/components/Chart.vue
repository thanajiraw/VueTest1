

<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props:{
    data1: Array,
    data2: Array
  },
  mounted() {
    this.renderChart(
      {
        // labels: this.options,
        labels: this.data2,

        datasets: [
          {
            label: "จำนวนข้อมูล",
            backgroundColor: "#658c73",
            // data: this.chartdata,
            data: this.data1,
            borderWidth: 3,
            borderColor: "#49fc03",
            pointRadius: 2,
            
          },
        ],
      },
      {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          position: "bottom",
          display: true,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                display: true,
              },
            },
          ],
        },
      }
    );
  },
};
</script>

<style></style>
