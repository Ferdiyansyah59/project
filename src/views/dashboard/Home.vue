<template>
    <div class="min-h-screen grid grid-rows-[50px_1fr_0.5fr] font-[Roboto]">
        <div class="justify-self-end text-center h-9 w-28 bg-gray-50 mr-2 mt-2 p-2 rounded-3xl border-solid border border-gray-700 text-xs">
            ENG/IDN
        </div>
        <img class="justify-self-center self-center h-52 hp:h-72 sm:h-96 "  :src="require('../../../public/img/logo.webp')" alt="Logo">
        <div class="min-w-full h-28 pl-2 absolute bottom-10 md:h-56">
            <p class="font-semibold text-center text-sm hp:text-[16px] sm:text-lg">Hallo, Sudah siap menggunakan Patrolin?</p>
            <p class="text-center text-xs sm:text-sm">Silahkan masuk untuk mulai menjaga keamanan!</p>
            <div class="grid place-items-center mt-2">
                <router-link class="buttonBlue" to="/login">Masuk</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    mounted(){
    },
    data() {
        return{
            asy: 'user'
        }
    }
}
</script>