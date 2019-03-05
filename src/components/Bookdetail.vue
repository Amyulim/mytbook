<template>
  <div class="bookview-body row2">

      <i @click="GoBookUpdate" class="edit-button pull-right fa fa-edit fa-2x"></i>
    <div class="col-md-4 bookview-img">
      <div class="detail-img-box">
        <div v-if="curItem.book_status === 'null'"></div>
      <div v-else-if="curItem.book_status === null"></div>
      <div v-else-if="curItem.book_status === 'None'"></div>
      <div v-else class="justify-content-between align-items-center">
        {{curItem.book_status}}
      </div>
        <img :src="img+curItem.book_id+'.jpg'" class="detail-img" text="Thumbnail" />
      </div>

    </div>

    <div class="col-md-8 bookview-details pt-5">
      <p><span class="bookview-title">Title: </span>{{curItem.book_title}}</p>
      <hr>
      <p><span class="bookview-title">ISBN: </span>{{curItem.book_isbn}}</p>
      <hr>
      <p><span class="bookview-title">Course: </span>{{curItem.book_course}}</p>
      <hr>
      <p><span class="bookview-title">price: </span>$ {{curItem.book_price}}</p>
      <hr>
      <p><span class="bookview-title">condition: </span>{{curItem.book_condition}}</p>
      <hr>
      <p><span class="bookview-title">description: </span>{{curItem.book_desc}}</p>
      <hr>
      <p><span class="bookview-title">Meeting Time: </span>{{curItem.book_mdate}}</p>
      <hr>
      <!--to message the book owner TEMPORARY-->

      <button @click="GoMessage" type="button" class="btn btn-sm btn-block btn-primary send-msg-button mb-3"><i class="fa fa-envelope fa-lg"></i></button>

    </div>
    <div v-if="messenger == true" class="modal-bg z-index-1000">
      <div class="msg-box" id="messenger">
        <messenger />
        <button @click="Change_modal" type="button" class="btn btn-sm btn-secondary close-button-msg"> &nbsp;X&nbsp;</button>
      </div>
    </div>

  </div>
</template>
<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";

</style>


<script>
  import messenger from "@/components/Messenger.vue";

  export default {
    name: "bookdetail",
    components: {
      messenger: messenger
    },
    data() {
      return {
        result: "",
        book_title: "",
        messenger: false,
        curItem: this.store.curItem,
        search: '',
        componentLoaded: false,
        img: "https://s3.ca-central-1.amazonaws.com/mytbook/"
      }
    },
    methods: {
      GoMessage: function() {
        //         this.$router.push('booklist');
        this.messenger = true;
        this.store.user_id = this.store.user_id;
        this.store.user_email = this.store.user_email;
        this.store.cur_book_title = this.curItem.book_title;
        this.store.cur_book_id = this.curItem.book_id;
        this.store.cur_book_price = this.curItem.book_price;
      },

      Change_modal: function() {
        this.messenger = false;
      },

      GoBookUpdate: function() {
        this.store.cur_book_id = this.curItem.book_id;
        this.store.cur_book_title = this.curItem.book_title;
        this.store.cur_book_isbn = this.curItem.book_isbn;
        this.store.cur_book_course = this.curItem.book_course;
        this.store.cur_book_price = this.curItem.book_price;
        this.store.cur_book_img = this.curItem.book_img;
        this.store.cur_book_mdate = this.curItem.book_mdate;
        this.store.cur_book_desc = this.curItem.book_desc;
        this.store.cur_book_condition = this.curItem.book_condition;
        this.store.cur_book_status = this.curItem.book_status;
        //        console.log(this.store.cur_book_desc);
        this.$router.push('bookupdate');
      },
      DeleteBook: async function() {

        alert("deleted!")

        var fd = new FormData();

        fd.append("user_id", this.store.user_id);
        fd.append("book_id", this.curItem.book_id);

        console.log(this.user_id)
        console.log(this.curItem.book_id)

        var resp = await fetch("https://mytbook.herokuapp.com/delete_book.php", {
          method: "POST",
          body: fd
        });

        var json = await resp.text();

        this.detail = false;

        //referesh
        var resp = await fetch("https://mytbook.herokuapp.com/select_book.php");
        var json = await resp.json();
        this.result = json;
      },
      //      GoMessage: function() {
      //        this.store.user_id = this.store.user_id;
      //        this.store.user_email = this.store.user_email;
      //        this.store.cur_book_title = this.curItem.book_title;
      //        this.store.cur_book_id = this.curItem.book_id;
      //
      //        this.$router.push('messenger');
      //        console.log("sent")
      //
      //      }


    },


  }

</script>
