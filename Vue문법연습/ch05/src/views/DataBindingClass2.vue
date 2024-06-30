<template>
    <div class="container" v-bind:class="[activeClass, errorClass]">
        Class Binding
    </div>
</template>

<script>
export default {
    data() {
        return  {
            activeClass: 'active',
            errorClass: 'text-red'
        };
    }
}
</script>