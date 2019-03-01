<template>
  <div class="body" id="Bookform">
    <div class="container d-flex w-100 h-100 p-3 flex-column">
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

                <div class=" myaccount-body card-body">
                  <p><span class="bookview-title">Email Address: </span>{{this.user_email}}</p>
                  <hr>
                  <p><span class="bookview-title">Student Number: </span>{{this.student_id}}</p>
                  <hr>
                  <router-link to="/bookform" class="signIn btn-primary btn"> Sell the book</router-link>
                </div>


                <p class="myaccount-title">Books Listed:</p>

                <div class="row lists">
                  <div class="col-md-4" v-for="item in result">
                    <div class="card mb-4 shadow-sm book-des">

                      <div class="book-img text-center">
                        <img :src="img+item.book_id+'.jpg'" class="card-img-top" text="Thumbnail" />
                      </div>

                      <div class="book-title text-center">
                        {{item.book_title}}<br />
                        <span class="price">${{item.book_price}}</span>
                      </div>

                      <div class="card-body">
                        <ul>
                          <li><span class="list-title">ISBN</span> : {{item.book_isbn}} </li>
                          <li><span class="list-title">Course</span> : {{item.book_course}}</li>
                          <li><span class="list-title">Meeting Time</span> : {{item.book_mdate}}</li>
                        </ul>

                        <div class="d-flex justify-content-between align-items-center">
                          <button @click="See_detail(item)" type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <div v-if="item.book_status === 'null'"></div>
                          <div v-else-if="item.book_status == null"></div>
                          <div v-else-if="item.book_status === 'None'"></div>
                          <div v-else>
                            <button type="button" class="btn btn-sm deal-status pull-right">{{item.book_status}}</button>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div v-if="detail == true" class="modal-bg-solid">
            <div class="bookview-body row2">
              <bookdetail />
              <button @click="Change_modal" type="button" class="back-button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
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
  import bookdetail from "@/components/Bookdetail.vue"

  export default {
    name: "booklist",
    components: {
      bookdetail: bookdetail
    },
    data() {
      return {
        detail: false,
        result: "",
        book_title: "",
        user_id: this.store.user_id,
        book_id: this.store.user_id,
        user_email: this.store.user_email,
        user_pass: this.store.user_pass,
        student_id: this.store.student_id,
        img: "https://s3.ca-central-1.amazonaws.com/mytbook/"
      }
    },
    methods: {
      See_detail: function(item) {

        this.detail = true;
        this.store.curItem = item;

      },
      Change_modal: function() {
        this.detail = false;
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


        this.$router.push('bookupdate');
      },
      DeleteConfirm: function() {
        alert("Do you really want to delete?")
      },
      DeleteBook: async function() {

        //       alert("deleted!")

        var fd = new FormData();

        fd.append("user_id", this.user_id);
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
        var fd = new FormData();
        fd.append("user_id", this.store.user_id);

        var resp = await fetch("https://mytbook.herokuapp.com/select_user_book.php", {
          method: "POST",
          body: fd
        });
        var json = await resp.json();

        console.log(json);
        this.result = json;
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

    },
  }

</script>
