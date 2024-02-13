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
          @on-input="(value) => changeField('firstName', value)"
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
        <span>{{ errors.phoneNumber }}</span>
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
          type="date"
          placeholder="YYYY-MM-DD"
          :value="formData.dateOfBirth"
          :error="errors.dateOfBirth"
          :disabled="isLoading"
          @on-input="(value) => changeField('dateOfBirth', value)"
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
        <BaseGenderlist
          :modelValue="formData.genderId"
          @update:modelValue="(value) => (formData.genderId = value)"
          :disabled="isLoading"
        />
      </div>

      <div class="savePatientButton">
        <div></div>
        <div><BaseButton @click="savePatient" variant="green">Save</BaseButton></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import API from '@/api/API'
import type { IPostPatient } from '@/types'

const isLoading = ref(false)

interface IPatientForm {
  firstName: string
  lastName: string
  familyName: string
  dateOfBirth: string
  phoneNumber: string
  genderId: number | null
}

const formData = reactive<IPatientForm>({
  firstName: '',
  lastName: '',
  familyName: '',
  dateOfBirth: '',
  phoneNumber: '',
  genderId: null
})

const errors = reactive({
  message: '',
  firstName: '',
  lastName: '',
  familyName: '',
  phoneNumber: '',
  dateOfBirth: '',
  genderId: ''
})

const changeField = (propertyName: keyof IPatientForm, value: string) => {
  formData[propertyName] = value
  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}

const savePatient = async () => {
  isLoading.value = true
  try {
    const payload: IPostPatient = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      familyName: formData.familyName,
      dateOfBirth: format(new Date(formData.dateOfBirth), 'yyyy-MM-dd'),
      phoneNumber: formData.phoneNumber,
      genderId: formData.genderId || 0
    }

    console.log('Sending payload:', payload)

    const response = await API.PatientPost(payload)
  } catch (error) {
    console.error('Error occurred:', error)
    if (error.response && error.response.data) {
      console.error('Server error message:', error.response.data)
    }
  } finally {
    isLoading.value = false
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
