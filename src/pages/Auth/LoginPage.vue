<template>
  <div class="login">
    <div class="login__wrapper">
      <!-- <h5 class="healseEase">MED <span class="medical">CRM</span></h5> -->
      <div class="login-logo"><img src="../../assets/crm-logo.png" alt="" /></div>

      <BaseAlert
        v-if="!!serverError.message"
        class="baseAlert"
        variant="danger"
        :message="serverError.message"
      />

      <BaseAlert
        v-if="!!serverSuccess.message"
        class="baseAlert"
        variant="success"
        :message="serverSuccess.message"
      />

      <BaseInput
        label="Логин"
        mask="############"
        :value="formData.username"
        :error="errors.username"
        :disabled="isLoading"
        @on-input="(value) => changeField('username', value)"
      />
      <!-- <BaseInput
        label="Логин"
        type="username"
        mask="############"
        placeholder="name@example.com"
        :value="formData.username"
        :error="errors.username"
        :disabled="isLoading"
        @on-input="(value) => changeField('username', value)"
      /> -->

      <BaseInput
        class="baseInput"
        label="Парол"
        type="password"
        placeholder="min.8 characters"
        :value="formData.password"
        :showPassword="showPassword"
        :error="errors.password"
        :disabled="isLoading"
        @onPasswordToggle="showPasswordClick"
        @on-input="(value) => changeField('password', value)"
      />

      <BaseButton variant="green" class="baseBtn" :loading="isLoading" @on-click="login">
        Кириш
      </BaseButton>

      <!-- <div class="text">
        Don`t have an account?<RouterLink to="/" class="link"> Sign up</RouterLink>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

export interface ILoginView {
  username: string
  password: string
}

const router = useRouter()
const authStore = useAuthStore()
const isLoading = ref<boolean>(false)
const showPassword = ref(false)
const serverError = reactive({
  message: ''
})
const serverSuccess = reactive({
  message: ''
})

const formData = ref({
  username: '',
  password: ''
})

const errors = reactive({
  username: '',
  password: ''
})

const showPasswordClick = () => {
  showPassword.value = !showPassword.value
}

const changeField = (propertyName: 'username' | 'password', value: string) => {
  formData.value[propertyName] = value

  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}

const login = () => {
  isLoading.value = true

  authStore
    .login({
      username: formData.value.username,
      password: formData.value.password
    })
    .then((response) => {
      serverError.message = ''
      serverSuccess.message = response.data.message
      router.push('/home')
    })
    .catch((error) => {
      const apiError = error.response.data
      serverError.message = apiError.message

      if (apiError.errors.username) {
        errors.username = apiError.errors.username
      }

      if (apiError.errors.password) {
        errors.password = apiError.errors.password
      }
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>

<style lang="scss">
.login {
  background: #e8f0f9;
  box-shadow: 0px 30px 20px rgba(0, 0, 0, 0.16);
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}

.login__wrapper {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 6px 30px 0px rgba(0, 0, 0, 0.08);
  max-width: 536px;
  width: 536px;
}
.login-logo {
  text-align: center;
  img {
    width: 290px;
  }
}

.baseAlert {
  margin-bottom: 16px;
}

.baseInput {
  margin-bottom: 28px !important;
}

.baseBtn {
  width: 100%;
  margin-bottom: 35px;
  font-size: 14px;
  padding: 12px 0;
}

// .forgotLink {
//   color: $color-primary;
//   display: block;
//   font-family: $base-font;
//   font-weight: 700;
//   font-size: 14px;
//   text-align: center;
//   margin-bottom: 110px;
//   text-decoration: none;

//   &:hover {
//     color: $color-primary;
//   }
// }

.text {
  color: $color-dark;
  font-family: $base-font;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
}

.healseEase {
  color: #006a60;
  font-size: 24px;
  font-family: $base-font;
  text-align: center;
}

.medical {
  color: #fd0049;
  font-weight: 400;
}
</style>
