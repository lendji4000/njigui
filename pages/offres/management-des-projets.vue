<template>
  <div>
    <NavOne />
    <PageHeader title="Offres" />
    <Offre2 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre2 from "../../components/offres/Offre2";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre2
  },
  head(){
    return {
      title: "Innov Consulting | Offres"
    }
  }
}
</script>
