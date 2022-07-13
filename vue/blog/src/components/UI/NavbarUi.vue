<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <button-ui @click="$router.push('/posts')">Posts</button-ui>
      <button-ui @click="$router.push('/about')" style="margin-left: 20px">About</button-ui>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
