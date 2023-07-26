<template>
    <!-- <div class="maps"> -->
        <GoogleMap :api-key="apikey" style="width: 90%; height: 800px" :center="{ lat: lat, lng: lng }" :zoom="15">
            <Marker :options="{ position: { lat: lat, lng: lng } }" />
            <Marker :options="{ position: { lat: lat+0.001, lng: lng }, label }" />
        </GoogleMap>
    <!-- </div> -->
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
    components: {
        GoogleMap,
        Marker
    },

    data() {
        return {
            label: "courier",
            apiKey: 'AIzaSyBkMd3b4-R3RRbRNY1P6xUU91Pt1moo7Yw',
            lat: null,
            lng: null
        }
    },

    name: 'MapsComponent',

    created() {
        this.$getLocation()
            .then((coordinates) => {
                this.lat = coordinates.lat;
                this.lng = coordinates.lng;
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
</script>

<style scoped>
.maps {
    min-height: 80vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    widows: 100%;
}

</style>
