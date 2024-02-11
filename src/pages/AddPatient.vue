<template>
  <div class="gridHedarTitle">
    <div class="page__title">Your patients</div>
    <div>
      <BaseButton :variant="'danger'" @click="$router.go(-1)">Back</BaseButton>
    </div>
    <div></div>
  </div>

  <div class="addPatient__wrapper">
    <div>
      <div>
        <BaseInput
          label="First name"
          type="name"
          placeholder="First name"
          :value="formData.firstName"
          :error="errors.firstName"
          :disabled="isLoading"
        />
      </div>
      <div>
        <BaseInput
          label="Phone number"
          type="number"
          placeholder="Phone number"
          :value="formData.phoneNumber"
          :error="errors.phoneNumber"
          :disabled="isLoading"
          @on-input="(value) => changeField('phoneNumber', value)"
        />
      </div>
    </div>

    <div>
      <div>
        <BaseInput
          label="Last name"
          type="name"
          placeholder="Last name"
          :value="formData.lastName"
          :error="errors.lastName"
          :disabled="isLoading"
          @on-input="(value) => changeField('lastName', value)"
        />
      </div>

      <div>
        <BaseInput
          label="Date of birth"
          type="number"
          placeholder=" Date of birth "
          :value="formData.dataOfBirth"
          :error="errors.dataOfBirth"
          :disabled="isLoading"
          @on-input="(value) => changeField('dataOfBirth', value)"
        />
      </div>
    </div>

    <div>
      <div>
        <BaseInput
          label="Family name"
          type="text"
          placeholder="Family name"
          :value="formData.familyName"
          :error="errors.familyName"
          :disabled="isLoading"
          @on-input="(value) => changeField('familyName', value)"
        />
      </div>

      <div>
        <BaseGenderlist v-model="formData.gender" :disabled="isLoading" />
      </div>

      <div class="savePatientButton">
        <div></div>
        <div><BaseButton variant="green">Save</BaseButton></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import API from '@/api/API'

const isLoading = ref<boolean>(false)

export interface ILoginView {
  firstName: string
  LastName: string
  familyName: string
  phoneNumber: number
  dataOfBirth: number
  gender: string | number
}

const serverError = reactive({
  message: ''
})
const serverSuccess = reactive({
  message: ''
})

const formData = ref({
  firstName: '',
  lastName: '',
  familyName: '',
  phoneNumber: '',
  dataOfBirth: '',
  gender: '',
})

const errors = reactive({
  firstName: '',
  lastName: '',
  familyName: '',
  phoneNumber: '',
  dataOfBirth: '',
  gender: '',
})

const changeField = (
  propertyName: 'firstName' | 'lastName' | 'familyName' | 'phoneNumber' | 'dataOfBirth' | 'gender',
  value: string
) => {
  formData.value[propertyName] = value

  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}
</script>

<style lang="scss">
.gridHedarTitle {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 20px;
}

.addPatient__wrapper {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
}

.savePatientButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>
