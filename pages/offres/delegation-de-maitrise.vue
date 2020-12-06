<template>
  <div>
    <NavOne />
    <PageHeader1 title1="  Management Opérationnel" title2="Délégation de maîtrise d'Ouvrage" />
    <Offre5 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader1 from "../../components/PageHeader1";
import Footer from "../../components/Footer";
import Offre5 from "../../components/offres/Offre5";


export default {
  components: {
    Footer,
    PageHeader1,
    NavOne,
    Offre5
  },
  head(){
    return {
      title: "Innov Consulting | Délégation de maîtrise d'Ouvrage"
    }
  }
}
</script>
