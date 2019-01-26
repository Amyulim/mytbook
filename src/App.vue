<template>
<div class="html">
<div class="body" >
  <div id="app" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">  
      <div id="inner">
        <img class="logo justify-content-center" src="../src/assets/logo.svg">
        <nav class="nav nav-masthead justify-content-center">
          <router-link to="/" class="nav-link active" >Home</router-link> &emsp;
          <router-link to="/booklist" class="nav-link" > Books</router-link> &emsp;
          <router-link to="/signin" class="nav-link" > Sign In</router-link>&emsp;
          <router-link to="/bookform" class="nav-link" > Form</router-link> 
        </nav>
      </div>
    </header>
    
    <router-view/>
    
  </div>
</div>
 </div>
  
</template>

<style>

@import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
@import "/src/components/style.css";
  
</style>
