<script setup></script>

<template>
  <div>
    <header>
    <slot name="header" />
  </header>
  <main>
    <slot name="main" />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
  </div>
</template>

<style scoped></style>
