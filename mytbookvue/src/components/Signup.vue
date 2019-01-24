<template>
    <div  id="signin">
    <form class="form-signin">
            
              <img class="mb-3 logo justify-content-center" src="imgs/logo.svg" alt="" >
            
              <h1 class="h3 mb-3 font-weight-normal center">Please sign up </h1>
      
              <label for="inputEmail" class="sr-only">Email address</label>      
              <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      
              <label for="inputSnum" class="sr-only">Student Number</label>
              <input type="text" id="inputEmail" class="form-control" placeholder="A0000000" required autofocus>
            
              <label for="inputPassword" class="label-only">Password</label>
              <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            
              <label for="inputPassword" class="label-only">Password</label>
            
              <input type="password" id="inputPassword" class="form-control" placeholder="Re-Type Password" required>
            
              <button class="btn btn-lg btn-primary btn-block submit" type="submit">Sign in</button>
            

     </form>
  </div>

</template>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";
</style>