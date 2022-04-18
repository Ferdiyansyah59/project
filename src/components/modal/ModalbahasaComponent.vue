<template>
    <div class="p-10 z-10 w-4/5 md:w-1/2 font-[Poppins] absolute justify-self-center self-center rounded-md  shadow-2xl shadow-gray-700 bg-white">
        <p class="text-gray-800 font-semibold">Bahasa</p>
        <p class="text-xs border-b border-black py-3">Silahkan pilih bahasa yang sesuai dengan anda</p>
        <div class="p-3">
            <input class="mt-3  mr-3" id="indo" name="bahasa" type="radio"> 
            <label for="indo">Indonesia</label><br>
            <input class="mt-1 mr-3" id="en" name="bahasa" type="radio"> 
            <label for="en">English</label><br>
        </div>
        <div class="float-right p-1 mt-3">
            <button v-on:click="$emit('close-bahasa')" class="text-xxs font-semibold" >Cancel</button>
            <button v-on:click="$emit('close-bahasa')" class="ml-6 text-xxs font-semibold" >Simpan Perubahan</button>
        </div>
    </div>
</template>