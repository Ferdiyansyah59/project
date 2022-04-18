<template>
    <div class="h-3/5 z-10 sm:h-1/2 rounded-t-3xl min-w-full p-10 fixed bottom-0 bg-white font-[Poppins]">
        <button v-on:click="$emit('close-country')">
            <patrolin-icon  class="inline" icon="backGray" /> 
            <p class="inline font-semibold">Cari kode negara</p>
        </button>
        <div class="grid grid-rows-1 grid-cols-[40px_1fr] rounded-full border h-10 border-gray-400 bg-gray-100 my-6">
            <patrolin-icon class="justify-self-center self-center" icon="search" /> 
            <input class=" h-8 rounded-full text-gray-500 bg-gray-100 pl-2 self-center text-xxs outline-none mr-1 tab:text-sm" type="text" name="" id="" placeholder="Ketik nama atau kode negara">
        </div>
        <p class="font-medium">Negara Populer</p>
        <div class="mt-2 h-1/2 overflow-y-scroll mb-20 negara">
            <div class="grid grid-cols-[50px_1fr] p-2 border-b mt-3 border-gray-500">
                <patrolin-icon icon="indonesia" /> 
                <div class="min-w-full">
                    <p class="inline text-sm font-medium">Indonesia</p>
                    <p class="float-right" >+62</p>
                </div>  
            </div>
            <div class="grid grid-cols-[50px_1fr] p-2 border-b mt-3 border-gray-500">
                <patrolin-icon icon="singapore" /> 
                <div class="min-w-full">
                    <p class="inline text-sm font-medium">Singapore</p>
                    <p class="float-right" >+65</p>
                </div>  
            </div>
            <div class="grid grid-cols-[50px_1fr] p-2 border-b mt-3 border-gray-500">
                <patrolin-icon icon="malaysia" /> 
                <div class="min-w-full">
                    <p class="inline text-sm font-medium">Malaysia</p>
                    <p class="float-right" >+60</p>
                </div>  
            </div>
            <div class="grid grid-cols-[50px_1fr] p-2 border-b mt-3 border-gray-500">
                <patrolin-icon icon="philippines" /> 
                <div class="min-w-full">
                    <p class="inline text-sm font-medium">Philippines</p>
                    <p class="float-right" >+63</p>
                </div>  
            </div>
        </div>
    </div>
</template>