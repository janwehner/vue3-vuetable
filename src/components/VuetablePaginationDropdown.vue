<template>
  <div :class="[customCss.wrapperClass]">
    <a @click="loadPage('prev')"
       :class="[customCss.linkClass, {[customCss.disabledClass] : isOnFirstPage}]">
      <i :class="customCss.icons.prev"></i>
    </a>
    <select :class="['vuetable-pagination-dropdown', customCss.dropdownClass]" @change="loadPage($event.target.selectedIndex+firstPage)">
      <option v-for="(n, i) in totalPage" :key="n" :class="[customCss.pageClass]" :value="i+firstPage" :selected="isCurrentPage(i+firstPage)">
        {{pageText}} {{n}}
      </option>
    </select>
    <a @click="loadPage('next')"
       :class="[customCss.linkClass, {[customCss.disabledClass] : isOnLastPage}]">
      <i :class="customCss.icons.next"></i>
    </a>
  </div>
</template>

<script>
import PaginationMixin from './VuetablePaginationMixin.vue'

export default {
  mixins: [PaginationMixin],
  props: {
    pageText: {
      type: String,
      default () {
        return 'Page'
      }
    }
  },
}
</script>
