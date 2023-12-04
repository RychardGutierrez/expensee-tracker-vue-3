<script setup>
import { onMounted } from 'vue'
import AddTransaction from '../components/AddTransaction.vue';
import Balance from '../components/Balance.vue';
import HeaderTitle from '../components/HeaderTitle.vue';
import IncomeExpense from '../components/IncomeExpense.vue';
import TransactionList from '../components/TransactionList.vue';
import { useExpenseStore } from '../stores/expenseStore';

const expenseStore = useExpenseStore();

onMounted(() => {
  expenseStore.loadData();
})

</script>

<template>
  <HeaderTitle />
  <section class="flex flex-col gap-5 max-w-xs md:w-96">
    <Balance :balance="expenseStore.getBalance" />
    <IncomeExpense :incomes="expenseStore.getIncome" :expenses="expenseStore.getExpense" />
    <TransactionList />
    <AddTransaction />
  </section>
</template>

<style scoped></style>

