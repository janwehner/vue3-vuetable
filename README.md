# Vue3-Vuetable - data table simplify!

# Usage
## NPM

```shell
npm install vue3-vuetable --save-dev
```

```javascript
import Vuetable from 'vue3-vuetable'
import { createApp } from 'vue'

// then register it globally
const app = createApp({...})
app.use(Vuetable)

// or locally
var Child = {
  template: '<vuetable></vueladda>'
}

const app = createApp({
  components: {
    'vuetable': Vuetable,
  }
})
```

Also you have the ability to access certain components if you need them:
```javascript
Vuetable: Vuetable.default/Vuetable.Vuetable,
VuetablePagination: Vuetable.VuetablePagination,
VuetablePaginationInfo: Vuetable.VuetablePaginationInfo,
VuetablePaginationDropdown: Vuetable.VuetablePaginationDropdown
```

# License
Vuetable is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
