<template>
  <div>
    <label for="genderSelect">Gender</label>
    <select id="genderSelect" v-model="selectedGender" @change="onChange">
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType, Emit } from 'vue'

export default defineComponent({
  name: 'GenderSelect',
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }: { emit: Emit }) {
    const selectedGender = ref(props.modelValue)

    // Emit the value when it changes
    const onChange = () => {
      emit('update:modelValue', selectedGender.value)
    }

    // Update the local value when the prop changes
    watch(
      () => props.modelValue,
      (newValue) => {
        selectedGender.value = newValue
      }
    )

    return {
      selectedGender,
      onChange
    }
  }
})
</script>

<style scoped>
/* Add your styles here */
</style>
