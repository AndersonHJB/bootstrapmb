<template>
  <section class="pt-120 pb-150">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8">
                      <!-- blog details inner -->
                      <div class="blog-details-inner">
                          <!-- single blog inner -->
                          <div class="single-blog-inner">
                              <!-- blog image -->
                              <div class="post-image">
                                  <nuxt-link to="/blog-details">
                                      <img src="/assets/img/blog/list1.png" alt="">
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
                                          <a href="#"><span>2</span> Comeent</a>
                                      </div>

                                      <div class="post-title">
                                          <h3><nuxt-link to="/blog-details">Pre and Post Launch Mobile App Marketing Pitfalls
                                                  to Avoid</nuxt-link></h3>
                                      </div>
                                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                      by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of
                                      Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                                      generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the
                                      Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
                                      generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,
                                      injected humour, or non-characteristic words etc.</p>
                                      <p class="mb-0">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                                      layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                                      using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                                      editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites
                                      still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
                                      injected humour and the like.</p>
                                  </div>
                              </div><!-- /.End of post content -->
                          </div><!-- /.End of single blog inner -->

                          <!-- post tag and share -->
                          <div class="post-tag-share d-flex align-items-center">
                              <div class="post-tag">
                                  <h5>Tags:</h5>
                                  <a href="#">Business,</a>
                                  <a href="#">Agency,</a>
                                  <a href="#">Technology</a>
                              </div>
                              <div class="post-share">
                                  <ul class="social-list mb--0 list-unstyled">
                                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                      <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                                  </ul>
                              </div>
                          </div><!-- /.End of post tag and share -->

                          <!-- post author -->
                          <div class="post-author-inner midea">
                              <img src="/assets/img/blog/blog-author.png" alt="">
                              <div class="author-details">
                                  <h4>Christine Eve</h4>
                                  <p>Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever
                                      sincer nullam condimentum purus.</p>
                                  <a href="#">View All Posts</a>
                              </div>
                          </div><!-- /.End of post author -->

                          <!-- post comments -->
                          <div class="post-comment">
                              <h3>2 Comments</h3>
                              <ul class="post-comments p-0 m-0 list-unstyled">
                                  <li>
                                      <div class="comment-author-details media">
                                          <img src="/assets/img/blog/comment-author.png" alt="">
                                          <div class="comment-author-content">
                                              <h5>David Martin</h5>
                                              <h6>20 oct, 2018 - 4:00 pm</h6>
                                              <p>Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy
                                                  text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.</p>
                                              <a href="#" class="btn">Reply</a>
                                          </div>
                                      </div>
                                  </li>
                                  <li class="d-flex">
                                      <div class="comment-author-details media">
                                          <img src="/assets/img/blog/comment-author2.png" alt="">
                                          <div class="comment-author-content">
                                              <h5>Jasseca Brown</h5>
                                              <h6>20 oct, 2018 - 4:00 pm</h6>
                                              <p>Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy
                                                  text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet.</p>
                                              <a href="#" class="btn">Reply</a>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                          <!--/.End of post comments -->

                          <!-- contact form -->
                          <div class="contact-form contact-page-form parsley-validate">
                              <h3>Leave a Comment</h3>
                              <form action="#" novalidate="">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <input type="text" name="name" placeholder="Full Name" class="theme-input-style" required="">
                                      </div>
                                      <div class="col-md-6">
                                          <input type="email" name="email" placeholder="Email Address" class="theme-input-style" required="">
                                      </div>
                                  </div>
                                  <div class="row">
                                      <div class="col-md-12">
                                          <textarea name="message" placeholder="Write Message" class="theme-input-style"></textarea>
                                          <div class="submite-btn">
                                              <button type="submit" class="btn">Send Message</button>
                                          </div><!-- /.submite btn -->
                                      </div><!-- /.col -->
                                  </div><!-- /.row -->
                              </form><!-- /.form -->
                          </div><!-- /.End of contact form -->
                      </div>
                      <!-- Ennd of blog details inner -->
                  </div>

                  <div class="col-lg-4">
                      <aside>
                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="search-bar-widget">
                                  <div class="search-form parsley-validate">
                                      <form action="#" method="POST" novalidate="">
                                          <input type="text" placeholder="Search here..." required="">
                                      </form>
                                  </div>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->

                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="sidebar-title">
                                  <h5>Latest Posts</h5>
                              </div>
                              <div class="sidebar-body latest-post">
                                  <ul>
                                      <!-- single latest post -->
                                      <li>
                                          <div class="latest-post-wrap media">
                                              <div class="latest-post-img">
                                                  <img src="/assets/img/blog/latest-blog1.png" alt="">
                                              </div>
                                              <div class="latest-post-body media-body">
                                                  <p>Basic rules of running
                                                      web agency</p>
                                              </div>
                                          </div>
                                      </li>
                                      <!-- single latest post -->

                                      <!-- single latest post -->
                                      <li>
                                          <div class="latest-post-wrap media">
                                              <div class="latest-post-img">
                                                  <img src="/assets/img/blog/latest-blog2.png" alt="">
                                              </div>
                                              <div class="latest-post-body media-body">
                                                  <p>Introducing latest app features</p>
                                              </div>
                                          </div>
                                      </li>
                                      <!-- single latest post -->

                                      <!-- single latest post -->
                                      <li>
                                          <div class="latest-post-wrap media">
                                              <div class="latest-post-img">
                                                  <img src="/assets/img/blog/latest-blog3.png" alt="">
                                              </div>
                                              <div class="latest-post-body media-body">
                                                  <p>Become the best sale marketer</p>
                                              </div>
                                          </div>
                                      </li>
                                      <!-- single latest post -->
                                  </ul>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->

                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="sidebar-title">
                                  <h5>Categories</h5>
                              </div>

                              <div class="sidebar-body categories-inner">
                                  <ul>
                                      <li><a href="#">Business</a></li>
                                      <li><a href="#">Introductions</a></li>
                                      <li><a href="#">One Page Template</a></li>
                                      <li><a href="#">Parallax Effects</a></li>
                                      <li><a href="#">New Technologies</a></li>
                                      <li><a href="#">Video Backgrounds</a></li>
                                  </ul>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->

                          <!-- single sidebar widget -->
                          <div class="single-sidebar-widget mb-30">
                              <div class="sidebar-title">
                                  <h5>Tags</h5>
                              </div>

                              <div class="sidebar-body tag-inner">
                                  <a href="#">Business,</a>
                                  <a href="#">Agency,</a>
                                  <a href="#">Technology,</a>
                                  <a href="#">Parallax,</a>
                                  <a href="#">nnovative,</a>
                                  <a href="#">Professional,</a>
                                  <a href="#">Experience,</a>
                              </div>
                          </div>
                          <!--End of  single sidebar widget -->
                      </aside>
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
    export default {
        name: "BlogDetails"
    }
</script>

<style scoped>

</style>
