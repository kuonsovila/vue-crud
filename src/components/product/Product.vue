<template>
  <div>
    <HomeVue />
    <div class="form">
      <b-row>
        <!-- <h3>Products</h3> -->
        <b-button variant="outline-warning" to="/product/new"
          >New Product</b-button
        >
      </b-row>
      <div class="form-data">
        <table class="ttable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <!-- <th>Type</th> -->
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <!-- <td>{{ product.id }}</td> -->
              <td>{{ product.name }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.description }}</td>
              <td>
                <button class="icon" @click="editProduct(product.id)">
                  <i class="bi bi-pen"></i>
                </button>
                <button class="icon" @click="deleteDish(product.id)">
                  <i class="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const baseUrl = "http://localhost:3001";
import HomeVue from "../../views/Home.vue";
export default {
  name: "Home",
  components: {
    HomeVue,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      axios.get(`${baseUrl}/products`).then((response) => {
        console.log("products", response.data);
        this.products = response.data;
      });
    },
    editProduct(id) {
      this.$router.push({ name: "updateProduct", params: { id: id } });
    },
    deleteDish(id) {
      axios.delete(`${baseUrl}/products/${id}`).then((res) => {
        let i = this.products.map((data) => data.id).indexOf(id);
        console.log(res);
        this.products.splice(i, 1);
      });
    },
    // getDisplayProduct(category) {
    //   return {
    //     id: category.id,
    //     name: category.name,
    //     imageUrl: category.imageUrl,
    //     status: category.status,
    //   };
    // },
  },
};
</script>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
.form {
  width: 80%;
  margin: auto;
  top: 10%;
  padding: 20px;
}
table {
  width: 100%;
  margin: auto;
}
.ttable {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-radius: 7px 7px 0 0;
  overflow: hidden;
}
.ttable thead tr {
  /* padding: 15px; */
  text-align: left;
  background-color: aquamarine;
}
.ttable th,
.ttable td {
  padding: 15px;
}

.ttable tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.icon {
  border-radius: 5px;
  /* background-color: bisque; */
  border: none;
  border: 1px solid rgb(223, 218, 218);
  padding: 5px;
  margin: 3px;
}
</style>
