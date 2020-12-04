<template>
  <div>
    <NavOne />
    <PageHeader   title1="  Management Opérationnel" title2="Conduite du Changement" />
    <Offre4 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre4 from "../../components/offres/Offre4";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre4
  },
  head(){
    return {
      title: "Innov Consulting | Conduite du Changement"
    }
  }
}
</script>
