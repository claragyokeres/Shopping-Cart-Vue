<template>
  <div>
    <article>
      <img class="product-image" :src="product.image" />
      <p class="product-title">{{product.name}}</p>
      <p class="product-description">{{product.description}}</p>
      <p class="product-price">{{product.price}} {{ product.currency }}</p>
      <button @click="addToCart" class="add-to-cart" type="button">Add to cart</button>
    </article>
  </div>
</template>

<script>
import { mapActions } from "vuex";

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
    this.product = data.default;
  },
  methods: {
    addToCart() {
      this.add(this.product);
      console.log(this.product);
    },
    ...mapActions({
      add: "addItem"
    })
  }
};
</script>

<style lang="scss" scoped>
.product-image {
  max-width: 40%;
}

.product-title {
  font-weight: bold;
}

.product-description {
  width: 80%;
  text-align: center;
  display: inline-block;
}

.add-to-cart {
  padding: 1rem;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid #000;
}
</style>