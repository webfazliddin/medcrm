<template>
  <div class="select-container">
    <label for="genderSelect" class="select-label">Gender</label>
    <div class="select-wrapper">
      <select id="genderSelect" v-model="selectedGender" @change="onChange" class="select-control">
        <option value="" disabled>Select gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType, Emit } from 'vue'

export default defineComponent({
  name: 'GenderSelect',
  props: {
    modelValue: {
      type: Number as PropType<number>,
      default: 0 // 0 could indicate "unspecified"
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }: { emit: Emit }) {
    const selectedGender = ref(props.modelValue)

    // Emit the value when it changes
    const onChange = () => {
      emit('update:modelValue', selectedGender.value)
    }

    // Watch for prop changes and update the local value
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

<!-- Styles remain unchanged -->
<style scoped>
.select-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.select-label {
  margin-bottom: 8px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
}

.select-wrapper {
  position: relative;
}

.select-control {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  appearance: none;
  /* Removes default styling provided by the browser */
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: white;
  cursor: pointer;
}

/* .select-control:hover {
  border-color: #006a60;
} */

/* Style for the arrow indicator */
.select-wrapper:after {
  content: '';
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  /* Arrow color */
  pointer-events: none;
  /* Ensures click events pass through to the select element */
}

/* Optional: Style for focus state */
.select-control:focus {
  border-color: #006a60;
  outline: none;
}
</style>
