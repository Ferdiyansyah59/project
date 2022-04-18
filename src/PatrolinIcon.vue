<template>
    <img :src="require('../public/img/icon/'+ iconData +'.svg')" alt="icon">
    <!-- <p>{{ iconData }}</p> -->
</template>

<script>
export default {
    name: 'PatrolinIcon',
    data(){
        return {
            iconData: this.icon
        }
    },
    props: {
        icon: {
            type: String,
            default: ''
        }
    }
}
</script>