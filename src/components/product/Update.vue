<template>
  <div>
    <HomeVue />
    <div class="container">
      <b-card>
        <router-link to="/">
          <i class="bi bi-arrow-left"></i>
        </router-link>
        <hr />
        <b-form @submit.prevent="onSubmit">
          <b-row>
            <b-col cols="6">
              <b-form-group id="input-group-1" label="Name" label-for="input-1">
                <b-form-input
                  v-model="product.name"
                  type="text"
                  placeholder="Khmer food etc."
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                id="input-group-1"
                label="Price"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  type="number"
                  v-model="product.price"
                  placeholder="0.00 $"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-form-group
                id="input-group-2"
                label="Description"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  placeholder="description"
                  v-model="product.description"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
const baseURL = "http://localhost:3001";
import HomeVue from "../../views/Home.vue";
export default {
  components: {
    HomeVue,
  },
  data() {
    return {
      name: "",
      description: "",
      price: 0.0,
      product: {},
    };
  },
  mounted() {
    this.getProduct(this.$route.params.id);
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal.fire({
        position: "",
        icon: "success",
        title: "Your update has been saved",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    onSubmit() {
      axios
        .put(`${baseURL}/products/${this.product.id}`, this.product)
        .then(() => {
          //   this.message = "The dish was updated successfully!";
          this.$router.push({ name: "product" });
          //   this.showAlert();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getProduct(id) {
      axios
        .get(`${baseURL}/products/${id}`)
        .then((response) => {
          console.log(response.data);
          this.product = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    back() {
      this.$router.push({ name: "product" });
    },
  },
};
</script>
<style>
.container {
  padding-top: 3%;
  width: 60%;
  margin: auto;
}
</style>
