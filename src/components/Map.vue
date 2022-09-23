<template>
  <div id="map"></div>
</template>

<script>
export default {
  mounted() {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibmluZXdpbGwiLCJhIjoiY2piY2IwcTZhMWg3MDJ6cWcwb3oyOHFldCJ9.c_Y7X7cxIz91x7t7BptUug';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/ninewill/cl8cpodnb003s15qpcntja501', // style URL
      center: [121.531599, 25.0449], // starting position [lng, lat]
      zoom: 14.5, // starting zoom
      projection: 'globe', // display the map as a 3D globe
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/reset.scss';
@import '@/assets/scss/main.scss';

// * ==========================================================================
// * MAP 區塊
// * ==========================================================================

#map{
  width: 100%;
  height: 450px;

  @include min-width(1025px) {
    height: 600px;
  }
}

</style>
