<template>
    <div class="font-[Poppins] overflow-scroll negara min-h-screen">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue">
            <router-link to="/start">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Insiden</p>
        </div>
        <div class="min-h-screen grid">
            <div id="content">
                <div class="grid grid-rows-1 grid-cols-[40px_1fr] rounded-md w-[90%] shadow-md shadow-shadowButton m-auto border h-10 border-gray-400 bg-white my-6">
                    <patrolin-icon class="justify-self-center self-center" icon="search" /> 
                    <input class=" h-8 rounded-full text-gray-500 bg-gray-100 pl-2 self-center text-xxs outline-none mr-1 tab:text-sm" type="text" name="" id="" placeholder="Search...">
                </div>
                <div class="w-[90%] m-auto">
                    <!-- Pencurian -->
                    <div class="grid grid-cols-[30px_1fr] p-2">
                        <input type="checkbox" name="">
                        <div class="min-w-full border-b pb-2 border-[#A7A7A7]">
                            <p class="text-xxs tab:text-sm font-semibold ">Pencurian</p>
                        </div>  
                    </div>
                    <!-- Kaca -->
                    <div class="grid grid-cols-[30px_1fr] p-2">
                        <input type="checkbox" name="">
                        <div class="min-w-full border-b pb-2 border-[#A7A7A7]">
                            <p class="text-xxs tab:text-sm font-semibold ">Pemecahan kaca</p>
                        </div>  
                    </div>
                    <!-- Pintu -->
                    <div class="grid grid-cols-[30px_1fr] p-2">
                        <input type="checkbox" name="">
                        <div class="min-w-full border-b pb-2 border-[#A7A7A7]">
                            <p class="text-xxs tab:text-sm font-semibold">Perusakan pintu</p>
                        </div>  
                    </div>
                    <!-- Gelud -->
                    <div class="grid grid-cols-[30px_1fr] p-2">
                        <input type="checkbox" name="">
                        <div class="min-w-full border-b pb-2 border-[#A7A7A7]">
                            <p class="text-xxs tab:text-sm font-semibold">Perkelahian</p>
                        </div>  
                    </div>
                    <!-- Kecelakaan -->
                    <div class="grid grid-cols-[30px_1fr] p-2">
                        <input type="checkbox" name="">
                        <div class="min-w-full border-b pb-2 border-[#A7A7A7]">
                            <p class="text-xxs tab:text-sm font-semibold">Kecelakaan</p>
                        </div>  
                    </div>
                    <!-- Hilang -->
                    <div class="grid grid-cols-[30px_1fr] p-2">
                        <input type="checkbox" name="">
                        <div class="min-w-full border-b pb-2 border-[#A7A7A7]">
                            <p class="text-xxs tab:text-sm font-semibold">Kehilangan barang</p>
                        </div>  
                    </div>
                    <!-- Email -->
                    <div class="grid grid-cols-[1fr_30px] p-2 w-[103%]">
                        <div class="min-w-full border-b pb-2 border-[#A7A7A7]">
                            <p class="text-xxs tab:text-sm font-semibold">Kirim juga laporan melalui email</p>
                        </div>  
                        <input type="checkbox" name="">
                    </div>
                </div>
                <div class="grid grid-rows-3 justify-center text-xxs text-white mb-32">
                    <button v-on:click="openAddModal" class="bg-red-600 w-28 h-6 self-end mb-2 rounded-sm tab:w-36 tab:h-10"><patrolin-icon  class="inline pb-1" icon="plus" />  Tambah Insiden</button>
                    <div class="grid grid-cols-2 gap-2">
                        <button class="grid grid-cols-[45px_1fr] bg-[#01CD88] w-36 h-10 rounded-sm tab:w-44 tab:h-12">
                            <patrolin-icon  class="self-center ml-2" icon="scanCircle" />  
                            <div class="self-center">
                                <p class="text-left">Tetpkan</p>
                                <p class="text-left">pos pemeriksaan</p>
                            </div>
                        </button>
                        <button class="grid grid-cols-[45px_1fr] bg-[#FF9430] w-36 h-10 rounded-sm tab:w-44 tab:h-12">
                            <patrolin-icon  class="self-center ml-2" icon="imageCircle" />  
                            <div class="self-center">
                                <p class="text-left">Unggah</p>
                                <p class="text-left">Bukti insiden</p>
                            </div>
                        </button>
                    </div>
                    <button type="button" v-on:click="insidenReport" class="bg-[#3BA4D0] w-[296px] h-11 text-xs rounded-sm mt-2 tab:w-[360px] shadow-md shadow-shadowButton"> Tambah Insiden</button>
                </div>
            </div>
            <transition name="slide-fade">
                <sidebar-component v-if="openSide" @is-close="isClose" />
            </transition>
            <menubar-component @is-open="isOpen"/>
            <transition name="slide-up">
                <insidenadd-component v-if="isAdd" @close-add="closeAdd" @insiden-report="insidenReport"/>
            </transition>
            <transition name="modalOpacity">
                <modal-validation-component v-if="isValidation" @validation-ok="validationOk" :validationTitle="validationTitle" :validationMessage="validationMessage"/>
            </transition>
        </div>
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
import MenubarComponent from '../../../../components/MenubarComponent.vue'
import SidebarComponent from '../../../../components/SidebarComponent.vue'
import InsidenaddComponent from '../../../../components/modal/InsidenaddComponent.vue'
import ModalValidationComponent from '../../../../components/modal/ModalValidationComponent.vue'
export default {
    components: {
        MenubarComponent,
        SidebarComponent,
        InsidenaddComponent,
        ModalValidationComponent
    },
    data(){
        return {
            openSide: '',
            isAdd: '',
            isValidation: '',
             validationTitle: 'Insiden Terkonfirmasi',
            validationMessage: 'Terima Kasih sudah melaporkan'
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
        openAddModal(){
            this.isAdd = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closeAdd(){
            this.isAdd = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        },
        insidenReport(){
            this.isAdd = ''
            this.isValidation = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        validationOk(){
            this.isValidation = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        }
    }
}
</script>