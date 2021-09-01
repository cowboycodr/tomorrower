<template>
  <div class="todos">
    <div
      class="todo"
      draggable="true"
      :style="{ backgroundColor: this.colors[todoIndex] }"
      v-for="(section, todoIndex) in todoSections"
      :key="todoIndex"
      @click="section.expanded = !section.expanded"
    >
      {{ section.time }}
      <div class="todo-list" :style="{ color: this.colors[todoIndex] }" v-show="section.expanded">
        <div
          v-for="(todo, itemIndex) in getTodosByTime(section.time)"
          :key="itemIndex"
          class="todo-item"
        >
          {{ todo.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todos",
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    colors() {
      return this.$store.state.colors;
    },
  },
  data: function () {
    return {
      times: [],
      todoSections: [],
      sectionColor: ''
    };
  },
  methods: {
    getTodosByTime(time) {
      let todos = [];

      for (let i = 0; i < this.todos.length; i++) {
        let todo = this.todos[i];

        let todoTime =
          todo.time
            .toLowerCase()
            .trim()
            .replace("pm", "")
            .replace("am", "")
            .slice(0, -1) + "0";

        if (todoTime === time) {
          todos.push(todo);
        }
      }

      return todos;
    },
    getTodoSections() {
      let sections = [];

      for (let i = 0; i < this.todos.length; i++) {
        let todo = this.todos[i];

        let todoTime =
          todo.time
            .toLowerCase()
            .trim()
            .replace("pm", "")
            .replace("am", "")
            .slice(0, -1) + "0";

        let notIn = true;
        for (let j = 0; j < sections.length; j++) {
          let section = sections[j];

          if (todoTime === section.time) {
            notIn = false;
            break;
          }
        }

        if (notIn) {
          sections.push({ time: todoTime, expanded: false });
        }
      }

      this.todoSections = sections;
    },
    getColorByIndex(index) {
      return this.colors[index];
    }
  },
  mounted() {
      this.getTodoSections();
  },
};
</script>
<style scoped>
.todo {
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
  min-height: 60px;
  padding: 10px;
  font-size: 32px;
  color: white;
  cursor: pointer;
}

.expand-button:hover {
  cursor: pointer;
}

.todo-list {
    background-color: white;
    border-radius: 5px;
    padding: 5px;
}

.todos:last-child {
    margin-bottom: 10px;
}
</style>