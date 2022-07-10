<template>
  <button
    class="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-ui'
}
</script>

<style scoped>
.button {
  padding: 10px 15px;
  background-color: teal;
  border: none;
}
</style>
