<template>
    <div id="signin" class="body">   
      <div v-if="page ===1">       
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal center">Have an account? </h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
          <br/>

          <label for="inputPassword" class="sr-only">Password</label>

          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>

<!--
          <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
-->
          <div>
            <button @click="GoBookForm" class="btn btn-lg btn-primary btn-block">Sign In</button>
            <button @click="GoSignUp" class="signup">Don't have an account. Sign  me up!</button>
          </div> <br/>
         </form>
              
  
      </div>
      
      <div v-if="page ===2">
            <gobookform />
      </div> 
      
      
      <div v-if="page ===3">
            <gosignup />
      </div>
      
<!--
      <div id="nav">
      <router-link to="/">Home</router-link> &emsp;
      <router-link to=""> Books</router-link> &emsp;
      <router-link to="/signin"> Sign In</router-link>
    </div>
    
    
    <router-view/>
    
-->

               
                
                
             

              
<!--
              
              <router-link to="/signup">Sign me up!</router-link>
              <router-view/>
-->
              
   

                    
    </div>

</template>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";
</style>


<script>
	
import signin from "@/components/Signin.vue";
import bookform from "@/components/Bookform.vue";
import signup from "@/components/Signup.vue";
  

	
export default{
	name:"signin", 
	components:{
		gosignin: signin,
		gosignup: signup,
    gobookform: bookform,
	},
	data(){
		return {
			page: 1,
		}
	},
	methods:{
		GoBookForm:function(){
      
        window.addEventListener('load', function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation')

          // Loop over them and prevent submission
          Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault()
                event.stopPropagation()
              }
              form.classList.add('was-validated')
            }, false)
          })
        }, false)
			this.page = 2;
		},
		GoSignUp:function(){
			this.page = 3;
		}
	}
}

</script>