<template>
  <section class="pt-120 pb-115 app-shot-one" id="app">
              <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-8">
                        <!-- section title -->
                        <div class="section-title text-center">
                            <h2>Jironis App Screens</h2>
                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt <br> mollit lorem ipsum anim id est laborum perspiciatis unde.</p>
                        </div>
                        <!-- End of section title -->
                    </div>
                </div>
                  <div class="app-shot-one__carousel thm__owl-carousel">

                    <swiper :options="swiperOptions">

                      <swiper-slide>
                      <!-- slingle app image -->
                      <div class="item">
                          <img src="/assets/img/feature/app-img.png" alt="">
                      </div>
                      <!-- slingle app image -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- slingle app image -->
                      <div class="item">
                          <img src="/assets/img/feature/app-img2.png" alt="">
                      </div>
                      <!-- slingle app image -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- slingle app image -->
                      <div class="item">
                          <img src="/assets/img/feature/app-img3.png" alt="">
                      </div>
                      <!-- slingle app image -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- slingle app image -->
                      <div class="item">
                          <img src="/assets/img/feature/app-img4.png" alt="">
                      </div>
                      <!-- slingle app image -->
                      </swiper-slide>

                      <swiper-slide>
                      <!-- slingle app image -->
                      <div class="item">
                          <img src="/assets/img/feature/app-img5.png" alt="">
                      </div>
                      <!-- slingle app image -->
                      </swiper-slide>

                    </swiper>
                    <div class="swiper-pagination owl-dots" slot="pagination"></div>
                  </div><!-- /.app-shot-one__carousel owl-theme owl-carousel -->
              </div><!-- /.container-fluid -->
          </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
    export default {
      name: "Screenshots",
      components: {
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          swiperOptions: {
            slidesPerView : 5,
            loop: true,
            speed: 1000,
            spaceBetween : 20,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },

            // Responsive breakpoints
            breakpoints: {
              1024:{
                  slidesPerView : 5
              },
              768:{
                  slidesPerView : 2
              },
              640:{
                  slidesPerView : 2
              },
              320:{
                  slidesPerView : 1
              }
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>
