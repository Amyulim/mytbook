<template>
  <div id="app">
<!--     <img class="logo justify-content-center" src="../src/assets/logo.svg">-->
    <div id="nav">
      <router-link to="/">Home</router-link> &emsp;
      <router-link to=""> Books</router-link> &emsp;
      <router-link to="/signin"> Sign In</router-link>
    </div>
    
    
    <router-view/>
    
  </div>
</template>

<style>

@import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
@import "/src/components/style.css";
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
