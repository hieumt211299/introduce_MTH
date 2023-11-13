<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import HeaderView from './HeaderView.vue'
import SectionView from './SectionView.vue'

interface IAbout {
  title: string
  content: string
}

interface IPersonalProject {
  url: string
  project: string
  description: string
  img: string
  tech: string[]
  live: string
  source: string
}

interface ISkill {
  name: string
  svg: string
}

const personalProject = reactive<IPersonalProject[]>([
  {
    url: 'todolist',
    project: 'To-Do List Application',
    description:
      'A web-based To-Do List app with features for task management, including adding, deleting, updating tasks, tracking task status, sorting, searching, and batch deleting. The project demonstrates strong web development skills, resulting in a versatile and user-friendly app.',
    img: 'https://media.giphy.com/media/V8v3i74bpTDJEuvqD6/giphy.gif',
    tech: ['TypeScript', 'VueJS', 'Pinia', 'Tailwindcss', 'ElementUI'],
    live: 'https://mthtodolist.netlify.app',
    source: 'https://github.com/hieumt211299/ToDoList'
  },
  {
    url: 'figflix',
    project: 'figflix: Movie Streaming Website',
    description:
      'Figflix is a responsive movie streaming website inspired by a Figma template. It includes a user-friendly search function, a movie detail page, and a slider feature for saving favorite movies, improving the overall user experience. ',
    img: 'https://media.giphy.com/media/Y2Zz43kJD9WyB2t4Wn/giphy.gif',
    tech: ['HTML', 'SCSS', 'TypeScript', 'VueJS', 'Restful API'],
    live: 'https://mthfigflix.netlify.app',
    source: 'https://github.com/hieumt211299/figflix'
  },
  {
    url: 'tictactoe',
    project: 'Tic Tac Toe',
    description:
      'Tic-Tac-Toe project with a large 20x20 grid layout, offering an innovative and challenging take on the traditional game. Players can enjoy an expansive board for a more complex and strategic gaming experience.',
    img: 'https://media.giphy.com/media/7POcN9Iv6un2v6vKj8/giphy.gif',
    tech: ['HTML', 'SCSS', 'Javascript', 'VueJS'],
    live: 'https://mthtictactoe.netlify.app',
    source: 'https://github.com/hieumt211299/TicTacToe'
  },
  {
    url: 'simongame',
    project: 'SimonGame',
    description:
      'The Simon Game is a classic memory and pattern recognition challenge. Players repeat color and sound sequences, with increasing complexity, testing memory and focus to achieve higher scores.',
    img: 'https://media.giphy.com/media/Sv1EuMezN0u962vN1E/giphy.gif',
    tech: ['HTML', 'Javascript'],
    live: 'https://mthsimon.netlify.app',
    source: 'https://github.com/hieumt211299/SimonGame'
  }
])

const aboutContents = reactive<IAbout[]>([
  { title: 'Email', content: 'hieumt211299@gmail.com' },
  { title: 'Website', content: 'mthintroduce.netlify.app' },
  { title: 'Address', content: 'Ho Chi Minh City, Vietnam' }
])

