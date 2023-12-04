<template>
  <h3 class="text-3xl font-semibold border-b border-white py-4">Add new transaction</h3>
  <form id="form" @submit.prevent="handleAddExpense" class="flex flex-col gap-5">
    <div class="flex flex-col gap-4">
      <label for="text" class="text-xl">Text</label>
      <input v-model="name" type="text" id="text" placeholder="Enter text..." class="p-3 text-black" />
    </div>
    <div class="flex flex-col gap-4">
      <label for="amount" class="text-xl">Amount <p class="text-sm">(negative - expense, positive - income)</p> </label>
      <input v-model="amount" type="number" id="amount" placeholder="Enter amount..." class="p-3 text-black" />
    </div>
    <button type="submit" class="bg-violet-500 p-2 text-xl cursor-pointer hover:bg-violet-600">Add Transaction</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import { useExpenseStore } from '../stores/expenseStore';

const toast = useToast({ position: "top-right" });

const name = ref("")
const amount = ref(0)

const store = useExpenseStore();

const handleAddExpense = () => {
  if (!name.value.length || !amount.value.toString.length) {
    toast.warning("Ups the information not completed")
    return
  }

  const data = {
    id: Math.random(),
    name: name.value,
    amount: amount.value
  }

  store.setAddExpense(data)

  toast.success("Success - Add Expense")
  clearData()
}

const clearData = () => {
  name.value = ""
  amount.value = 0
}

</script>

<style lang="scss" scoped></style>