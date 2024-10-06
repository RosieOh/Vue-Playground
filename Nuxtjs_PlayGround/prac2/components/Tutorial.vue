<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          당신의 첫번째 Nuxt 어플리케이션을 만든것을 축하합니다!
        </h2>
        <p class="mt-3 text-gray-600">
          NUXT 기초 강의는 <a href="https://velog.io/@nuxt/Nuxt-JS-%EC%84%A4%EC%B9%98" target="_blank" class="text-green-500 hover:underline">Nuxt 튜토리얼</a>을 참고 해주세요!<br>
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          Hello World!
        </p>
        <nuxt-link to="/introduction">자기소개 보기</nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NuxtTutorial'
}
</script>
