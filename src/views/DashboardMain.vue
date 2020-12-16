<template>
    <div class="box">
        <div class="container-fluid">
            <h1 class="h3 mb-0 text-gray-800 title">Dashboard</h1>
            <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="item1 card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <h4 class="text-xs font-weight-bold text-uppercase mb-1">Earnings</h4>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-dark">$40000</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-calendar fa-2x text-gray-300 "></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="item2 card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <h4 class="text-xs font-weight-bold text-uppercase mb-1">                                                Earnings (Annual)</h4>
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-dark">$215,000</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="item3 card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <h4 class="text-xs font-weight-bold text-uppercase mb-1">Tasks</h4>
                            <div class="row no-gutters align-items-center">
                            <div class="col-auto">
                                <div class="h5 mb-0 font-weight-bold text-gray-800 text-dark">50%</div>
                            </div>
                            <div class="col">
                                <div class="progress progress-sm mr-2">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            
                            </div>
                            
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="item4 card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <h4 class="text-xs font-weight-bold text-uppercase mb-1">Pending requests</h4>
                            <div class="h5 mb-0 font-weight-bold text-gray-800 text-dark">40000</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <section class="row container">
                <Graphic class="graphic_one"/>
                <GraphicTwo class="graphic_two"/>
            </section>
        </div>                     
    </div>            
</template>

<script>
import Graphic from "./../components/Graphic"
import GraphicTwo from "./../components/GraphicTwo"

export default {
    components: {
        Graphic, GraphicTwo
    }
}
</script>

<style scoped>

.row {
  margin-top: 20px;
}

.row h4 {
  font-size: 12px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.title {
  color: #5a5c69;
  font-size: 25px;
}

.item1 {
  color: #4E73DF;
  border-left: .25rem solid #4E73DF;
}

.item2 {
  color: #1CC88A;
  border-left: .25rem solid #1CC88A;
}

.item3 {
  color: #36B9CC;
  border-left: .25rem solid #36B9CC;
}

.item4 {
  color: #F6C23E;
  border-left: .25rem solid #F6C23E;
}

.text-gray-300 {
  color: #dddfeb
}

.col {
  flex-basis: 0;
    flex-grow: 1;
}


</style>