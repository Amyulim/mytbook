<template>
  <div class="html">
    <div class="bg"></div>
    <div id="app" class="header mb-5">
      <div class="container ">
        <router-link to="/"><img class="logo" src="./assets/logo.svg"></router-link>
        <nav class="nav-l">

          <router-link v-if="store.user_id !=null" to="/booklist" class="nav-link float-l"> Books</router-link> &emsp;
          <router-link v-if="store.user_id !=null" to="/myaccount" class="nav-link floar-l"> My Account</router-link>&emsp;
        </nav>
        <nav class="nav nav-masthead justify-content-center pt-2">

          <input type="text" v-model="store.search" placeholder="Search title.." class="form-control search-short">

          <button @click="searchbar_hide" to="/booklist" class="search-icon"><i class="fa fa-search "></i>
          </button>
          
          <router-link v-if="store.user_id ==null" to="/" @click="signIn" v-bind:style="store.btcolor" class="signIn btn-2 ml-3 mr-2"> Sign in</router-link>&emsp;
          <!--          <router-link to="/signup" @click=signUp class="signIn btn-2"> Sign up</router-link>&emsp;-->
        </nav>

      </div>
    </div>
    <router-view />



  </div>

</template>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "/src/components/style.css";
  /*  @import "https://www.w3schools.com/w3css/4/w3.css";*/
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

</style>
<script>
  export default {
    data() {
      return {
        bgcolor: this.store.btcolor,
      }
    },
    methods: {
      signIn: function() {
        this.store.btcolor = "background-color:blue"
      },
      searchbar_hide: function() {
        this.store.page = 2;
        console.log(this.store.page);
        this.$router.push('booklist');
      }
    }
  }

</script>
