<template>
    <div class="font-[Poppins]">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue">
            <router-link to="/start">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Multimedia</p>
        </div>
        <div class="min-h-full grid">
            <div class=" min-w-full overflow-y-scroll negara mb-32">
                <div class="grid my-10 h-72 m-auto w-4/5 tab:h-40 sm:h-44  lg:h-56 bg-[#D7D7D7]">
                    <p class="self-center text-center text-xxs text-gray-600">Tidak ada file</p>
                    <!-- <img class="h-full w-full" :src="require('../../../public/img/wp.webp')" alt="gambar"> -->
                </div>
                <div class="grid grid-rows-1 grid-cols-2 gap-5 text-xxs text-white mb-10">
                    <div class="justify-self-end">
                        <div class="justify-self-star">
                            <button class="inline">
                                <patrolin-icon icon="btnCamera" />
                            </button>
                            <button class="inline mx-3">
                                <patrolin-icon icon="btnMic" />
                            </button>
                            <button>
                                <patrolin-icon icon="btnVideo" />
                            </button>
                        </div>
                    </div>
                    <div class="grid gap-2">
                         <button v-on:click="openParaf" type="button" class="bg-red-600 font-semibold w-36 h-10 rounded-sm tab:w-44 tab:h-12">
                            Tambahkan paraf
                        </button>
                        <button class="grid grid-cols-[45px_1fr] bg-[#01CD88] w-36 h-10 rounded-sm tab:w-44 tab:h-12">
                            <patrolin-icon  class="self-center ml-2" icon="scanCircle" />  
                            <div class="self-center">
                                <p class="text-left">Tetpkan</p>
                                <p class="text-left">pos pemeriksaan</p>
                            </div>
                        </button>
                       
                    </div>
                </div>
                <div class="grid">
                    <textarea class="text-[#929292] justify-self-center w-4/5 block bg-[#E9E9E9] rounded-sm p-2 outline-blue-400" placeholder="Maksmial 256 karakter" name="multimedia" id="multimedia" cols="30" rows="5"></textarea>
                    <button v-on:click="sendData" type="button" class="bg-[#3BA4D0] justify-self-center w-4/5 h-11 text-xs rounded-sm mt-2 text-white tab:w-[360px] shadow-md shadow-shadowButton"> Kirim</button>
                </div>
            </div>
            <transition name="slide-fade">
                <sidebar-component v-if="openSide" @is-close="isClose" />
            </transition>
            <transition name="modalOpacity">
                <paraf-component v-if="isParaf" @close-paraf="closeParaf" />
                <modal-validation-component v-if="isValidation" @validation-ok="validationOk" :validationTitle="validationTitle" :validationMessage="validationMessage"/>
            </transition>
            <menubar-component @is-open="isOpen"/>
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
import ModalValidationComponent from '../../../../components/modal/ModalValidationComponent.vue'
import ParafComponent from '../../../../components/modal/ParafComponent.vue'
export default {
    components: {
        MenubarComponent,
        SidebarComponent,
        ModalValidationComponent,
        ParafComponent
    },
    data(){
        return {
            openSide: '',
            isParaf: '',
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
        validationOk(){
            this.isValidation = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        },
        openParaf(){
            this.isParaf = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        },
        closeParaf(){
            this.isParaf = ''
            document.getElementById('bgg').classList.add("invisible")
            document.getElementById('bgg').classList.remove("visible")
            document.getElementById('bgg').classList.remove("gray")
        },
        sendData(){
            this.isValidation = true
            document.getElementById('bgg').classList.remove("invisible")
            document.getElementById('bgg').classList.add("visible")
            document.getElementById('bgg').classList.add("gray")
        }
    }
}
</script>