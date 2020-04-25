<template>
  <div id="app">
    <b-navbar toggleable="md" type="white" fixed="top" class="navApp">
      <b-container>
        <a class="navbar-brand">
          <img src="./assets/star.png" alt="">
        </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" exact class="Inicio">Inicio</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <br>
      <br>
      <b-img class="mt-5" center src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/320px-Star_Wars_Yellow_Logo.svg.png" alt="Center image"></b-img>
      <!--Encagado de llamar las vistas-->
      <router-view />
    </b-container>
  </div>
</template>

<style scoped>

#app {
  background-color: rgb(245, 206, 255); 
  background-image: url("./assets/starback.jpg")
}

.navApp{
  background-color: rgb(75, 75, 75);
} 

</style>
