<template>
  <div class="home">
      <card-filter :initType="searchBox" :types="types" @filter="filter"></card-filter>
      <div class="landing" >
        <transition-group name="list" tag="div" class="tiles-flex">
          <card-item @selectedCat="selectedCategory(info)"  v-for="info in filteredInfos" :info="info" :key="info"></card-item>
        </transition-group>
      </div>
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
          if (tag.toLowerCase().includes(this.searchString.toLowerCase())) {
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
<style lang="css">
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
  .bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>
