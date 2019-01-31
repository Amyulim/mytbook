<template>
    <div id="signin" class="body">   
      <div v-if="page ===1">       
        <div class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal center">Have an account? </h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="user_email" type="email" class="form-control" placeholder="Email address" required autofocus>
          <br/>

          <label for="inputPassword" class="sr-only">Password</label>

          <input v-model="user_pass" type="password" class="form-control" placeholder="Password" required>

<!--
          <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
-->
          <div>
            <button @click="SignIn" class="btn btn-lg btn-primary btn-block">Sign In</button>
            <button @click="GoSignUp" class="signup">Don't have an account. Sign  me up!</button>
          </div> <br/>
         </div>
              
  
      </div>
      
      <div v-if="page ===2">
            <gobookform />
      </div> 
      
      
      <div v-if="page ===3">
            <gosignup />
      </div>         
   

                    
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
            user_email:"",
            user_pass:"",
		}
	},
	methods:{
		GoBookForm:function(){
      
			this.page = 2;
		},
		GoSignUp:function(){
			this.page = 3;
		},
        SignIn:async function() {
           
            var fd= new FormData();  
            fd.append("user_email", this.user_email);
            fd.append("user_pass", this.user_pass);
            
            console.log(fd);
            console.log(this.user_pass)
            
            var resp = await fetch("https://mytbook.herokuapp.com/select_user.php",{
                    method:"POST",
                    body:fd
                })
            var json = await resp.json();
         
          console.log(json);
             if(json.status){
               console.log(json.status);
               
               //change page 
               this.page =2;
             }else{
               alert("Wrong email or ps")
             }
//          if(json.user_eamill == this.user_email){
//               console.log("match")
//             }
            
        }
	}
}

</script>