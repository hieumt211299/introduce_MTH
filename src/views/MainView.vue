<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import HeaderView from './HeaderView.vue'
import SectionView from './SectionView.vue'
import { useRouter } from 'vue-router'

interface IAbout {
  title: string
  content: string
}

interface IPersonalProject {
  url: string
  project: string
  description: string
  img: string
}
const personalProject = reactive<IPersonalProject[]>([
  {
    url: 'todolist',
    project: 'To-Do List Application',
    description:
      'A web-based To-Do List app with features for task management, including adding, deleting, updating tasks, tracking task status, sorting, searching, and batch deleting. The project demonstrates strong web development skills, resulting in a versatile and user-friendly app.',
    img: 'project1'
  },
  {
    url: 'figflix',
    project: 'figflix: Movie Streaming Website',
    description:
      'Figflix is a responsive movie streaming website inspired by a Figma template. It includes a user-friendly search function, a movie detail page, and a slider feature for saving favorite movies, improving the overall user experience. ',
    img: 'project2'
  },
  {
    url: 'tictactoe',
    project: 'Tic Tac Toe',
    description:
      'Tic-Tac-Toe project with a large 20x20 grid layout, offering an innovative and challenging take on the traditional game. Players can enjoy an expansive board for a more complex and strategic gaming experience.',
    img: 'project3'
  },
  {
    url: 'simongame',
    project: 'SimonGame',
    description:
      'The Simon Game is a classic memory and pattern recognition challenge. Players repeat color and sound sequences, with increasing complexity, testing memory and focus to achieve higher scores.',
    img: 'project4'
  }
])

const aboutContents = reactive<IAbout[]>([
  { title: 'Phone', content: '0927167725' },
  { title: 'Email', content: 'hieumt211299@gmail.com' },
  { title: 'Website', content: 'latterlatterlatter' }
])

