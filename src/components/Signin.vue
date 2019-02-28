<template>
    <div id="signin">   
      <div v-if="page ===1">       
        <div class="form-signin shadow rounded form">
          <h2 class="mb-3 font-weight-normal">Login to Continue </h2>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="user_email" type="email" class="form-control" placeholder="Email address" required autofocus>

          <label for="inputPassword" class="sr-only">Password</label>
          <input v-model="user_pass" type="password" class="form-control" placeholder="Password" required>
      <div>
            <button @click="SignIn" class="btn btn-lg btn-primary btn-block">GO</button>
            <router-link to="/signup" class="signup">Don't have an account. Sign  me up!</router-link>
  
          </div> <br/>
         </div>
              
  
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
			page:1,
            user_email:"",
            user_pass:"",
            user_id:this.store.user_id,
		}
	},
	methods:{
		GoBookForm:function(){
      
			this.store.page = 2;
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
               //console.log(json);
              
               //save user info to global state
               this.store.user_id = json.id;
               this.store.user_email = json.email;
               this.store.user_pass = json.pass;
               this.store.student_id = json.student_id;
               
               console.log(this.store.user_id);
               console.log(this.store.user_email);
               console.log(this.store.user_pass);
               console.log(this.store.student_id);
              
               
               //change page 
               this.$router.push('booklist');
               
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