<template>
  <div id="app">
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
  <router-link to="/"><b-navbar-brand>Online Store</b-navbar-brand></router-link>
  </b-navbar>
</div>

    <div id="nav">

    </div>
<b-container>
    <router-view />
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
 padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.padding-card {
 padding: 30px;
}
</style>
