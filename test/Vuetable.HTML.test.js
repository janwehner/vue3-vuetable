import { mount } from '@vue/test-utils'
import Vuetable from 'components/Vuetable.vue'
import {expect, describe, it} from '@jest/globals'

describe('Vuetable - HTML structure', () => {

  const mountVuetable = (fields) => mount(Vuetable, {
    propsData: {
      loadOnStart: false,
      fields
    }
  })

  it('renders HTML table', () => {
    const wrapper = mountVuetable([
      'code', 'description'
    ])

    expect(wrapper.element).toMatchSnapshot()
  })

})
