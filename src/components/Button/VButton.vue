<script setup lang="ts">
interface Props {
  type: string
}

defineProps<Props>()
</script>
<template>
  <div class="v-button-wrap flex items-center justify-center gap-2">
    <el-button class="v-button w-full" :type="type">
      <div class="flex items-center justify-center gap-2 px-2 py-2">
        <slot name="prefix"></slot>

        <slot></slot>

        <slot name="suffix"></slot>
      </div>
    </el-button>
  </div>
</template>
<style lang="scss">
.v-button-wrap {
  .v-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 4px;
    background: #0057ff;
    height: 2.5rem;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.2);

    &.el-button--info {
      background: black;
    }
    &.el-button--primary {
      background: #0057ff;
    }
  }
}
</style>