const skills = reactive<ISkill[]>([
  {
    name: 'html',
    svg: `<svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M.906 0 2.5 17.683l7.5 2.159 7.544-2.158L19.092 0H.906ZM15.1 6H7.044l.174 2h7.776l-.632 6.513-4.29 1.371-4.326-1.444-.29-2.909H7.5l.163 1.4 2.424.809 2.37-.757.3-2.982H5.368L4.8 4h10.519L15.1 6Z"/>
  </svg>
  `
  },
  {
    name: 'css',
    svg: `<svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M.906 0 2.5 17.781l7.5 2.16 7.544-2.159L19.091 0H.906Zm13.437 14.679-4.337 1.2h-.009l-4.341-1.2-.3-3.158h2.13l.151 1.521 2.36.637 2.363-.638.248-3.041H5.264l-.19-2h7.718l.177-2H4.87l-.177-2h10.614l-.964 10.679Z"/>
  </svg>`
  },
  {
    name: 'scss',
    svg: `<svg class="w-[48px]" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" viewBox="0 0 24 24" id="sass"><path d="M12,24c6.627,0,12-5.373,12-12S18.627,0,12,0S0,5.373,0,12S5.373,24,12,24z M6.411,6.759c1.549-1.449,3.704-2.56,5.693-3.267c3.345-1.189,6.88-0.488,7.422,1.645L19.453,5.07c0.525,2.1-1.29,4.606-3.614,5.505c-2.07,0.809-3.796,0.675-4.5,0.45c-0.811-0.27-1.276-0.795-1.396-1.095c-0.045-0.12-0.12-0.315,0-0.375c0.075-0.046,0.105-0.031,0.314,0.194c0.196,0.211,0.961,0.78,2.431,0.615c3.855-0.434,6.164-3.42,5.431-5.024c-0.51-1.125-3.466-1.636-7.171,0.21c-4.515,2.25-4.77,4.109-4.8,4.814c-0.105,1.935,2.4,2.955,3.75,4.41c0.044,0.03,0.075,0.06,0.105,0.105c0.404-0.165,0.975-0.24,1.875-0.256c2.189-0.029,3.42,1.41,3.375,2.7c-0.045,1.021-0.976,1.441-1.141,1.471c-0.119,0.015-0.195,0.015-0.21-0.075c-0.014-0.061,0.031-0.09,0.181-0.181c0.151-0.09,0.584-0.405,0.674-0.944c0.091-0.54-0.329-1.86-2.43-2.1c-0.75-0.091-1.334-0.031-1.83,0.104c0.362,0.795,0.436,2.415-0.404,3.676c-0.87,1.289-2.49,2.085-4.065,1.649c-0.51-0.134-1.29-1.185-0.615-2.655c0.63-1.396,3.319-2.745,3.686-2.925v-0.006c-1.246-1.073-4.276-2.519-4.703-4.73C4.275,9.98,4.568,8.48,6.411,6.759z"></path><path d="M6.803,19.761c0.418,0.242,1.392-0.046,2.09-0.805c0.229-0.25,0.415-0.52,0.555-0.81c0.026-0.056,0.054-0.115,0.078-0.176l0.065-0.18c0.18-0.544,0.199-1.147,0.024-1.792l-0.108,0.061v0.003c0,0-1.249,0.591-2.12,1.509C6.577,18.426,6.353,19.499,6.803,19.761z"></path></svg>`
  },
  {
    name: 'tailwind',
    svg: `<svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path d="M9.782.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231C14.488 3.365 13.551.6 9.782.72ZM4.8 6.979A4.772 4.772 0 0 0 0 11.151a3.43 3.43 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231C9.51 9.623 8.573 6.853 4.8 6.979Z"/>
  </svg>`
  },
  {
    name: 'javascript',
    svg: `<svg class="w-[48px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path d="M45.274,2.325C45.084,2.118,44.817,2,44.536,2H5.464C5.183,2,4.916,2.118,4.726,2.325S4.443,2.81,4.468,3.089l3.52,39.427 c0.037,0.412,0.324,0.759,0.722,0.873l16.01,4.573C24.809,47.987,24.902,48,24.994,48s0.185-0.013,0.274-0.038l16.024-4.573 c0.398-0.114,0.685-0.461,0.722-0.873l3.518-39.427C45.557,2.81,45.463,2.532,45.274,2.325z M12,29.004l7,1.942V11h4v26l-11-3.051 V29.004z M38.054,22L37,34.25L27,37v-4.601l6.75-1.855l0.25-3.75L27,28V11h12l-0.345,4H31v8L38.054,22z"></path>
</svg>`
  },
  {
    name: 'TypeScript',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" class="w-[48px] h-[48px]" viewBox="0 0 50 50">
<path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
</svg>`
  },
  {
    name: 'vuejs',
    svg: `<svg class="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M12.5 0 10 4.156 7.857 0H0l10 18L20 0h-7.5ZM2.486 1.5h2.4L10 10.8l5.107-9.3h2.4L10 15.021 2.486 1.5Z"/>
  </svg>`
  },
  {
    name: 'github',
    svg: `<svg xmlns="http://www.w3.org/2000/svg"  class="w-[48px] h-[48px]" viewBox="0 0 64 64">
<path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
</svg>`
  },
  {
    name: 'figma',
    svg: `<svg xmlns="http://www.w3.org/2000/svg"  class="w-[48px] h-[48px] viewBox="0 0 50 50">
<path d="M25 2v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 18v14h-7c-3.855 0-7-3.145-7-7 0-3.855 3.145-7 7-7H25zM25 34v7c0 3.855-3.145 7-7 7s-7-3.145-7-7c0-3.855 3.145-7 7-7H25zM41 9c0 3.855-3.145 7-7 7h-7V2h7C37.855 2 41 5.145 41 9zM34 18A7 7 0 1034 32 7 7 0 1034 18z"></path>
</svg>`
  }
])

const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  const scrollPosition = window.scrollY || window.pageYOffset
  showBackToTop.value = scrollPosition > 2300 // Adjust the threshold as needed
}
const scrollToTarget = (title: string) => {
  const element = document.getElementById(title.toLowerCase())

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// const test = (img: string) => {
//   let x = `../introduce_MTH/src/assets/img/${img}.png`
//   return x
// }
// const handleClickProject = (url: string) => {
//   router.push(`/project/${url}`)
// }
</script>
<template>
  <HeaderView @scroll-to-target="scrollToTarget"></HeaderView>
  <SectionView title="skills">
    <template #content>
      <!-- <div class="flex justify-between gap-10">
        <div class="flex flex-col gap-2 font-semibold">
          <div class="border-b-2 pb-12 flex flex-col gap-5">
            <p class="text-lg leading-relaxed text-black">
              I'm a Frontend Developer. With logical and creative thinking skills.<br />
              I want to become one of the key members bringing effective IT solutions to the
              company. At the same time, I want to improve my knowledge in your professional working
              environment.
            </p>
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
              <a
                v-if="item.title == 'Website'"
                href="https://hieumt211299.github.io/introduce_MTH/"
                class="text-sm text-[#999fb3]"
              >
                {{ item.content }}</a
              >

              <p v-else>{{ item.content }}</p>
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
      </div> -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(item, index) in skills" :key="index" class="flex flex-col items-center gap-3">
          <div v-html="item.svg"></div>
          <h3 class="text-center up">{{ item.name }}</h3>
        </div>
      </div>
    </template>
  </SectionView>
  <!-- <SectionView title="education" class="bg-[#f9fbfd]">
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
  </SectionView> -->

  <SectionView title="personal project" class="bg-[#f9fbfd]">
    <template #content>
      <div class="flex flex-col">
        <div
          v-for="(item, idx) in personalProject"
          :key="idx"
          class="flex gap-20 py-20 border-b-2 border-dashed last:border-b-0 h-a"
          :class="{ 'flex-row-reverse': idx % 2 == 0 }"
        >
          <div class="w-1/2 h-full text-black gap-5 flex flex-col">
            <h3 class="text-lg font-semibold">{{ item.project }}</h3>
            <p class="text-black text-base">
              {{ item.description }}
            </p>
            <p class="text-black text-base">Technical: {{ item.tech.join(', ') }}</p>
            <div class="flex gap-2">
              <div
                class="w-full bg-[#ff6000] rounded-xl p-1 hover:bg-[#ff791f]"
                style="transition: background-color 0.3s"
              >
                <a :href="`${item.live}`" target="_blank">
                  <p class="text-white text-center uppercase">live</p>
                </a>
              </div>
              <div class="w-full bg-[#ff6000] rounded-xl p-1 hover:bg-[#ff791f]">
                <a :href="`${item.source}`" target="_blank">
                  <p class="text-white text-center uppercase">source</p></a
                >
              </div>
            </div>
          </div>
          <div class="w-1/2">
            <!-- <a v-if="idx == 0" href="https://mthtodolist.netlify.app" class="h-48" target="_blank">
              <img
                src="https://media.giphy.com/media/V8v3i74bpTDJEuvqD6/giphy.gif"
                alt="project1"
              />
            </a>

            <a v-if="idx == 1" href="https://mthfigflix.netlify.app" target="_blank">
              <img
                src="https://media.giphy.com/media/Y2Zz43kJD9WyB2t4Wn/giphy.gif"
                alt="project2"
              />
            </a>

            <a v-if="idx == 2" href="https://mthtictactoe.netlify.app" target="_blank">
              <img
                src="https://media.giphy.com/media/7POcN9Iv6un2v6vKj8/giphy.gif"
                alt="project3"
              />
            </a>

            <a v-if="idx == 3" href="https://mthsimon.netlify.app" target="_blank">
              <img
                src="https://media.giphy.com/media/Sv1EuMezN0u962vN1E/giphy.gif"
                alt="project4"
              />
            </a> -->

            <a :href="`${item.live}`" target="_blank">
              <img :src="`${item.img}`" :alt="`${item.project}`" />
            </a>
          </div>
        </div>
      </div>
    </template>
  </SectionView>
  <SectionView title="experience">
    <template #content>
      <div class="experience flex justify-center gap-20">
        <div class="text-right mb-10" style="flex: 0 0 49%">
          <h3 class="text-lg leading-relaxed">4.2023 - 10.2023</h3>
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
            <h3 class="text-lg leading-relaxed font-semibold">scaleUp</h3>
            <p class="uppercase">Ho Chi Minh city</p>
          </div>
          <p class="text-lg text-black">
            ScaleUP is a product that aids shops in realizing the Omnichannel strategy. The ScaleUP
            Platform is a platform that consolidates all orders from all sales channels while
            optimizing operations to boost revenue and profits.
          </p>
          <div>
            <h3 class="text-lg leading-relaxed font-semibold">Main Responsibilities:</h3>
            <ul class="text-lg text-black list-disc">
              <li>Build this project from zero.</li>
              <li>
                Create web dashboards using VueJS so that users can track information about orders,
                customers, promotions, and inventory simply and intuitively.
              </li>
              <li>
                UI/UX design is delicate, clean, uncomplicated, and practical, which makes it easy
                to understand and use.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </SectionView>
  <SectionView title="contact" class="bg-[#f9fbfd]">
    <template #content>
      <div class="flex justify-between font-semibold">
        <div class="flex justify-start gap-12 font-semibold">
          <div v-for="(item, index) in aboutContents" :key="index">
            <h3 class="text-lg leading-relaxed">
              {{ item.title }}
            </h3>

            <a
              v-if="item.title == 'Website'"
              href="https://mthintroduce.netlify.app/"
              class="text-sm text-[#999fb3]"
            >
              {{ item.content }}</a
            >

            <p v-else>{{ item.content }}</p>
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
  <footer id="footer-copyright" class="!h-20">
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
