<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion flex-column" :class="{toggled: mobile}" id="accordionSidebar">
        <router-link to="/" class="sidebar-brand d-flex align-items-center justify-content-center" href="">
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <h2 class="sidebar-brand-text mx-3">SCQ</h2>
        </router-link>
        <hr class="sidebar-divider my-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
          Qualidade
        </div>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseDoc" aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-folder-open"></i>
            <span>Documentos</span>
          </a>
          <div id="collapseDoc" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO PERSA<br/> (Portugues)</a>
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO PERSA <br/> (Ingles)</a>
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO MB STEC<br/> (Portugues)</a>
              <a href="https://drive.google.com/file/d/1TXAf2qW4TtbB54gZ6vuPpiZh6DObG4MV/view?usp=sharing" class="collapse-item" target="_blank">Certificado ISO MB STEC<br/> (Ingles)</a>
              <a href="#" class="collapse-item">Mapa dos processos</a>
              <router-link to="/gestaoderiscos" class="collapse-item">Gestão de risco</router-link>
              <a href="#" class="collapse-item">Requisitos partes <br/>  interessadas</a>
              <a href="#" class="collapse-item">Procedimentos</a>
              <a href="#" class="collapse-item">Instruções de trabalho</a>
              <router-link to="/controleprocessoproduto" class="collapse-item">Controle do processo e<br/> produto</router-link>
              <a href="#" class="collapse-item">Descrição de cargo</a>
              <a href="#" class="collapse-item">Solda</a>
            </div>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i class="fas fa-tasks"></i>
            <span>Atividades planejadas</span> 
          </a>
          <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
              <a href="#" class="collapse-item">Analise critica pela direção</a>
              <a href="#" class="collapse-item">Auditoria do SGI</a>
              <a href="#" class="collapse-item">Auditoria casa limpa</a>
              <a href="#" class="collapse-item">Calibração de equipamentos <br/> de medição</a>
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
            <span>Tabelas</span> 
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

        <hr class="d-none d-md-block"/>

        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle" @click="mobileCheck"></button>
        </div>
        
      </ul>
</template>

<script>
export default {
   data() {
    return {
      mobile: false
    }
  },
  methods: {
    mobileCheck() {
      this.mobile = !this.mobile;
    }
  }
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

.sidebar {
  background-color:#4E73DF;
}

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

.rounded-circle {
  border-radius: 50%;
}

.border-0 {
  border: 0;
}

.sidebar #sidebarToggle {
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;
}

.sidebar #sidebarToggle::after {
  font-weight: 900;
  content: '\f104';
  font-family: 'Font Awesome 5 Free';
  margin-right: 0.1rem;
}

.sidebar #sidebarToggle:hover {
  text-decoration: none;
}

.sidebar #sidebarToggle:focus {
  outline: none;
}

.sidebar-light #sidebarToggle {
  background-color: #eaecf4;
}

.sidebar-light #sidebarToggle::after {
  color: #b7b9cc;
}

.sidebar-light #sidebarToggle:hover {
  background-color: #dddfeb;
}

.sidebar-dark #sidebarToggle {
  background-color: rgba(255, 255, 255, 0.2);
}

.sidebar-dark #sidebarToggle::after {
  color: rgba(255, 255, 255, 0.5);
}

.sidebar-dark #sidebarToggle:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.sidebar-dark.toggled #sidebarToggle::after {
  color: rgba(255, 255, 255, 0.5);
}

.sidebar.toggled {
  width: 0 !important;
  overflow: hidden;
}

.sidebar.toggled #sidebarToggle::after {
  content: '\f105';
  font-family: 'Font Awesome 5 Free';
  margin-left: 0.25rem;
}

.sidebar.toggled .sidebar-card {
  display: none;
}

@media (min-width: 768px) {
  .sidebar {
    width: 14rem !important;
  }
  .sidebar .nav-item .collapse {
    position: relative;
    left: 0;
    z-index: 1;
    top: 0;
    -webkit-animation: none;
    animation: none;
  }
  .sidebar .nav-item .collapse .collapse-inner {
    border-radius: 0;
    box-shadow: none;
  }
  .sidebar .nav-item .collapsing {
    display: block;
    transition: height 0.15s ease;
  }
  .sidebar .nav-item .collapse,
  .sidebar .nav-item .collapsing {
    margin: 0 1rem;
  }
  .sidebar .nav-item .nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 1rem;
    width: 14rem;
  }
  .sidebar .nav-item .nav-link i {
    font-size: 0.85rem;
    margin-right: 0.25rem;
  }
  .sidebar .nav-item .nav-link span {
    font-size: 0.85rem;
    display: inline;
  }
  .sidebar .nav-item .nav-link[data-toggle="collapse"]::after {
    width: 1rem;
    text-align: center;
    float: right;
    vertical-align: 0;
    border: 0;
    font-weight: 900;
    content: '\f107';
    font-family: 'Font Awesome 5 Free';
  }
  .sidebar .nav-item .nav-link[data-toggle="collapse"].collapsed::after {
    content: '\f105';
  }
  .sidebar .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
  }
  .sidebar .sidebar-brand .sidebar-brand-text {
    display: inline;
  }
  .sidebar .sidebar-heading {
    text-align: left;
  }
  .sidebar.toggled {
    overflow: visible;
    width: 6.5rem !important;
  }
  .sidebar.toggled .nav-item .collapse {
    position: absolute;
    left: calc(6.5rem + 1.5rem / 2);
    z-index: 1;
    top: 2px;
    -webkit-animation-name: growIn;
    animation-name: growIn;
    -webkit-animation-duration: 200ms;
    animation-duration: 200ms;
    -webkit-animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
    animation-timing-function: transform cubic-bezier(0.18, 1.25, 0.4, 1), opacity cubic-bezier(0, 1, 0.4, 1);
  }
  .sidebar.toggled .nav-item .collapse .collapse-inner {
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
    border-radius: 0.35rem;
  }
  .sidebar.toggled .nav-item .collapsing {
    display: none;
    transition: none;
  }
  .sidebar.toggled .nav-item .collapse,
  .sidebar.toggled .nav-item .collapsing {
    margin: 0;
  }
  .sidebar.toggled .nav-item:last-child {
    margin-bottom: 1rem;
  }
  .sidebar.toggled .nav-item .nav-link {
    text-align: center;
    padding: 0.75rem 1rem;
    width: 6.5rem;
  }
  .sidebar.toggled .nav-item .nav-link span {
    font-size: 0.65rem;
    display: block;
  }
  .sidebar.toggled .nav-item .nav-link i {
    margin-right: 0;
  }
  .sidebar.toggled .nav-item .nav-link[data-toggle="collapse"]::after {
    display: none;
  }
  .sidebar.toggled .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
  }
  .sidebar.toggled .sidebar-brand .sidebar-brand-text {
    display: none;
  }
  .sidebar.toggled .sidebar-heading {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .sidebar .nav-item .nav-link {
    text-align: center;
    padding: 0.75rem 1rem;
    width: 6.5rem;
  }
  .sidebar .nav-item .nav-link span {
    font-size: 0.65rem;
    display: block;
  }
  .sidebar .nav-item .nav-link i {
    margin-right: 0;
  }
  .sidebar .nav-item .nav-link[data-toggle="collapse"]::after {
    display: none;
  }
  .sidebar .sidebar-brand .sidebar-brand-icon i {
    font-size: 2rem;
  }
  .sidebar .sidebar-brand .sidebar-brand-text {
    display: none;
  }
  .sidebar .sidebar-heading {
    text-align: center;
  }
}
</style>