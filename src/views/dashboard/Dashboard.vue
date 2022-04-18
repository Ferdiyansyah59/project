<template>
    <div  class="z-0">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div  class="min-h-screen grid grid-rows-[50px_1fr_0.3fr]">
            <div class="min-w-full h-10 p-2 top-0 ">
                <div class="grid grid-rows-1 grid-cols-[70px_1fr_50px] sm:p-5">
                    <div class="">
                        <router-link to="/profile" class="grid h-10 w-10 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300">
                            <img :src="require('../../../public/img/profile.webp')" alt="">
                        </router-link>
                    </div>
                    <p class="sm:ml-2 inline self-center sm:text-xl font-[Poppins]">selamat datang</p>
                    <patrolin-icon class="h-5 self-center justify-self-center sm:h-10" icon="notifSolid" />
                </div>
            </div>
            
            <div class="grid self-center min-w-full">
                <img class="max-h-72 m-auto relative z-1 " :src="require('../../../public/img/iconmenustart.webp')" alt="">
                
                <p class="text-center font-semibold">Tidak ada aktifitas</p>
                <p class="text-center text-gray-400">Silahkan tap icon scan untuk mulai <br> melaporkan tugas keamananmu</p>
                <div class="grid justify-self-end absolute bottom-[65px] hp:bottom-[90px] sm:bottom-24  mr-5 ">
                    <button v-on:click="openProgressModal" class="grid rounded-full w-12 h-12 bg-red-600">
                        <patrolin-icon class="justify-self-center self-center h-7 mt-1" icon="danger" />
                    </button>
                    <p class="text-center font-medium">SOS</p>
                </div>
            </div>
            
            <menubar-component @is-open="isOpen" @modal-location="modalLocation" />
            <transition name="slide-up">
                <location-modal v-if="openModalLocation" @modal-gps="modalGps" /> 
            </transition>
            <modalgps-component v-if="openGps" @close-modal-gps="closeModalGps" />
            <transition name="slide-fade">
                <sidebar-component v-if="openSide" @is-close="isClose" />
            </transition>
            <transition name="modalOpacity">
                <modalprogress-component v-if="openProgress" @close-progress="closeProgress" />
            </transition>

        </div>
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

    .modalOpacity-enter-active {
        /* transform: translateY(-0); */
        transition: opacity .5s;
    }
    .modalOpacity-leave-active {
        transition: opacity .5s;
    }
    .modalOpacity-enter, .modalOpacity-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        /* transform: translateX(10px); */
        opacity: 0;
    }
    .slide-up-enter-active {
        transform: translateY(-0);
        transition: ease .5s;
    }
    .slide-up-enter, .slide-up-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(100%);
        transition: ease .5s;
        /* opacity: 0; */
    }
</style>

<script>
import MenubarComponent from '../../components/MenubarComponent.vue'
import LocationModal from '../../components/modal/LocationModal.vue'
import ModalgpsComponent from '../../components/modal/ModalgpsComponent.vue'
import SidebarComponent from '../../components/SidebarComponent.vue'
import ModalprogressComponent from '../../components/modal/ModalprogressComponent.vue'
export default {
    components: {
        MenubarComponent,
        LocationModal,
        ModalgpsComponent,
        SidebarComponent,
        ModalprogressComponent
    },
    data(){
        return{
            openSide: '',
            openModalLocation: '',
            openGps: '',
            openProgress: ''
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
        modalLocation(){
            this.openModalLocation = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closeModal(){
            if (this.openModalLocation == true){
                this.openModalLocation = ''
                document.getElementById('bgg').classList.add("invisible")
                document.getElementById('bgg').classList.remove("visible")
                document.getElementById('bgg').classList.remove("gray")
            }else if (this.openSide == true){
                this.openSide = ''
                document.getElementById('bgg').classList.add("invisible")
                document.getElementById('bgg').classList.remove("visible")
                document.getElementById('bgg').classList.remove("gray")
            }
        },
        modalGps(){
            this.openGps = true
            this.openModalLocation = false
        },
        closeModalGps(){
            this.openGps = false 
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        },
        openProgressModal(){
            this.openProgress = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closeProgress(){
            this.openProgress = '',
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        }
    }
}
</script>