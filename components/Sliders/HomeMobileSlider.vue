<template>
  <div class="carousel">
    <div
      ref="homeMobileCarousel"
      v-swiper:mySwiper="swiperOption"
    >
      <h2>{{data.name}}</h2>
      <div
        class="swiper-wrapper"
      >
        <div
          class="swiper-slide"
          v-for="(item, index) in data.images"
          :key="index"
        >
          <img class='image'
            :src="item.mobile"
            :alt="item.alt"
          />
          <p>{{item.alt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeMobileSlider",
    props: {
      data: {
        type: Object
      }
    },
    data () {
      return {
        sliding: false,
        left: false,
        right: true,
        image: 0,
        currentSlide: 0,
        imageModal: false,
        smallCarousel: false,
        interacting: false,
        hoveredNext: false,
        hoveredPrev: false,
        sliderPosition: 0,
        nudged: false,
        nudgedVal: 0,
        swiperOption: {
          initialSlide: 1,
          slidesPerView: 'auto',
          spaceBetween: 20,
          autoplay: false,
          loop: false,
          paginationHide: true,
          pagination: ".swiper-pagination"
        }
      };
    },
    methods: {
    },
    computed: {
      currentIndex: {
        // get current slider index
        cache: false,
        get () {
          if (this.$refs.blogCarousel) {
            return this.$refs.blogCarousel.swiper
              ? this.$refs.blogCarousel.swiper.realIndex
              : 0;
          } else return false;
        }
      }
    }
  };
</script>

<style lang="scss">
  h2 {
    padding: 10px 0;
  }
  .swiper-container {
    height: auto !important;
    min-height: 100%;
    overflow: hidden;
    margin-left: 38px;
    margin-right: auto;
    padding: 40px 0;
  }
  .inner-carousel {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .swiper-slide {
    overflow: hidden;
    width: 38vw !important;
    max-width: 38vw !important;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      z-index: 0;
      cursor: pointer;
    }
    .image {
      position: relative;
      .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 24px;
      }
    }
  }
</style>
