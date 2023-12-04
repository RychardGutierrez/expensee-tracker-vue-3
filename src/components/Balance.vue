<template>
  <section class="flex flex-col gap-5">
    <h4 class="text-3xl uppercase text-green-600">Your Balance</h4>
    <h1 class="text-4xl font-semibold" id="balance">$ {{ balance }}</h1>
  </section>
</template>

<script setup>
defineProps({ balance: { type: Number, default: 0 } })
</script>

<style lang="scss" scoped></style>