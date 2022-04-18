<template>
    <div class="h-screen bg-[url('../img/maps.webp')] bg-cover font-[Poppins]">
    <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
    <div class="m-auto h-screen w-4/5 pt-5">
    <!-- Search -->
        <div class="grid grid-rows-1 grid-cols-[40px_1fr] rounded-md border shadow-lg h-[6%] border-gray-400 bg-gray-100">
            <patrolin-icon class="justify-self-center self-center h-[70%]" icon="location" /> 
            <input class=" h-[90%] rounded-full bg-gray-100 pl-2 self-center text-xxs outline-none mr-1 tab:text-sm" type="text" name="" id="" placeholder="Dimana lokasimu?">
        </div>
        <div class="rounded-full grid bg-white w-12 h-12 lg:w-16 lg:h-16 mt-3">
            <patrolin-icon class="justify-self-center lg:w-9 lg:h-9 self-center" icon="locCrossSolid" /> 
        </div>
        <div class="rounded-full grid bg-white w-8 h-8 lg:w-12 lg:h-12 ml-2 mt-3">
            <patrolin-icon class="justify-self-center h-4 lg:w-6 lg:h-6 self-center" icon="notifSolid" /> 
        </div>
    </div>
    <div class="bg-white rounded-gede pb-5 absolute h-fit bottom-14 hp:bottom-20 w-full">
        <div class="grid grid-cols-[1fr_100px] pl-5 mb-4">
            <p class="self-center text-sm tab:text-lg  font-medium text-gray-500 lg:text-xl">Silahkan pilih opsi ini untuk melaporkan tugasmu</p>
            <div v-on:click="openProgressModal" class="justify-self-end mr-2">
                <div class="rounded-full grid bg-red-600 w-11 h-11 mt-3 lg:w-16 lg:h-16">
                    <patrolin-icon class="self-center justify-self-center mt-1 lg:w-12 lg:h-12" icon="danger" /> 
                </div>
                <p class="text-center lg:text-xl">SOS</p>
            </div>
        </div>
        <!-- Start Menu -->
        <div class="grid grid-rows-2 gap-3 h-full">
            <div class="grid grid-cols-2">
                <!-- Merah -->
                <router-link to="/insiden" class="bg-red-600 w-32 h-20 hp:w-44 hp:h-24 tab:w-4/5 tab:h-36 lg:w-4/5 lg:h-48 relative justify-self-center self-center rounded-xl">
                    <div class="grid ml-2 mt-2 h-8 w-8 tab:h-16 tab:w-16 lg:h-20 lg:w-20 bg-red-200 rounded-full absolute">
                        <patrolin-icon class="self-center justify-self-center tab:h-6" icon="insiden" /> 
                    </div>
                    <div class="absolute bottom-3 ml-2 text-white">
                        <p class="text-xs tab:text-base sm:text-lg lg:text-2xl">Insiden</p>
                        <p class="text-[5px] tab:text-[10px] sm:text-[11px] lg:text-sm">Laporkan pencurian, kecelakaan, dan lainnya</p>
                    </div>
                    <div class="grid justify-items-end overflow-hidden">
                        <div class="rounded-full h-12 w-12 tab:h-16 tab:w-16 lg:h-20 lg:w-20 bg-circle39 -mt-1 -mr-1 "></div>
                        <div class="rounded-full h-12 w-12 tab:h-16 tab:w-16 lg:h-20 lg:w-20 bg-circle15 -mt-5"></div>
                    </div>
                </router-link>
                <!-- Ijo -->
                <router-link to="/scan" class="bg-green-400 w-32 h-20 hp:w-44 hp:h-24 tab:w-4/5 tab:h-36 lg:w-4/5 lg:h-48 relative justify-self-center self-center rounded-xl">
                     <div class="grid ml-2 mt-2 h-8 w-8 tab:h-16 tab:w-16 lg:h-20 lg:w-20 border-2 border-white rounded-full absolute">
                        <patrolin-icon class="self-center justify-self-center tab:h-6" icon="scan" /> 
                    </div>
                    <div class="absolute bottom-3 ml-2 text-white">
                        <p class="text-xs tab:text-base sm:text-lg lg:text-2xl">Scan</p>
                        <p class="text-[5px] tab:text-[10px] sm:text-[11px] lg:text-sm">Laporkan patrolimu dengan scan NFC/barcode</p>
                    </div>
                    <div class="grid justify-items-end overflow-hidden">
                        <div class="rounded-full h-11 w-11 tab:h-12 tab:w-12 lg:h-16 lg:w-16 bg-circle10 -mt-5 mr-4 "></div>
                        <div class="rounded-full h-12 w-12 tab:h-16 tab:w-16 lg:h-20 lg:w-20 bg-circle20 -mt-6 -mr-1"></div>
                        <div class="rounded-full h-11 w-11 tab:h-12 tab:w-12 lg:h-16 lg:w-16 bg-circle30 -mt-5 -mr-2"></div>
                    </div>
                </router-link>
            </div>
            <!-- Kuning -->
            <div class="grid grid-cols-2">
                <router-link to="/multimedia" class="bg-yellow-500 w-32 h-20 hp:w-44 hp:h-24 tab:w-4/5 tab:h-36 lg:w-4/5 lg:h-48 relative justify-self-center self-center rounded-xl">
                    <div class="grid ml-2 mt-2 h-8 w-8 tab:h-16 tab:w-16 lg:h-20 lg:w-20 border-2 border-white rounded-full absolute">
                        <patrolin-icon class="self-center justify-self-center tab:h-6" icon="image" /> 
                    </div>
                    <div class="absolute bottom-3 ml-2 text-white">
                        <p class="text-xs tab:text-base sm:text-lg lg:text-2xl">Multimedia</p>
                        <p class="text-[5px] tab:text-[10px] sm:text-[11px] lg:text-sm">Unggah foto untuk melaporkan tugasmu</p>
                    </div>
                    <div class="grid justify-items-end overflow-hidden">
                        <div class="rounded-full h-12 w-12 tab:h-16 tab:w-16 lg:h-20 lg:w-20 bg-circle10 -mt-1 -mr-1 "></div>
                        <div class="rounded-full h-10 w-10 tab:h-12 tab:w-12 lg:h-16 lg:w-16 bg-circle30 -mt-5 -mr-4"></div>
                    </div>
                </router-link>
                <!-- Biru -->
                <router-link to="/history-menu" class="bg-blue-700 w-32 h-20 hp:w-44 hp:h-24 tab:w-4/5 tab:h-36 lg:w-4/5 lg:h-48 relative justify-self-center self-center rounded-xl">
                    <div class="grid ml-2 mt-2 h-8 w-8 tab:h-16 tab:w-16 lg:h-20 lg:w-20 border-2 border-white rounded-full absolute">
                        <patrolin-icon class="self-center justify-self-center tab:h-6" icon="Alarm" /> 
                    </div>
                    <div class="absolute bottom-3 ml-2 text-white">
                        <p class="text-xs tab:text-base sm:text-lg lg:text-2xl">History</p>
                        <p class="text-[5px] tab:text-[10px] sm:text-[11px] lg:text-sm">Riwayat pekerjaan anda</p>
                    </div>
                    <div class="grid justify-items-end overflow-hidden">
                        <div class="rounded-full h-12 w-12 tab:h-16 tab:w-16 lg:h-20 lg:w-20 bg-circle30 -mt-1 -mr-1"></div>
                        <div class="rounded-full h-12 w-12 tab:h-16 tab:w-16 lg:h-20 lg:w-20 bg-circle10 -mt-5 mr-2"></div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
    <div class="grid mt-36">
        <transition name="modalOpacity">
            <modalprogress-component v-if="openProgress" @close-progress="closeProgress" />
        </transition>
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
</style>

<script>
import MenubarComponent from '../../components/MenubarComponent.vue'
import SidebarComponent from '../../components/SidebarComponent.vue'
import ModalprogressComponent from '../../components/modal/ModalprogressComponent.vue'
export default {
    components: {
        MenubarComponent,
        SidebarComponent,
        ModalprogressComponent
    },
    data(){
        return {
            openSide: '',
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
        closeModal(){
            if (this.openSide == true){
                this.openSide = ''
                document.getElementById('bgg').classList.add("invisible")
                document.getElementById('bgg').classList.remove("visible")
                document.getElementById('bgg').classList.remove("gray")
            }
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