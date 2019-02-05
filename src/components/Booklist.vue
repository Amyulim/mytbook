<template>
  <div class="body" id="booklist">
  <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Book lists</h1>
            <p class="lead text-muted">Find the book you want to buy!</p>
<!--            <button @click="BookInfo">get</button>-->
            <div class="col-md-9 display-in">
              <input type="text" class="form-control width-90">
            </div>
            <div class="col-md-2 display-in">
              <input type="submit" class="submitButton btn-primary " value="Search">
            </div>
          </div>
        </section>
        <div class="album py-5 ">
          <div class="container">

            <div class="row lists">
               <div class="col-md-4"  v-for="item in result">
                <div class="card mb-4 shadow-sm book-des">
                  <div class="book-img text-center">
                    <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
                  </div>
                  <div class="book-title text-center">
                    {{item.book_title}}<br/>
                    <span class="price">${{item.book_price}}</span> 
                  </div>
    
                  <div class="card-body">               
                      <ul>
                        <li><span class="list-title">ISBN</span> : {{item.book_isbn}} </li>
                        <li><span class="list-title">Course</span> : {{item.book_course}}</li>
                        <li><span class="list-title">Meeting Time</span> : Tue, 13, Feb</li>
                      </ul>
               
                    <div class="d-flex justify-content-between align-items-center">                
                        <button @click="See_detail.bind(this, item)" type="button" class="btn btn-sm btn-outline-secondary">View</button>  
                        <button type="button" class="btn btn-sm deal-status pull-right">In processs</button>                 
                    </div>
                    
                  </div>
                </div>
              </div>
            

            </div>
          </div>
        </div>
        <div class="book_detail_modal" v-if="detail === true">
              <div class="row2 bookview-body position_absolute">

                    <div class="col-md-4 card-body">
                      <div class="bookview-img">
                        <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="bookview-details card-body"> 
                        <p><span class="bookview-title">Title: </span>{{}}</p> <hr>
                        <p><span class="bookview-title">ISBN: </span>3435939</p> <hr>
                        <p><span class="bookview-title">Course: </span>Business Communication 1</p> <hr>
                        <p><span class="bookview-title">price: </span>$10</p> <hr>
                        <p><span class="bookview-title">condition: </span>Very Good</p> <hr>
                        <p><span class="bookview-title">description: </span>Used couple of times, did not write anything on it.</p> <hr>
                        <p><span class="bookview-title">Meeting Time: </span>Tue, 13, Feb</p> <hr>
                      </div>
                    </div>
                <button @click="Change_modal">Close</button>
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
    name:"booklist",
    data(){
        return {
          result:"",
          book_title:"",
          detail:false,
          curItem:null
        }
      },
      methods: {
        See_detail:function(item){
        this.detail=true;
//          this.item.
          
        
      },
        Change_modal:function(){
          this.detail = false;
      }

    },
    beforeCreate: async function(){
          var resp = await fetch("https://mytbook.herokuapp.com/select_book.php");
          var json = await resp.json();
//          json.JSON.parse(json);
//          JSON.parse();
          console.log(json);
          this.result = json;
          console.log("result",this.result);
          console.log("title",this.result[0].book_title);
      
      },
    
  }
</script>