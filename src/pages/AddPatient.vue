<template>
  <div class="page__title">Add Patient</div>

  <div class="addPatient__wrapper">
    <div>
      <div>
        <BaseInput
          label="First Name"
          type="name"
          placeholder="Your Name"
          :value="formData.name"
          :error="errors.name"
          :disabled="isLoading"
          @on-input="(value) => changeField('name', value)"
        />
      </div>

      <div>
        <BaseInput
          label="Family Name"
          type="name"
          placeholder="Your Name"
          :value="formData.name"
          :error="errors.name"
          :disabled="isLoading"
          @on-input="(value) => changeField('name', value)"
        />
      </div>

      <div>
        <BaseInput
          label="Phone Number"
          type="number"
          placeholder="Your Phone Number "
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
          label="Last Name"
          type="name"
          placeholder="Your Last Name"
          :value="formData.lastName"
          :error="errors.lastName"
          :disabled="isLoading"
          @on-input="(value) => changeField('lastName', value)"
        />
      </div>

      <div>
        <BaseInput
          label="Data of Birth"
          type="number"
          placeholder="Your data of birth "
          :value="formData.dataOfBirth"
          :error="errors.dataOfBirth"
          :disabled="isLoading"
          @on-input="(value) => changeField('dataOfBirth', value)"
        />
      </div>

      <div>
        <div class="labelGender">Gender</div>
        <el-select v-model="value" class="m-2" placeholder=" Choose gender" size="large">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
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
const value = ref('')

export interface ILoginView {
  name: string
  phoneNumber: number
  lastName: string
  dataOfBirth: number
}

const serverError = reactive({
  message: ''
})
const serverSuccess = reactive({
  message: ''
})

const formData = ref({
  name: '',
  phoneNumber: '',
  lastName: '',
  dataOfBirth: ''
})

const errors = reactive({
  name: '',
  phoneNumber: '',
  lastName: '',
  dataOfBirth: ''
})

const changeField = (
  propertyName: 'name' | 'phoneNumber' | 'lastName' | 'dataOfBirth',
  value: string
) => {
  formData.value[propertyName] = value

  if (errors[propertyName]) {
    errors[propertyName] = ''
  }
}

const options = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  },
  {
    value: 'Gey',
    label: 'Gey'
  }
]
</script>

<style lang="scss">
.addPatient__wrapper {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
}

.el-select__selected-item .el-select__placeholder {
  color: #000 !important;
}

.el-select__placeholder {
  color: #000 !important;
  position: inherit !important;
  margin-top: 10px !important;
  margin-bottom: -10px !important;
}

.el-select--large .el-select__wrapper {
  min-height: 47px !important;
}

.labelGender {
  font-family: $base-font;
  font-weight: 700;
  font-size: 16px;
  line-height: 166%;
  color: #3f3f3f;
  margin-bottom: 8px;
}
.savePatientButton {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>
