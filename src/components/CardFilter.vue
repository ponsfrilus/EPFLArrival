<template>
  <div>
    <h2>Search</h2>
    <input v-model="searchString" type="text" class="searchInput" />
    <div class="searchCategories">
      <div :class="typeStyle(typeFilter)" v-for="typeFilter in types">
       <input type="radio" :value="typeFilter" v-model="searchCategory" >{{capitilize(typeFilter)}}</input>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['types'],
    data () {
      return {
        searchString: '',
        searchCategory: ''
      }
    },
    watch: {
      searchString () {
        this.filter()
      },
      searchCategory () {
        this.filter()
      }
    },
    methods: {
      capitilize (text) {
        return text[0].toUpperCase() + text.slice(1)
      },
      typeStyle (type) {
        return 'check check-' + type
      },
      filter () {
        this.$emit('filter', {searchCategory: this.searchCategory, searchString: this.searchString})
      }
    }
  }
</script>