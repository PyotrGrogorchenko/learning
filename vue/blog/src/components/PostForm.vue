<template>
  <form @submit.prevent class="form">
    <h4>Название поста</h4>
    <input-ui
      v-model="post.title"
      type='text'
      placeholder="Название"
    />
    <input-ui
      v-model="post.body"
      type='text'
      placeholder="Описание"
    />
    <button-ui
      @click="createPost"
    >
      Создать
    </button-ui>
  </form>
</template>

<script>
export default {
  data () {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost () {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.button {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background-color: teal;
  border: none;
}
</style>
