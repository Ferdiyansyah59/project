<template>
    <div class="grid min-h-full" >
        <div class="min-w-full p-2 bg-buttonBlue font-[Poppins]">
            <router-link to="/dashboard">
                <font-awesome-icon class="text-white ml-3" icon="fa-solid fa-angle-left" />  
            </router-link>
            <p class="inline ml-3 font-medium text-white">Tentang Aplikasi</p>
        </div>
        <div class="justify-self-center self-center text-center text-sm mt-5 tab:text-lg">
            <img class="h-52 tab:h-64" :src="require('../../../../public/img/logo.webp')" alt="Logo">
            <p class="font-[Ubuntu] text-buttonBlue my-3 ">by Nusantara Cyber Integration</p>
            <p class="font-semibold">Version: 1.0.0</p>
            <p class="font-semibold my-3">Contact</p>
            <p class="text-sm">info@patrolinid.com</p>
        </div>
        <div class="absolute bottom-10 min-w-full">
            <p class="text-xxs tab:text-xs font-[Ubuntu] text-gray-600 text-center">Copyright &copy; Nusantara Cyber Integration</p>
        </div>
    </div>
</template>