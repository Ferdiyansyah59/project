<template>
    <div class="grid p-2 w-4/5 z-10 md:w-1/2 absolute rounded-md justify-self-center self-center shadow-sm shadow-gray-700 bg-white"   >
        <div>
            <p class="text-xs sm:text-lg text-gray-800">Untuk keamanan yang lebih baik, aktifkan lokasi perangkat, yang menggunakan layanan lokasi Google</p>
            <p class="text-xxs sm:text-sm text-gray-600 mt-1">Perangkat Anda harus:</p>
            <p class="text-xxs sm:text-sm py-2 pl-1 text-gray-600">
                <patrolin-icon  class="h-[14px] justify-self-end" icon="locCrossSolid" />Gunakan GPS, Wi-Fi, Jaringan Seluler dan sensor 
            </p>
            <p class="text-xxs pl-6 text-gray-600 sm:text-sm">Menggunakan layanan lokasi Google; sebagai bagian dari layanan ini, Google dapat mengumpulkan data lokasi secara berkala dan menggunakan data ini secara anonim untuk meningkatkan akurasi lokasi dan layanan berbasis lokasi.</p>
            <p class="text-xxs mt-1 ml-2 text-gray-600 sm:text-sm">Untuk detailnya, buka pengaturan lokasi.</p>
            <div class="float-right text-orange-500 font-medium p-3">
                <button  v-on:click="$emit('close-modal-gps')" class="inline text-xxs sm:text-sm" >No Thanks</button>
                <router-link to="/start" v-on:click="getLocation" class="inline ml-4 text-xxs sm:text-sm">OK</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        // getLocation(){
        //     if(navigator.geolocation) {
        //         var self = this;
        //         navigator.geolocation.getCurrentPosition(function(position){
        //             self.position = position.coords;
        //         })
        //     }
        // }
    }
}
</script>