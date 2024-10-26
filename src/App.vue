<script setup>
import BaseCard from '@/components/BaseCard.vue';

</script>
<template>
  <main class="flex-row space-y-2 items-center justify-center min-h-screen">
    <h1 class="text-4xl">slots</h1>
    <BaseCard>
      <template #header="variable">
        <h2 class="text-2xl">こんにちは</h2>
        <p>pageNumber:{{ variable.pageNumber }}</p>
      </template>
      <template #main>
        <p class="text-blue-400">元気ですか？</p>
        <input
          id="" type="text" name=""
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </template>
      <template #footer>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">送信</button>
      </template>
    </BaseCard>
</main>
</template>
