<template>
  <div>
    <div class="columns is-centered is-vcentered is-mobile">
      <div id="qr" class="column is-narrow has-text-centered">
        <qrcode
          :value="productQrData"
          :options="{ width: 200, color: { dark: '#0275d8' } }"
        ></qrcode>
      </div>
    </div>
    <div class="columns is-centered is-vcentered is-mobile">
      <div class="column is-narrow has-text-centered">
        <b-button type="is-primary is-light" @click="print">Print Qr code</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QrCode",
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
  computed: {
    productQrData() {
      const data = { id: this.product.id, name: this.product.name };
      return JSON.stringify(data);
    },
  },
  methods: {
    print(){
      this.$htmlToPaper('qr')
    }
  }
};
</script>
