<template>
  <div v-show="tablePagination && lastPage > firstPage" :class="customCss.wrapperClass">
    <a @click="loadPage(firstPage)"
      :class="['btn-nav', customCss.linkClass, isOnFirstPage ? customCss.disabledClass : '']">
        <i v-if="customCss.icons.first != ''" :class="[customCss.icons.first]"></i>
        <span v-else>&laquo;</span>
    </a>
    <a @click="loadPage('prev')"
      :class="['btn-nav', customCss.linkClass, isOnFirstPage ? customCss.disabledClass : '']">
        <i v-if="customCss.icons.next != ''" :class="[customCss.icons.prev]"></i>
        <span v-else>&nbsp;&lsaquo;</span>
    </a>
    <template v-if="notEnoughPages">
      <template v-for="(n, i) in totalPage" :key="i">
        <a @click="loadPage(i+firstPage)"
          :class="[customCss.pageClass, isCurrentPage(i+firstPage) ? customCss.activeClass : '']"
          v-html="n">
        </a>
      </template>
    </template>
    <template v-else>
      <template v-for="(n, i) in windowSize" :key="i">
        <a @click="loadPage(windowStart+i+firstPage-1)"
          :class="[customCss.pageClass, isCurrentPage(windowStart+i+firstPage-1) ? customCss.activeClass : '']"
          v-html="windowStart+n-1">
        </a>
      </template>
    </template>
    <a @click="loadPage('next')"
      :class="['btn-nav', customCss.linkClass, isOnLastPage ? customCss.disabledClass : '']">
      <i v-if="customCss.icons.next != ''" :class="[customCss.icons.next]"></i>
      <span v-else>&rsaquo;&nbsp;</span>
    </a>
    <a @click="loadPage(lastPage)"
      :class="['btn-nav', customCss.linkClass, isOnLastPage ? customCss.disabledClass : '']">
      <i v-if="customCss.icons.last != ''" :class="[customCss.icons.last]"></i>
      <span v-else>&raquo;</span>
    </a>
  </div>
</template>

<script>
import PaginationMixin from './VuetablePaginationMixin.vue'

export default {
  mixins: [PaginationMixin],
}
</script>
<style>
  .vuetable-pagination {
    background: #f9fafb !important;
  }
</style>
