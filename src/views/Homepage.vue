<template>
  <div class="body" id="home">
    <div class="container mx-auto">
      <div class="row">
        <div class="col-md-7 landing justify-conent-center">
          <div class="justify-content-center m-auto">

            <div class="pr-5">
              <h1><span>Buy and Sell</span><br> Your Textbooks</h1>
              <p>Buy and Sell your textbooks for the best price. See every offer, and pick the best price.
              </p>
              <router-link to="/booklist" class="link"> Browse books <i class="right arrow"></i></router-link> &emsp;
            </div>
          </div>
        </div>

        <div v-if="store.user_id == null" class="col-md-5 ">
          <signin />
        </div>
      </div>


      <div class="container homeContent">
        <div class="content-title">
          <h3> Why should you sell and <br/>buy books using Mytbook?</h3>
        </div>

        <div class="row">
          <div class="col-md-4 content-box shadow rounded">
            <img class="content-logo" src="../assets/accessibility.svg" alt="Accessibility logo" />
            <h4 class="content-sub"> Accessibility</h4> 
            <p>Looking for learning resources like books can be expensive for some students. It will be also such a waste if we just leave those used books untouched after using them for just a semester or two. Put some good use on those books by selling them to our website. <br> <br>Mytbook strives to be your one-stop shop for searching for books you needed for school. Search for the book you needed and set up a prefered meet up that suits your best availability.
            </p>
          </div>
          <div class="col-md-4 content-box shadow rounded">
            <img class="content-logo" src="../assets/Money.svg" alt="Money logo" />
            <h4 class="content-sub"> Good Price, Good Condition</h4> 
            <p>Don't just settle for expensive books because you can't find a reliable source of cheap but still in a good condition book. In Mytbook, you will not only get good quality books, but you can also get them on an affordable and negotiable price whenever and wherever.<br><br> Mytbook offers a wide variety of books available for students made by other BCIT students themselves!. Mytbook believes that  <em>Good education doesnt come from expensive books </em>.
            </p>
          </div>
          <div class="col-md-4 content-box shadow rounded">
            <img class="content-logo" src="../assets/community.svg" alt="community logo" />
            <h4 class="content-sub"> Create a community</h4> 
            <p>Mytbook promotes the idea of creating a community. With one simple search, you’ll get connected to your fellow BCIT students who sell the book you are looking for an affordable book that is obviously a lot cheaper than their original price. In Mytbook we made it easier for customers to:<br><br>1. Directly send a message to the book owner through the app.<br> 2. meet up with the book owner based on their posted preferred meeting date whether inside or outside the campus.
            </p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<style>

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
