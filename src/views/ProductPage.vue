<template>
  <div>
    <article>
      <img class="product-image" :src="product.image" />
      <p class="product-title">{{product.name}}</p>
      <p class="product-price">{{product.price}} {{ product.currency }}:-</p>
      <p>{{product.description}}</p>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    id: [String, Number]
  },
  data() {
    return {
      product: {}
    };
  },
  async mounted() {
    const data = await import("../data/" + this.id + ".json");
    this.product = data;
  }
};
</script>

<style lang="scss" scoped>
.product-image {
  max-width: 40%;
}
</style>