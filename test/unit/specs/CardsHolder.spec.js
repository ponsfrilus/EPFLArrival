import Vue from 'vue'
import CardsHolder from 'src/components/CardsHolder'

describe('CardsHolder.vue', () => {
  it('has an Identity radio button', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (createElement) => createElement(CardsHolder, {
        props:
          {infos: []}
      })
    })
    /* XXX TODO
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
      */
  })
})
