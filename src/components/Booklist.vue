<template>
  <div class="body" id="booklist">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        <section class="text-center">
          <div class="">
            <h1 class="jumbotron-heading">Book lists</h1>
            <p class="lead text-muted">Find the book you want to buy!</p>
            <div class="col-md-9 display-in">
              <input type="text" v-model="search" placeholder="Search title.." class="form-control width-90">
            </div>
            <div class="col-md-2 display-in">
              <input type="submit" class="submitButton btn-primary " value="Search">
            </div>
          </div>
        </section>
        <div class="album py-5 ">
          <div class="container">

            <div class="row lists">
              <div class="col-md-4" v-for="item in filteredList">
                <div class="card mb-4 shadow-sm book-des">
                  <div class="book-img text-center">
                    <img :src= "item.book_img" class="card-img-top" text="Thumbnail" />
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
                      <div v-else-if="item.book_status === null"></div>
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
        <div class="book_detail_modal" v-if="detail === true">
          <div class="row2 bookview-body position_absolute">

            <button @click="Change_modal" type="button" class="btn btn-sm btn-secondary close-button"> &nbsp;X&nbsp;</button>

            <div class="col-md-4 bookview-img ">
              <div v-if="curItem.book_status === 'null'"></div>
              <div v-else-if="curItem.book_status === null"></div>
              <div v-else class="justify-content-between align-items-center">
                <button type="button" class="btn btn-sm deal-status detail_status ">{{curItem.book_status}}</button>
              </div>

              <img src="../assets/book1.jpg" class="detail_img" text="Thumbnail" />

              <div v-if="curItem.user_id===this.store.user_id" class="row">
                <button @click="GoBookUpdate" type="button" class="btn btn-sm btn-outline-secondary myaccount-button pull-left">Edit Book
                </button>
                <button @click="DeleteBook" type="button" class="btn btn-sm btn-danger pull-right myaccount-button delete-button">Delete Book
                </button>
              </div>
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
        curItem: "",
        search: '',
        componentLoaded: false,
      }
    },
    methods: {
      See_detail: function(item) {

        this.detail = true;

        this.curItem = item;
        console.log("curItem:", this.curItem);

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
      }


    },
    beforeCreate: async function() {
      var resp = await fetch("https://mytbook.herokuapp.com/select_book.php");
      var json = await resp.json();
      //          json.JSON.parse(json);
      //          JSON.parse();
      console.log(json);
      this.result = json;
      //          console.log("result",this.result);
      //          console.log("title",this.result[0].book_title);
      this.componentLoaded = true;

    },
    computed: {
      filteredList() {
        if (!this.componentLoaded)
          return null;

          return this.result.filter(item => {
          return item.book_title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }

  }

</script>
