import Vuetable from './components/Vuetable.vue'

import VuetableFieldMixin from './components/VuetableFieldMixin.vue'
import VuetableFieldCheckboxMixin from './components/VuetableFieldCheckboxMixin.vue'
import VuetablePaginationMixin from './components/VuetablePaginationMixin.vue'
import VuetablePaginationInfoMixin from './components/VuetablePaginationInfoMixin.vue'

import VuetablePagination from './components/VuetablePagination.vue'
import VuetablePaginationDropDown from './components/VuetablePaginationDropdown.vue'
import VuetablePaginationInfo from './components/VuetablePaginationInfo.vue'
import VuetableFieldCheckbox from './components/VuetableFieldCheckbox.vue'
import VuetableFieldHandle from './components/VuetableFieldHandle.vue'
import VuetableFieldSequence from './components/VuetableFieldSequence.vue'
import VuetableRowHeader from './components/VuetableRowHeader.vue'
import VuetableColGutter from './components/VuetableColGutter.vue'
import Promise from 'promise-polyfill'
import { App } from 'vue';

const rootVariable = (typeof self === 'object' && self.self === self && self) || (typeof global === 'object' && global) || this
if (!rootVariable.Promise) {
  rootVariable.Promise = Promise
}

const install = (app: App) => {
  app.component("vuetable", Vuetable);
  app.component("vuetable-col-gutter", VuetableColGutter)
  app.component("vuetable-field-checkbox", VuetableFieldCheckbox)
  app.component("vuetable-field-handle", VuetableFieldHandle)
  app.component("vuetable-field-sequence", VuetableFieldSequence)
  app.component("vuetable-pagination", VuetablePagination);
  app.component("vuetable-pagination-dropdown", VuetablePaginationDropDown);
  app.component("vuetable-pagination-info", VuetablePaginationInfo);
  app.component("vuetable-row-header", VuetableRowHeader)
}

export {
  Vuetable,
  // Mixins
  VuetableFieldMixin,
  VuetableFieldCheckboxMixin,
  VuetablePaginationInfoMixin,
  VuetablePaginationMixin,
  // UI components
  VuetableColGutter,
  VuetableFieldCheckbox,
  VuetableFieldHandle,
  VuetableFieldSequence,
  VuetablePagination,
  VuetablePaginationDropDown,
  VuetablePaginationInfo,
  VuetableRowHeader,

  install
};

export default Vuetable;
