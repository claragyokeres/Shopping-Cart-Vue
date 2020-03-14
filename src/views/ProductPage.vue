<template>
  <div>
    <article>
      <img class="product-image" :src="product.image" />
      <p class="product-title">{{product.name}}</p>
      <p class="product-price">{{product.price}} {{ product.currency }}:-</p>
      <p>{{product.description}}</p>
      <button @click="addToCart" class="add-to-cart" type="button">ADD ITEM</button>
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

.add-to-cart {
  border: 1px solid black;
}
</style>