<template>
  <div class="cart-summary">
    <p>Total: {{ totalAmount }}</p>
    <p>Items: {{ itemCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      itemCount: "count",
      totalAmount: "totalSum"
    })
  }
};
</script>

