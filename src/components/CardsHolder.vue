<template>
  <div class="home">
    <h1>EPFL Arrival Map</h1>
    <p>{{types}}</p>
    <p>Arrival is a website<sup><a href="#footer">1</a></sup> to allow new comers in EPFL to<br />easily find relevant service and information.</p>
      <div class="searchForm">
        <h2>Search</h2>
        <div class="searchBlock">
          <input v-model="searchString" type="text" class="searchInput" />
          <card-category-filter :type="type" v-for="type in types" />

        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="landing" >
        <div class="tiles-flex" >
          <card-item v-for="info in filteredInfos" :info="info"></card-item>
        </div>
      </div>
      <a name="footer" />
      <footer>
        &mdash; <small>Proudly using <a href="https://vuejs.org/v2/">vue.js</a> and made with <a href="https://en.wikipedia.org/wiki/Open-source_software">oss</a> by <a href="https://go.epfl.ch/nbo">nbo</a> | Submit new tiles with <acronym title="Pull Request" lang="en">PR</acronym> on <a href="https://gitlab.epfl.ch/###">gitlab</a></small> &mdash;
      </footer>
  </div>
</template>

<script>
import CardItem from './CardItem'
import CardCategoryFilter from './CardCategoryFilter'

export default {
  name: 'CardsHolder',
  props: ['infos'],
  data () {
    return {
      searchString: '',
      searchBox: 'all'
    }
  },
  components: {
    CardItem, CardCategoryFilter
  },
  computed: {
    types () {
      return this.infos.reduce((prev, curr) => {
        let cats = curr.maincat
        cats.map((cat) => {
          if (prev.indexOf(cat) === -1) {
            prev.push(cat)
          }
        })
        return prev
      }, [])
    },
    filteredInfos () {
      // return this.infos
      // console.log('this.filter is now ' + this.searchBox)
      // first filter on main category
      let checkFiltered = this.infos
      if (this.searchBox !== '' && this.searchBox !== 'all') {
        checkFiltered = this.infos.filter((info) => {
          return info.maincat.find((cat) => {
            if (cat.includes(this.searchBox)) {
              return true
            }
          })
        })
      }
      return checkFiltered.filter((info) => {
        return info.tags.find((tag) => {
          if (tag.includes(this.searchString)) {
            return true
          }
        })
      })
    }
  }
}
</script>
