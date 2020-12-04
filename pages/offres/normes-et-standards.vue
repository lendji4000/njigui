<template>
  <div>
    <NavOne />
    <PageHeader title1=" Gouvernance & Organisation" title2="Normes & standards" />
    <Offre9 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre9 from "../../components/offres/Offre9";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre9
  },
  head(){
    return {
      title: "Innov Consulting | Normes & standards"
    }
  }
}
</script>
