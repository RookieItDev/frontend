<template>
 <Navbar></Navbar>
    <main>
        <router-view></router-view>
    </main>
   <Footer></Footer>
</template>
<script>
import Navbar from '@/components/frontend/Nav.vue'
import Footer from '@/components/frontend/Foot.vue'
export default {
    name: 'FrontendLayout',
    components:{
        Navbar,
        Footer
    }
}
</script>