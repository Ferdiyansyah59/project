<template>
    <div class="h-full">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue font-[Poppins] z-50">
            <router-link to="/event">
                <patrolin-icon class="ml-3 inline" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Event</p>
        </div>
        <img class="w-full max-h-64 absolute top-10 z-0" :src="require('../../../../public/img/event-map.png')" alt="Event Map">
         <div id="slideUp" class="overflow-scroll negara  p-2 bg-white h-fit transition translate-y-0 z-10 " >

            <!-- 1 -->
            <div class="grid grid-cols-[70px_1fr]">
                <patrolin-icon class="self-center justify-self-center" icon="mulai" /> 
                <div class="min-w-full border-b pb-2 border-gray-500">
                    <p class="text-xxs">Attention: Mulai</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                </div>  
            </div>
            <!-- 2 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <patrolin-icon class="self-center justify-self-center" icon="Map_Pin" /> 
                <div class="min-w-full border-b pb-2 border-gray-500">
                    <p class="text-xxs">Posisi</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                </div>  
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <patrolin-icon class="self-center justify-self-center" icon="maps" /> 
                <div class="min-w-full border-b pb-2 border-gray-500">
                    <p class="text-xxs">Akurasi</p>
                    <p class="text-[9px] text-[#676767]">20</p>
                </div>  
            </div>
            <!-- 4 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <patrolin-icon class="self-center justify-self-center" icon="Compass" /> 
                <div class="min-w-full border-b pb-2 border-gray-500">
                    <p class="text-xxs">Lat./Lon.</p>
                    <p class="text-[9px] text-[#676767]">-6.431622 / 106.717816</p>
                </div>  
            </div>
            <!-- 5 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <patrolin-icon class="self-center justify-self-center" icon="security" /> 
                <div class="min-w-full border-b pb-2 border-gray-500">
                    <p class="text-xxs">Security</p>
                    <p class="text-[9px] text-[#676767]">John Doe</p>
                </div>  
            </div>
         </div>
         
            <div class="grid">
                <button v-on:click="openMap" type="button" class="buttonBlue shadow-xl fixed bottom-20 hp:bottom-28 shadow-shadowButton bg-buttonBlue justify-self-center w-60 h-10 hp:h-12 ">{{ buttonMsg }}</button>
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
            openSide: '',
            isOpenMap: '',
            buttonMsg: 'Tampilkan lokasi saat ini',
        }
    },
    methods: {
        openMap(){
            if (this.isOpenMap == ''){
                this.isOpenMap = true
                document.getElementById('slideUp').style = "transform: translateY(8rem); transition: ease .5s;"
                document.getElementById('slideUp').classList.add('hp:transition-hp')
                this.buttonMsg = 'Sembunyikan lokasi saat ini'
            }else if(this.isOpenMap == true){
                this.isOpenMap = ''
                document.getElementById('slideUp').style = "transform: translateY(0); transition: ease .5s;"
                this.buttonMsg = 'Tampilkan lokasi saat ini'
            }
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
