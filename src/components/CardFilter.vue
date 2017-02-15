<template>
  <div>
    <input v-model="searchString" type="text" class="searchInput" autofocus />
    <div class="searchCategories">
      <div :class="typeStyle(typeFilter)" v-for="typeFilter in types" @click="select(typeFilter)">
       <input type="radio" :value="typeFilter" v-model="searchCategory" @click="select(typeFilter)">{{capitilize(typeFilter)}}</input>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['types', 'initType'],
    data () {
      return {
        searchString: '',
        searchCategory: ''
      }
    },
    created () {
      this.searchCategory = this.initType
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
      },
      select (typeFilter) {
        this.searchCategory = typeFilter
      }
    }
  }
</script>
<style lang="css" scoped>
  label {
    font-size: 1.25em;
  }
  div.check:hover, input:hover {
    cursor: pointer;
  }
  .searchCategories{
    width: 550px;
    display: -webkit-flex;
   display: flex;
   -webkit-align-items: center;
   align-items: center;
   -webkit-justify-content: center;
   justify-content: center;
   /* You can set flex-wrap and flex-direction individually */
   -webkit-flex-direction: row;
   flex-direction: row;
   -webkit-flex-wrap: wrap;
   flex-wrap: wrap;
   /* Or do it all in one line with flex flow */
   -webkit-flex-flow: row wrap;
   flex-flow: row wrap;
   /* tweak the where items line up on the row */
   /* valid values are: flex-start, flex-end, space-between, space-around, stretch */
   -webkit-align-content: flex-end;
   align-content: flex-end;
   margin: auto;
  }
</style>
