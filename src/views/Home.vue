<template>
  <div class="home">
    <Time />
    <Todos />
  </div>
</template>

<script>
import Time from '../components/Time.vue'
import Todos from '../components/Todos.vue'

export default {
  name: 'Home',
  components: {
    Time,
    Todos
  },
  data: function() {
    return {
      focused: true
    }
  },
  methods: {
  },
  mounted() {
    setInterval(() => {
      if (document.hasFocus()) {
        let oldTitle = document.getElementById('icon');



        oldTitle.href = "54ff95.png";
      } else if (!document.hasFocus()) {
        let oldTitle = document.getElementById('icon');

        oldTitle.href = "ff5454.png";
      }
    }, 1000)
  }
}
</script>
<style scoped>
  .home {
    margin-top: 30px;
    width: 375px;
  }

  @media (max-width: 500px) {
    .home {
      width: 95vw;
    }
  }
</style>