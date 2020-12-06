<template>
  <div>
    <NavOne />
    <PageHeader2 title1="Gouvernance & Organisation" title2="Sécurité des systèmes d'information"/>
    <Offre8 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader2 from "../../components/PageHeader2";
import Footer from "../../components/Footer";
import Offre8 from "../../components/offres/Offre8";


export default {
  components: {
    Footer,
    PageHeader2,
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
