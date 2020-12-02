<template>
  <div>
    <NavOne />
    <PageHeader title="Offres" />
    <Offre11 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre11 from "../../components/offres/Offre11";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre11
  },
  head(){
    return {
      title: "Innov Consulting | RGPD"
    }
  }
}
</script>
