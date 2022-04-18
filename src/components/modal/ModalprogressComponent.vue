<template>
    <div class="p-4 w-4/5 z-10 md:w-1/2 absolute font-[Poppins] justify-self-center rounded-md self-center shadow-2xl shadow-gray-700 bg-white">
        <p class="font-semibold mb-2">Pesan SOS akan segera dikirim dalam <span id="time"></span> detik</p>
        <p class="text-xs mb-2">Tanda bahaya akan dikirim ke perangkat lain</p>
        <div class="w-[99%] mb-2 bg-red-400 rounded-md">
            <div id="myBar" class="w-0 h-6 bg-red-600 rounded-md"></div>
        </div>
        <div class="float-right p-3 mt-2 ">
            <button v-on:click="$emit('close-progress')" class="text-xs font-semibold" >Cancel</button>
            <button v-on:click="$emit('close-progress')" class="ml-6 text-xs font-semibold" >Kirim Sekarang</button>
        </div>
    </div>
</template>


<script>
export default {
    mounted(){
        let counter = 15;
        let element = document.getElementById('myBar');
        let width = 0.6;
        setInterval(function(){
            if(counter >= 0){
                document.getElementById('time').innerHTML = counter;
                if(width < 99){
                    width += 6.3;
                    element.style.width = width + "%" 
                    element.style.transition = 'width 1s'
                    element.style.transitionTimingFunction = 'linear'
                }
            }
            counter -= 1;
        }, 1000)


        
    }
}
</script>