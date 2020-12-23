<template>
  <section class="mailchimp-one">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="mailchimp-one__content">
                        <div class="mailchimp-one__icon">
                            <i class="kipso-icon-email"></i><!-- /.kipso-icon-email -->
                        </div><!-- /.mailchimp-one__icon -->
                        <h2 class="mailchimp-one__title">Restez informer ! <br>
                            </h2><!-- /.mailchimp-one__title -->
                    </div><!-- /.mailchimp-one__content -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6 d-flex">
                    <div class="my-auto">
                        <form action="#" class="mailchimp-one__form mc-form" @submit="Souscrire">
                            <input type="text" id="mc-email" placeholder="Entrez votre adresse email " v-model="email">
                            <button type="submit" class="thm-btn" @click.prevent="envoieFormulaire" > Souscrire</button>
                        </form><!-- /.mailchimp-one__form -->
                        <div class="mc-form__response"></div><!-- /.mc-form__response -->
                    </div><!-- /.my-auto -->
                </div><!-- /.col-lg-6 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>
</template>

<script>
import API from "../API/index"
export default {
  name: "Subscribe",
  data: function () {
    return {
      email: ''
    };
  },
  methods: {
    envoieFormulaire: async function () {
      API.createContact({email: this.email, mail: "info@inov-corp.com"}).then((data) => {
        console.log("souscrire", data)
      })
    },
    methods: {
      login(e) {
        console.log("login function called")
        e.preventDefault()
      },
    }
  },

}

</script>

<style scoped>

</style>
