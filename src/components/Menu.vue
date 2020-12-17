<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion flex-column" id="accordionSidebar" v-if="auth">
        <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center" href="">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <h2 class="sidebar-brand-text mx-3">SCQ</h2>
        </router-link>
        <hr class="sidebar-divider my-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard/main">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
          Qualidade
        </div>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-folder-open"></i>
            <span>Documentos</span>
          </a>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO PERSA<br/> (Portugues)</a>
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO PERSA (Ingles)</a>
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO MB STEC<br/> (Portugues)</a>
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO MB STEC (Ingles)</a>
              <router-link to="/controleprocessoproduto" class="collapse-item">Controle do processo e produto</router-link>
              <a href="#" class="collapse-item">Descrição de cargo</a>
              <router-link to="/gerenciamentoriscos" class="collapse-item">Gerenciamento de risco</router-link>
              <a href="#" class="collapse-item">Instruções de trabalho</a>
              <a href="#" class="collapse-item">Mapeamento dos processos</a>
              <a href="#" class="collapse-item">Procedimentos</a>
              <a href="#" class="collapse-item">Requisitos partes interessadas</a>
              <a href="#" class="collapse-item">Solda</a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-tasks"></i>
            Atividades planejadas
          </a>
          <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a href="#" class="collapse-item">Analise critica pela direção</a>
              <a href="#" class="collapse-item">Auditoria do SGI</a>
              <a href="#" class="collapse-item">Auditoria casa limpa</a>
              <a href="#" class="collapse-item">Calibração de equipamentos de<br/> medição</a>
              <a href="#" class="collapse-item">Controle de 8D</a>
              <a href="#" class="collapse-item">Controle de provedores</a>
              <a href="#" class="collapse-item">Controle de recebimento</a>
              <a href="#" class="collapse-item">Indicadores do SGI</a>
              <a href="#" class="collapse-item">Manutenção Preventiva</a>
              <a href="#" class="collapse-item">Plano Anual de treinamento</a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTables" aria-expanded="true" aria-controls="collapseTables">
            <i class="fas fa-table"></i>
            Tabelas
          </a>
          <div id="collapseTables" class="collapse" aria-labelledby="headingTables" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a href="#" class="collapse-item">Controle de documentos externos</a>
              <a href="#" class="collapse-item">Controle de revisão de documentos <br/> internos</a>
              <a href="#" class="collapse-item">Controle de registros e formulários</a>
              <a href="#" class="collapse-item">Objetivos da qualidade, segurança <br/> e meio ambiente</a>
              <a href="#" class="collapse-item">Organograma</a>
              <a href="#" class="collapse-item">Politica da qualidade, segurança e <br/> meio ambiente</a>
              <a href="#" class="collapse-item">Politica de responsabilidade social <br/> e anticorrupção</a>
              <a href="#" class="collapse-item">Tabela de amostragem</a>
              <a href="#" class="collapse-item">Tabela de tolerâncias gerais</a>
              <a href="#" class="collapse-item">Tabela de validade de calibração</a>
              <a href="#" class="collapse-item">Tabela SWOT</a>
              <a href="#" class="collapse-item">Tabela de comunicação</a>
            </div>
          </div>
        </li>

        <hr class="sidebar-divider">
        
        <div class="sidebar-heading">
          Addons
        </div>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i class="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <router-link to="/login" class="collapse-item">Item 1</router-link>
              <router-link to="/newpassword" class="collapse-item">Item 2</router-link>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>
        
      </ul>
</template>

<script>
export default {
   data() {
    return {
      auth: true
    }
  },
}
</script>

<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
}

body {
  font-family: 'Nunito', sans-serif;
}

.div {
  display: flex;
  max-width: 1800px;
  margin: 0 auto;
}

.container-fluid {
  padding: 30px;
}

/* MENU */
.sidebar .sidebar-brand {
  height: 4.375rem;
}

.sidebar .sidebar-brand .sidebar-brand-icon i {
  font-size: 20px;
}

.sidebar {
  min-height: 100vh;

}

.sidebar-dark .sidebar-heading {
  color: rgba(255,255,255,.4)
}

@media (min-width: 768px) {
    .sidebar .sidebar-heading {
    text-align: left;
    padding: 0 1rem;
    font-weight: 800;
    font-size: .95rem;
  }
} 
.sidebar .nav-item.active .nav-link {
  font-weight: 700;
}
.sidebar .nav-item .nav-link {
  font-size: 15px;
  text-align: left;
  padding: 1rem;

}
  .sidebar .nav-item .nav-link i {
    margin-right: .25rem;
  }

  .sidebar .nav-item .nav-link[data-toggle=collapse].collapsed::after {
    content: '>';
  }
.sidebar .nav-item .nav-link[data-toggle=collapse]::after {
    font-weight: 900;
    width: 1rem;
    float: right;
    border: 0;
    vertical-align: 0;
    text-align: center;
    content: '<';
  }
.sidebar hr.sidebar-divider {
  margin: 0 1rem 1rem;
}
.sidebar .nav-item .collapse, .sidebar .nav-item .collapsing {
  margin: 0 1rem;
}
.sidebar .nav-item .collapse .collapse-inner .collapse-item, .sidebar .nav-item .collapsing .collapse-inner .collapse-item {
  padding: .5rem 0rem;
  margin: 0 1rem;
  display: block;
  color: #3a3b45;
  text-decoration: none;
  border-radius: .35rem;
  white-space: nowrap;
  font-size: 13px;
}
.sidebar .nav-item .collapse .collapse-inner .collapse-item:hover, 
.sidebar .nav-item .collapsing .collapse-inner .collapse-item a:hover {
  background-color: #CCC;
}
hr.sidebar-divider {
  border-top: 1px solid rgba(255,255,255,.15);
}
.fa, .fas {
  font-weight: 900;
  font-family: "Font Awesome 5 Free";
}
.sidebar-dark hr.sidebar-divider {
  border-top: 1px solid rgba(255,255,255,.15);
}
.sidebar hr.sidebar-divider {
  margin: 0 1rem 1rem;
}

.um {
  background: #4E73DF;
  flex: 1;
}

.um a {
  color: #fff;
}

/* HEADER */

.navbar-nav {
  display: flex;
  margin-bottom: 0;
}

.navbar-expand .navbar-nav {
  margin-right: 40px;
}

.topbar .nav-item .nav-link {
  height: 4.375rem;
  display: flex;
  align-items: center;
}

</style>