<template>
  <section class="border-top pt-115 pb-80" id='blog'>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-lg-8 col-md-12">
                      <!-- section title -->
                      <div class="section-title text-center">
                          <h2>Our News & Articles</h2>
                          <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt    mollit lorem ipsum anim id est laborum perspiciatis unde.</p>
                      </div>
                      <!-- End of section title -->
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog1.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>30</span>Sep</p>
                              </div>
                          </div>
                          <!--/.End of  blog image -->

                          <!-- post content -->
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>1</span> Comment</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">Pre and Post Launch Mobile App Marketing Pitfalls to Avoid</nuxt-link></h3>
                                  </div>
                                  <p>There are many variations of passages of available but majority have alteration in some by inject humour or random
                                  words.</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog2.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>11</span>Sep</p>
                              </div>
                          </div>
                          <!--/.End of  blog image -->

                          <!-- post content -->
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>2</span> Comments</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">Nascetur Etiam tempus sit amet vestibulum quis variations.</nuxt-link></h3>
                                  </div>
                                  <p>There are many variations of passages of available but majority have alteration in some by inject
                                      humour or random
                                      words.</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>

                  <div class="col-lg-4 col-md-4">
                      <!-- single blog inner -->
                      <div class="single-blog-inner">
                          <!-- blog image -->
                          <div class="post-image">
                              <nuxt-link to="/blog-details">
                                  <img src="/assets/img/blog/blog3.png" alt="">
                              </nuxt-link>
                              <div class="post-date">
                                  <p><span>20</span>Nov</p>
                              </div>
                          </div>
                          <!--/.End of  blog image -->

                          <!-- post content -->
                          <div class="post-content">
                              <div class="post-details">
                                  <div class="post-info d-flex">
                                      <a href="#"><span>By</span>Admin</a>
                                      <a href="#"><span>5</span> Comments</a>
                                  </div>

                                  <div class="post-title">
                                      <h3><nuxt-link to="/blog-details">It is a long established fact that and reader will be distracted.</nuxt-link></h3>
                                  </div>
                                  <p>There are many variations of passages of available but majority have alteration in some by inject
                                      humour or random
                                      words.</p>
                                  <nuxt-link class='blog-btn' to="/blog-details">Read More</nuxt-link>
                              </div>
                          </div><!-- /.End of post content -->
                      </div><!-- /.End of single blog inner -->
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
    export default {
        name: "BlogHome"
    }
</script>

<style scoped>

</style>
