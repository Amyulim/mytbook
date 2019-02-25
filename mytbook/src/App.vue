<template>
<div class="html">

  <div id="app" class=" d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto container">  
      <div id="inner">
        <router-link to="/" ><img class="logo justify-content-center" src="../src/assets/logo.svg"></router-link>
        <nav class="nav nav-masthead justify-content-center">
          <router-link to="/" class="nav-link active" >Home</router-link> &emsp;
          <router-link to="/booklist" class="nav-link" > Books</router-link> &emsp;
          <router-link to="/myaccount" class="nav-link"> My Account</router-link>&emsp;
          <router-link to="/signin" class="signIn btn-primary"> Sign In</router-link>&emsp;
        </nav>
      </div>
    </header>
    
    <router-view/>
    
  </div>

 </div>
  
</template>

<style>

@import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
@import "/src/components/style.css";

  
</style>


