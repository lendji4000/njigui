<template>
  <div>
    <NavOne />
    <PageHeader title1="  Management Opérationnel" title2="Lean Management"/>
    <Offre12 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre12 from "../../components/offres/Offre12";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre12
  },
  head(){
    return {
      title: "Innov Consulting | Learn Management"
    }
  }
}
</script>
