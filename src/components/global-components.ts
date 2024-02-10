import type { App } from 'vue'


// Base components
import BaseAlert from '@/components/Base/BaseAlert.vue'
import BaseSpinner from '@/components/Base/BaseSpinner.vue'
import BaseCheckbox from '@/components/Base/BaseCheckbox.vue'
import BaseInput from '@/components/Base/BaseInput.vue'
import BaseButton from '@/components/Base/BaseButton.vue'

//Ui
import AppHeader from '@/components/Layout/AppHeader.vue'
import AppSidebar from '@/components/Layout/AppSidebar.vue'

export default {
  install(app: App): void {
    // Configure some parameters before installing components

    // Register global components here
    app.component('BaseAlert', BaseAlert)
    app.component('BaseSpinner', BaseSpinner)
    app.component('BaseCheckbox', BaseCheckbox)
    app.component('BaseInput', BaseInput)
    app.component('BaseButton', BaseButton)
    app.component('AppHeader', AppHeader)
    app.component('AppSidebar', AppSidebar)
  }
}
