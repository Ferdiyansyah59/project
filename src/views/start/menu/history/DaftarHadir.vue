<template>
    <div class="font-[Poppins]">
        <div class="min-w-full p-2 bg-buttonBlue">
            <router-link to="/dashboard">
                <patrolin-icon  class="inline ml-3" icon="btnBack" /> 
            </router-link>
            <p class="inline ml-3 font-medium text-white">Profil</p>
        </div>
        <history-menu />
      ANJAY

    </div>
</template>

<script>
    import HistoryMenu from '../../../../components/HistoryMenu.vue'
    export default {
        components: {
            HistoryMenu
        }
    }
</script>