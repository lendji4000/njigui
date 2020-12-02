<template>
  <div>
    <NavOne />
    <PageHeader title="Offres" />
    <Offre5 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre5 from "../../components/offres/Offre5";


export default {
  components: {
    Footer,
    PageHeader,
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
