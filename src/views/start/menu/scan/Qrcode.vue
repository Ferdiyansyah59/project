<template>
    <div class="font-[poppins]">
        <div class="fixed right-0 invisible min-h-screen min-w-full z-10" v-on:click="closeModal" id="bgg"></div>
        <div class="min-w-full p-2 bg-buttonBlue">
            <router-link to="/scan">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">QR Code</p>
        </div>
        <div class="grid place-items-center min-h-[90vh] min-w-full">
            <div class="grid">
                <p class="justify-self-center text-[#3BA4D0] font-bold text-lg mb-3">Ready to scan</p>
                <div class="w-4/5 justify-self-center">
                    <qrcode-stream :key="_uid" :track="this.paintBoundingBox"  />
                </div>
                <div class="grid h-14 w-14 bg-[#EEEEEE] rounded-full justify-self-center">
                    <div id="innerButton" class="grid self-center m-auto bg-buttonBlue rounded-full h-12 w-12">
                        <patrolin-icon class="h-6 self-center m-auto" icon="qr-code" /> 
                    </div>
                </div>
            </div>
        </div>
        <p>{{ value }}</p>
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
</style>

<script>
import MenubarComponent from '../../../../components/MenubarComponent.vue'
import SidebarComponent from '../../../../components/SidebarComponent.vue'
export default {
    components: {
        MenubarComponent,
        SidebarComponent
    },
    data(){
        return {
            value: null,
            openSide: '',
        }
    },
    methods: {
        paintBoundingBox (detectedCodes, ctx) {
            for (const detectedCode of detectedCodes) {
                const { boundingBox: { x, y, width, height }, rawValue } = detectedCode
                this.value = rawValue

                ctx.lineWidth = 2
                ctx.strokeStyle = '#007bff'
                ctx.strokeRect(x, y, width, height)
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
        },
    
    }
}
</script>