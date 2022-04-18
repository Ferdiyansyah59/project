<template>
    <div class="min-h-screen z-0">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue font-[Poppins]">
            <router-link to="/dashboard">
                <patrolin-icon  class="inline ml-3" icon="btnBack" />
            </router-link>
            <p class="inline ml-3 font-medium text-white">Pengaturan</p>
        </div>
        <div class="grid grid-cols-[50px_1fr] p-2">
            <patrolin-icon  class="ml-3 self-center" icon="bahasa" /> 
            <div class="min-w-full border-b border-black">
                <p class="inline text-sm font-medium">Bahasa</p>
                <button class="float-right" v-on:click="openBahasa">Indonesia</button>
            </div>  
        </div>
        <div class="grid grid-cols-[50px_1fr] p-2">
            <patrolin-icon  class="ml-3 self-center" icon="maps" /> 
            <div class="min-w-full border-b border-black">
                <p class="inline text-sm font-medium">Aktifkan maps</p>
                <input class="float-right" type="checkbox">
            </div>  
        </div>
        <div class="grid grid-cols-[50px_1fr] p-2">
            <patrolin-icon  class="ml-3 self-center" icon="notifRegular" />  
            <div class="min-w-full border-b border-black">
                <p class="inline text-sm font-medium">Aktifkan notifikasi</p>
                <input class="float-right" type="checkbox">
            </div>  
        </div>
        <div class="grid grid-cols-[50px_1fr] p-2">
            <patrolin-icon  class="ml-3" icon="about" /> 
            <div class="min-w-full border-b pb-2 border-black">
                <p class="block text-sm font-medium">Pengaturan darurat</p>
                <p class="text-gray-500 text-xxs">Tambahkan nomor darurat 1: <span>Tidak ada nomor</span></p>
                <p class="text-gray-500 text-xxs">Tambahkan nomor darurat 2: <span>Tidak ada nomor</span></p>
                <p class="text-gray-500 text-xxs">Tambahkan nomor darurat 3: <span>Tidak ada nomor</span></p>
                <button v-on:click="openNumber" class="buttonBlue text-xxs rounded-sm p-1 w-44">Tambahkan nomor darurat</button>
            </div>  
        </div>
        <div class="grid">
            <transition name="modal-setting">
                <modaldarurat-component v-if="openNumberModal" @close-number="closeNumber" />
            </transition>
            <transition name="modal-setting">
                <modalbahasa-component v-if="openBahasaM" @close-bahasa="closeBahasa" />
            </transition>
        </div>
        <menubar-component @is-open="isOpen" />
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
    .slide-fade-enter, .slide-fade-leave-to{
        transform: translateX(-100%);
    }
    .modal-setting-enter-active {
        transition: opacity .5s;
    }
    .modal-setting-leave-active {
        transition: opacity .5s;
    }
    .modal-setting-enter, .modal-setting-leave-to{
        opacity: 0;
    }
</style>
<script>
import ModaldaruratComponent from '../../components/modal/ModaldaruratComponent.vue'
import ModalbahasaComponent from '../../components/modal/ModalbahasaComponent.vue'
import MenubarComponent from '../../components/MenubarComponent.vue'
import SidebarComponent from '../../components/SidebarComponent.vue'
export default {
    components: {
        ModaldaruratComponent,
        ModalbahasaComponent,
        MenubarComponent,
        SidebarComponent
    },
    data(){
        return{
            openSide: '',
            openBahasaM: '',
            openNumberModal: ''
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
        openBahasa(){
            this.openBahasaM = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closeBahasa(){
            this.openBahasaM = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        },
        openNumber(){
            this.openNumberModal = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closeNumber(){
            this.openNumberModal = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        },
        closeModal(){
            if(this.openSide == true){
                this.openSide = ''
                document.getElementById('bgg').classList.add("invisible")
                document.getElementById('bgg').classList.remove("visible")
                document.getElementById('bgg').classList.remove("gray")
            }
        },
    }
}
</script>,
        