const router = useRouter()
const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  const scrollPosition = window.scrollY || window.pageYOffset
  showBackToTop.value = scrollPosition > 3000 // Adjust the threshold as needed
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// const handleClickProject = (url: string) => {
//   router.push(`/project/${url}`)
// }
</script>
<template>
  <HeaderView></HeaderView>
  <SectionView title="about me">
    <template #content>
      <div class="flex justify-between gap-10">
        <div class="flex flex-col gap-2 font-semibold">
          <div class="border-b-2 pb-12 flex flex-col gap-5">
            <h3 class="text-lg leading-relaxed">
              I'm a Frontend Developer. With logical and creative thinking skills.<br />
              I want to become one of the key members bringing effective IT solutions to the
              company. At the same time, I want to improve my knowledge in your professional working
              environment.
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda facilis ipsa
              exercitationem itaque nobis delectus, aperiam molestiae. Nemo nam corporis provident
              vitae at veritatis dolorem sapiente doloremque fugiat libero. Ea.
            </p>
          </div>
          <div class="flex justify-start gap-12">
            <div v-for="(item, index) in aboutContents" :key="index">
              <h3 class="text-lg leading-relaxed">
                {{ item.title }}
              </h3>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
        <div class="max-w-[300px]">
          <div
            class="absolute bg-[#FFEFE5] w-full max-w-[300px] h-20 flex justify-around items-center"
          >
            <a
              href="https://github.com/hieumt211299"
              target="_blank"
              class="h-6 w-6"
              style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
              ><img src="../assets/img/github.png" alt=""
            /></a>
            <a
              href="https://www.linkedin.com/in/hieumt211299/"
              target="_blank"
              class="h-6 w-6"
              style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
              ><img src="../assets/img/linkedin.png" alt=""
            /></a>
            <a
              href="mailto:hieumt211299@gmail.com"
              target="_blank"
              class="h-6 w-6"
              style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
              ><img src="../assets/img/gmail.png" alt=""
            /></a>
          </div>
          <img src="../assets/img/image1.jpeg" alt="" />
        </div>
      </div>
    </template>
  </SectionView>
  <SectionView title="education" class="bg-[#f9fbfd]">
    <template #content>
      <div class="education flex w-full gap-2">
        <div class="w-full">
          <div>
            <h3 class="text-lg leading-relaxed">2014 - 2017</h3>
            <p class="uppercase">high school</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <div class="bg-[#ff6600] rounded-full w-3 h-3"></div>
            <div class="block w-full h-1 bg-[#e5e7eb]"></div>
          </div>
          <div class="pr-10 pt-5">
            <h3 class="text-lg">Nhan viet</h3>
            <p class="uppercase">Ho Chi Minh city</p>
          </div>
        </div>
        <div class="w-full">
          <div>
            <h3 class="text-lg leading-relaxed">2017 - 2021</h3>
            <p class="uppercase">information technology</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <div class="bg-[#ff6600] rounded-full w-3 h-3"></div>
            <div class="block w-full h-1 bg-[#e5e7eb]"></div>
          </div>
          <div class="pr-10 pt-5">
            <h3 class="text-lg">
              HCMC University of Foreign Languages - Information Technology (HUFLIT)
            </h3>
            <p class="uppercase">Ho Chi Minh city</p>
          </div>
        </div>
        <div class="w-full">
          <div>
            <h3 class="text-lg leading-relaxed">TOEIC CERTIFICATE</h3>
            <p class="uppercase">&nbsp;</p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <div class="bg-[#ff6600] rounded-full w-3 h-3"></div>
            <div class="block w-full h-1 bg-[#e5e7eb]"></div>
          </div>
          <div class="pr-10 pt-5">
            <h3 class="text-lg">IIG VietNam</h3>
            <p class="uppercase">Ho Chi Minh city</p>
            <p class="uppercase">total score: 655</p>
          </div>
        </div>
      </div>
    </template>
  </SectionView>
  <SectionView title="experience">
    <template #content>
      <div class="experience flex justify-center gap-20">
        <div class="text-right mb-10" style="flex: 0 0 49%">
          <h3 class="text-lg leading-relaxed">6.2023 - 10.2023</h3>
          <p class="uppercase">Front-end developer</p>
        </div>
        <div>
          <div class="experience-dot flex flex-col gap-2 h-full w-3 relative">
            <div class="bg-[#ff6600] rounded-full w-3 h-3 absolute z-50"></div>
            &nbsp;
          </div>
        </div>
        <div class="flex flex-col gap-3 mb-10" style="flex: 0 0 49%">
          <div>
            <h3 class="text-lg leading-relaxed">scaleUp</h3>
            <p class="uppercase">Ho Chi Minh city</p>
          </div>
          <p class="text-lg text-black">
            ScaleUP is a product that aids shops in realizing the Omnichannel strategy. The ScaleUP
            Platform is a platform that consolidates all orders from all sales channels while
            optimizing operations to boost revenue and profits.
          </p>
        </div>
      </div>

      <div class="experience flex justify-center gap-20">
        <div class="flex flex-col gap-3 text-right" style="flex: 0 0 49%">
          <div>
            <h3 class="text-lg leading-relaxed">scaleUp</h3>
            <p class="uppercase">Ho Chi Minh city</p>
          </div>
          <p class="text-lg text-black">
            ScaleUP is a product that aids shops in realizing the Omnichannel strategy. The ScaleUP
            Platform is a platform that consolidates all orders from all sales channels while
            optimizing operations to boost revenue and profits.
          </p>
        </div>
        <div>
          <div class="experience-dot flex flex-col gap-2 h-full w-3 relative">
            <div class="bg-[#ff6600] rounded-full w-3 h-3 absolute z-50"></div>
            &nbsp;
          </div>
        </div>
        <div class="text-left mb-10" style="flex: 0 0 49%">
          <h3 class="text-lg leading-relaxed">4.2023 - 6.2023</h3>
          <p class="uppercase">intern Front-end developer</p>
        </div>
      </div>
    </template>
  </SectionView>
  <SectionView title="personal project" class="bg-[#f9fbfd]">
    <template #content>
      <div class="flex flex-col gap-20">
        <div
          v-for="(item, idx) in personalProject"
          :key="idx"
          class="flex gap-20"
          :class="{ 'flex-row-reverse': idx % 2 == 0 }"
        >
          <div class="text-black gap-5 flex flex-col">
            <h3 class="text-lg font-semibold">{{ item.project }}</h3>
            <p class="text-black text-base">
              {{ item.description }}
            </p>
          </div>
          <div class="">
            <div class="w-96 h-fit">
              <img
                :src="`introduce_MTH/assets/img/project${idx + 1}.png`"
                :alt="`${item.project}`"
                class="object-contain w-96 h-fit max-h-[350px] max-w-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </SectionView>
  <SectionView title="contact me">
    <template #content>
      <div class="flex justify-between font-semibold">
        <div class="flex justify-start gap-12 font-semibold">
          <div v-for="(item, index) in aboutContents" :key="index">
            <h3 class="text-lg leading-relaxed">
              {{ item.title }}
            </h3>
            <p>{{ item.content }}</p>
          </div>
        </div>
        <div class="flex gap-10 justify-center items-center">
          <a
            href="https://github.com/hieumt211299"
            target="_blank"
            class="h-6 w-6"
            style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ><img src="../assets/img/github.png" alt="" class="h-6 w-6 scale-150"
          /></a>
          <a
            href="https://www.linkedin.com/in/hieumt211299/"
            target="_blank"
            class="h-6 w-6"
            style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ><img src="../assets/img/linkedin.png" alt="" class="h-6 w-6 scale-150"
          /></a>
          <a
            href="mailto:hieumt211299@gmail.com"
            target="_blank"
            class="h-6 w-6"
            style="box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px"
            ><img src="../assets/img/gmail.png" alt="" class="h-6 w-6 scale-150"
          /></a>
        </div>
      </div>
    </template>
  </SectionView>
  <footer id="footer-copyright" class="bg-[#f9fbfd] !h-20">
    <div class="hm-footer-copyright text-center h-full w-full flex justify-center items-center">
      <p class="font-semibold">&copy; copyright Mai Trung Hieu</p>
    </div>

    <div id="scroll-Top">
      <div class="return-to-top">
        <i class="fa fa-angle-up" id="scroll-top"></i>
      </div>
    </div>
  </footer>
  <button @click="scrollToTop" class="back-to-top" v-show="showBackToTop">Back to Top</button>
</template>
<style lang="scss">
.experience-dot::after {
  content: '';
  width: 3px;
  height: 100%;
  background-color: #e5e7eb;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: -1;
}
.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #ff6600;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-to-top:hover {
  background-color: #ff791f;
}
</style>
