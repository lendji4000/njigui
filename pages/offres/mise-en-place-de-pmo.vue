<template>
  <div>
    <NavOne />
    <PageHeader title="Offres" />
    <Offre3 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre3 from "../../components/offres/Offre3";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre3
  },
  head(){
    return {
      title: "Innov Consulting | Mise en place de PMO"
    }
  }
}
</script>
