<template>
    <div id="signup">
    <form id="signup_form" class="form-signin" action="k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/insert_user.php" method="POST" @submit.prevent="processForm">
            

        <h1 class="h3 mb-3 font-weight-normal center">Please sign up </h1>

        <label for="inputEmail" class="sr-only">Email address</label>      
        <input type="email" v-model="user_email" name="user_email" class="form-control" placeholder="Email address" required autofocus>

        <label for="inputSnum" class="sr-only">Student Number</label>
        <input type="text" v-model="student_id" name="student_id" class="form-control" placeholder="A0000000" required autofocus>

        <label for="inputPassword" class="label-only">Password</label>
        <input type="password" v-model="user_pass" name="user_pass" class="form-control" placeholder="Password" required>

        <label for="inputPassword" class="label-only">Password</label>

        <input type="password"  class="form-control" placeholder="Re-Type Password" required>

        <button @click="Signup" class="btn btn-lg btn-primary btn-block submit" type="submit">Sign Up</button>
            

     </form>
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
        user_pass:""
      }
    },
    methods:{
      Signup: function(){
        alert(this.user_email);
        
        var form = document.getElementById('signup_form');
        var fd = new FormData(form);
        fd.append("user_email", this.user_email);
        fd.append("student_id", this.student_id);
        fd.append("user_pass", this.user_pass);
        var resp = fetch("http://localhost:8888/mytbook/insert_user.php", {
            method:"POST",
            body:fd
        });

        var json = resp.json();
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