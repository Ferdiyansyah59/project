<template>
    <div class="h-1/2 z-10 sm:h-2/6 rounded-t-3xl min-w-full absolute bottom-0 bg-white">
        <img class="h-24 hp:h-36 mt-5 mb-2 m-auto lg:h-48" :src="require('../../../public/img/loc.webp')" alt="">
        <p class="text-center text-sm hp:text-lg lg:text-xl font-semibold">Dimana lokasi anda?</p>
        <p class="text-center text-xxs hp:text-xs font-[Poppins] text-gray-500 lg:text-lg">Atur lokasi sehingga kami dapat mulai mengamankan <br> perangkat Anda pada waktu yang tepat</p>
        <div class="grid ">
            <button v-on:click="$emit('modal-gps')" class="buttonBlue absolute bottom-5 hp:bottom-10 justify-self-center pt-1 sm:pt-3 sm:pb-8">Atur Lokasi</button>
        </div>
    </div>
</template>