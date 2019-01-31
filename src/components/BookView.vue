<template>
  <div class="body" id="BooksView">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
<!--            <h1 class="jumbotron-heading">Books View Page</h1>-->
          </div>
        </section>
        
        <div class="container" v-if="detail === true">
            <div class="row bookview-body">

                  <div class="col-md-4 card-body">
                    <div class="bookview-img">
                      <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="bookview-details card-body"> 
                      <p><span class="bookview-title">Title: </span>Business Communication</p> <hr>
                      <p><span class="bookview-title">ISBN: </span>3435939</p> <hr>
                      <p><span class="bookview-title">Course: </span>Business Communication 1</p> <hr>
                      <p><span class="bookview-title">price: </span>$10</p> <hr>
                      <p><span class="bookview-title">condition: </span>Very Good</p> <hr>
                      <p><span class="bookview-title">description: </span>Used couple of times, did not write anything on it.</p> <hr>
                      <p><span class="bookview-title">Meeting Time: </span>Tue, 13, Feb</p> <hr>
                    </div>
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
  export default{
    name:"BooksView",
    data(){
      return {
        user_id:1,
        book_title:"",
        book_isbn:"",
        book_course:"",
        book_price:"",
        book_condition:"",
        book_desc:"",
        book_img:"",
        book_mdate:""
      }
    },
    methods:{
  }
  }

  
</script>