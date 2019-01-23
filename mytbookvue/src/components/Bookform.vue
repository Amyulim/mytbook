<template>
  <div class="container">

        <div class="py-5 text-center">
          <h2>Book form</h2>
          <p class="lead">Fill out the form to sell the book.</p>
        </div>

        <div class="row">

          <div class="col-md-8 order-md-1 box-center">
            <h4 class="mb-3"></h4>
            <form class="needs-validation" novalidate>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">Book title</label>
                  <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">ISBN</label>
                  <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label for="address2">Image URL <span class="text-muted">(Optional)</span></label><br/>
                <input type="file" name="pic" accept="image/*" class="" placeholder="image....">
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="country">Condition of book</label>
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
                  <label for="zip">Preffered meeting date</label>
                  <input type="date" class="form-control" id="zip" placeholder="" required>
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>

              </div>

              <div class="mb-3">
                  <label for="zip">Description</label>
      <!--            <input type="date" class="form-control" id="zip" placeholder="" required>-->
                <textarea></textarea>
                  <div class="invalid-feedback">
                    Zip code required.
                  </div>
                </div>
                 <hr class="mb-4">
              <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
            </form>
          </div>
        </div>
  </div>
</template>

<style>
    @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";
</style>