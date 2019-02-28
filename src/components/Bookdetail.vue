<template>
  <div class="body" id="booklist">
    <div class="container">
      <main class="inner">
        <section class="text-center">
          <div class="">
            <h1 class="jumbotron-heading">{{curItem.book_title}}</h1>
<!--            <p class="lead">Find the book you want to buy!</p>-->

          </div>
        </section>
        
        <div class="container">
             <div class="row position_absolute">

            <button @click="Change_modal" type="button" class="btn btn-sm btn-secondary close-button"> &nbsp;X&nbsp;</button>

            <div class="col-md-4 bookview-img ">
              <div v-if="curItem.book_status === 'null'"></div>
              <div v-else-if="curItem.book_status === null"></div>
              <div v-else class="justify-content-between align-items-center">
                <button type="button" class="btn btn-sm deal-status detail_status ">{{curItem.book_status}}</button>
              </div>

              <img src="../assets/book1.jpg" class="detail_img" text="Thumbnail" />
							<!--							to message the book owner TEMPORARY-->
							  <button @click="GoMessage" type="button" class="btn btn-sm btn-primary send-msg-button pull-left">Message
                </button>
              <div v-if="curItem.user_id===this.store.user_id" class="row">
              
                <button @click="GoBookUpdate" type="button" class="btn btn-sm btn-outline-secondary myaccount-button pull-left">Edit Book
                </button>
                <button @click="DeleteBook" type="button" class="btn btn-sm btn-danger pull-right myaccount-button delete-button">Delete Book
                </button>
              </div>

            </div>
            
            <div class="col-md-8 bookview-details">
              <p><span class="bookview-title"></span></p>
              <p><span class="bookview-title">ISBN: </span>{{curItem.book_isbn}}</p>
              <hr>
              <p><span class="bookview-title">Course: </span>{{curItem.book_course}}</p>
              <hr>
              <p><span class="bookview-title">price: </span>$ {{curItem.book_price}}</p>
              <hr>
              <p><span class="bookview-title">condition: </span>{{curItem.book_condition}}</p>
              <hr>
              <p><span class="bookview-title">description: </span>{{curItem.book_desc}}</p>
              <hr>
              <p><span class="bookview-title">Meeting Time: </span>{{curItem.book_mdate}}</p>
              <hr>
            </div>

          </div>
  
  
  
        </div>
      </main>
    </div>
  </div>
</template>
<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";

</style>

<script>
  export default {
    name: "booklist",
    data() {
      return {
        result: "",
        book_title: "",
        detail: false,
        curItem: this.store.curItem,
        search: '',
        componentLoaded: false,
      }
    },
    methods: {
      Change_modal: function() {
         this.$router.push('booklist');
      },
      
      GoBookUpdate: function() {
        this.store.cur_book_id = this.curItem.book_id;
        this.store.cur_book_title = this.curItem.book_title;
        this.store.cur_book_isbn = this.curItem.book_isbn;
        this.store.cur_book_course = this.curItem.book_course;
        this.store.cur_book_price = this.curItem.book_price;
        this.store.cur_book_img = this.curItem.book_img;
        this.store.cur_book_mdate = this.curItem.book_mdate;
        this.store.cur_book_desc = this.curItem.book_desc;
        this.store.cur_book_condition = this.curItem.book_condition;
        this.store.cur_book_status = this.curItem.book_status;
        //        console.log(this.store.cur_book_desc);
        this.$router.push('bookupdate');
      },
      DeleteBook: async function() {

        alert("deleted!")

        var fd = new FormData();

        fd.append("user_id", this.store.user_id);
        fd.append("book_id", this.curItem.book_id);

        console.log(this.user_id)
        console.log(this.curItem.book_id)

        var resp = await fetch("https://mytbook.herokuapp.com/delete_book.php", {
          method: "POST",
          body: fd
        });

        var json = await resp.text();

        this.detail = false;

        //referesh
        var resp = await fetch("https://mytbook.herokuapp.com/select_book.php");
        var json = await resp.json();
        this.result = json;
      },
      GoMessage: function (){
				 this.store.user_id =  this.store.user_id;
				 this.store.user_email =  this.store.user_email;
				 this.store.cur_book_title = this.curItem.book_title;
				 this.store.cur_book_id = this.curItem.book_id;
        
				this.$router.push('messenger');
				console.log("sent")
				
			}


    },
 

  }

</script>
