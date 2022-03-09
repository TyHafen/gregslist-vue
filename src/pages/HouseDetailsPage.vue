<template>
  <div class="container-fluid p-3 rounded shadow justify-content-center">
    <div class="row">
      <img class="img-fluid img-size" :src="house.imgUrl" alt="" />
    </div>
    <div class="row text-center">
      <h1>
        {{ house.bedrooms }} bedrooms | {{ house.bathrooms }} bathrooms | ${{
          house.price
        }}
      </h1>
      <h3>{{ house.description }}</h3>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core";
import { housesService } from "../services/HousesService";
import { useRoute } from "vue-router";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        AppState.activeHouse = {};
        logger.log(route.params.id);
        await housesService.getById(route.params.id);
      } catch (error) {
        logger.log(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      house: computed(() => AppState.activeHouse),
    };
  },
};
</script>


<style lang="scss" scoped>
.img-size {
  height: 50vh;
  width: 150vh;
}
</style>