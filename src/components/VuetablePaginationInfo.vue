<template>
  <div :class="['vuetable-pagination-info', customCss.infoClass]"
    v-html="paginationInfo">
  </div>
</template>

<script>
import PaginationInfoMixin from './VuetablePaginationInfoMixin.vue'

export default {
  mixins: [PaginationInfoMixin],
}
</script>
<style>
  .vuetable-pagination-info {
    margin-top: auto;
    margin-bottom: auto;
  }
</style>

