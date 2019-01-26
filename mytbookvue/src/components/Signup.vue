<template>
    <div  id="signin">
    <form class="form-signin" action="insert_user.php" method="post">
            

        <h1 class="h3 mb-3 font-weight-normal center">Please sign up </h1>

        <label for="inputEmail" class="sr-only">Email address</label>      
        <input type="email" name="user_email" class="form-control" placeholder="Email address" required autofocus>

        <label for="inputSnum" class="sr-only">Student Number</label>
        <input type="text"  name="student_id" class="form-control" placeholder="A0000000" required autofocus>

        <label for="inputPassword" class="label-only">Password</label>
        <input type="password"  name="user_pass" class="form-control" placeholder="Password" required>

        <label for="inputPassword" class="label-only">Password</label>

        <input type="password"  class="form-control" placeholder="Re-Type Password" required>

        <button class="btn btn-lg btn-primary btn-block submit" type="submit">Sign Up</button>
            

     </form>
  </div>

</template>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";
</style>

<script>
  // UI Method

var fd = new FormData();
fd.append("email", this.email);
var resp = await fetch("link_to_heroku/create.php", {
	method:"POST",
	body:fd
});

var json = await resp.json();
</script>