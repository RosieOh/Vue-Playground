<template>
    <div @click="foo">
      a = {{ a }}
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      a: 10,
    }),
    methods: {
      foo() {
        this.a += 1
      }
    }
  }
  </script>
  