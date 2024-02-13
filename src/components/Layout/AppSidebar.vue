<template>
  <div>
    <div class="logo">
      <div><img src="../../assets/crm-logo.png" /></div>
      <div class="logo__title">MEDCRM</div>
    </div>
    <!-- <el-menu-item index="1">
      <el-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon-tabler icon-tabler-file-description iconClass"
          width="14px"
          height="14px"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          <path d="M9 17h6"></path>
          <path d="M9 13h6"></path>
        </svg>
      </el-icon>
      <template #title>Dashboard</template>
    </el-menu-item> -->
    <RouterLink to="/home/patient" style="text-decoration: none">
      <el-menu-item index="2">
        <el-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-tabler icon-tabler-file-description iconClass"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
            <path d="M9 17h6"></path>
            <path d="M9 13h6"></path>
          </svg>
        </el-icon>
        <template #title>Patient</template>
      </el-menu-item>
    </RouterLink>
    <!-- <el-menu-item index="3">
      <el-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon-tabler icon-tabler-file-description iconClass"
          width="14px"
          height="14px"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          <path d="M9 17h6"></path>
          <path d="M9 13h6"></path>
        </svg>
      </el-icon>
      <template #title>Visit</template>
    </el-menu-item> -->
    <RouterLink to="/home/treatment" style="text-decoration: none">
      <el-menu-item index="4">
        <el-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-tabler icon-tabler-file-description iconClass"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
            <path d="M9 17h6"></path>
            <path d="M9 13h6"></path>
          </svg>
        </el-icon>
        <template #title>Treatment</template>
      </el-menu-item></RouterLink
    >
    <!-- <RouterLink to="/home/payment" style="text-decoration: none">
      <el-menu-item index="5">
        <el-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-tabler icon-tabler-file-description iconClass"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
            <path d="M9 17h6"></path>
            <path d="M9 13h6"></path>
          </svg>
        </el-icon>
        <template #title>Payment</template>
      </el-menu-item>
    </RouterLink>
    <el-menu-item index="6">
      <el-icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon-tabler icon-tabler-file-description iconClass"
          width="14px"
          height="14px"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
          <path d="M9 17h6"></path>
          <path d="M9 13h6"></path>
        </svg>
      </el-icon>
      <template #title>Manage</template>
    </el-menu-item> -->
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.logo {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid #e4e1e1;

  div {
    img {
      width: 100px;
    }
  }

  &__title {
    font-family: $base-font;
    font-size: 19px;
    font-weight: 700;
  }
}
.el-menu {
  border: none !important;
  overflow: hidden !important;
}

.el-menu-item {
  line-height: 10px !important;
  svg {
    font-size: 14px;
  }
  span {
    font-family: $base-font;
    color: #000;
  }
}
.el-menu-item {
  font-family: $base-font;
  color: #000 !important;
  padding: 0 10px;
  margin: 10px;
  border-radius: 10px !important;

  &:hover {
    color: #006a60 !important;
    border-radius: 10px !important;
    // box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  }
  &.is-active {
    color: #fff !important;
    background: #006a60 !important;
    border-radius: 10px !important;
    // box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.16);
  }
}

.el-menu-item .el-menu-tooltip__trigger {
  left: -8px !important;
}
</style>
