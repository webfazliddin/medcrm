<template>
  <div>
    <div class="gridHedarTitle">
      <div class="page__title">Your patients</div>
      <div>
        <BaseButton :variant="'danger'" @click="$router.go(-1)">Back</BaseButton>
      </div>
      <div></div>
    </div>
    <div class="tableBG">
      <div class="patient__wrapper">
        <div class="patient__wrapper--right">
          <BaseInput class="patient__search"></BaseInput>
          <BaseButton class="patient__wrapper--searchButton" variant="green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </BaseButton>
        </div>
        <RouterLink to="/home/add-patient" style="text-decoration: none">
          <BaseButton style="display: flex; align-items: center" variant="green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon-tabler icon-tabler-plus"
              width="17px"
              height="17px"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 5l0 14"></path>
              <path d="M5 12l14 0"></path>
            </svg>
            Яратиш
          </BaseButton>
        </RouterLink>
      </div>

      <div>
        <BaseTable :patients="data" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import API from '@/api/API'

interface Patient {
  fullname: string
  dateOfBirth: string
  phoneNumber: string
  gender: string
}

const data = ref<Patient[]>([])

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1 // getMonth() returns 0-11
  const day = date.getDate()
  return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
}

onMounted(async () => {
  try {
    const response = await API.PatientGetList()
    // Map the response to your Patient interface
    data.value = response.map((item: any) => ({
      id: item.id,
      fullname: `${item.firstName} ${item.lastName} ${item.familyName}`,
      dateOfBirth: formatDate(item.dateOfBirth),
      phoneNumber: item.phoneNumber,
      gender: item.gender.name // Assuming the gender field is { id: number, name: string }
    }))
  } catch (error) {
    console.error('Failed to fetch patients:', error)
  }
})
const search = ref('')
</script>

<style lang="scss">
.gridHedarTitle {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 20px;
}

.patient__wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  &--right {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: -8px;
    position: sticky;
  }

  &--searchButton {
    border-radius: 10px;
    width: 35px;
    height: 35px;
    position: absolute;
    right: 5px;
    top: 12px;

    svg {
      width: 15px;
      margin-left: -7px;
      position: absolute;
      top: 10px;
    }
  }
}

.patient__search {
  width: 350px;
}

.tableBG {
  border-radius: 10px;
  background: #fff;
}
</style>
