<template>
  <div>
    <div class="page__title">Your patients</div>
    <div class="tableBG">
      <div class="patient__wrapper">
        <div class="patient__wrapper--right">
          <BaseInput class="patient__search"></BaseInput>
          <BaseButton class="patient__wrapper--searchButton" variant="green">
            <!-- Search Icon -->
          </BaseButton>
        </div>
        <RouterLink to="/home/add-patient" style="text-decoration: none">
          <BaseButton style="height: 40px; display: flex; align-items: center" variant="green">
            <!-- Plus Icon -->
            Яратиш
          </BaseButton>
        </RouterLink>
      </div>

      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="fullname" label="Patient information" width="340px" />
        <el-table-column prop="dateOfBirth" label="Date of birth" align="center" />
        <el-table-column prop="phoneNumber" label="Phone number" align="center" />
        <el-table-column prop="gender" label="Gender" align="center" />
        <el-table-column align="center">
          <template #header>
            <div style="font-weight: 700; font-size: 14px">Actions</div>
          </template>
          <template #default="scope">
            <!-- Action Icons -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import API from '@/api/API'
import { IGetPatient } from '@/types'



onMounted(async () => {
 API.PatientGetList();


})
</script>

<style lang="scss">
.el-table__header-wrapper .el-table__header {
  box-shadow: 0 0 10px rgba(46, 44, 44, 0.4) !important;
}

* {
  font-family: $base-font;
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

.svg__action {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.tableBG {
  border-radius: 10px;
  background: #fff;
}

th .cell {
  font-weight: 700 !important;
  font-size: 14px !important;
}

thead {
  color: #000 !important;
  font-size: 0.875rem !important;
}
</style>
