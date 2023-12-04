<template>
  <h3 class="text-3xl font-semibold border-b border-white pb-4">History</h3>
  <ul id="list" class="">
    <li v-for="{ id, name, amount } in expenseData" :key="id"
      v-bind:class="'bg-white shadow-lg text-gray-700 flex justify-between relative p-4 my-4 border-r-8 hover:opacity-100 hover:bg-gray-50 ' + getBorderColor(amount)">
      {{ name }} <span>$ {{ amount }} </span>
      <button @click="handleDelete(id)"
        class="cursor-pointer bg-red-500 border-0 text-white text-lg leading-5 px-2 py-1 absolute top-3/4 left-0 transform -translate-x-full -translate-y-full opacity-0 transition-opacity duration-500 ease-in-out hover:opacity-100">X</button>
    </li>


  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia'

import { useExpenseStore } from '../stores/expenseStore';

import { useToast } from 'vue-toast-notification';
const toast = useToast({ position: "top-right" });

const { expenseData } = storeToRefs(useExpenseStore());

const getBorderColor = (amount) => {
  return amount < 0 ? 'border-red-500' : 'border-green-500'
}

const handleDelete = (id) => {
  useExpenseStore().removeExpense(id)
  toast.success("Success - Remove Expense")
}
</script>

<style lang="scss" scoped></style>