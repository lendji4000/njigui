<template>
  <div>
    <NavOne />
    <PageHeader1  title1="  Management Opérationnel" title2="LEAN Management" />
    <Offre12 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader1 from "../../components/PageHeader1";
import Footer from "../../components/Footer";
import Offre12 from "../../components/offres/Offre12";


export default {
  components: {
    Footer,
    PageHeader1,
    NavOne,
    Offre12
  },
  head(){
    return {
      title: "INOV Consulting | LEAN Management"
    }
  }
}
</script>
