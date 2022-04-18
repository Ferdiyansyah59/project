<template>
    <div class="font-[Poppins]">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue">
            <router-link to="/dashboard">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Profil</p>
        </div>
        <history-menu />
        <div class="p-10 mt-10">
            <div class="grid grid-cols-[30px_1fr] gap-2">
                <patrolin-icon icon="red-about" /> 
                <p class="text-xxs font-normal">Pemberitahuan jadwal patroli akan terlihat pada menu Timeline ini</p>
            </div>
            <h2 class="font-semibold text-sm mt-8">Hari ini</h2>
            <!-- Garis Balon -->
            <div class="grid grid-cols-[30px_1fr] gap-4 my-4">
                <patrolin-icon icon="history-icon" /> 
                <div>
                    <div class="rounded-md flex w-full h-8 bg-[#D03B3B] text-white relative segitiga">
                        <div class="pl-4 self-center">
                            <p class="text-[9px] ">Anda harus patroli ke 5 pukul 24.00</p>
                        </div>
                    </div>
                    <p class="text-[8px] font-normal mt-1">Hari ini, 23.00</p>
                </div>
            </div>
            <div class="grid grid-cols-[30px_1fr] gap-4 my-4">
                <patrolin-icon icon="history-icon" /> 
                <div>
                    <div class="rounded-md flex w-full h-8 bg-[#D03B3B] text-white relative segitiga">
                        <div class="pl-4 self-center">
                            <p class="text-[9px] ">Anda harus patroli ke 5 pukul 24.00</p>
                        </div>
                    </div>
                    <p class="text-[8px] font-normal mt-1">Hari ini, 23.00</p>
                </div>
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
    import HistoryMenu from '../../../../components/HistoryMenu.vue'
    import MenubarComponent from '../../../../components/MenubarComponent.vue'
    import SidebarComponent from '../../../../components/SidebarComponent.vue'
    export default {
        components: {
            HistoryMenu,
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