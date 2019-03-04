<template>
  <div id="messenger" class="position-relative">

    <div @keyup.enter="sendMsg" class="msg-body">
      <div class="msg-title" id="msg">
        <h5>{{this.book_title}} </h5>
        <h6 class="price">$ {{this.book_price}}</h6>
      </div>
      <div class="pl-3 pr-3 pb-3 pt-2 ">
        <p v-if="MessageArray == ''" class="text-muted">Start a conversation with the book owner</p>
        <div class="display-area">
          <div v-for="m in MessageArray" class="display-content">
            {{m.username}}: {{m.msg}}
          </div>
        </div>
      </div>
      <div class="input-area row">     
        <div class="col-md-12 p-0">        
          <input type="text" name="input" placeholder="Type your message.." class="message-input-box" v-model="msg" />
          <button @click="sendMsg" class="btn send-msg-button "><i class="fa fa-paper-plane send-icon" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
    


  </div>
</template>
<style>
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

</style>

<script>
  import io from 'socket.io-client';

  export default {
    name: "messenger",
    data() {
      return {
        user_email: this.store.user_email,
        book_title: this.store.cur_book_title,
        book_price: this.store.cur_book_price,
        socket: io("https://mytbookrealtime.herokuapp.com/"),
        msg: null,
        MessageArray: [],
      }
    },
    mounted() {

      this.socket.on("user_connected", (data) => {

      })

      this.socket.on("new_msg", (data) => {
        this.MessageArray.push(data);
      });
    
      console.log(this.MEssageArray);
    },
    methods: {
      sendMsg: function() {
        
        //if user doesn't type --> cannot sent
        if(this.msg == null){
          //alert("you did not type..!");
          return false;
        }
        
        if (this.user_email == null) {
          this.user_email = "Guest Customer"
        } else {
          this.user_email = this.store.user_email
        }

        var obj = {
          username: this.user_email,
          msg: this.msg
        }

        this.socket.emit("send_message", obj);
        this.store.user_email = this.user_email;
        this.msg = "";
        
      },
      CloseMessenger: function() {
        this.$router.push('booklist');
      }

    }
  }

</script>
