<template>
  <form>
    <div class="form-group">
      <label for="bedrooms" class="">bedrooms:</label>
      <input
        v-model="editable.bedrooms"
        placeholder="bedrooms"
        type="text"
        class="form-control"
        name="bedrooms"
        id="bedrooms"
        required
      />
    </div>
    <div class="form-group">
      <label for="bathrooms" class="">bathrooms:</label>
      <input
        v-model="editable.bathrooms"
        placeholder="bathrooms"
        type="text"
        class="form-control"
        name="bathrooms"
        id="bathrooms"
        required
      />
    </div>
    <div class="form-group">
      <label for="levels" class="">levels:</label>
      <input
        v-model="editable.levels"
        placeholder="levels"
        type="text"
        class="form-control"
        name="levels"
        id="levels"
        required
      />
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input
        v-model="editable.price"
        placeholder="Price"
        type="number"
        class="form-control"
        name="price"
        id="price"
        min="0"
        max="9999999"
      />
    </div>
    <div class="form-group">
      <label for="year" class="">year:</label>
      <input
        v-model="editable.year"
        placeholder="year"
        type="year"
        class="form-control"
        name="year"
        id="year"
      />
    </div>
    <div class="form-group">
      <label for="description" class="">description:</label>
      <textarea
        v-model="editable.description"
        placeholder="Description"
        type="text"
        class="form-control"
        name="description"
        id="description"
        rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="img" class="">img:</label>
      <input
        v-model="editable.imgUrl"
        placeholder="https://imgurl.com"
        type="url"
        class="form-control"
        name="img"
        id="img"
        required
      />
    </div>
    <div class="d-flex justify-content-between my-3">
      <button
        type="button"
        data-bs-dismiss="modal"
        aria-label="Close"
        class="btn text-dark lighten-20 text-uppercase selectable"
      >
        <b> cancel </b>
      </button>
      <button
        @click="createHouse"
        type="button"
        class="btn btn-success text-dark text-uppercase selectable"
      >
        <b> Create House </b>
      </button>
    </div>
  </form>
</template>


<script>
import { computed, reactive, onMounted, ref, watchEffect } from "vue";
import { housesService } from "../services/HousesService";
import { Modal } from "bootstrap";
import { useRouter } from "vue-router";

export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async createHouse() {
        let newHouse = await housesService.createHouse(editable.value);
        editable.value = {};
        Modal.getOrCreateInstance(document.getElementById("form-modal")).hide();
        router.push({ name: "HouseDetails", params: { id: newHouse.id } });
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>