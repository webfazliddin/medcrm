<template>
    <div>
        <div class="page__title">Treatment</div>

        <div class="tableBG">
            <div class="patient__wrapper">
                <div class="patient__wrapper--right">
                    <BaseInput class="patient__search" />
                    <BaseButton class="patient__wrapper--searchButton" variant="green"><svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg></BaseButton>
                </div>
                <div>
                    <RouterLink to="/home/add-treatment">
                        <BaseButton variant="green">+ Add Treatment</BaseButton>
                    </RouterLink>
                </div>
            </div>
            <el-table flexible :data="tableData" style="width: 100%">
                <el-table-column prop="treatment" label="Treatment" align="left"  />
                <el-table-column align="right">
                    <template #header >
                        <div style="font-weight:700; font-size: 14px; margin-right: 10px">Actions</div>
                    </template>
                    <template #default="scope">
                        <div class="svg__action">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-pencil" width="20px"
                                    height="20px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                                    <path d="M13.5 6.5l4 4"></path>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-trash" width="20px"
                                    height="20px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 7l16 0"></path>
                                    <path d="M10 11l0 6"></path>
                                    <path d="M14 11l0 6"></path>
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-eye" width="20px"
                                    height="20px" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                    <path
                                        d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import API from '@/api/API';
import type { ITreatment } from "@/types";
import { ref, onMounted } from 'vue';

const isLoading = ref<boolean>(false);
const treatmentList = ref<ITreatment[]>([])

onMounted(async () => {
  const treatmentPromise = API.GetTreatments();

  await Promise.all([treatmentPromise]).then(([treatment]) => {
    treatmentList.value = treatment;
  })
})

const tableData = [
    {
        treatment: 'test',
    },
    {
        treatment: 'test',

    },
]
</script>
  
<style lang="scss">
.el-table__header-wrapper .el-table__header {
    box-shadow: 0 0 10px rgba(46, 44, 44, 0.4) !important;
}

* {
    font-family: $base-font;
}

.patient {
    &__wrapper {
        display: flex;
        justify-content: space-between;

        &--right {
            display: flex;
            align-items: right;
            gap: 10px;
            margin-top: -8px;
        }

        &--searchButton {
            margin-top: -4px;
        }
    }

    &__search {
        width: 400px;
    }
}

.el-table {
    border-radius: 10px !important;
    border: 1px solid #dfdfdf;
}

.svg__action {
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 10px;
}

.tableBG {
    border: 1px solid #dfdfdf;
    border-radius: 10px;
    padding: 20px;
    background: #FFF;
}

th .cell {
    font-weight: 700 !important;
    font-size: 14px !important;
}

// .el-table .cell  {
//   color: #000 !important;
// }

thead {
    color: #000 !important;
    font-size: .875rem !important;

}
</style>
  