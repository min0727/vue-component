<script setup>
import BaseCard from '@/components/BaseCard.vue';

import CompA from '@/components/CompA.vue';

import CompB from '@/components/CompB.vue';

import { ref } from 'vue';

const currentComp = ref(CompA);
</script>
<template>
  <main class="flex-row space-y-2 items-center justify-center min-h-screen">
    <h1 class="text-4xl">slots</h1>
    <BaseCard>
      <template #header="variable">
        <h2 class="text-2xl">こんにちは</h2>
        <p>pageNumber:{{ variable.pageNumber }}</p>
        <h2 v-if="variable.pageNumber === 1" class="text-xl">1</h2>
        <h2 v-if="variable.pageNumber === 2" class="text-xl">2</h2>
        <h2 v-if="variable.pageNumber === 3" class="text-xl">3</h2>
      </template>
      <template #main>
        <p class="text-blue-400">元気ですか？</p>
        <input
          id=""
          type="text"
          name=""
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </template>
      <template #footer>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          送信
        </button>
      </template>
    </BaseCard>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="currentComp = CompA"
    >
      CompA
    </button>
    <button
      type="button"
      class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      @click="currentComp = CompB"
    >
      CompB
    </button>
    <component :is="currentComp" />
  </main>
</template>
