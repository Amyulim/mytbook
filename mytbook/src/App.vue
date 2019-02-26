<template>
  <div class="html">
    <div class="bg"></div>
    <div id="app" class="pt-5 pb-5">
      <div class="container pl-4 pr-4">
        <router-link to="/"><img class="logo" src="./assets/logo.svg"></router-link>
        <nav v-if="store.user_id !=null" class="nav nav-masthead justify-content-center pt-2">
          
            <router-link to="/booklist" class="nav-link"> Books</router-link> &emsp;
            <router-link to="/myaccount" class="nav-link"> My Account</router-link>&emsp;
         
<!--          <router-link to="/signin" class="signIn btn-primary"> Sign In</router-link>&emsp;-->
        </nav>

      </div>

      <router-view />

    </div>

  </div>

</template>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "/src/components/style.css";

</style>
