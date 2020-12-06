<template>
  <div>
    <NavOne />
    <PageHeader1   title1="  Management Opérationnel" title2="Conduite du Changement" />
    <Offre4 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader1 from "../../components/PageHeader1";
import Footer from "../../components/Footer";
import Offre4 from "../../components/offres/Offre4";


export default {
  components: {
    Footer,
    PageHeader1,
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
