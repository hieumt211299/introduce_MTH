<script setup lang="ts">
import { ref } from 'vue'
import 'animate.css'
interface INav {
  title: string
}
const navList = ref<INav[]>([
  { title: 'about me' },
  { title: 'education' },
  { title: 'experience' },
  { title: 'personal project' },
  { title: 'contact' }
  // { title: 'clients' },
  // { title: 'contact' }
])
</script>
<template>
  <div class="header-view">
    <div class="header h-20 fixed w-full mx-auto my-0">
      <div class="flex justify-between items-center h-full px-20">
        <a href="/" class="name text-xl font-semibold">MTH</a>
        <div class="nav flex gap-10 uppercase h-full items-center justify-center">
          <div v-for="(item, index) in navList" :key="index">
            <a :href="`#${item.title}`" class="hover:text-[#ff6600] text-white">{{ item.title }}</a>
          </div>
        </div>
      </div>
    </div>
    <div
      id="welcome-hero"
      class="welcome-hero w-screen overflow-auto flex justify-center items-center"
    >
      <div class="header-text text-center uppercase flex flex-col gap-16">
        <h2
          class="animate__animated animate__fadeInDownBig uppercase text-6xl text-white font-bold leading-snug"
        >
          hi <span class="main-text_color">,</span> i am <br />
          Hieu <br />
          Mai Trung <span class="main-text_color">.</span>
        </h2>
        <p class="text-white text-base">frontend developer</p>

        <a href="https://hieumt211299.github.io/introduce_MTH/cv.pdf" download="MaiTrungHieu_CV">
          <button
            class="animate__animated animate__fadeIn animate__delay-1s text-white p-4 bg-[#ff6600] self-center rounded-lg max-w-[200px] uppercase"
          >
            download CV
          </button>
        </a>
      </div>
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
  .welcome-hero {
    background-image: linear-gradient(rgba(255, 102, 0, 0.1), rgba(255, 102, 0, 0.1)),
      url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg);
    background-size: cover; /* Adjust background sizing as needed */
    background-position: center;
    overflow: auto;
    height: calc(100vh);
  }
}
</style>
