<template>
    <div>
        <img v-bind:src="imgSrc" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgSrc: "http://kr.vuejs.org/images/logo.png"
        };
    }
}
</script>