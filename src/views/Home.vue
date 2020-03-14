<template>
  <div class="home">
    <h1>This is my Shopping cart</h1>
    <div class="productlist">
      <article v-for="product in products" v-bind:key="product.id" class="product">
        <img class="thumbnail" :src="product.thumbnail" />
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
