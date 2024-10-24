<script setup>
import BaseCard from '@/components/BaseCard.vue';

</script>
<template>
  <main class="flex-row space-y-2 items-center justify-center min-h-screen">
  <h1 class="text-4xl">slots</h1>
    <BaseCard>
      <div class="shadow-lg py-2"> こんにちは</div>
      <p class="text-blue-400">元気ですか？</p>
    </BaseCard>
  </main>
</template>
