import Vue from 'vue'
import CardsHolder from 'src/components/CardsHolder'

describe('CardsHolder.vue', () => {
  it('has an Identity radio button', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (createElement) => createElement(CardsHolder, {
        props:
          {infos: [
            {
      "title":"SDF",
      "desc_fr":"Site officiel de la SDF",
      "desc_en":"Official SDF website",
      "link":"http://studdevf.epfl.ch",
      "tags":[
        "sdf",
        "students",
        "website"
      ],
      "maincat":[
        "communication"
      ]
    },
          ]}
      })
    })
    expect(vm.$el.querySelector('div.searchCategories div.check-communication').textContent)
      .to.equal('Communication')
  })
})
