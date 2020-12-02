<template>
  <div>
    <NavOne />
    <PageHeader title="Offres" />
    <Offre8 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre8 from "../../components/offres/Offre8";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre8
  },
  head(){
    return {
      title: "Innov Consulting | Sécurité des systèmes d'information"
    }
  }
}
</script>
