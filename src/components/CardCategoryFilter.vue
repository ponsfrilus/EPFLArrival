<template lang="html">
  <div>
    <label>
      <div :class="typeStyle">
        <input type="radio" name="search" :value="type" v-model="searchBox"> {{capitilize(type)}}
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ['type'],
  methods: {
    capitilize (text) {
      return text[0].toUpperCase() + text.slice(1)
    }
  },
  computed: {
    typeStyle () {
      return 'check check-' + this.type
    }
  }
}
</script>
