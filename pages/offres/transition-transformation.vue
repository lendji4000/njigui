<template>
  <div>
    <NavOne />
    <PageHeader1 title1="  Management Opérationnel" title2="Transition & Transformation" />
    <Offre6 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader2 from "../../components/PageHeader1";
import Footer from "../../components/Footer";
import Offre6 from "../../components/offres/Offre6";


export default {
  components: {
    Footer,
    PageHeader2,
    NavOne,
    Offre6
  },
  head(){
    return {
      title: "Innov Consulting | Transition & Transformation"
    }
  }
}
</script>
