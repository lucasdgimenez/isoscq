<template>
    <div class="col-xl-8 col-lg-7">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Dropdown Header:</div>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="chart-area">
                    <line-chart :data="chartData" label="Earnings"></line-chart>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Graphic',
    data() {
        return {
            chartData: {
                    'Jan': 0,
                    'Fev': '10000',
                    'Mar': '5000',
                    'Abr': 15000,
                    'Mai': 10000,
                    'Jun': 20000,
                    'Jul': 15000,
                    'Aug': 25000,
                    'Sep': 20000,
                    'Oct': 30000,
                    'Nov': 25000,
                    'Dez': 40000
            }
        }
  }
}
</script>

<style scoped>

</style>