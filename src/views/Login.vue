<template>
    <div class="container">
        <form class="box">
            <h1>Login</h1>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Senha</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn button btn-lg btn-primary">Entrar</button><br/>
            <div class="info">
                <span>
                <router-link to="/recuperarsenha">Esqueci minha senha</router-link>
                </span>
                <span>Ainda não possui um cadastro? <router-link to="/register">Clique aqui</router-link>
                </span>
            </div>
            
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.box {
    max-width: 700px;
    margin: 0 auto; height: 100vh;
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