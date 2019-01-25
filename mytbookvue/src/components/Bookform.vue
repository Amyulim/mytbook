<template>
  <div class="body">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Book form</h1>
            <p class="lead text-muted">Fill out the form sell the book!</p>
          </div>
        </section>
        <div class="container">
        <div class="row">
          <div class="col-md-8 order-md-1 box-center">
            <h4 class="mb-3"></h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-9 mb-3">
                  <label for="book-title">Book title</label>
                  <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="isbn">ISBN</label>
                  <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="book_img">Image URL <span class="text-muted">(Optional)</span></label><br/>
                <input type="file" name="pic" accept="image/*" class="" placeholder="image....">
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="condition">Condition of book</label>
                  <select class="custom-select d-block w-100" id="country" required>
                    <option value="1">Very Good</option>
                    <option value="2">Good</option>
                    <option value="3">Not Bad</option>
                    <option>Bad</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div class="col-md-6 mb-3">
                  <label for="date">Preffered meeting date</label>
                  <input type="m-date" class="form-control" id="zip" placeholder="" required>
                  <div class="invalid-feedback">
                    preferred date required.
                  </div>
                </div>

              </div>

              <div class="mb-3">
                  <label for="des">Description</label>
      <!--            <input type="date" class="form-control" id="zip" placeholder="" required>-->
                <textarea></textarea>
                  <div class="invalid-feedback">
                    Description required.
                  </div>
                </div>
                 <hr class="mb-4">
              <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
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