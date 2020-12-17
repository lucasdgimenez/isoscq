<template>
<div id="accordion" class="container">
    <div class="row">
        <div class="col-sm">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                <button class="btn btn-primary btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Quem?
                </button>
                </h5>
            </div>
            
            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    <h4 v-for="(item, index) in quem" :key="index">
                        {{index = index + 1}} - {{item}}
                    </h4>
                </div>
            </div>
        </div>
        <div class="col-sm">
             <div class="card-header" id="headingFour">
                <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    O que medir?
                </button>
                </h5>
            </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                    <h4 v-for="(item, index) in oqueMedir" :key="index">
                        {{index = index + 1}} - {{item}}
                    </h4>
                </div>
                </div>
        </div>
            <div class="col-sm">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        Com quem?
                    </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                    <h4 v-for="(item, index) in comQue" :key="index">
                        {{index = index + 1}} - {{item}}
                    </h4>
                </div>
                </div>
            </div>
        </div>
    <!--SEGUNDA LINHA-->
    <div class="row">
        <div class="col-sm">
            <div class="card-header" id="headingFour">
                <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    Como?
                </button>
                </h5>
            </div>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                <div class="card-body">
                    <h4 v-for="(item, index) in como" :key="index">
                        {{index = index + 1}} - {{item}}
                    </h4>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card-header" id="headingFive">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Qual a tolerancia?
                </button>
            </h5>
            </div>
            <div id="collapseFive" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
                <h4 v-for="(item, index) in qualTolerancia" :key="index">
                    {{index = index + 1}} - {{item}}
                </h4>
            </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Qual a frequencia?
                </button>
            </h5>
            </div>
            <div id="collapseSix" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                <h4 v-for="(item, index) in qualFrequencia" :key="index">
                    {{index = index + 1}} - {{item}}
                </h4>
            </div>
            </div>
        </div>
    </div>
    <!--TERCEIRA LINHA-->
    <div class="row">
        <div class="col-sm">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                    Qual a amostragem?
                </button>
                </h5>
            </div>
            <div id="collapseSeven" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                    <h4 v-for="(item, index) in qualAmostragem" :key="index">
                    {{index = index + 1}} - {{item}}
                </h4>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                Onde registra?
                </button>
            </h5>
            </div>
            <div id="collapseEight" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                    <h4 v-for="(item, index) in ondeRegistra" :key="index">
                        {{index = index + 1}} - {{item}}
                    </h4>
                </div>
            </div>
        </div>
        <div class="col-sm">
            <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                Se observado não conformidade,<br/> o que fazer?
                </button>
            </h5>
            </div>
            <div id="collapseNine" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
                <h4 v-for="(item, index) in naoConformidade" :key="index">
                    {{index = index + 1}} - {{item}}
                </h4>
            </div>
            </div>
        </div>
        
    </div>
    <div class="row">
        <router-link tag="button" to="/dashboard/main">Home</router-link>
        <router-link tag="button" to="/controleprocessoproduto">Voltar</router-link>
    </div>
  
</div>
</template>

<script>
export default {
    data() {
        return {
            quem: ["Almoxarifado", "Qualidade"],
            oqueMedir: ["Documentacao", "Quantidade", "Quantidade (quilos)/ quando aplicavel", "prazo de entrega", "composicao quimica"],
            comQue: ["Visual"],
            como: ["Comparando os dados da NF x ordem de compra/ou romaneio", "Contando a quantidade de chapas recebidas", "Comparando os dados da NF x os dados da ordem de compra/ ou romaneio", "Comparando a data de entrega solicitada e a data de entrega real", "Comparando os dados do certificado com a norma de referencia"],
            qualTolerancia: ["Tipo de material e descricao de material conforme ordem de compra/ ou romaneio", "Quantidade deve ser exata com a quantidade descrita na ordem de compra/romaneio", "Pode haver uma variação de até 10% referente ao solicitado na ordem de compra/romaneio", "Material deve ser entregue sem atraso (somente M.P. comprada pela Persa)", "A composição quimica do certificado deve atender as tolerancias da norma do material"],
            qualFrequencia: ["Todos os lotes"],
            qualAmostragem: ["100% das notas fiscais", "100% dos materiais recebidos", "100% dos lotes recebidos"],
            ondeRegistra: ["RRM (Registro de recebimento de material)"],
            naoConformidade: ["Informa setor de compras e solicita que o motorista aguarde", "Informa o setor de compras e engenharia para verificar se é entrega parcial", "Informa setor de compras e solicita que o motorista aguarde", "Caso não seja informado o prazo de entrega na ordem de compra o almoxarifado deve solicitar para compras", "Abrir o 8D e tratar junto com a engenharia"]
        }
    },
    methods: {
  
    }
}
</script>

<style scoped>
button {
    background: blue;
    color: #fff;
}

button:hover {
    background:#fff;
    color: blue;
    border: 1px solid blue;
}

</style>