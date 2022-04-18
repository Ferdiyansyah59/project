<template>
    <div class="font-[Poppins]">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue font-[Poppins]">
            <router-link to="/start">
                <patrolin-icon class="ml-3 inline" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">PTT (Push To Talk)</p>
        </div>
        <!-- Content -->
        <div class="grid grid-rows-[50px_65vh] hp:grid-rows-[50px_70vh] sm:grid-rows-[50px_75vh] min-h-full">
            <patrolin-icon class="justify-self-end pt-5 pr-8" icon="notifSolid" /> 
            <div class="grid justify-self-center self-end">
                <!-- Mic -->
                <div @touchstart="push" @touchend="takeoff" class="grid h-32 w-32 bg-[#EEEEEE] rounded-full justify-self-center">
                    <div id="innerButton" class="grid self-center m-auto bg-buttonBlue rounded-full h-28 w-28">
                        <patrolin-icon class="h-20 self-center m-auto" icon="mic-gede" /> 
                    </div>
                </div>
                <!-- SOS -->
                <div class="justify-self-end -mt-5">
                    <div class="h-9 w-9 rounded-full flex bg-red-500">
                        <patrolin-icon class="self-center m-auto mt-2" icon="danger" /> 
                    </div>
                    <p class="text-xxs text-center">SOS</p>
                </div>
                <p class="text-xs text-center mt-5 font-semibold">Tekan dan tahan untuk berbicara</p>
                <p class="text-xxs text-center">Pesan suara anda dapat didengar oleh rekan-rekan anda</p>
            </div>
        </div>
        <transition name="slide-fade">
            <sidebar-component v-if="openSide" @is-close="isClose" />
        </transition>
        <menubar-component @is-open="isOpen"/>
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
import MenubarComponent from '../../../components/MenubarComponent.vue'
import SidebarComponent from '../../../components/SidebarComponent.vue'
export default {
    components: {
        MenubarComponent,
        SidebarComponent
    },
    data(){
        return {
            openSide: ''
        }
    },
    methods: {
        push(){
            let innerButton = document.getElementById('innerButton');
            innerButton.style = "width: 128px; height: 128px;"
        },
        takeoff(){
            let innerButton = document.getElementById('innerButton');
            innerButton.style = "width: 112px; height: 112px;"
        },
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
        }
    }
}
</script>