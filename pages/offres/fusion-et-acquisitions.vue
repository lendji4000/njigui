<template>
  <div>
    <NavOne />
    <PageHeader2 title1=" Gouvernance & Organisation" title2="Fusions & Acquisitions" />
    <Offre10 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader2 from "../../components/PageHeader2";
import Footer from "../../components/Footer";
import Offre10 from "../../components/offres/Offre10";


export default {
  components: {
    Footer,
    PageHeader2,
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
