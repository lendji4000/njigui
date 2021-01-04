<template>
  <div>
    <NavOne />
    <PageHeader  title1=" Inov-Consulting " title2=" Nos valeurs" />
    <NosValeurs />
    <Footer/>
  </div>

</template>
<script>
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import NosValeurs from "../components/NosValeurs";


export default {
  components: {
    Footer,
    PageHeader,
    NavOne,
    NosValeurs
  },
  head(){
    return {
      title: "Inov Consulting | Nos Valeurs"
    }
  }
}
</script>
