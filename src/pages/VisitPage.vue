<template>
    <div class="page__title">Add Visit</div>

    <div class="addPatient__wrapper">
        <div>
            <div>
                <BaseInput label="Visited time" type="name" placeholder="visited time" :value="formData.visitedTime"
                    :error="errors.visitedTime" :disabled="isLoading"
                    @on-input="(value) => changeField('visitedTime', value)" />
            </div>

            <div>
                <BaseInput label="Complaint" type="name" placeholder="complaint" :value="formData.complaint"
                    :error="errors.complaint" :disabled="isLoading"
                    @on-input="(value) => changeField('complaint', value)" />
            </div>

            <div>
                <BaseInput label="Diagnosis" type="name" placeholder="diagnosis" :value="formData.diagnosis"
                    :error="errors.diagnosis" :disabled="isLoading"
                    @on-input="(value) => changeField('diagnosis', value)" />
            </div>


        </div>


        <div>
            <div>
                <div class="labelGender">Treatment</div>
                <el-select v-model="value" class="m-2" placeholder=" treatment select" size="large">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>

            <!-- <div>
                <div class="labelGender">Payment type</div>
                <el-select v-model="value2" class="m-2" placeholder=" payment type" size="large">
                    <el-option v-for="item in options2" :key="item.value2" :label="item.label" :value="item.value2" />
                </el-select>
            </div> -->
            <div>
                <BaseInput label="Retsep" type="name" placeholder="retsep" :value="formData.retsep" :error="errors.retsep"
                    :disabled="isLoading" @on-input="(value) => changeField('retsep', value)" />
            </div>

            <div>
                <BaseInput label="Visit Price" type="number" placeholder="Visit Price" :value="formData.visitPrice"
                    :error="errors.visitPrice" :disabled="isLoading"
                    @on-input="(value) => changeField('visitPrice', value)" />
            </div>

            <div class="savePatientButton">
                <div></div>
                <div>
                    <BaseButton variant="green">Save</BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const isLoading = ref<boolean>(false)
const value = ref('')
const value2 = ref('')

export interface IAddVisitedView {
    visitedTime: string
    complaint: string,
    diagnosis: string,
    lastName: string,
    dataOfBirth: number
}

const serverError = reactive({
    message: ''
})
const serverSuccess = reactive({
    message: ''
})

const formData = ref({
    visitedTime: '',
    complaint: '',
    diagnosis: '',
    retsep: '',
    visitPrice: ''
})

const errors = reactive({
    visitedTime: '',
    complaint: '',
    diagnosis: '',
    retsep: '',
    visitPrice: ''
})

const changeField = (propertyName: 'visitedTime' | 'complaint' | 'diagnosis' | 'retsep' | 'visitPrice', value: string) => {
    formData.value[propertyName] = value

    if (errors[propertyName]) {
        errors[propertyName] = ''
    }
}

const options = [
    {
        value: 'Headake',
        label: 'Headake',
    },
    {
        value: 'Broken leg',
        label: 'Broken leg',
    },
    {
        value: 'Fall in down',
        label: 'Fall in down',
    },
]

const options2 = [
    {
        value2: 'Naqt',
        label: 'Naqt',
    },
    {
        value2: 'Plastik',
        label: 'Plastik',
    },
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
    min-height: 44px !important;
    margin-bottom: 12px;


}

.labelGender {
    font-family: $base-font;
    font-weight: 700;
    font-size: 16px;
    line-height: 166%;
    color: #3F3F3F;
    margin-bottom: 8px;
}

.savePatientButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}</style>
