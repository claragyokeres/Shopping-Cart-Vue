<template>
  <div class="home">
    <div class="productlist">
      <article v-for="product in products" v-bind:key="product.id" class="product">
        <router-link to="/product-info">
          <img class="thumbnail" :src="product.thumbnail" />
        </router-link>
        <p class="product-title">{{product.name}}</p>
        <p class="product-price">{{product.price}}:-</p>
      </article>
    </div>
  </div>
</template>

<script>
import data from "@/data/products.json";
export default {
  name: "Home",
  data() {
    return {
      products: data
    };
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.productlist {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>