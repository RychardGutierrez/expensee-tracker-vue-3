<template>
  <section class="flex m-1 bg-white text-black shadow-md justify-between p-5 rounded-md">

    <div class="flex-1 text-center flex flex-col gap-2">
      <h4 class="text-2xl font-semibold uppercase text-gray-400">Income</h4>
      <p v-for="{ amount, id } in incomes" :key="id" id="money-plus"
        class="text-3xl font-semibold uppercase text-green-500">+$ {{ amount }} </p>
    </div>

    <div class="flex-1 text-center border-l flex flex-col gap-2 border-gray-300">
      <h4 class="text-2xl font-semibold uppercase text-gray-400">Expense</h4>
      <p v-for="{ amount, id } in expenses" :key="id" id="money-minus"
        class="text-3xl font-semibold uppercase text-red-500">-$ {{ amount }} </p>
    </div>

  </section>
</template>

<script setup>
defineProps({
  expenses: {
    type: Array,
    default() {
      return [{ id: 0, amount: 0 }]
    }
  },

  incomes: {
    type: Array,
    default() {
      return [{ id: 0, amount: 0 }]
    }
  }
})

</script>

<style scoped></style>