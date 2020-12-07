<template>
    <form class="box">
        <h1>Redefenir senha senha</h1>
        <p>Para redefinir sua senha para a conta, insira seu endereço de email e enviaremos um email com as instruções.</p>
        <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1">
        </div>
        <button type="button" class="btn btn-primary btn-lg btn-block">Enviar</button>
    </form>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.box {
    max-width: 700px;
    margin: 0 auto;
    height: 100vh;
}
.button {
    margin: 0 auto;
}
span {
    display: block;
    text-align: center;
}
a {
    color:blue;
}
.info {
    display: flex;
    flex-direction: column;
}
</style>