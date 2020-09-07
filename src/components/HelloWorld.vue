<template>
  <div class="hello">
    <img :src="img" class="hello__img" alt="every day picture" />
    <p class="text-left">{{ hitokoto.hitokoto }}</p>
    <p class="text-right">—— {{ hitokoto.from }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      img: "",
      hitokoto: {},
    };
  },
  mounted() {
    this.getBingImg();
    this.getHitokoto();
  },
  methods: {
    getBingImg() {
      this.http.get("/api/bin_pic").then((res) => {
        this.img = res.data;
      });
    },
    getHitokoto() {
      this.http.get("/api/hitokoto").then((res) => {
        this.hitokoto = res.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.hello {
  max-width: 600px;
  width: 90%;
  margin: 0 auto;
  &__img {
    width: 100%;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
}
</style>
