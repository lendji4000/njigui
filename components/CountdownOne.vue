<template>
  <section class="countdown-one">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="countdown-one__content">
                    <h2 class="countdown-one__title">Nous contacter</h2><!-- /.countdown-one__title -->
                    <p class="countdown-one__tag-line">Une équipe toujours a votre écoute</p>
                    <!-- /.countdown-one__tag-line -->
                    <p class="countdown-one__text">
                      A travers notre cabinet, Innov consulting, nous formons les leaders de demain aux bonnes pratiques du management et de gestion.

                      Centre d’excellence et de partage d’expérience terrain, Innov consulting a obtenu de nombreuses certifications et accréditations et
                      octroie les plus prestigieuses certifications en management et gestion </p><!-- /.countdown-one__text -->
<!--                    <ul class="countdown-one__list list-unstyled">-->
<!--                        &lt;!&ndash; content loading via js &ndash;&gt;-->
<!--                    </ul>&lt;!&ndash; /.coundown-one__list &ndash;&gt;-->
                </div><!-- /.countdown-one__content -->
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-6">
                <div class="become-teacher__form">
                    <div class="become-teacher__form-top">
                        <h2 class="become-teacher__form-title">
                            Nous Contacter
                        </h2><!-- /.become-teacher__form-title -->
                    </div><!-- /.become-teacher__top -->
                    <form action="/assets/inc/sendemail.php" class="become-teacher__form-content contact-form-validated">
                        <input type="text" placeholder="votre nom" name="name" v-model="name">
                        <input type="text" placeholder=" Adresse Email " name="email" v-model="email">
<!--                        <input type="text" placeholder="Phone Number" name="phone">-->
                        <input type="text" placeholder="message" name="message" v-model="message">
                        <button type="submit" class="thm-btn become-teacher__form-btn" @click.prevent="envoieFormulaire">Envoyer</button>
                    </form><!-- /.become-teacher__form-content -->
<!--                    <div class="result text-center"></div>&lt;!&ndash; /.result &ndash;&gt;-->
                </div><!-- /.become-teacher__form -->
            </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</section>
</template>

<script>
import API from "../API/index"
export default {
  name: "CountdownOne",
  data: function () {
    return{
      email: '',
      name: '',
      message: ''
    }
  },
  methods: {
    envoieFormulaire:async function () {
      API.createContact({email:this.email, title:this.name, description:this.message, mail:"augustin.njigui01@gmail.com"}).then((data) => {
        console.log("contact",data)})
    }
  }
}

</script>

<style scoped>

</style>
