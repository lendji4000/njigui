<template>
  <div>
    <NavOne />
    <PageHeader title1="Gouvernance & Organisation" title2="Gouvernance & Shéma directeur" />
    <Offre7 />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../../components/NavOne";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";
import Offre7 from "../../components/offres/Offre7";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offre7
  },
  head(){
    return {
      title: "Innov Consulting | Gouvernance & Shéma directeur"
    }
  }
}
</script>
