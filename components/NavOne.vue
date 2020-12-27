<template>
    <div>
      <div class="topbar-one">
          <div class="container">
              <div class="topbar-one__left">
                  <a href="#">info@inov-corp.com</a>
                  <a href="#">+33 (0)6 98 56 66 33 </a>
              </div><!-- /.topbar-one__left -->
<!--              <div class="topbar-one__right">-->
<!--                  <a href="#">Login</a>-->
<!--                  <a href="#">Register</a>-->
<!--              </div>&lt;!&ndash; /.topbar-one__right &ndash;&gt;-->
          </div><!-- /.container -->
      </div><!-- /.topbar-one -->
<header class="site-header site-header__header-one ">
          <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky">
              <div class="container clearfix">
                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="logo-box clearfix">
                      <a class="navbar-brand" href="/">
                          <img src="/assets/images/Inov_logo1.png" class="main-logo" width="128" alt="Awesome Image" />
                      </a>
                      <div class="header__social">
<!--                          <a href="#"><i class="fab fa-twitter"></i></a>-->
<!--                          <a href="#"><i class="fab fa-facebook-square"></i></a>-->
<!--                          <a href="#"><i class="fab fa-pinterest-p"></i></a>-->
<!--                          <a href="#"><i class="fab fa-instagram"></i></a>-->
                      </div><!-- /.header__social -->
                      <button class="menu-toggler" data-target=".main-navigation">
                          <span class="kipso-icon-menu"></span>
                      </button>
                  </div><!-- /.logo-box -->
                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="main-navigation">
                      <ul class=" navigation-box">
                          <li class="current">
                              <a href="#">L'Entreprise <i class="fas fa-caret-down"></i></a>
                              <ul class="sub-menu">
                                  <li><a href="/">L'Entreprise</a></li>
                                  <li><a href="/valeurs">Nos Valeurs</a></li>
<!--                                  <li><a href="#">L'Equipe</a></li>-->

<!--                                  <li><a href="#">Header Versions</a>-->
<!--                                      <ul class="sub-menu">-->
<!--                                          <li><a href="/">Header 01</a></li>-->
<!--                                          <li><a href="/index-2">Header 02</a></li>-->
<!--                                          <li><a href="/index-3">Header 03</a></li>-->
<!--                                      </ul>&lt;!&ndash; /.sub-menu &ndash;&gt;-->
<!--                                  </li>-->
                              </ul><!-- /.sub-menu -->
                          </li>
                          <li>
                              <a href="/about">Qui sommes nous?</a>
<!--                              <ul class="sub-menu">-->
<!--                                  <li><nuxt-link to="/about">About Page</nuxt-link></li>-->
<!--                                  <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>-->
<!--                                  <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li>-->
<!--                                  <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>-->
<!--                              </ul>&lt;!&ndash; /.sub-menu &ndash;&gt;-->
                          </li>


                        <li class="current">
                          <a href="#">Activités <i class="fas fa-caret-down"></i></a>
                          <ul class="sub-menu">
                            <li><a href="/offres/management-de-portfolio-et-programmes">Activité 1: Management opérationnel</a></li>
                            <li><a href="/offres/gouvernance-schema">Activité 1: Gouvernance & Organisation</a></li>
                          </ul><!-- /.sub-menu -->
                        </li>
                          <li>
                              <nuxt-link to="/contact">Nous Contacter</nuxt-link>
                          </li>
                      </ul>
                  </div><!-- /.navbar-collapse -->
                  <div class="right-side-box">
                      <a class="header__search-btn search-popup__toggler" href="#"><i class="kipso-icon-magnifying-glass"></i>
                          <!-- /.kipso-icon-magnifying-glass --></a>
                  </div><!-- /.right-side-box -->
              </div>
              <!-- /.container -->
          </nav>
          <div class="site-header__decor">
              <div class="site-header__decor-row">
                  <div class="site-header__decor-single">
                      <div class="site-header__decor-inner-1"></div><!-- /.site-header__decor-inner -->
                  </div><!-- /.site-header__decor-single -->
                  <div class="site-header__decor-single">
                      <div class="site-header__decor-inner-2"></div><!-- /.site-header__decor-inner -->
                  </div><!-- /.site-header__decor-single -->
                  <div class="site-header__decor-single">
                      <div class="site-header__decor-inner-3"></div><!-- /.site-header__decor-inner -->
                  </div><!-- /.site-header__decor-single -->
              </div><!-- /.site-header__decor-row -->
          </div><!-- /.site-header__decor -->
      </header>
    </div>
</template>

<script>
    export default {
        name: "NavOne"
    }
</script>

<style scoped>

</style>
