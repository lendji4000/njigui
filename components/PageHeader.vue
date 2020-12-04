<template>
  <section class="inner-banner">
      <div class="container">
          <ul class="list-unstyled thm-breadcrumb">
              <li><a href="/">l'Entreprise :   </a></li>
              <li class="active"><a href="#">{{ title1 }}</a></li>
          </ul><!-- /.list-unstyled -->
          <h2 class="inner-banner__title">{{ title2 }}</h2><!-- /.inner-banner__title -->
      </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "PageHeader",
      props: {
        title: {
          type: String
        },
        title1: {
          type: String
        },
        title2: {
          type: String
        }
      }
    }
</script>

<style scoped>

</style>
