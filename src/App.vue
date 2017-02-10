<template>
<div id='app'>
  <hello :infos='tiles'></hello>
</div>
</template>

<script>
import Hello from './components/Hello'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Hello
  },
  data () {
    return {
      tiles: []
    }
  },
  created () {
    // Note ->> change for production (check branch + rawgit)
    axios.get('https://rawgit.com/ponsfrilus/EPFLArrival/czufferey%2Bdomq/json/Data/tiles.json')
    .then((response) => {
      console.log(response.data)
      this.tiles = response.data
    })
  }
}
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#hello {
  flex: 1;
}
#form {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.landing {
  width: 100%;
  max-width: 800px;
  /* Force to a maximum of 3 tiles wide */
  margin: 0 auto;
  text-align: center;
}

.landing .landing-title {
  text-align: center;
  font-size: 2em;
 /*  margin: .67em 0 */
}

.landing .landing-search {
  overflow: hidden;
  padding: 20px;
}

.landing .landing-search input[type="text"] {
  width: 640px;
  border-style: none;
  padding: 8px 12px;
  font-size: 16px;
  box-shadow: .5px 2px 4px 0 #bdbdbd;
}

@media screen and (max-width: 728px) {
  .landing .landing-search input[type="text"] {
    width: 420px;
  }
}

@media screen and (max-width: 508px) {
  .landing .landing-search {
    display: none;
  }
}

.tiles-flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-line-pack: center;
  align-content: center;
  max-width: 800px;
  /* purely to stop the max width of tiles at 3 */
}

.tile {
  /* looks */
  border-top: 8px solid #343537;
  background-color: #fff;
  box-shadow: .5px 2px 4px 0 #bdbdbd;
  /* sizing/boxing */
  width: 200px;
  height: 220px;
  margin: 10px;
  padding: 10px;
  /* animation */
  -webkit-transition: 250ms;
  transition: 250ms;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  will-change: transform;
  /* layout */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.tile-all { /* pink for all */
  border-top: 8px solid #fcf;
}

.tile-identity { /* red for identity */
  border-top: 8px solid #fcc;
}

.tile-communication { /* green for communication / UC */
  border-top: 8px solid #cfc;
}

.tile-others { /* yellow for others */
  border-top: 8px solid #ffc;
}

.tile-service { /* purple for service */
  border-top: 8px solid #ccf;
}

.tile-backup { /* blue for backup */
  border-top: 8px solid #cff;
}

.tile:hover {
  -webkit-transform: translate3d(0, -6px, 0);
  transform: translate3d(0, -6px, 0)
}

.tile .tile-title {
  /* looks */
  font-size: 20px;
  letter-spacing: .4px;
  color: #676363;
  /* sizing/boxing */
  height: 89px;
  width: 100%;
  margin: 0px;
  padding: 0px 20px;
  /* layout */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: auto;
  align-self: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.tile .tile-divider {
  height: 2px;
  width: 100%;
  margin: 0 5px;
  border: .5px solid #343537;
  background-color: #343537;
  -ms-flex-item-align: auto;
  align-self: auto;
}

.tile .tile-description {
  /* looks */
  font-size: 14px;
  letter-spacing: .2px;
  line-height: 1.25;
  color: #757575;
  /* sizing/boxing */
  height: 89px;
  width: 100%;
  margin: 0px;
  /* layout */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: auto;
  align-self: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.searchForm {
  display: block;
  width: 729px;
  margin: 0 auto;
  /* border: 1px solid pink;*/
}

.searchBlock {
  display: block;
  text-align: right;
  /* border: 1px solid purple; */
}

.searchInput {
  display: inline;
  margin-right: 5px;
}

.check {
  width: 100%;
  display: block;
}

.check-all { /* pink for all */
  background-color: #fcf;
}

.check-identity { /* red for identity */
  background-color: #fcc;
}

.check-communication { /* green for communication / UC */
  background-color: #cfc;
}

.check-others { /* yellow for others */
  background-color: #ffc;
}

.check-service { /* purple for service */
  background-color: #ccf;
}

.check-backup { /* blue for backup */
  background-color: #cff;
}

.squareCheck {
  float: right;
  width: 160px;
  text-align: left;
  /*padding-right:150px;*/
}
/* https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/ */
footer {
  text-align: center;
  margin-top: 100px;
  background-color: #FCFCFC;
  width: 600px;
  margin: 100px auto 0px auto;
}
</style>
