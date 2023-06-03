<template>
  <section class="pt-120 pb-120">
      <div class="container">
          <div class="row">
              <div class="col">
                  <!-- partner carosel inner -->
                  <div class="partner-carousel-wrap">
                      <div class="partner-carousel owl-carousel">

                        <swiper :options="swiperOptions">

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/partner2.png" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/partner2.png" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/partner2.png" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>

                          <swiper-slide>
                            <!-- single partner -->
                            <div class="single-partner">
                                <img src="/assets/img/partner2.png" alt="">
                            </div>
                            <!-- End of single partner -->
                          </swiper-slide>

                        </swiper>
                      </div>
                  </div>
                  <!--End of  partner carosel inner -->
              </div>
          </div>
      </div>
    </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
  import 'swiper/css/swiper.css';

    export default {
      name: "ClientsLogo",
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
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
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
