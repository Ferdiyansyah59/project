<template>
    <div class="h-[75%] hp:h-[65%] w-full z-10 sm:h-1/2 rounded-t-3xl px-10 py-3 fixed bottom-0 bg-white font-[Poppins]">
        <div class="border-b-4 border-[#BEBEBE] w-40 m-auto"></div>
        <!-- Title -->
        <button class="mt-5 -ml-5" v-on:click="$emit('close-add')">
            <patrolin-icon  class="inline tab:h-11" icon="backGray" /> 
            <p class="inline text-xs tab:text-sm">Tambahkan Insiden</p>
        </button>
        <form>
            <p class="text-xxs tab:text-xs">Insiden yang dialami</p>
            <!-- Input -->
            <form class="grid rounded-md border h-7 m-auto tab:h-10 border-gray-400 bg-gray-100 my-2">
                <input class=" h-6 tab:h-8 tab:text-xs rounded-md text-gray-500 bg-white pl-2 self-center text-xxs outline-none mr-1" type="text" name="" id="" placeholder="Ketik insiden yang dialami">
            </form>
            <!-- Content -->
            <div class="grid grid-rows-1 grid-cols-[200px_100px] tab:grid-cols-[230px_100px] sm:grid-cols-[300px_100px] lg:grid-cols-[400px_100px]">
                <div class="grid h-36 w-44 tab:h-40 tab:w-52 sm:h-44 sm:w-72 lg:w-[380px] lg:h-56 bg-[#D7D7D7]">
                    <p class="self-center text-center text-xxs text-gray-600">Tidak ada file</p>
                    <!-- <img class="h-full w-full" :src="require('../../../public/img/wp.webp')" alt="gambar"> -->
                </div>
                <div class="justify-self-start">
                    <button class="block">
                        <patrolin-icon icon="btnCamera" />
                    </button>
                    <button class="block my-3">
                        <patrolin-icon icon="btnMic" />
                    </button>
                    <button>
                        <patrolin-icon icon="btnVideo" />
                    </button>
                </div>
            </div>
            <button v-on:click="openParaf" type="button" class="buttonBlue shadow-md block shadow-shadowButton bg-red-600 w-44 h-9 text-xs my-2">Tambah paraf</button>
            <button v-on:click="$emit('insiden-report')" type="button" class="buttonBlue shadow-md shadow-shadowButton bg-[#3BA4D0] w-full h-9 text-xs my-2 tab:w-[260px] sm:w-[350px]">Laporkan Insiden</button>
        </form>
        <transition name="modalOpacity">
            <paraf-component v-if="isParaf" @close-paraf="closeParaf" />
            <modal-validation-component v-if="editValidation" @validation-ok="validationOk" :validationTitle="validationTitle" :validationMessage="validationMessage"/>
        </transition>
    </div>
</template>

<style>
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
import ParafComponent from './ParafComponent.vue';
export default {
    components: {
        ParafComponent,
    },
    data(){
        return{
            isParaf: '',
            isValidation: '',
            validationTitle: 'Insiden Terkonfirmasi',
            validationMessage: 'Terima Kasih Sudah Melaporkan'
        }
    },
    methods: {
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
        
    }
}
</script>