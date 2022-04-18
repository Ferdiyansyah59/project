<template>
    <div class="font-[Poppins] z-0">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue">
            <router-link to="/dashboard">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Profil</p>
        </div>
        <div class="w-4/5 h-52 bg-white m-auto mt-10 p-5 rounded-lg shadow-[0_0_10px_#C4C4C4] shadow-gray-300 mb-10">
            <router-link to="/edit-profile">
                <patrolin-icon  class="float-right" icon="edit" /> 
            </router-link>
            <div class="m-auto text-center mt-10">
                <img class="m-auto rounded-full w-16 h-16" :src="require('../../../../public/img/profile.webp')" alt="">
                <p>John Doe</p>
                <p>ID: 123456</p>
            </div>
        </div>
        <hr class="border-t-2 border-gray-300">
        <div class="p-10 mb-20 text-sm">
            <p class="font-semibold">Informasi akun</p>
            <div class="mt-3">
                <p class="text-gray-500 font-medium">Nama Lengkap</p>
                <p class="font-semibold mt-2">John Doe</p>
            </div>
            <div class="mt-3">
                <p class="text-gray-500 font-medium">Nomor HP</p>
                <p class="font-semibold mt-2">081298083728</p>
            </div>
            <div class="mt-3">
                <p class="text-gray-500 font-medium">Alamat Email</p>
                <p class="font-semibold mt-2">Johndoe12@gmail.com</p>
            </div>
        </div>
        <menubar-component class="font-[Inter]" @is-open="isOpen" />
        <transition name="slide-fade">
            <sidebar-component v-if="openSide" @is-close="isClose" />
        </transition>
    </div>
</template>

<style scoped>
    .slide-fade-enter-active {
        transform: translateX(0);
        transition: ease .5s;
    }
    .slide-fade-leave-active {
        transition: ease .5s;
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        /* transform: translateX(10px); */
        transform: translateX(-100%)
    }
</style>

<script>
import MenubarComponent from '../../../components/MenubarComponent.vue'
import SidebarComponent from '../../../components/SidebarComponent.vue'
export default {
    components: {
        MenubarComponent,
        SidebarComponent
    },
    data: function() {
        return{
           openSide: ''
        }
    },
    methods: {
        isOpen(){
            this.openSide = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
            
        },
        isClose(){
            this.openSide = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        },
        closeModal(){
           if (this.openSide == true){
                this.openSide = ''
                document.getElementById('bgg').classList.add("invisible")
                document.getElementById('bgg').classList.remove("visible")
                document.getElementById('bgg').classList.remove("gray")
            }
        },
    }
}
</script>