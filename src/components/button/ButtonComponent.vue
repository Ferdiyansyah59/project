<template>
    <a class="w-3/4 h-8 sm:w-2/5 text-gray-100 bg-buttonBlue rounded-md shadow-lg" >{{ titleButton }}</a>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        titleButton: String
    }
}
</script>