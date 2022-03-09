<template>
    <router-link :to="{ name: 'HouseDetails', params: { id: house.id } }">
        <div class="row shadow rounded m-2">
            <div class="col-12 d-flex justify-content-center p-3">
                <img class="img-fluid img-size" :src="house.imgUrl" alt="">
            </div>
            <H3 class="col-12 text-center">
                {{house.bedrooms}} beds | {{house.bathrooms}} baths
            </H3>
        </div>
    </router-link>
</template>


<script>
    import { AppState } from "../AppState";
    import { computed, reactive, onMounted } from "vue";
    export default {
        props: {
            house: {
                type: Object,
                required: true
            }

        },
        setup() {
            return {
            }
        }
    }
</script>


<style lang="scss" scoped>
    .img-size {
        height: 200px;
        width: 350px;
        border-radius: 1%;
    }
</style>