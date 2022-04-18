<template>
    <div class="min-h-screen">
        <div class="fixed right-0 min-h-screen min-w-full z-10 gray" ></div>
        <div class="min-w-full p-2 bg-buttonBlue">
            <p class="inline ml-3 font-medium text-white">Scan</p>
        </div>
        <div class="grid min-w-full min-h-[80vh] place-items-center">
            <div class="py-5 z-10 w-[90%] md:w-1/2 font-[Poppins] mt-20  rounded-md grid place-items-center shadow-2xl shadow-gray-700 bg-white tab:w-[60%]">
                <button class="justify-self-start ml-5" v-on:click="$emit('close-photos')">
                    <router-link to="/start">
                        <patrolin-icon  class="inline" icon="backGray" /> 
                    </router-link>
                    <p class="inline -ml-2 text-[10px] tab:text-xs">Silahkan pilih opsi scan yang anda inginkan</p>
                </button>
                <router-link to="/scan-qr" class="grid grid-rows-1 grid-cols-[50px_1fr] bg-[#3BA4D0] shadow-md shadow-shadowButton gap-10 items-center buttonBlue h-16">
                    <div class="grid rounded-full border-2 justify-self-end border-white h-8 w-8">
                        <patrolin-icon class="self-center justify-self-center" icon="qr-code" /> 
                    </div>
                    <p class="justify-self-start text-sm">QR Code</p>
                </router-link>
                <router-link to="/scan-nfc" class="grid grid-rows-1 grid-cols-[50px_1fr] bg-[#3BA4D0] shadow-md shadow-shadowButton mt-5 gap-10 items-center buttonBlue h-16 ">
                    <div class="grid rounded-full border-2 justify-self-end border-white h-8 w-8">
                        <patrolin-icon class="self-center justify-self-center" icon="smallNfc" /> 
                    </div>
                    <p class="justify-self-start text-sm">QR Code</p>
                </router-link>
            </div>
        </div>
        <menubar-component/>
    </div>
</template>
<script>
import MenubarComponent from '../../../../components/MenubarComponent.vue'
export default {
    components: {
        MenubarComponent
    },
    data(){
        return {
        }
    },
    methods: {

    }
}
</script>