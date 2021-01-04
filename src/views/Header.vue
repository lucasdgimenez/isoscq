<template>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <ul class="navbar-nav ml-auto">
            <button class="mobile" @click="outMenu">Mobile</button>
            <li class="nav-item no-arrow d-sm-none"></li>
            <li class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">3+</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">Notificações</h6>
                <a href="#" class="dropdown-item d-flex align-items-center">
                  <div class="mr-3">
                    <div class="icon-circle bg-primary">
                      <i class="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">December 12, 2019</div>
                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                  </div>
                </a>

                <a href="#" class="dropdown-item d-flex align-items-center">
                  <div class="mr-3">
                    <div class="icon-circle bg-success">
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">
                      December 7, 2019
                    </div>
                    
                    $290.29 has been deposited into your account!
                                    
                  </div>
                </a>

                <a href="#" class="dropdown-item d-flex align-items-center">
                  <div class="mr-3">
                    <div class="icon-circle bg-warning">
                      <i class="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div class="small text-gray-500">
                      December 2, 2019
                    </div>                    
                    Spending Alert: We've noticed unusually high spending for your account.                                                    
                  </div>
                </a>
                <a href="#" class="dropdown-item d-flex align-items-center"></a>
              </div>
            </li>

            <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                            problem I've been having.</div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I have the photos that you ordered last month, how
                                            would you like them sent to you?</div>
                                        <div class="small text-gray-500">Jae Chun · 1d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Last month's report looks great, I am very happy with
                                            the progress so far, keep up the good work!</div>
                                        <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                            told me that people say this to all dogs, even if they aren't good...</div>
                                        <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="" id="userDropdown" data-toggle="dropdown">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Fulano</span>
                <img class="img-profile rounded-circle" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" alt="img">
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                <a href="#" class="dropdown-item">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Perfil
                </a>
                <a href="#" class="dropdown-item">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Configurações
                </a>
                <a href="#" class="dropdown-item">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Registro
                </a>
                <div class="dropdown-divider"></div>
                <router-link to="/login" class="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </router-link>
              </div>
            </li>
          </ul>
        </nav>
</template>

<script>
export default {
    name: 'Header',
    methods: {
      outMenu() {
        alert("teste")
      }
    }
}
/*Definir um state como showMenu, esse showMenu tera um valor true
*/
</script>

<style scoped>
.navbar-nav {
  display: flex;
  margin-bottom: 0;
}

.navbar-expand .navbar-nav {
  margin-right: 40px;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-nav .dropdown-menu {
  float: none;
}

.topbar .dropdown .dropdown-menu {
  right: 0;
}

.topbar .dropdown-list {
  width: 20rem;
}

.topbar .dropdown-list {
  padding: 0;
    border: none;
    overflow: hidden;
}

.topbar .nav-item .nav-link {
  height: 4.375rem;
  display: flex;
  align-items: center;
}

.dropdown .dropdown-menu {
  font-size: .85rem;
}
.dropdown-menu.show {
  display: block;
}

img {
  max-width: 100%;
  display: block;
}

.topbar .dropdown-list .dropdown-header {
  background-color: #4e73df;
  border: 1px solid #4e73df;
  padding-top: .75rem;
  padding-bottom: .75rem;
  color: #fff;
}

.topbar .dropdown-list .dropdown-item {
  padding-top: .5rem;
  padding-bottom: .5rem;
  border-left: 1px solid #e3e6f0;
  border-right: 1px solid #e3e6f0;
  border-bottom: 1px solid #e3e6f0;
  line-height: 1.3rem;
}

.icon-circle {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile {
  display: none;
}

@media (max-width: 768px) {
  .mobile {
    display: block;
  }
}
</style>