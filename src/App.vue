<template>
  <nav>
    <router-link to='/'><strong>Todos</strong></router-link>
  </nav>
  <router-view :msg='msg' :tasks='tasks' @addTask="addTask" @updateTask="updateTask" />
  <!-- <router-view :msg='msg' /> -->
</template>
<script>
// @ is an alias to /src
import TodoList from '@/abis/TodoList.json'

export default {
  name: 'App',
  data () {
    return {
      msg: 'App loading',
      loading: false,
      contract: {},
      account: null,
      tasks: [],
      taskCount: null
    }
  },
  async created () {
    await this.loadAccount()
    await this.loadContract()
    await this.updateTaskCount()
    this.showTasks()
  },
  async updated () {
    this.loadContract()
    this.showTasks()
    this.updateTask()
  },
  methods: {
    async loadAccount () {
      const accounts = await this.window.ethereum.request({ method: 'eth_requestAccounts' })
      this.account = accounts[0]
    },
    async loadContract () {
      const networkId = await this.window.web3.eth.net.getId()
      const deployedNetwork = await TodoList.networks[networkId]
      const abi = await TodoList.abi
      this.contract = await new this.window.web3.eth.Contract(abi, deployedNetwork.address)
      console.log(this.contract)
      this.showTasks()
    },
    async addTask (_task) {
      await this.contract.methods.createTask(_task).send({
        from: this.account
      })
      this.updateTaskCount()
    },
    async showTasks () {
      for(let i = 1; i <= this.taskCount; i++) {
        this.tasks.push(await this.contract.methods.tasks(i).call())
      }
    },
    async updateTaskCount () {
      this.taskCount = await this.contract.methods.taskCount().call()
    },
    async updateTask (_index) {
      console.log(_index)
      await this.contract.methods.taskCompleted(_index).send({
        from: this.account
      })
    }
  }
}
</script>
<style>
</style>
