<template>
  <div>
    <NavOne />
    <PageHeader1 title1="  Management Opérationnel" title2="Management des Projets" />
    <Offre2 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader1 from "../../components/PageHeader1";
import Footer from "../../components/Footer";
import Offre2 from "../../components/offres/Offre2";


export default {
  components: {
    Footer,
    PageHeader1,
    NavOne,
    Offre2
  },
  head(){
    return {
      title: "INOV Consulting | Management des projets"
    }
  }
}
</script>
