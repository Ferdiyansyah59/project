<template>
    <div class="p-4 w-4/5 z-10 md:w-1/2 absolute font-[Poppins] justify-self-center rounded-md self-center shadow-2xl shadow-gray-700 bg-white">
            <p class="text-gray-800 font-semibold">Nomor Darurat</p>
            <p class="text-xs">Tambahkan maksimal 3 nomor darurat</p>
            <input @keypress="isNumber($event)" class="block w-full mt-1 outline-none pt-2 border-b border-gray-400 text-gray-600" type="text" placeholder="Nomor telepon 1:">
            <input @keypress="isNumber($event)" class="block w-full mt-1 outline-none pt-2 border-b border-gray-400 text-gray-600" type="text" placeholder="Nomor telepon 2:">
            <input @keypress="isNumber($event)" class="block w-full mt-1 outline-none pt-2 border-b border-gray-400 text-gray-600" type="text" placeholder="Nomor telepon 3:">
            <div class="float-right p-3 mt-10 ">
                <button v-on:click="$emit('close-number')" class="text-xs font-semibold" >Cancel</button>
                <button v-on:click="$emit('close-number')" class="ml-6 text-xs font-semibold" >Simpan Perubahan</button>
            </div>
    </div>
</template>

<script>
export default {
    methods :{
        isNumber: function(evt){
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();
            } else {
                return true;
            }
        }
    }
}
</script>