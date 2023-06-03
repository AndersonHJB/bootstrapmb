<template>
  <header class="header">
          <!-- Start Header Navbar-->
          <div :class="`main-header inner-header header-2 ${sticky ? 'sticky fadeInDown' : ''}`">
              <div class="main-menu-wrap">
                  <div class="container">
                      <div class="row align-items-center">
                          <div class="col-xl-3 col-lg-3 col-md-4 col-6">
                              <!-- Logo -->
                              <div class="logo">
                                  <nuxt-link to="/">
                                      <img class="main-logo2" src="/assets/img/logo2.png" data-rjs="2" alt="jironis">
                                      <img class="sticky-logo" src="/assets/img/logo.png" data-rjs="2" alt="jironis">
                                  </nuxt-link>
                              </div>
                              <!-- End of Logo -->
                          </div>
                          <div class="col-xl-6 col-lg-6 col-md-4 col-6 menu-button">
                              <div class="menu--inner-area clearfix">
                                  <div class="menu-wraper">
                                      <nav>
                                          <!-- Header-menu -->
                                          <div class="header-menu dosis">
                                            <div id="menu-button" class="">
                                              <i class="fa fa-bars"></i>
                                            </div>

                                              <ul class="main-nav">
                                                  <li><nuxt-link to="/">Home</nuxt-link>
                                                      <ul>
                                                          <li><nuxt-link to="/">Home 1</nuxt-link></li>
                                                          <li class="active"><nuxt-link to="/index2">Home 2</nuxt-link></li>
                                                      </ul>
                                                  </li>
                                                  <li><a href="#features">Features</a></li>
                                                  <li><a href="#app">App Screens</a></li>
                                                  <li><a href="#pricing">Pricing</a></li>
                                                  <li><a href="javascript:void(0)">Blog</a>
                                                      <ul>
                                                          <li><nuxt-link to="/blog">Blog Posts</nuxt-link></li>
                                                          <li><nuxt-link to="/blog-details">single Post</nuxt-link></li>
                                                      </ul>
                                                  </li>
                                              </ul>
                                          </div>
                                          <!-- End of Header-menu -->
                                      </nav>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-3 col-md-4 col-sm-5 d-md-block d-none">
                              <div class="urgent-call text-right">
                                  <a href="#" class="btn">Get Jironis</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <!-- End Header Navbar-->
      </header>
</template>

<script>
    export default {
      name: "NavTwo",
      data(){
        return {
          sticky: false
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);

        this.mobileMenu();
      },

      methods: {

        handleScroll () {

          if (window.scrollY > 70) {
            this.sticky = true
          }
          else if (window.scrollY < 70) {
            this.sticky = false
          }
        },

        mobileMenu() {
            //Mobile Menu Toggle
            let mainNavToggler = document.querySelector("#menu-button");
            let mainNav = document.querySelector(".main-nav");

            mainNavToggler.addEventListener("click", function () {
                //mainNavToggler.classList.add('menu-opened');
                mainNav.style.display = ( (mainNav.style.display != "block" ? "block" : "none" ) );
            });
        }

      }
    }
</script>

<style scoped>

</style>
