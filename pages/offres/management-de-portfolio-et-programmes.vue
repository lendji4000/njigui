<template>
  <div>
    <NavOne />
    <PageHeader title="Offres" />
    <Offre1 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre1 from "../../components/offres/Offre1";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre1
  },
  head(){
    return {
      title: "Innov Consulting | Offres"
    }
  }
}
</script>
