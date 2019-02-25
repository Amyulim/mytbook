<template>
  <div class="body" id="Book_update_form">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Book Update</h1>
            <p class="lead text-muted">Update the books you want to sell!</p>
          </div>
        </section>

        <div class="container">
          <div class="row">
            <div class="col-md-8 order-md-1 box-center">
              <h4 class="mb-3"></h4>
              <div class="row">
                <div class="col-md-9 mb-3">
                  <label for="book-title">Book title</label>
                  <input type="text" v-model="book_title" name="book_title" class="form-control" id="firstName" placeholder="" value="" required>
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="isbn">ISBN</label>
                  <input type="number" v-model="book_isbn" name="book_isbn" class="form-control" id="lastName" placeholder="" min="1" max="13" required>
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

              </div>
              <div class=" mb-3">
                <label for="book_course">Book Course</label>
                <input type="text" v-model="book_course" name="book_course" class="form-control" id="bookcourse" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Valid book course is required.
                </div>
              </div>

              <div class="mb-3">
                <label for="book_img">Image URL <span class="text-muted">(Optional)</span></label><br />
                <input type="text" v-model="book_img" name="book_img" accept="image/*" class="" placeholder="image....">
              </div>
							
							

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="condition">Condition of book</label>
                  <select v-model="book_condition" name="book_condition" class="custom-select d-block w-100" id="country" required>
                   <option value="" disabled selected>Select your option</option>
                   <option >1</option>
                   <option >2</option>
                   <option >3</option>
                   <option>4</option>
                  </select>

                  <div class="invalid-feedback">
                    Please select a condition of the book.
                  </div>
                </div>

                <div class="col-md-6 mb-3">
                  <label for="date">Preffered meeting date</label>
                  <input type="date" v-model="book_mdate" name="book_mdate" class="form-control" placeholder="YYYY-MM-DD" required>
                  <div class="invalid-feedback">
                    preferred date required.
                  </div>
                </div>

              </div>

              <div class="mb-3">
                <label for="desc">Description</label>
                <!--            <input type="date" class="form-control" id="zip" placeholder="" required>-->
                <textarea v-model="book_desc" name="book_desc">{{this.book_desc}}</textarea>
                <div class="invalid-feedback">
                  Description required.
                </div>
              </div>

              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="price">Price</label>

                  <input v-model="book_price" name="book_price" class="form-control" type="number" required min="0" value="0" step="any">

                  <div class="invalid-feedback">
                    Price required.
                  </div>

                </div>
              </div>


              <hr class="mb-4">
              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="condition">Transaction status</label>
                  <select v-model="book_status" class="custom-select d-block w-100" required>
                   <option value="" disabled selected>Select your option</option>
                   <option >None</option>
                   <option >In Progress</option>
                   <option >Sold</option>
                  </select>

                  <div class="invalid-feedback">
                    Please select a condition of the book.
                  </div>
                </div>
              </div>
              
                
              
              <hr class="mb-4">
              <button @click="SaveChanges" class="btn btn-primary btn-lg btn-block" type="submit">Save Changes</button>

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
    name: "Book_update_form",
    data() {
      return {
        user_id: this.store.user_id,
        book_id: this.store.cur_book_id,
        book_title: this.store.cur_book_title,
        book_isbn: this.store.cur_book_isbn,
        book_course: this.store.cur_book_course,
        book_price: this.store.cur_book_price,
        book_condition: this.store.cur_book_condition,
        book_desc: this.store.cur_book_desc,
        book_img: this.store.cur_book_img,
        book_mdate: this.store.cur_book_mdate,
        book_status: this.store.cur_book_status,
      }
    },
    methods: {
      SaveChanges: async function() {
        				console.log("saved!")

        var fd = new FormData();
        fd.append("user_id", this.user_id);
        fd.append("book_id", this.book_id);
        fd.append("book_title", this.book_title);
        fd.append("book_isbn", this.book_isbn);
        fd.append("book_course", this.book_course);
        fd.append("book_price", this.book_price);
        fd.append("book_condition", this.book_condition)
        fd.append("book_desc", this.book_desc);
        fd.append("book_img", this.book_img);
        fd.append("book_mdate", this.book_mdate);
        fd.append("book_status", this.book_status);

        //console.log(fd);
        console.log(this.user_id);

        var resp = await fetch("https://mytbook.herokuapp.com/update_book.php", {
          method: "POST",
          body: fd
        })
        var json = await resp.json();
        console.log(json);
				
				this.$router.push('myaccount');

      }
    },

  }

</script>
