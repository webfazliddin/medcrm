<template>
  <header
    :class="
      classnames($style.header, {
        [$style.isElevated]: elevated
      })
    "
  >
    <div :class="$style.headerLeft">
      <div :class="$style.togleIcon" @click="toggleSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M5 7H19" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
          <path d="M5 12H15" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
          <path d="M5 17H11" stroke="#33363F" stroke-width="2" stroke-linecap="round" />
        </svg>
      </div>
      <div :class="$style.togleIconMobile" @click="toggleSidebarMobile">
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="rgba(0, 0, 21, 0.5)"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </div>
    </div>

    <div class="userIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="transparent"
        height="24"
        width="24"
      >
        <circle cx="12" cy="8" r="5" stroke="#201926" stroke-width="2"></circle>
        <path
          d="M2.7793 21c1.9627-3.0102 5.35951-5 9.2211-5 3.8615 0 7.2583 1.9898 9.221 5"
          stroke="#201926"
          stroke-linecap="round"
          stroke-width="2"
        ></path>
      </svg>
    </div>
  </header>
</template>

<script setup lang="ts">
import classnames from 'classnames'
import { useAuthStore } from '@/stores/authStore'
import router from '@/router'

export interface IAppHeader {
  elevated?: boolean
}

withDefaults(defineProps<IAppHeader>(), {
  elevated: false
})

const emit = defineEmits<{
  (e: 'togle-sidebar'): void
  (e: 'togle-sidebar-mobile'): void
}>()

const toggleSidebar = () => {
  emit('togle-sidebar')
}
const toggleSidebarMobile = () => {
  emit('togle-sidebar-mobile')
}

const AuthStore = useAuthStore()

const logout = () => {
  AuthStore.logout()
  router.push('/')
}
</script>

<style module lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: $color-white;
  transition: box-shadow 0.25s ease-in-out;
}
.headerLeft {
  display: flex;
  align-items: center;
  gap: 20px;
}
.togleIcon {
  width: 40px;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  display: none;

  @include breakpoint('lg') {
    display: block;
  }

  &:hover {
    // background: #006A60;
    svg path {
      //   stroke: #fff;
    }
  }

  svg {
    width: 30px;
  }
}
.togleIconMobile {
  width: 40px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  display: block;

  @include breakpoint('lg') {
    display: none;
  }

  &:hover {
    background: #1c60b1;
    svg path {
      stroke: #fff;
    }
  }

  svg {
    width: 20px;
  }
}

svg {
  cursor: pointer;
}
</style>

<style>
.userIcon {
  border: 1px solid #155724;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
