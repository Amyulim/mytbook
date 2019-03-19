<template>
  <div class="body" id="booklist">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        
        <section class="text-center">
          <div class="">
            <h1 class="jumbotron-heading">Book Lists</h1>
            <p class="lead">Find the book you want to buy!</p>
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
                      <div v-else-if="item.book_status === null"></div>
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

        <div v-if="detail == true" class="modal-bg-solid">
          <div class="bookview-body row2">
            <bookdetail />
            <button @click="Change_modal" type="button" class="back-button"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
          </div>
        </div>
        
      </main>
    </div>
  </div>
</template>
<style>


</style>

<script>
  import bookdetail from "@/components/Bookdetail.vue"
  import S3 from 'aws-s3';

  export default {
    name: "booklist",
    components: {
      bookdetail: bookdetail
    },
    data() {
      return {
        result: "",
        book_title: "",
        detail: false,
        curItem: "",
        search: this.store.search,
        componentLoaded: false,
        bookdetail: bookdetail,
        img: "https://s3.ca-central-1.amazonaws.com/mytbook/"
      }

    },
    methods: {
      See_detail: function(item) {

        this.detail = true;
        this.store.curItem = item;
        //console.log("curItem:", this.store.curItem);

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
      }
      
    },
    beforeCreate: async function() {
      
      var resp = await fetch("https://mytbook.herokuapp.com/select_book.php");
      var json = await resp.json();

      console.log(json);
      
      this.result = json;
      this.componentLoaded = true;

      this.store.page = 2;
      console.log(this.store.page);

    },
    computed: {
      filteredList() {
        //search function
        if (!this.componentLoaded)
          return null;

        return this.result.filter(item => {
          return item.book_title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }

  }

</script>
