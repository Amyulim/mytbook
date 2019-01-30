<template>
  <div class="body" id="BooksViewPage">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
<!--            <h1 class="jumbotron-heading">Books View Page</h1>-->
          </div>
        </section>
        
        <div class="container">
                <div class="row bViewbody">
                      <div class="col-md-5">
                        <div class="book-img">
                          <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
                        </div>
                      </div>
                      <div class="col-md-7">
                      
                        <div class="card-body"> 
                          <p>Title: <span class="bviewdesc">Business Communication</span></p>
                          <p>ISBN: <span>3435939</span></p>
                          <p>Course: <span>Business Com 1</span></p>
                          <p>Price: <span>$10</span></p>
                          <p>Condition: <span>Very Good</span></p>
                          <p>Description: <span>Used but in good condition</span></p>
                          <p>Meeting Time: <span>Tue, 13, Feb</span></p>
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
    name:"BooksViewPage",
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