<template>
  <div class="body" id="home">
    <div class="container h-100 mx-auto">
      <!--
      <main role="main" class="inner cover">
        <h1 class="cover-heading">What text book you are looking for?</h1>
        <p class="lead">Search the book title that you are looking for</p>
        <div class="col-md-9 display-in">
          <input type="text" class="form-control width-90">
        </div>
        <div class="col-md-2 display-in">
          <input type="submit" class="submitButton btn-primary " value="Search">
        </div>
      </main>
-->
      <div class="row">
        <div class="col-md-7 landing justify-conent-center">
          <div class="justify-content-center m-auto">
            

            <div class="pr-5">
              <h1><span>Buy and Sell</span><br> Your Textbooks</h1>
              <p>Buy and Sell your textbooks for the best price. See every offer, and pick the best price.
              </p>
              <router-link to="/booklist" class="link" > Browse books <i class="right"></i></router-link> &emsp;
            </div>
          </div>
        </div>

        <div v-if="store.user_id == null" class="col-md-5">
          <signin />
        </div>
      </div>

    </div>


  </div>
</template>
<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css";
  @import "../components/style.css";

</style>
<script>
  // @ is an alias to /src
  import Signin from '@/components/Signin.vue'

  export default {
    name: 'home',
    components: {
      Signin
    }
  }

</script>

<!--
<script>
  import sigin from "@/components/Signin.vue";

  export default {
    name: "home",
    components: {
      signin
    }
  }

</script>
-->
