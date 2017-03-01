<template>
  <div :id="computedID">
    <a :class="computedClass" class="tile" :id="'tile-' + computedID">
      <h2 class="tile-title" :id="'tile-title-' + computedID">{{ info.title }}</h2>
      <div class="tile-divider"></div>
      <p class="tile-description">{{ info.desc_en }}
        <br /><a :href="info.link" :title="info.link" :id="'tile-link-' + computedID">{{ computedLink }}</a>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'carditem',
  props: ['info'],
  computed: {
    computedClass: function () {
      let classArray = this.class ? this.class.split(' ') : []
      if (this.info.maincat[0]) {
        let addClass = 'tile-' + this.info.maincat[0]
        classArray.push(addClass)
      }
      return classArray
    },
    computedLink: function () {
      let shorterlink = this.info.link.replace('http://', '').replace('https://', '')
      return shorterlink.length > 30 ? shorterlink.substring(0, 27) + '...' : shorterlink
    },
    computedID: function () {
      // lowercase + replace space with dash
      return this.info.title.replace(/\s+/g, '-').toLowerCase()
    }
  }
}
</script>
