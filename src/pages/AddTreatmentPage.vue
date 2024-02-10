<template>
    <div class="page__title">Treatment</div>

           <div class="wrapper">
            <div>
                <BaseInput label="Treatment type" type="name" placeholder="Treatment type" :value="formData.treatment"
                    :error="errors.treatment" :disabled="isLoading"
                    @on-input="(value) => changeField('treatment', value)" />
            </div>

            <div class="savePatientButton">
                <div></div>
                <div>
                    <BaseButton variant="green">Save</BaseButton>
                </div>
            </div>
           </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import API from '@/api/API';

const isLoading = ref<boolean>(false)

export interface IAddVisitedView {
    treatment: string
}

const serverError = reactive({
    message: ''
})
const serverSuccess = reactive({
    message: ''
})

const formData = ref({
    treatment: '',

})

const errors = reactive({
    treatment: '',
})

const changeField = (propertyName: 'treatment' , value: string) => {
    formData.value[propertyName] = value

    if (errors[propertyName]) {
        errors[propertyName] = ''
    }
}

</script>

<style lang="scss">
.wrapper {
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 50px;
}

.savePatientButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}</style>
