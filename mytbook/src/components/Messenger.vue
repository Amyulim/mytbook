<template>
  <div class="body" id="messenger">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
            <h1 class="jumbotron-heading">{{this.book_title}}</h1>
            <p class="lead text-muted">Start a conversation with the book owner</p>
          </div>
        </section>

        <div class="container" @keyup.enter="sendMsg">
					
					   <div class="row">
              <div class="col-md-12">

                <div class="messenger-body card-body">
                  <button @click="CloseMessenger" type="button" class="btn btn-sm btn-secondary closemsg-button"> &nbsp;X&nbsp;</button>
									
									<div  class="display-area">
                    <div v-for="m in MessageArray" class="display-content">
  	                       {{m.username}}: {{m.msg}}
                    </div>
										
									</div>
									
									<div class="input-area">
										<input type="text" name="input" placeholder="enter your message here" class="message-input-box" v-model="msg"/>
										<button @click="sendMsg" class="btn btn-primary send-msg-button">SEND</button>
	
									</div>
								</div>
							</div>
						</div>
        </div>
      </main>
    </div>
  </div>
</template>


<script>
	
	import io from 'socket.io-client';
	
  export default {
    name: "messenger",
    data() {
      return {
				user_email: this.store.user_email,
        book_title: this.store.cur_book_title,
				socket:io("https://mytbookrealtime.herokuapp.com/"),
				msg:"",
				MessageArray:[],
      }
    },
		mounted(){
      
			this.socket.on("user_connected", (data)=>{
										 
			})
			
			this.socket.on("new_msg",(data)=>{
				this.MessageArray.push(data);
			});
		},
		methods:{
			sendMsg: function(){
        
					if(this.user_email == null ){
					this.user_email = "Guest Customer"
				} else {
					this.user_email =  this.store.user_email
				}
				
				var obj = {
					username:this.user_email,
					msg: this.msg
				}
				
			
				this.socket.emit("send_message", obj);
        
        this.store.user_email = this.user_email;
        this.msg = "";
			},
      CloseMessenger: function(){
        this.$router.push('booklist');
      }
      
		}
  }

</script>
