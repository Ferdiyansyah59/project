<template>
    <div class="fixed top-[40px] font-medium text-[11px] text-[#777777] h-12 min-w-full place-items-center grid grid-cols-2 shadow-md shadow-shadowButton">
        <router-link to="/history-menu" class="w-full text-center"><span id="jadwal">Jadwal</span></router-link>
        <router-link to="/history-hadir" class="w-full text-center"><span id="daftar">Daftar Hadir</span></router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                // page: null
            }
        },
        mounted(){
            const page = this.$route.path

            if (page == "/history-menu"){
                document.getElementById("jadwal").classList.add("history-active");
            }else{
                document.getElementById("daftar").classList.add("history-active");
            }
        }
    }
</script>
