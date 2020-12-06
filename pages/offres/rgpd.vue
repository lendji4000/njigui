<template>
  <div>
    <NavOne />
    <PageHeader2 title1=" Gouvernance & Organisation" title2="RGPD" />
    <Offre11 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader2 from "../../components/PageHeader2";
import Footer from "../../components/Footer";
import Offre11 from "../../components/offres/Offre11";


export default {
  components: {
    Footer,
    PageHeader2,
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
