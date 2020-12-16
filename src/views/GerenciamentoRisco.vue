<template>
    <div class="container">
        <h1>Gerenciamento de Riscos</h1>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">GRP 01 Alta direção</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">GRP 03 Compras</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">GRP 05 DHO</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">GRP 02 Vendas</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">GRP 04 Produção</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">GRP 06 Gestão de qualidade</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <router-link tag="button" class="btn btn-primary" to="/dashboard/main">
                    <i class="fas fa-home"></i>
                </router-link>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.row {
    margin-top: 5px;
}
button {
    text-align: left;
    font-size: 18px;
}

</style>