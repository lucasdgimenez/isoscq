<template>
    
    <div class="box">
        <Menu/>
        <div id="content">
        <Header/>
        <router-view/>
        
        </div>        
    </div>
</template>

<script>
import Header from "./Header"
import Menu from "./../components/Menu"

export default {
    components: {
        Header, Menu
    }
    
}
</script>

<style scoped>
.box {
    display: flex;
}

#content {
  flex: 4;
  background-color:#EBECEF;
}


</style>