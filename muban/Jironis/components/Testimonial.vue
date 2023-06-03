<template>
  <section class="pt-120 pb-110 bg-2">
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-md-8">
                      <div class="testimonial-author-arousel text-center">
                          <div class="testimonial-author-inner">
                              <div class="author-carousel">
                                <swiper :options="swiperOptions">
                                  <swiper-slide>
                                    <div class="single-author-imge">
                                        <img src="/assets/img/feature/author3.png" alt="">
                                    </div>
                                  </swiper-slide>
                                  <swiper-slide>
                                    <div class="single-author-imge">
                                        <img src="/assets/img/feature/author2.png" alt="">
                                    </div>
                                  </swiper-slide>
                                  <swiper-slide>
                                    <div class="single-author-imge">
                                        <img src="/assets/img/feature/author1.png" alt="">
                                    </div>
                                  </swiper-slide>
                                </swiper>
                              </div>
                          </div>
                      </div>

                      <div class="testimonial-author-comment text-center">
                          <div class="author-comment-carousel">

                            <swiper :options="swiperOptions">

                              <swiper-slide>
                                <div class="single-author-comment">
                                    <h4>This is due to their excellent service, competitive<br> pricing and customer support. It’s throughly<br> refresing to get such
                                    a personal touch.</h4>
                                    <p>Shirley Smith</p>
                                </div>
                              </swiper-slide>

                              <swiper-slide>
                                <div class="single-author-comment">
                                    <h4>This is due to their excellent service, competitive<br> pricing and customer support. It’s throughly<br> refresing to get such
                                    a personal touch.</h4>
                                    <p>Shirley Smith</p>
                                </div>
                              </swiper-slide>

                              <swiper-slide>
                                <div class="single-author-comment">
                                    <h4>This is due to their excellent service, competitive<br> pricing and customer support. It’s throughly<br> refresing to get such
                                    a personal touch.</h4>
                                    <p>Shirley Smith</p>
                                </div>
                              </swiper-slide>
                              <div class="swiper-button-prev" slot="button-prev"></div>
                              <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

    export default {
      name: "Testimonial",
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
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          }
        }
      },
    }
</script>

<style scoped>

</style>
