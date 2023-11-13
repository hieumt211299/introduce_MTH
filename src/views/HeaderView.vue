<script setup lang="ts">
import { ref } from 'vue'
import 'animate.css'

interface INav {
  title: string
}
type Emits = {
  (event: 'scrollToTarget', title: string): void
}

const emit = defineEmits<Emits>()

const navList = ref<INav[]>([
  { title: 'skills' },
  { title: 'personal project' },
  { title: 'experience' },
  // { title: 'education' },
  { title: 'contact' }
])

const images = [
  'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2V8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dW5pdmVyc2V8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1529788295308-1eace6f67388?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuaXZlcnNlfGVufDB8fDB8fHww',
  'https://media.istockphoto.com/id/1399246824/photo/digital-eye-wave-lines-stock-background.webp?b=1&s=170667a&w=0&k=20&c=k7LI06N_W3AKrcB17bN4wF-Dc29FZUmrg9Sicvxsg6E='
]

const scrollToTarget = (title: string) => {
  emit('scrollToTarget', title)
}
</script>
<template>
  <div class="header-view">
    <div class="header h-20 fixed w-full mx-auto my-0">
      <div class="flex justify-between items-center h-full px-20">
        <a href="/" class="name text-xl font-semibold">MTH</a>
        <div class="nav flex gap-10 uppercase h-full items-center justify-center">
          <div v-for="(item, index) in navList" :key="index">
            <!-- <a :href="`#${item.title}`" class="hover:text-[#ff6600] text-white">{{ item.title }}</a> -->
            <a @click="scrollToTarget(item.title)" class="hover:text-[#ff6600] text-white">{{
              item.title
            }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel w-full relative flex justify-center items-center">
      <div class="absolute z-50">
        <div class="header-text text-center uppercase flex flex-col gap-16">
          <h2
            class="animate__animated animate__fadeInDownBig uppercase text-6xl text-white font-bold leading-snug"
          >
            hello <span class="main-text_color">,</span> this is <br />
            Hieu <br />
            Mai Trung <span class="main-text_color">.</span>
          </h2>
          <p class="text-white text-base">frontend developer</p>

          <a href="../../public/cv.pdf" download="MaiTrungHieu_CV">
            <button
              class="animate__animated animate__fadeIn animate__delay-1s text-white p-4 bg-[#ff6600] self-center rounded-lg max-w-[200px] uppercase hover:bg-[#ff791f]"
            >
              download CV
            </button>
          </a>
        </div>
      </div>
      <el-carousel :interval="5000" arrow="always" height="100vh" width="100%">
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="`${item}`" alt="" class="hover:scale-100 object-cover" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style lang="scss">
.header-view {
  margin: 0 auto;

  .header {
    background: black;
    background: linear-gradient(rgba(0, 0, 0), rgba(246, 134, 59, 0.3));
    z-index: 9999;
    .name {
      color: var(--main-color);
    }
    .nav {
      a {
        transition: color 0.1s ease-in-out;
      }
    }
  }
  .carousel {
    .el-carousel {
      width: 100vw;
      .el-carousel__container {
        .el-carousel__item {
          background-image: linear-gradient(rgba(255, 102, 0, 0.1), rgba(255, 102, 0, 0.1));
        }
        i {
          scale: 1.5;
        }

        .el-carousel__arrow.el-carousel__arrow--left {
          margin-left: 5rem;
        }
        .el-carousel__arrow.el-carousel__arrow--right {
          margin-right: 5rem;
        }
        .el-carousel__arrow.el-carousel__arrow--left,
        .el-carousel__arrow.el-carousel__arrow--right {
          background-color: #ff6000;
        }
      }
      .el-carousel__indicators.el-carousel__indicators--horizontal {
        margin-bottom: 20px;
        li {
          padding: 10px;
        }
      }
    }
  }
}
</style>
