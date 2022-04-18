<template>
    <div class="grid justify-center content-center min-h-screen min-w-full font-[Roboto]">
        <div class="w-screen">
            <img class="m-auto h-44 hp:h-48 sm:h-60" :src="require('../../../public/img/logo.webp')" alt="">
            <div class="m-auto border border-solid border-gray-300 rounded-md w-[90%] sm:w-1/2 md:w-96 py-10 px-5">
                <form action="">
                    <input class="block mb-2 w-full h-10 text-gray-500 text-xs p-1 rounded-md border border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" placeholder="Username">
                    <input class="block mb-2 w-full h-10 p-1 text-xs rounded-md border border-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="password" placeholder="Password">
                    <div class="w-4/5 text-xs p-2 border border-solid border-gray-200">
                        Tempat Captcha
                    </div>
                    <div class="grid place-items-center mt-2">
                        <router-link class="buttonBlue w-full p-1 hp:pb-3 sm:pb-8 sm:pt-3" to="/dashboard">Masuk</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
</script>