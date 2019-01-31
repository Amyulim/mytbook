<template>
  <div class="body" id="Bookform">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
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
                            <p><span class="bookview-title">Email Address: </span>eveyensobremisana@my.bcit.ca</p> <hr>
                            <p><span class="bookview-title">Student Number: </span>A01010000</p>
											 </div>  
										
										
                            <p class="myaccount-title">Books Listed:</p> 
                           
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
                                          <li><span class="list-title">ISBN</span> : {{result[0].book_isbn}} </li>
                                          <li><span class="list-title">Course</span> : {{item.book_course}}</li>
                                          <li><span class="list-title">Meeting Time</span> : Tue, 13, Feb</li>
                                        </ul>

                                      	<div class="d-flex justify-content-between align-items-center">                
                                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>  
                                          <button type="button" class="btn btn-sm deal-status pull-right">In processs</button>            
                                      	</div>

                                    </div>
                                  </div>
                              </div>
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
    name:"booklist",
    data(){
        return {
          result:"",
          book_title:"",
        }
      },
      methods: {
        

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
