<template>
  <div class="container-fluid">
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <!-- Progress Dots -->
      <ol class="carousel-indicators">
        <li
          v-for="(slide, index) in slides"
          :key="index"
          :data-target="carousel"
          :data-slide-to="index"
          :class="{ active: index === currentIndex }"
        ></li>
      </ol>

      <!-- Slides -->
      <div class="carousel-inner text-center">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ 'carousel-item': true, active: index === currentIndex }"
        >
          <img :src="slide.image" class="d-block w-100" alt="Slide Image" />
          <div class="carousel-caption d-block w-75">
            <h1 class="h1 font-weight-bold"
              :class="{
                'animated fadeInDown': true,
                'delay-1s': index === currentIndex,
              }"
              style="font-size: 4rem;"
            >
              {{ slide.title }}
            </h1>
            <div
              class="shape"
              :class="{
                'animated fadeInDown': true,
                'delay-1s': index === currentIndex,
              }"
            ></div>
            <p class="fs-2"
              :class="{
                'animated fadeInUp': true,
                'delay-2s': index === currentIndex,
              }"
            >
              {{ slide.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideshowVue",
  data() {
    return {
      slides: [
        {
          image: "http://boholtechdoctor.com/images/it_service/slide1.jpg",
          title: "Internet Solutions",
          description: "Fast Internet Services",
        },
        {
          image: "http://boholtechdoctor.com/images/it_service/slide2.jpg",
          title: "Fast & Affordable",
          description: "Computer Services",
        },
        {
          image: "http://boholtechdoctor.com/images/it_service/slide3.jpg",
          title: "We Will Fix It",
          description: "Call Us Now!",
        },
      ],
      currentIndex: 0,
      isActive: false,
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.slides.length - 1
          : this.currentIndex - 1;
    },
    nextSlide() {
      this.currentIndex =
        this.currentIndex === this.slides.length - 1
          ? 0
          : this.currentIndex + 1;
    },
  },
  mounted() {
    // Auto advance to the next slide every 5 seconds
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  },
};
</script>

<style scoped>
/* Style for Carousel Container */
.container-fluid {
  margin-top: 10px;
  margin-bottom: 2rem;
}

/* Style for Carousel Slides */
.carousel-item {
  height: 600px;
  position: relative;
}

/* Style for Slide Images */
.carousel-item img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: both;
}

/* Style for Slide Text Overlay */
.carousel-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 1;
}

/* Style for Slide Text Animation */
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}

.delay-1s {
  animation-delay: 1s;
}

.delay-2s {
  animation-delay: 2s;
}

.fadeInDown {
  animation-name: fadeInDown;
}

.fadeInUp {
  animation-name: fadeInUp;
}

/* Style for Progress Dots */
.carousel-indicators {
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  left: 35%;
}

.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
}

.carousel-indicators .active {
  background-color: #fff;
}

/* Style for Navigation Arrows */
.carousel-control-prev,
.carousel-control-next {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: rgba(105, 101, 101, 0.5);
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  font-size: 1rem;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath d='M6 1L2 4l4 3V1z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath d='M2 1v6l4-3L2 1z'/%3E%3C/svg%3E");
}

/* Animation Keyframes */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.shape {
  position: absolute;
  top: 25%;
  left: 0;
  width: 100%;
  height: 125px;
  background-color: rgb(120, 168, 240);
  transform: scale(0);
  transition: transform 0.5s ease-out;
  z-index: -1;
}
</style>
