<template>
  <div class="cart-summary">
    <p>Total: {{ totalAmount }} :- Items: ( {{ itemCount }} )</p>
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

<style lang="scss" scoped>
.cart-summary {
  margin-left: 70%;
  border: solid 1px black;
  margin-right: 20px;
}
</style>