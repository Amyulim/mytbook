<template>
  <div class="body" id="Bookform">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <div v-if="user_id === null"> Sign In First!</div>
      <div v-else>
        <main role="main" class="inner">
          <section class="text-center">
            <div class="container">
              <h1 class="jumbotron-heading">My Account</h1>
            </div>
          </section>

          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class=" myaccount-body bookview-details card-body">
                  <p><span class="bookview-title">Email Address: </span>{{this.user_email}}</p>
                  <hr>
                  <p><span class="bookview-title">Student Number: </span>{{this.student_id}}</p>
                </div>


                <p class="myaccount-title">Books Listed:</p>

                <div class="row lists">
                  <div class="col-md-4" v-for="item in result">
                    <div class="card mb-4 shadow-sm book-des">

                      <div class="book-img text-center">
                        <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail" />
                      </div>

                      <div class="book-title text-center">
                        {{item.book_title}}<br />
                        <span class="price">${{item.book_price}}</span>
                      </div>

                      <div class="card-body">
                        <ul>
                          <li><span class="list-title">ISBN</span> : {{result[0].book_isbn}} </li>
                          <li><span class="list-title">Course</span> : {{item.book_course}}</li>
                          <li><span class="list-title">Meeting Time</span> : Tue, 13, Feb</li>
                        </ul>

                        <div class="d-flex justify-content-between align-items-center">
                          <button @click="See_detail(item)" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm deal-status pull-right">In processs</button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
					
        <div class="book_detail_modal" v-if="detail === true">
          <div class="row2 bookview-body position_absolute">

            <div class="col-md-4 bookview-img ">
              <img src="../assets/book1.jpg" class="detail_img" text="Thumbnail" />
              <button @click="GoBookUpdate" type="button" class="btn btn-sm btn-outline-secondary edit-button">Edit Book Details</button>
              <button @click="Change_modal" type="button" class="btn btn-sm btn-outline-secondary edit-button">Close</button>
            </div>
            <div class="col-md-8 bookview-details">
        
                <p><span class="bookview-title">Title: </span>{{curItem.book_title}}</p>
                <hr>
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
				detail: false,
        result: "",
        book_title: "",
        user_id: this.store.user_id,
        user_email: this.store.user_email,
        user_pass: this.store.user_pass,
        student_id: this.store.student_id
      }
    },
    methods: {
			See_detail: function(item) {

        this.detail = true;

        this.curItem = item;

      },
      Change_modal: function() {
        this.detail = false;
      },
      GoBookUpdate: function() {
        this.store.cur_book_id = this.curItem.book_id;
        this.store.cur_book_title =  this.curItem.book_title;
        this.store.cur_book_isbn =  this.curItem.book_isbn;
        this.store.cur_book_course =  this.curItem.book_course;
        this.store.cur_book_price =  this.curItem.book_price;
        this.store.cur_book_img =  this.curItem.book_img;
        this.store.cur_book_mdate =  this.curItem.book_mdate;
        this.store.cur_book_desc =  this.curItem.book_desc;
        this.store.cur_book_condition =  this.curItem.book_condition;
				
				
        this.$router.push('bookupdate');
      }


    },
    beforeCreate: async function() {

      var fd = new FormData();
      fd.append("user_id", this.store.user_id);

      var resp = await fetch("https://mytbook.herokuapp.com/select_user_book.php", {
        method: "POST",
        body: fd
      });
      var json = await resp.json();
			
      console.log(json);
      this.result = json;
      console.log("result", this.result);
      console.log("title", this.result[0].book_title);

    },
  }

</script>
