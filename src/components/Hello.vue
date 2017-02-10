<template>
  <div class="home">
    <h1>EPFL Arrival Map</h1>
    <p>Arrival is a website<sup><a href="#footer">1</a></sup> to allow new comers in EPFL to<br />easily find relevant service and information.</p>
      <div class="searchForm">
        <h2>Search</h2>
        <div class="searchBlock">
<input v-model="searchString" type="text" class="searchInput" />
          <div class="squareCheck">
            <label>
              <div class="check check-identity">
                <input type="radio" name="search" value="identity" v-model="searchBox"> Identity
              </div>
            </label>
            <label>
              <div class="check check-others">
                <input type="radio" name="search" value="others" v-model="searchBox"> Others
              </div>
            </label>
          </div>

          <div class="squareCheck">
            <label>
              <div class="check check-backup">
                <input type="radio" name="search" value="backup" v-model="searchBox"> Backup / Sharing
              </div>
            </label>
            <label>
              <div class="check check-communication">
                <input type="radio" name="search" value="communication" v-model="searchBox"> Communication
              </div>
            </label>
          </div>

          <div class="squareCheck">
            <label>
              <div class="check check-all">
                <input type="radio" name="search" value="all" v-model="searchBox"> All
              </div>
            </label>
            <label>
              <div class="check check-service">
                <input type="radio" name="search" value="service" v-model="searchBox"> Service / Tools
              </div>
            </label>
          </div>

        </div>
      </div>
      <br />
      <br />
      <br />
      <div class="landing" >
        <div class="tiles-flex" >
          <sub-hello v-for="info in filteredInfos" :info="info"></sub-hello>
        </div>
      </div>
      <a name="footer" />
      <footer>
        &mdash; <small>Proudly using <a href="https://vuejs.org/v2/">vue.js</a> and made with <a href="https://en.wikipedia.org/wiki/Open-source_software">oss</a> by <a href="https://go.epfl.ch/nbo">nbo</a> | Submit new tiles with <acronym title="Pull Request" lang="en">PR</acronym> on <a href="https://gitlab.epfl.ch/###">gitlab</a></small> &mdash;
      </footer>
  </div>
</template>

<script>
import SubHello from './SubHello'

export default {
  name: 'hello',
  props: ['infos'],
  data () {
    return {
      searchString: '',
      searchBox: 'all'
    }
  },
  components: {
    SubHello
  },
  computed: {
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
