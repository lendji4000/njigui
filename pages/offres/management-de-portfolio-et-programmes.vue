<template>
  <div>
    <NavOne />
    <PageHeader1  title1="  Management Opérationnel" title2="Management des Portfolio" />
    <Offre1 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader1 from "../../components/PageHeader1";
import Footer from "../../components/Footer";
import Offre1 from "../../components/offres/Offre1";


export default {
  components: {
    Footer,
    PageHeader1,
    NavOne,
    Offre1
  },
  head(){
    return {
      title: "Innov Consulting | Management de Portfolio & Programmes"
    }
  }
}
</script>
