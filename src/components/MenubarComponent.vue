<template>
<div>
    <div class="shadow-inner fixed min-w-full bottom-0 h-14 hp:h-20 grid grid-rows-1 bg-white grid-cols-5">
        <router-link class="text-sm self-center text-gray-400 hp:text-[14px] sm:text-lg  justify-self-center text-center" to="/start">
            <patrolin-icon class="m-auto hp:h-[18px] mb-1 sm:h-[18px]" icon="home" /> 
            <p>Home</p>
        </router-link>
        <router-link class="text-sm self-center text-gray-400 hp:text-[14px] sm:text-lg justify-self-center text-center" to="/timeline">
            <patrolin-icon class="m-auto hp:h-[18px] mb-1 sm:h-[18px]" icon="timeline" /> 
            <p>Timeline</p>
        </router-link>
        <div v-if="page == '/dashboard'" v-on:click="$emit('modal-location')" class="grid text-sm h-14  -mt-12 w-14 shadow-md border hp:text-[14px] sm:text-lg border-gray-100 bg-white rounded-full self-center text-white justify-self-center text-center ">
            <div class="grid justify-self-center self-center h-10 w-10 bg-buttonBlue rounded-full">
                <patrolin-icon class="self-center justify-self-center hp:h-[18px] mb-1 sm:h-[18px]" icon="scanSolid" /> 
            </div>
        </div>
        <router-link to="/dashboard" v-else-if="page == '/start'" v-on:click="$emit('modal-location')" class="grid text-sm h-14  -mt-12 w-14 shadow-md border hp:text-[14px] sm:text-lg border-gray-100 bg-white rounded-full self-center text-white justify-self-center text-center ">
            <div class="grid justify-self-center self-center h-10 w-10 bg-red-500 rounded-full">
                <patrolin-icon class="self-center justify-self-center hp:h-[14px] mt-1 mb-1 sm:h-[18px]" icon="x" /> 
            </div>
        </router-link>
        <router-link to="/start" v-else v-on:click="$emit('modal-location')" class="grid text-sm h-14  -mt-12 w-14 shadow-md border hp:text-[14px] sm:text-lg border-gray-100 bg-white rounded-full self-center text-white justify-self-center text-center ">
            <div class="grid justify-self-center self-center h-10 w-10 bg-red-500 rounded-full">
                <patrolin-icon class="self-center justify-self-center hp:h-[16px] mb-1 sm:h-[18px]" icon="back" /> 
            </div>
        </router-link>
        <router-link class="text-sm self-center text-gray-400 hp:text-[14px] sm:text-lg justify-self-center text-center" to="/ptt">
            <patrolin-icon class="m-auto hp:h-[22px] mb-1 tab:h-[24px] sm:h-[26px]" icon="mic" /> 
            <p>PTT</p>
        </router-link>
        <div v-on:click="$emit('is-open')" class="text-sm hp:text-[14px] sm:text-lg self-center text-gray-400 justify-self-center text-center">
            <patrolin-icon class="m-auto hp:h-[18px] mb-1 sm:h-[18px]" icon="menu" /> 
            <p class="-mb-1">Menu</p>
        </div>
    </div>
    
</div>
</template>

<script>

export default {
    data(){
        return{
            page: ''
        }
    },
    beforeMount(){
        this.page = this.$route.path
    }
}
</script>