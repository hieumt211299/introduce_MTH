<script setup lang="ts">
interface Props {
  title: string
}
const props = defineProps<Props>()
</script>
<template>
  <!--about start -->
  <div id="section" class="section flex flex-col justify-center items-center">
    <div class="title div-heading text-center" :id="`${props.title}`">
      <h2 class="font-semibold uppercase py-12 border-b-2 w-screen">
        {{ props.title }}
      </h2>
    </div>
    <div class="px-20 py-12 w-full max-w-[1140px]">
      <slot name="content" />
    </div>
  </div>
</template>
<style lang="scss"></style>
