<template>
  <div :class="$style.baseInput">
    <label :class="$style.label" for="email">{{ label }}</label>

    <div :class="classnames($style.wrapper, { [$style.hasError]: !!error })">
      <input
        :class="$style.input"
        :value="value"
        :type="type === 'password' ? (showPassword ? 'text' : 'password') : type"
        :placeholder="placeholder"
        @input="handleInputChange"
        required
        :disabled="disabled"
        v-mask="mask"
      />

      <div v-if="type === 'password'" :class="$style.append">
        <button v-if="showPassword" :class="$style.passwordToggle" @click="togglePasswordShow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.9202 12.7988C15.9725 12.5407 16 12.2736 16 12C16 9.79086 14.2091 8 12 8C11.7264 8 11.4593 8.02746 11.2012 8.07977L15.9202 12.7988ZM8.66676 9.78799C8.24547 10.4216 8 11.1821 8 12C8 14.2091 9.79086 16 12 16C12.8179 16 13.5784 15.7545 14.212 15.3332L12.7381 13.8594C12.5098 13.9501 12.2607 14 12 14C10.8954 14 10 13.1046 10 12C10 11.7393 10.0499 11.4902 10.1406 11.2619L8.66676 9.78799Z"
              fill="#33363F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5191 17.6405L15.0499 16.1712C14.0776 16.6805 13.0477 17 12 17C10.4742 17 8.98616 16.3224 7.65914 15.3677C6.34002 14.4186 5.26409 13.2558 4.58386 12.43C4.48409 12.3088 4.40958 12.2182 4.34785 12.1385C4.29899 12.0754 4.26786 12.0315 4.24756 12C4.26786 11.9685 4.29899 11.9246 4.34785 11.8615C4.40958 11.7818 4.48409 11.6912 4.58386 11.57C5.24928 10.7622 6.29335 9.63187 7.57331 8.69463L6.14458 7.2659C4.79643 8.29616 3.72247 9.47005 3.04009 10.2985C3.01651 10.3272 2.99192 10.3566 2.96662 10.3869L2.96661 10.3869C2.65318 10.7624 2.22974 11.2696 2.22974 12C2.22974 12.7304 2.65318 13.2376 2.9666 13.6131L2.96682 13.6133C2.99205 13.6435 3.01657 13.6729 3.04009 13.7015C3.77996 14.5998 4.98018 15.9041 6.49111 16.9912C7.99416 18.0725 9.89008 19 12 19C13.67 19 15.206 18.419 16.5191 17.6405ZM8.80682 5.6855C9.79062 5.26871 10.8643 5 12 5C14.1099 5 16.0059 5.92747 17.5089 7.00885C19.0198 8.0959 20.2201 9.40025 20.9599 10.2985C20.9835 10.3272 21.0081 10.3566 21.0334 10.3869L21.0334 10.3869C21.3468 10.7624 21.7703 11.2696 21.7703 12C21.7703 12.7304 21.3468 13.2376 21.0334 13.6131C21.0081 13.6434 20.9835 13.6728 20.9599 13.7015C20.4733 14.2923 19.7874 15.0589 18.945 15.8237L17.529 14.4077C18.3089 13.708 18.9539 12.9912 19.4162 12.43C19.5159 12.3088 19.5904 12.2182 19.6522 12.1385C19.701 12.0754 19.7322 12.0315 19.7525 12C19.7322 11.9685 19.701 11.9246 19.6522 11.8615C19.5904 11.7818 19.5159 11.6912 19.4162 11.57C18.7359 10.7442 17.66 9.58138 16.3409 8.63233C15.0139 7.6776 13.5258 7 12 7C11.449 7 10.9029 7.08837 10.3676 7.24624L8.80682 5.6855Z"
              fill="#33363F"
            />
            <path d="M5 2L21 18" stroke="#33363F" stroke-width="2" />
          </svg>
        </button>

        <button v-else :class="$style.passwordToggle" @click="togglePasswordShow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="3" stroke="#33363F" stroke-width="2" />
            <path
              d="M20.188 10.9343C20.5762 11.4056 20.7703 11.6412 20.7703 12C20.7703 12.3588 20.5762 12.5944 20.188 13.0657C18.7679 14.7899 15.6357 18 12 18C8.36427 18 5.23206 14.7899 3.81197 13.0657C3.42381 12.5944 3.22973 12.3588 3.22973 12C3.22973 11.6412 3.42381 11.4056 3.81197 10.9343C5.23206 9.21014 8.36427 6 12 6C15.6357 6 18.7679 9.21014 20.188 10.9343Z"
              stroke="#33363F"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="!!error" :class="$style.error">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import { withDefaults, defineProps, defineEmits } from 'vue'

export interface IBaseInput {
  label: string
  value: string
  placeholder?: string
  type?: string
  showPassword?: boolean
  disabled?: boolean
  error?: string
  mask?: string
}

withDefaults(defineProps<IBaseInput>(), {
  placeholder: '',
  type: 'text',
  showPassword: false,
  disabled: false,
  error: ''
})

const emit = defineEmits<{
  (e: 'on-password-toggle'): void
  (e: 'on-input', newValue: string): void
}>()

const togglePasswordShow = () => {
  emit('on-password-toggle')
}

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('on-input', target.value)
}
</script>

<style module lang="scss">
.baseInput {
  width: 100%;
  padding: 1 14px 32px 0;
  margin-bottom: 12px;
}
.label {
  display: block;
  font-family: $base-font;
  font-weight: 700;
  font-size: 15px;
  line-height: 1.5;
  color: #2a3547;
  margin-bottom: 8px;
}
.wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  border: 2px solid #cfcdcd;
  border-radius: 7px;
  box-sizing: border-box;
  overflow: hidden;
  // &:hover {
  //   border: 1px solid #006a60;

  // }
  &:has(input:focus) {
    border: 2px solid #01443d;
  }
}

.hasError {
  border: 1px solid $color-error;
}
.input {
  color: #2a3547;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 12px 44px 12px 12px;
  font-family: $base-font;
  font-weight: 400;
  font-size: 16px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: white;
  cursor: pointer;
  letter-spacing: 1.5px;

  &:disabled {
    color: $color-grey !important;
  }
}
.append {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
}
.passwordToggle {
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  background: unset;
  transition: color 0.25s ease-in-out;
  color: $color-grey;

  &:hover {
    color: #006a60;
  }

  &:focus-visible {
    outline: 2px solid #006a60;
  }
}
.error {
  font-family: $base-font;
  font-size: 12px;
  font-weight: 700;
  padding: 0 8px;
  margin-top: 4px;
  color: $color-error;
}
</style>
