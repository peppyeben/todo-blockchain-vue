<template>
  <div class="home">
    <!-- {{ msg }} -->
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow text-white">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" target="_blank">Todo List</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small><a class="nav-link" href="#"><span id="account"></span></a></small>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <main role="main" class="col-lg-12 d-flex justify-content-center">
          <div id="content">
            <form @submit.prevent="createTask()">
              <input v-model="task" id="newTask" type="text" class="form-control" placeholder="Add task..." required>
            </form>
            <ul v-for="(task, index) in tasks" :key="index" class="list-unstyled">
              <div
                class="form-check"
                v-if="task.completed === false"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="task.id"
                  @click="updateTask(task.id)"
                  :checked="task.completed"
                >
                  {{ task.content }}
              </div>
            </ul>
            <hr />
            <ul v-for="(task, index) in tasks" :key="index" class="list-unstyled">
              <div
                class="form-check"
                v-if="task.completed === true"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="task.id"
                  @click="updateTask(task.id)"
                  :checked="task.completed"
                >
                {{ task.content }}
              </div>
            </ul>
<!--             <ul id="taskList" v-for="(task, index) in tasks" :key="index" class="list-unstyled">
              <div v-if="task.completed === false" class="input-group">
                <div class="form-check input-group-text">
                  <input @click="updateTask(task.id)" type="checkbox" id="task.id" class="form-check-input mt-0" aria-label="task.id" />
                  <label class="form-check-label" for="task.id">
                    {{ task.content }}
                  </label>
                </div>
              </div>
            </ul>
            <hr />
            <ul id="completedTaskList" v-for="(task, index) in tasks" :key="index" class="list-unstyled">
              <div v-if="task.completed === true" class="input-group">
                <div class="form-check input-group-text">
                  <input @click="updateTask(task.id)" type="checkbox" :id="task.id" class="form-check-input mt-0" aria-label="task.id" />
                  <label class="form-check-label" for="task.id">
                    {{ task.content }}
                  </label>
                </div>
              </div>
            </ul> -->
            <!-- <ul id="completedTaskList" v-for="(task, index) in tasks" :key="index" class="list-unstyled">
              <div v-if="task.completed === true" class="taskTemplate">
                  <input type="checkbox" :checked="task.completed"/>
                  <span class="content" @click="updateTask(index)">{{ task.content }}</span>
              </div>
            </ul> -->
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'TodoList',
  props: ['msg', 'tasks'],
  data () {
    return {
    	task: ''
    }
  },
  methods: {
    createTask () {
    	const newTask = this.task
    	this.task = ''
    	this.$emit('addTask', newTask)
    },
    updateTask (_index) {
      this.$emit('updateTask', _index)
      // console.log(_index)
    }
  }
}
</script>
<style scoped>
main {
  margin-top: 60px;
}
</style>
