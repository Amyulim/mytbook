<template>
            
    <div id="signup" class="form-signup form shadow rounded">
        <router-link to="/" @click="back" class="link m-0 p-0" ><i class="left arrow"></i> back</router-link>
  
        <h1 class="h3 mb-3 pt-3 font-weight-normal">Create Account </h1>
        <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="user_email" type="email" class="form-control" placeholder="Email address" required autofocus>

        <label for="inputPassword" class="label-only">Student Number</label>
        <input type="text" v-model="student_id" name="student_id" class="form-control" placeholder="StudentID: A0000000" required autofocus>

        <label for="inputPassword" class="label-only">Password</label>
        <input type="password" v-model="user_pass" name="user_pass" class="form-control" placeholder="Password" required>

        <label for="inputPassword" class="label-only">Password</label>

        <input type="password"  class="form-control" placeholder="Re-Type Password" required>
        
        <router-link to="/booklist"> <button @click="Signup" class="btn btn-lg btn-primary btn-block submit" type="submit">Sign Up</button></router-link>

       
       
            
  </div>
    

</template>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";
</style>

<script>
  export default {
    name:"Signup",
    data(){
      return {
        user_email:"",
        student_id:"",
        user_pass:"",
        page:"/signin"
      }
    },
    methods:{
      Signup: async function(){
        alert(this.user_email);
        
        var fd = new FormData( );
        fd.append("user_email", this.user_email);
        fd.append("student_id", this.student_id);
        fd.append("user_pass", this.user_pass);
        var resp = await fetch("https://mytbook.herokuapp.com/insert_user.php", {
            method:"POST",
            body:fd
        });
        this.page ="/booklist";

        var json = await resp.json();
        console.log(json);
        
        
      },
      back: function(){
        this.store.page = 1;
        console.log(this.store.page);
      }
    }
  }
  // UI Method

//var fd = new FormData();
//fd.append("email", this.email);
//var resp = await fetch("link_to_heroku/create.php", {
//	method:"POST",
//	body:fd
//});

//var json = await resp.json();
</script>