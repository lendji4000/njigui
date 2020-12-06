<template>
  <div>
    <NavOne />
    <PageHeader2 title1=" Gouvernance & Organisation" title2="Normes & standards" />
    <Offre9 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader2 from "../../components/PageHeader2";
import Footer from "../../components/Footer";
import Offre9 from "../../components/offres/Offre9";


export default {
  components: {
    Footer,
    PageHeader2,
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
