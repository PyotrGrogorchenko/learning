<template>
  <select
    :value="modelValue"
    @change="chengeOption"
  >
    <option disabled value="">Выберете из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'select-ui',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    chengeOption (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
