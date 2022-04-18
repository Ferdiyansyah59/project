<template>
    <div id="open" class="fixed z-10 top-0 w-4/5 min-h-screen font-[Poppins] bg-white shadow-inner ">
        <div class="w-full h-36 sm:h-44 relative bg-cover bg-[url('../../public/img/wp.webp')] ">
            <div v-on:click="$emit('is-close')" class="float-right p-5 ">
                <patrolin-icon  icon="btnBack" />
            </div>
            <div class="absolute bottom-0 text-white p-5">
                <h5 class="text-sm">PATROLIN</h5>
                <p class="text-xs">ID: demo</p>
            </div>
        </div>
        <div class="grid grid-rows-5 gap-7 mt-5">
            <router-link to="/setting" class="grid grid-cols-[40px_1fr] gap-8">
                <patrolin-icon  class="text-xl justify-self-end" icon="settings" />
                <p class="border-b border-black pb-1 text-sm font-medium">Setting</p>  
            </router-link>
            <router-link to="/event" class="grid grid-cols-[40px_1fr] gap-8">
                <patrolin-icon  class="text-xl justify-self-end" icon="triangle" />
                <p class="border-b border-black pb-1 text-sm font-medium">Event</p>  
            </router-link>
            <router-link to="/profile" class="grid grid-cols-[40px_1fr] gap-8">
               <patrolin-icon  class="text-xl justify-self-end" icon="user" />
                <p class="border-b border-black pb-1 text-sm font-medium">Profile</p>  
            </router-link>
            <router-link to="/dashboard" class="grid grid-cols-[40px_1fr] gap-8">
                <patrolin-icon  class="text-xl justify-self-end" icon="guide" />
                <p class="border-b border-black pb-1 text-sm font-medium">Petunjuk aplikasi</p>  
            </router-link>
            <router-link to="/about" class="grid grid-cols-[40px_1fr] gap-8">
                <patrolin-icon  class="text-xl justify-self-end" icon="about" />
                <p class="border-b border-black pb-1 text-sm font-medium">Tentang aplikasi</p>  
            </router-link>
            <router-link to="/dashboard" class="grid grid-cols-[40px_1fr] gap-8">
                <patrolin-icon  class="text-xl justify-self-end" icon="logout" />
                <p class="border-b border-black pb-1 text-sm font-medium">Exit</p>  
            </router-link>
        </div>
        
    </div>
</template>

<script>

export default {
  
}
</script>