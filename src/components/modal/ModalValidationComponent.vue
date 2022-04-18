<template>
    <div class="grid p-8 w-72 z-10 md:w-1/2 absolute rounded-md font-[Poppins] justify-self-center self-center shadow-sm shadow-gray-700 bg-white"   > 
        <div>
            <div v-if="validationStatus" class="justify-self-center text-center">
                <div class="grid rounded-full m-auto h-10 w-10 bg-green-500">
                    <patrolin-icon class="justify-self-center self-center h-6 text-sm" icon="ceklis" /> 
                </div>
                <p class="font-semibold text-sm my-3">{{ validationTitle }}</p>
                <p v-if="scan" class="text-xxs font-normal mt-5">{{ validationScan }}</p>
                <p class="text-xxs font-normal mb-3">{{ validationMessage }}</p>
                <button type="button" v-on:click="$emit('validation-ok')" class="buttonBlue bg-green-500">OKE</button> 
            </div>
            <div v-else class="justify-self-center text-center">
                <div class="grid rounded-full m-auto h-10 w-10 bg-red-600">
                    <patrolin-icon class="justify-self-center self-center h-6 text-sm" icon="ceklis" /> 
                </div>
                <p class="font-semibold my-3 text-sm">{{ validationTitle }}</p>
                <p v-if="scan" class="text-xxs font-normal mt-5">{{ validationScan }}</p>
                <p class="text-xxs font-normal mb-3">{{ validationMessage }}</p>
                <button type="button" v-on:click="$emit('validation-ok')" class="buttonBlue bg-red-600">OKE</button> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            validationStatus: true,
            scan: false
        }
    },
    props: {
        validationTitle: {
            type: String,
            default: ''
        },
        validationMessage: {
            type: String,
            default: ''
        }
    }
}

</script>