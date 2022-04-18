<template>
    <div class="font-[Poppins] min-h-full overflow-auto mb-36 z-0">
         <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue font-[Poppins]">
            <router-link to="/profile">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Ubah profil</p>
        </div>
        <div class="w-11/12 min-h-full m-auto p-5">
            <div class="mt-10 grid grid-rows-1 grid-cols-[100px_1fr]">
                <div>
                    <p class="text-center font-semibold">Foto Profil</p>
                    <img class="h-20 m-auto" :src="require('../../../../public/img/profile.webp')" alt="">
                    <button v-on:click="changePhotos" class="block m-auto text-sm  font-[Poppins]">Ganti</button>
                </div>
                <p class="text-xxs text-gray-700 self-center hp:text-xs sm:text-sm">Pasang foto sesuai dengan identitas anda untuk melengkapi profil</p>
            </div>
            <form action="" class="mt-10">
                <div class="grid">
                    <transition name="modalOpacity">
                        <modal-validation-component v-if="editValidation" @validation-ok="validationOk" :validationTitle="validationTitle" :validationMessage="validationMessage"/>
                    </transition>
                </div>
                <label class="text-sm text-gray-700" for="name">Nama Lengkap <span class="text-red-600">*</span></label>
                <input class="block text-sm font-medium mb-8 mt-3 border-b w-full outline-none border-gray-500" type="text" id="name">
                <label class="text-sm text-gray-700" for="number">Nomor HP <span class="text-red-600">*</span></label>
                <div class="grid grid-cols-[100px_1fr] mb-8 mt-3">
                    <button type="button" v-on:click="openCountryModal" class="border h-8 text-sm border-gray-500 rounded-full">
                        <img class="inline h-5" :src="require('../../../../public/img/indonesia.png')" alt="Indonesia"> 
                        +62
                    </button>
                    <input class="ml-1 border-b font-medium w-full outline-none border-gray-500" type="text" id="number">
                </div>
                <label class="text-sm text-gray-700" for="address">Alamat Email <span class="text-red-600">*</span></label>
                <input class="block w-full mt-3 font-medium border-b outline-none border-gray-500" type="email" id="address">
                <button v-on:click="editSubmit" class="buttonBlue float-right w-24 text-sm mt-5 rounded-full uppercase" type="button" >Simpan</button>
            </form>
        </div>
        <transition name="slide-up">
            <modalkode-negara  v-if="isCountry" @close-country="closeCountry" />
        </transition>
        <transition name="slide-up">
            <modal-profile-photos-component  v-if="photosOpen" @close-photos="closePhotos"/>
        </transition>
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
import ModalProfilePhotosComponent from '../../../components/modal/ModalProfilePhotosComponent.vue'
import MenubarComponent from '../../../components/MenubarComponent.vue'
import SidebarComponent from '../../../components/SidebarComponent.vue'
import ModalkodeNegara from '../../../components/modal/ModalkodeNegara.vue'
import ModalValidationComponent from '../../../components/modal/ModalValidationComponent.vue';
export default {
    components: {
        ModalProfilePhotosComponent,
        MenubarComponent,
        SidebarComponent,
        ModalkodeNegara,
        ModalValidationComponent
    },
    data(){
        return {
            photosOpen: '',
            openSide: '',
            isCountry: '',
            editValidation: '',
            validationTitle: 'Profil Berhasil Diperbaharui',
            validationMessage: 'Terima Kasih'
        }
    },
    methods: {
        changePhotos() {
            this.photosOpen = true;
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closePhotos(){
            this.photosOpen = '';
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
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
        openCountryModal(){
            this.isCountry = true;
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closeCountry(){
            this.isCountry = ''
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
        editSubmit(){
            this.editValidation = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        validationOk(){
            this.editValidation = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        }
        
    }
}
</script>