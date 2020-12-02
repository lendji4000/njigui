<template>
    <div>
      <section class="contact-info-one">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4">
                      <div class="contact-info-one__single wow fadeInDown animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInDown;">
                          <div class="contact-info-one__icon"><i class="kipso-icon-manager"></i><!-- /.kipso-icon-manager -->
                          </div><!-- /.contact-info-one__icon -->
                          <h2 class="contact-info-one__title">A propos </h2><!-- /.contact-info-one__title -->
                          <p class="contact-info-one__text">Lorem ipsum is simply free text <br> available in the market to
                              use <br>
                              deliver satisfaction.</p><!-- /.contact-info-one__text -->
                      </div><!-- /.contact-info-one__single -->
                  </div><!-- /.col-lg-4 -->
                  <div class="col-lg-4">
                      <div class="contact-info-one__single wow fadeInUp animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInUp;">
                          <div class="contact-info-one__icon"><i class="kipso-icon-placeholder"></i>
                              <!-- /.kipso-icon-manager -->
                          </div><!-- /.contact-info-one__icon -->
                          <h2 class="contact-info-one__title">Notre Adresse</h2><!-- /.contact-info-one__title -->
                          <p class="contact-info-one__text">7, Rue Molière, 92400, Courbevoie </p><!-- /.contact-info-one__text -->
                      </div><!-- /.contact-info-one__single -->
                  </div><!-- /.col-lg-4 -->
                  <div class="col-lg-4">
                      <div class="contact-info-one__single wow fadeInDown animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInDown;">
                          <div class="contact-info-one__icon"><i class="kipso-icon-contact"></i><!-- /.kipso-icon-manager -->
                          </div><!-- /.contact-info-one__icon -->
                          <h2 class="contact-info-one__title">Contact </h2><!-- /.contact-info-one__title -->
                          <p class="contact-info-one__text">augustin.njigui01@gmail.com
                            <br>
                            +33 (0)6 98 56 66 33 <br> &nbsp; </p><!-- /.contact-info-one__text -->
                      </div><!-- /.contact-info-one__single -->
                  </div><!-- /.col-lg-4 -->
              </div><!-- /.row -->
          </div><!-- /.container -->
      </section>
<section class="contact-one">
          <div class="container">
              <h2 class="contact-one__title text-center">Nous Contacter !</h2><!-- /.contact-one__title -->
              <form action="/assets/sendemail.php" class="contact-one__form contact-form-validated" novalidate="novalidate">
                  <div class="row low-gutters">
                      <div class="col-lg-6">
                          <input type="text" name="name" placeholder="Votre Nom" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-6">
                          <input type="text" placeholder="Addresse Email " name="email" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12">
                          <textarea placeholder="Message" name="message" required></textarea>
                          <div class="text-center">
                              <button type="submit" class="contact-one__btn thm-btn">Envoyer</button>
                          </div><!-- /.text-center -->
                      </div><!-- /.col-lg-12 -->
                  </div><!-- /.row -->
              </form><!-- /.contact-one__form -->
              <div class="result text-center"></div><!-- /.result -->
          </div><!-- /.container -->
      </section>


      <iframe class="google-map__contact" allowfullscreen="" id="gmap_canvas" src="https://maps.google.com/maps?q=7%2C%20Rue%20Moli%C3%A8re%2C%2092400%2C%20Courbevoie&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

    </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>

</style>
