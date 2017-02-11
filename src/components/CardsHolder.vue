<template>
  <div class="home">
    <h1>EPFL Arrival Map</h1>
    <p>Arrival is a website<sup><a href="#footer">1</a></sup> to allow new comers in EPFL to<br />easily find relevant service and information.</p>
      <card-filter :initType="searchBox" :types="types" @filter="filter"></card-filter>
      <div class="landing" >
        <div class="tiles-flex" >
          <card-item @selectedCat="selectedCategory(info)"  v-for="info in filteredInfos" :info="info"></card-item>
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
import CardFilter from './CardFilter'

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
    CardItem,
    CardFilter
  },
  methods: {
    filter (filterProps) {
      this.searchString = filterProps.searchString
      this.searchBox = filterProps.searchCategory
    }
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
      }, ['all'])
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
    },
    selectedCategory (info) {
      // console.log(info)
      this.searchBox = info
    }
  }
}
</script>
