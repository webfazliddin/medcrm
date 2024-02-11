<template>
  <div class="tableBG">
    <el-table :data="patients" style="width: 100%">
      <el-table-column prop="fullname" label="Patient information" width="340px" />
      <el-table-column prop="dateOfBirth" label="Date of birth" align="center" />
      <el-table-column prop="phoneNumber" label="Phone number" align="center" />
      <el-table-column prop="gender" label="Gender" align="center" />
      <el-table-column align="center">
        <template #header>
          <div style="font-weight: 700; font-size: 14px">Actions</div>
        </template>
        <template #default="scope">
          <div class="svg__action">
            <div class="svg__action">
              <div>
                <RouterLink to="/home/add-visit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path
                      d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                    ></path>
                    <path d="M12 11l0 6"></path>
                    <path d="M9 14l6 0"></path>
                  </svg>
                </RouterLink>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler icon-tabler-trash"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="red"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  style="cursor: pointer"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 7l  16 0"></path>
                  <path d="M10 11l0 6"></path>
                  <path d="M14 11l0 6"></path>
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler icon-tabler-eye cursor-pointer"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  color="#05b187"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                  <path
                    d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"
                  ></path>
                </svg>
              </div>
            </div>
            <RouterLink to="/home/add-visit">
              <!-- SVG for Add Visit -->
            </RouterLink>
            <!-- Delete Button -->
            <!-- SVG for Delete -->
            <!-- View Details Button -->
            <!-- SVG for View Details -->
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'PatientTable',
  props: {
    patients: {
      type: Array as PropType<
        Array<{ fullname: string; dateOfBirth: string; phoneNumber: string; gender: string }>
      >,
      required: true
    }
  }
})
</script>

<style lang="scss">
.tableBG {
  border-radius: 10px;
  background: #fff;
}
.svg__action {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}


th .cell {
  font-weight: 700 !important;
  font-size: 14px !important;
}

thead {
  color: #000 !important;
  font-size: 0.875rem !important;
}

.el-table__header-wrapper .el-table__header {
  box-shadow: 0 0 10px rgba(46, 44, 44, 0.4) !important;
}

* {
  font-family: $base-font !important;
}
</style>
