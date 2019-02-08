Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @EveyenSobremisana Sign out
0
0 0 Amyulim/mytbook-vue
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
mytbook-vue/src/components/Myaccount.vue
e4d022a  8 days ago
@EveyenSobremisana EveyenSobremisana myaccount
     
92 lines (75 sloc)  3.48 KB
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
																				<li><span class="list-title">ISBN</span> : {{item.book_isbn}} </li>
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

                    <div class="col-md-4 card-body">
												<div class="bookview-img">
													<img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
												</div>
												<button @click="Edit_Details" type="button" class="btn btn-sm btn-outline-secondary edit-button">Edit Book Details</button>  
                    </div>
								
                    <div class="col-md-8">
                      <div class="bookview-details card-body"> 
                        <p><span class="bookview-title">Title: </span>{{myAcc_item.book_title}}</p> <hr>
                        <p><span class="bookview-title">ISBN: </span>{{myAcc_item.book_isbn}}</p> <hr>
                        <p><span class="bookview-title">Course: </span>{{myAcc_item.book_course}}</p> <hr>
                        <p><span class="bookview-title">price: </span>$ {{myAcc_item.book_price}}</p> <hr>
                        <p><span class="bookview-title">condition: </span>{{myAcc_item.book_condition}}</p> <hr>
                        <p><span class="bookview-title">description: </span>{{myAcc_item.book_desc}}</p> <hr>
                        <p><span class="bookview-title">Meeting Time: </span>{{myAcc_item.book_mdate}}</p> <hr>
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
          myAcc_item:""
        }
      },
      methods: {
				See_detail:function(item){
						this.detail=true;
						this.myAcc_item = item;
						console.log("Items in My Account:" ,this.myAcc_item);
      },
        Change_modal:function(){
          this.detail = false;
      },
				Edit_Details:function(){
					
				}
        
    },
    beforeCreate: async function(){
          var resp = await fetch("https://mytbook.herokuapp.com/select_book.php");
          var json = await resp.json();
          console.log(json);
          this.result = json;
      },
  }
</script>