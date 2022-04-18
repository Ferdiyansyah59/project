<template>
    <div class="h-[75%] hp:h-[65%] w-full z-10 sm:h-1/2 rounded-t-3xl px-10 py-3 fixed bottom-0 left-0 bg-white font-[Poppins]">
        <div class="border-b-4 border-[#BEBEBE] w-40 m-auto"></div>
        <!-- Title -->
        <button class="mt-5 -ml-5" v-on:click="$emit('close-paraf')">
            <patrolin-icon  class="inline tab:h-11" icon="backGray" /> 
            <p class="inline text-xs tab:text-sm">Tambahkan paraf</p>
        </button>
        <div>
           <canvas id="sign" class="border border-dashed border-black bg-[#F3F3F3] w-full max-w-md lg:w-[550px]" ></canvas>
           <div class="mt-2">
                <button class="buttonBlue inline w-28 rounded-sm mr-2 shadow-md shadow-shadowButton">Konfirmasi</button>
                <button class="buttonBlue w-24 bg-red-600 rounded-sm shadow-md shadow-shadowButton">Reset</button>
           </div>
        </div>
    </div>
</template>



<script>
export default {
}
</script>