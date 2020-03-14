<template>
  <div class="home">
    <div class="productlist">
      <article v-for="product in products" v-bind:key="product.id" class="product">
        <router-link :to="{ name: 'ProductInfo', params: { id: product.id} }">
          <img class="thumbnail" :src="product.thumbnail" />
        </router-link>
        <p class="product-title">{{product.name}}</p>
        <p class="product-price">{{product.price}} SEK</p>
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

.product-title {
  font-weight: bold;
  text-align: left;
  margin-bottom: 1px;
}

.product-price {
  text-align: left;
  font-size: 18px;
  margin-top: 1px;
}
</style>