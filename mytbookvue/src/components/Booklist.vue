<template>
  <div class="body">
  <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Book lists</h1>
            <p class="lead text-muted">Find the book you want to buy!</p>
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
               <div class="col-md-4">
                <div class="card mb-4 shadow-sm book-des">
                  <div class="book-img text-center">
                    <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
                  </div>
                  <div class="book-title text-center">
                    Business Communication <br/><span class="price">$10</span> 
                  </div>
    
                  <div class="card-body">               
                      <ul>
                        <li><span class="list-title">ISBN</span> : 3435939 </li>
                        <li><span class="list-title">Course</span> : Business Com 1 </li>
                        <li><span class="list-title">Meeting Time</span> : Tue, 13, Feb</li>
                      </ul>
               
                    <div class="d-flex justify-content-between align-items-center">                
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>  
                        <button type="button" class="btn btn-sm deal-status pull-right">In processs</button>                 
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm book-des">
                  <div class="book-img text-center">
                    <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
                  </div>
                  <div class="book-title text-center">
                    Business Communication <br/><span class="price">$10</span> 
                  </div>
    
                  <div class="card-body">               
                      <ul>
                        <li><span class="list-title">ISBN</span> : 3435939 </li>
                        <li><span class="list-title">Course</span> : Business Com 1 </li>
                        <li><span class="list-title">Meeting Time</span> : Tue, 13, Feb</li>
                      </ul>
               
                    <div class="d-flex justify-content-between align-items-center">                
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>  
                        <button type="button" class="btn btn-sm deal-status pull-right">In processs</button>                 
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm book-des">
                  <div class="book-img text-center">
                    <img src="../assets/book1.jpg" class="card-img-top" text="Thumbnail"/>
                  </div>
                  <div class="book-title text-center">
                    Business Communication <br/><span class="price">$10</span> 
                  </div>
    
                  <div class="card-body">               
                      <ul>
                        <li><span class="list-title">ISBN</span> : 3435939 </li>
                        <li><span class="list-title">Course</span> : Business Com 1 </li>
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
    </main>
  </div>
  </div>
</template>
<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";
</style>