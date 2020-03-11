<template>
  <portal to="popup">
    <PopupBase :label="label" @close="$emit('close')">
      <slot slot="backdrop" name="backdrop" />
      <slot />
    </PopupBase>
  </portal>
</template>

<script>
import PopupBase from "./PopupBase.vue"
import Vue from "vue"
import PortalVue from "portal-vue"

Vue.use(PortalVue)

export default {
  name: "PopupRouterView",
  components: {
    PopupBase
  },
  props: {
    label: {
      required: true,
      type: String
    }
  }
}
</script>
