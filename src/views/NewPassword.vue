<template>
    <form class="box">
        <h1>Digite a nova senha</h1>
        <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Confirmar senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1">
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
    margin: 0 auto;     height: 100vh;

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