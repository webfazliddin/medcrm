// Base components
import BaseAlert from '@/components/Base/BaseAlert.vue'
import BaseSpinner from '@/components/Base/BaseSpinner.vue'
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'

//Ui
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppSidebar from '@/components/Layout/AppSidebar.vue'


declare module '@vue/runtime-core' {
  export interface GlobalComponents {

    // Base
    BaseAlert: typeof BaseAlert
    BaseInput: typeof BaseInput
    BaseButton: typeof BaseButton
    BaseSpinner: typeof BaseSpinner

    //Layout
    AppHeader: typeof AppHeader
    AppSidebar: typeof AppSidebar
  }
}