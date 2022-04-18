<template>
        <div class="h-1/2 z-10 sm:h-2/6 rounded-t-3xl min-w-full p-10 fixed bottom-0 bg-white font-[Poppins]">
            <button v-on:click="$emit('close-photos')">
                <patrolin-icon  class="inline" icon="backGray" /> 
                <p class="inline">Ganti foto profil</p>
            </button>
            <div>
                <div class="upload-btn-wrapper mt-10">
                    <patrolin-icon  class="ml-3 inline" icon="photosChange" /> 
                    <div class="inline w-full ml-2" >
                        <button class="btn">Pilih dari galeri</button>
                        <input type="file" name="myfile" />
                    </div>
                </div>
                <div class="mt-5 border-b border-black pb-2">
                    <patrolin-icon  class="ml-3 inline" icon="trash" /> 
                    <button class="ml-5 text-[14px] font-bold">Hapus foto</button>
                </div>
            </div>
        </div>
</template>