<template>
<!--  <section class="blog-two">-->
<!--      <div class="container">-->
<!--          <div class="block-title text-center">-->
<!--              <h2 class="block-title__title">Our latest news <br>-->
<!--                  & articles</h2>&lt;!&ndash; /.block-title__title &ndash;&gt;-->
<!--          </div>&lt;!&ndash; /.block-title &ndash;&gt;-->
<!--          <div class="blog-two__carousel owl-carousel owl-theme">-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-1.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Summer high school journalism camp</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-2.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Get a tips to develop a quality education</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-3.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Learn variety of programs and courses</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-1.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Summer high school journalism camp</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-2.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Get a tips to develop a quality education</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-3.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Learn variety of programs and courses</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-1.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Summer high school journalism camp</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-2.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Get a tips to develop a quality education</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--              <div class="item">-->
<!--                  <div class="blog-two__single" :style="{backgroundImage: `url(assets/images/blog-2-3.jpg)`}">-->
<!--                      <div class="blog-two__inner">-->
<!--                          <a href="/news-details" class="blog-two__date">-->
<!--                              <span>25</span>-->
<!--                              Jul-->
<!--                          </a>&lt;!&ndash; /.blog-two__date &ndash;&gt;-->
<!--                          <div class="blog-two__meta">-->
<!--                              <a href="#">by Admin</a>-->
<!--                              <a href="#">3 Comments</a>-->
<!--                          </div>&lt;!&ndash; /.blog-two__meta &ndash;&gt;-->
<!--                          <h3 class="blog-two__title">-->
<!--                              <a href="/news-details">Learn variety of programs and courses</a>-->
<!--                          </h3>&lt;!&ndash; /.blog-two__title &ndash;&gt;-->
<!--                      </div>&lt;!&ndash; /.blog-two__inner &ndash;&gt;-->
<!--                  </div>&lt;!&ndash; /.blog-two__single &ndash;&gt;-->
<!--              </div>&lt;!&ndash; /.item &ndash;&gt;-->
<!--          </div>&lt;!&ndash; /.blog-two__carousel owl-carousel owl-theme &ndash;&gt;-->
<!--      </div>&lt;!&ndash; /.container &ndash;&gt;-->
<!--  </section>-->
</template>

<script>
    export default {
        name: "BlogCarousel"
    }
</script>

<style scoped>

</style>
