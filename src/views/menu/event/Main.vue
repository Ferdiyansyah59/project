<template>
    <div>
         <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue font-[Poppins]">
            <router-link to="/dashboard">
                <patrolin-icon class="ml-3 inline" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Event</p>
        </div>
        <div class="h-[75%] sm:h-4/5 w-full px-5 self-start  absolute  top-16 overflow-y-auto negara ">
        <!-- 1 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <div class="grid rounded-full self-center h-12 w-12 bg-buttonBlue">
                    <patrolin-icon class="self-center justify-self-center" icon="map-putih" /> 
                </div>
                <div class="min-w-full border-b pb-2 border-black">
                    <p class="inline text-sm text-green-500 font-semibold">Sent</p>
                    <p class="text-xxs">John Doe</p>
                    <p class="text-xxs">Selesai</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                    <router-link class="float-right -mt-12 text-[#3BA4D0] font-semibold" to="/event-detail">Lihat</router-link>
                </div>  
            </div>
            <!-- 2 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <div class="grid rounded-full self-center h-12 w-12 bg-red-200">
                    <patrolin-icon class="self-center h-6 justify-self-center" icon="insiden" /> 
                </div>
                <div class="min-w-full border-b pb-2 border-black">
                    <p class="inline text-sm text-green-500 font-semibold">Sent</p>
                    <p class="text-xxs">John Doe</p>
                    <p class="text-xxs">Insiden</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                    <router-link class="float-right -mt-12 text-[#3BA4D0] font-semibold" to="/event-detail">Lihat</router-link>
                </div>  
            </div>
            <!-- 3 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <div class="grid rounded-full self-center h-12 w-12 bg-green-400">
                    <patrolin-icon class="self-center h-6 justify-self-center" icon="scan" /> 
                </div>
                <div class="min-w-full border-b pb-2 border-black">
                    <p class="inline text-sm text-green-500 font-semibold">Sent</p>
                    <p class="text-xxs">John Doe</p>
                    <p class="text-xxs">Scan Patroli</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                    <router-link class="float-right -mt-12 text-[#3BA4D0] font-semibold" to="/event-detail">Lihat</router-link>
                </div>  
            </div>
            <!-- 4 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <div class="grid rounded-full self-center h-12 w-12 bg-orange-400">
                    <patrolin-icon class="self-center h-6 justify-self-center" icon="Camera" /> 
                </div>
                <div class="min-w-full border-b pb-2 border-black">
                    <p class="inline text-sm text-green-500 font-semibold">Sent</p>
                    <p class="text-xxs">John Doe</p>
                    <p class="text-xxs">Multimedia & Gambar</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                    <router-link class="float-right -mt-12 text-[#3BA4D0] font-semibold" to="/event-detail">Lihat</router-link>
                </div>  
            </div>
            <!-- 5 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <div class="grid rounded-full self-center h-12 w-12 bg-red-600">
                    <patrolin-icon class="self-center h-6 justify-self-center" icon="triangle-putih" /> 
                </div>
                <div class="min-w-full border-b pb-2 border-black">
                    <p class="inline text-sm text-green-500 font-semibold">Sent</p>
                    <p class="text-xxs">John Doe</p>
                    <p class="text-xxs">Panic/SOS</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                    <router-link class="float-right -mt-12 text-[#3BA4D0] font-semibold" to="/event-detail">Lihat</router-link>
                </div>  
            </div>
            <!-- 6 -->
            <div class="grid grid-cols-[70px_1fr] p-2">
                <div class="grid rounded-full self-center h-12 w-12 bg-buttonBlue">
                    <patrolin-icon class="self-center h-6 justify-self-center" icon="map-putih" /> 
                </div>
                <div class="min-w-full border-b pb-2 border-black">
                    <p class="inline text-sm text-green-500 font-semibold">Sent</p>
                    <p class="text-xxs">John Doe</p>
                    <p class="text-xxs">Mulai</p>
                    <p class="text-[9px] text-[#676767]">31-03-2022 Pukul 09.00</p>
                    <router-link  class="float-right -mt-12 text-[#3BA4D0] font-semibold" to="/event-detail">Lihat</router-link>
                </div>  
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
                // <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>

            }
        }
    }
}
</script>