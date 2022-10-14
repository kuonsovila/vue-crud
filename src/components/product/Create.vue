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
                  v-model="name"
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
                  type=""
                  v-model="price"
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
                  v-model="description"
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
// const baseUrl = "http://localhost:3001";
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
    };
  },
  methods: {
    async onSubmit() {
      // event.preventDefault();
      await axios
        .post("http://localhost:3001/products", {
          name: this.name,
          description: this.description,
          price: this.price,
        })
        .then((res) => {
          console.log("response", res.data);
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // onReset() {
    //   this.name = "";
    //   this.description = "";
    //   this.price = 0;
    // },
  },
};
</script>
<style>
.container {
  padding-top: 3%;
  width: 60%;
}
.card {
  padding: 10px;
}
</style>
