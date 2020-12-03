<template>
  <div>
    <NavOne />
    <PageHeader title1=" Gouvernance & Organisation" title2="Fusions & Acquisitions" />
    <Offre10 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre10 from "../../components/offres/Offre10";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre10
  },
  head(){
    return {
      title: "Innov Consulting | Fusions & Acquisitions"
    }
  }
}
</script>
