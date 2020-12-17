<template>
    <div class="container">
        <h1>Controle de processo e produto</h1>
        <div class="row">
            <div class="col-sm" @click="click">
                <router-link class="btn btn-primary btn-lg btn-block" to="/controleprocessoproduto/chapa">CPP 01 - Chapa</router-link>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 09 - Parafusaria</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 17 - Caldeiraria</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 02 - Barras</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 10 - Tintas</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 18 - Solda</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 03 - Perfil U</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 11 - Peças tratadas</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 19 - Montagem</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 04 - Perfil W, H, I</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 12 - Serra</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 20 - Consumiveis de solda</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 05 - Perfil L</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 13 - Dobra</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 21 - Embalagem e Expedição</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 06 - Turbo</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 14 - Laser/Plasma</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 22 - Óleos e produtos químicos</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 07 - Peça Galvanizada</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 15 - Usinagem</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 23 -</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 08 - Peças Usinadas</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 16 - Inspeção total</button>
            </div>
            <div class="col-sm">
                <button class="btn btn-primary btn-lg btn-block">CPP 24 -</button>
            </div>
        </div>
        <div class="row">
            <div class="col-sm">
                <router-link tag="button" class="btn btn-primary" to="/dashboard/main">
                    <i class="fas fa-home"></i>
                </router-link>
            </div>
            
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        
    }
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