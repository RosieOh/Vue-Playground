<template>
  <div>
    <div>Hello World!</div>
    <button @click="show = !show">배열표시</button>
    <ul v-if="show">
      <li v-for="(item, i) in arr" :key="i">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:() => ({
    arr: [
      '사과',
      '바나나',
      '참외',
      '수박',
    ],
    show: true,
  })
}
</script>