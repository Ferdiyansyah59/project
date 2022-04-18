<template>
    <div class="font-[poppins]">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue">
            <router-link to="/scan">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">NFC</p>
        </div>
        <div class="grid place-items-center min-h-[90vh] min-w-full">
            <div class="grid">
                <p class="justify-self-center text-[#3BA4D0] font-bold text-lg mb-3">Scan QR Code</p>
                <div class="w-4/5 justify-self-center mt-20">
                    <patrolin-icon class="m-auto" icon="nfc" />
                </div>
                <p class="text-xs text-center my-10 opacity-60">Silahkan laporkan patrolimu dengan <br> menggunakan fitur NFC</p>
                <div class="grid h-14 w-14 bg-[#EEEEEE] rounded-full justify-self-center"> 
                    <div id="innerButton" class="grid self-center m-auto bg-buttonBlue rounded-full h-12 w-12">
                        <patrolin-icon class="h-6 self-center m-auto" icon="smallNfc" /> 
                    </div>
                </div>
            </div>
        </div>
       <menubar-component @is-open="isOpen" />
        <transition name="slide-fade">
            <sidebar-component v-if="openSide" @is-close="isClose" />
        </transition>
    </div>
</template>
<style>
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
import MenubarComponent from '../../../../components/MenubarComponent.vue'
import SidebarComponent from '../../../../components/SidebarComponent.vue'
export default {
    components: {
        MenubarComponent,
        SidebarComponent
    },
    data(){
        return {
            openSide: '',
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