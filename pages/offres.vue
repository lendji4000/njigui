<template>
  <div>
    <NavOne />
    <PageHeader title="Offres" />
    <Offres />
    <Footer />
  </div>

</template>
<script>
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Offres from "../components/Offres";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    Offres
  },
  head(){
    return {
      title: "Innov Consulting | Offres"
    }
  }
}
</script>
