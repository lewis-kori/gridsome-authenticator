<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-3by2">
        <img
          :src="appendImageUrl(product.image.formats.small.url)"
          :alt="product.name"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title">
          {{ product.name }}
        </p>
        <hr />
        {{ product.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleProductDetails",
  props: {
    product: {
      type: Object,
      default: {
        image: {
          url: "https://picsum.photos/200/300",
        },
      },
    },
  },
  methods: {
    appendImageUrl(url) {
      return `http://localhost:1337${url}`;
    },
  },
};
</script>
