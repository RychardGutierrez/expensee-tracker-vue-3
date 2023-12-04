import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const mockData = [
  { id: 1, name: 'Some transaction -1', amount: -1 },
  { id: 2, name: 'Some transaction 2', amount: 2 }
]

export const useExpenseStore = defineStore('expense', () => {
  const expenseData = ref([])

  const getBalance = computed(() => expenseData.value.reduce((acc, cv) => acc + cv.amount, 0))

  const getIncome = computed(() => expenseData.value.filter((expense) => expense.amount >= 0))

  const getExpense = computed(() => expenseData.value.filter((expense) => expense.amount < 0))

  const setAddExpense = (expense) => {
    const expenses = JSON.parse(localStorage.getItem('expenseData')) || []
    expenses.push(expense)

    localStorage.setItem('expenseData', JSON.stringify(expenses))
    loadData()
  }

  const removeExpense = (id) => {
    const updateData = expenseData.value.filter((expense) => expense.id !== id)
    localStorage.setItem('expenseData', JSON.stringify(updateData))
    loadData()
  }

  const loadData = () => (expenseData.value = JSON.parse(localStorage.getItem('expenseData')) || [])

  return { expenseData, getBalance, getIncome, getExpense, setAddExpense, removeExpense, loadData }
})
