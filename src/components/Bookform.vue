<template>
  <div class="body" id="Bookform">
    <div class="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner">
        <section class="text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Book Form</h1>
            <p class="lead text-muted">Fill out the form sell the book!</p>
          </div>
        </section>

        <div class="container">
          <div class="row">
            <div class="col-md-8 order-md-1 box-center">
              <h4 class="mb-3"></h4>
              <div class="row">
                <div class="col-md-12 mb-3 input-file-wrapper">
                  <img :src="this.book_img" class="thumb-img"><br />
                  <button class="img-edit-btn"><i class="fa fa-plus-square-o" aria-hidden="true"></i></button>
                  <input type="file" @change="onFileChange" accept="image/*">
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-9 mb-3">
                  <label for="book-title">Book title</label>
                  <input type="text" v-model="book_title" name="book_title" class="form-control" id="firstName" placeholder="" value="" required>
                </div>

                <div class="col-md-3 mb-3">
                  <label for="isbn">ISBN</label>
                  <input type="number" v-model="book_isbn" name="book_isbn" class="form-control" id="lastName" placeholder="" min="1" max="13" required>
                </div>
              </div>
              
              <div class=" mb-3">
                <label for="book_course">Book Course</label>
                <input type="text" v-model="book_course" name="book_course" class="form-control" id="bookcourse" placeholder="" value="" required>
              </div>

              <div class="row">
                <div class="col-md-5 mb-3">
                  <label for="condition">Condition of book</label>
                  <select v-model="book_condition" name="book_condition" class="custom-select d-block w-100" id="country" placeholder="Choose a condition" required>
                    <option value="" disabled selected>Select your option</option>
                    <option>Very Good</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Poor</option>
                  </select>
                </div>
                
                <div class="col-md-6 mb-3">
                  <label for="date">Preferred meeting date</label>
                  <input type="date" v-model="book_mdate" name="book_mdate" class="form-control" placeholder="YYYY-MM-DD" required>
                </div>
              </div>

              <div class="mb-3">
                <label for="desc">Description</label>
                <textarea v-model="book_desc" name="book_desc"></textarea>
              </div>

              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="price">Price</label>
                  <input v-model="book_price" name="book_price" class="form-control" type="number" required min="0" value="0" step="any">
                </div>
             </div>

              <hr class="mb-4">
              
              <button @click="Bookform" class="btn btn-primary btn-lg btn-block" type="submit">Save</button>

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
    name: "Bookform",
    data() {
      return {
        user_id: this.store.user_id,
        book_title: "",
        book_isbn: "",
        book_course: "",
        book_price: "",
        book_condition: "",
        book_desc: "",
        book_img: "",
        book_mdate: "",
        book_status: "",
        book_file: "",
        result: ""
      }
    },
    methods: {
      onFileChange: function(e) {
        
        //read image–input->file 
        var files =
          e.target.files ||
          e.dataTransfer.files;
        if (!files.length)
          return;

        this.createImage(files[0]);
        this.book_file = files[0];
        
      },
      createImage: function(file) {
        
        var book_img = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.book_img = e.target.result;
        };
        reader.readAsDataURL(file);

      },
      Bookform: async function() {
        
        //save book information to db
        var fd = new FormData();
        fd.append("user_id", this.user_id);
        fd.append("book_title", this.book_title);
        fd.append("book_isbn", this.book_isbn);
        fd.append("book_course", this.book_course);
        fd.append("book_price", this.book_price);
        fd.append("book_condition", this.book_condition);
        fd.append("book_desc", this.book_desc);
        fd.append("book_img", this.book_img);
        fd.append("book_mdate", this.book_mdate);
        fd.append("book_status", this.book_status);
        
        var resp = await fetch("https://mytbook.herokuapp.com/insert_book.php", {
          method: "POST",
          body: fd
        });

    
        var json = await resp.json();
        //console.log(json);
        this.result = json;
        //console.log(this.result);

  
        var fd = new FormData();
        fd.append('fname', this.result.id);
        fd.append('filekey', this.book_file);

        var resp = await fetch('upload', { // Your POST endpoint
          method: 'POST',
          credentials: "include",
          body: fd // This is your file object
        });

        var json = await resp.json(); // if the response is a JSON object
        
        //uploading ui feedback
        await this.$swal({
          title: "Uploading",
          type: "success",
          timer: 2000,
          showCancelButton: false,
          showConfirmButton: false,
          confirmButtonColor: "#85be39",
          confirmButtonText: "Yes!"
        })
        this.$router.push('myaccount');

      },

    }
  }

</script>
