<template>
    <div class="app container">
        <div class="row mt-5" v-if="arrPositive.length > 0">
            <div class="col">
                <line-chart :chartData="arrPositive" :options="chartOptions" label="Earnings"></line-chart>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
import LineChart from "./LineChart"

export default {
    name: 'Graphic',
    data() {
        return {
        arrPositive: [],
        arrHospitalized: [],
        arrInIcu: [],
        arrOnVentilators: [],
        arrRecovered: [],
        arrDeaths: [],
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  components: {
    LineChart
  },
  async created() {
    const { data } = await axios.get("https://covidtracking.com/api/us/daily")
  
    data.forEach(d => {
      const date = moment(d.date, "YYYYMMDD").format("MM/DD");
      const {
        positive,
        hospitalizedCurrently,
        inIcuCurrently, 
        onVentilatorCurrently,
        recovered,
        death
      } = d;

      this.arrPositive.push({ date, total: positive });
      this.arrHospitalized.push({ date, total: hospitalizedCurrently });
      this.arrInIcu.push({ date, total: inIcuCurrently });
      this.arrOnVentilators.push({ date, total: onVentilatorCurrently });
      this.arrRecovered.push({ date, total: recovered });
      this.arrDeaths.push({ date, total: death });

      console.log(this.arrPositive)
    })
  }
}
</script>

<style scoped>

</style>