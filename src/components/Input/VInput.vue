<script setup lang="ts">
// import console from 'console'
import { ref, watch } from 'vue'

interface Emits {
  (event: 'handleBlur', blurEvent: FocusEvent): void
  (event: 'handleFocus', focusEvent: FocusEvent): void
  (event: 'handleChange', data: string | number): void
  (event: 'handleInput', data: string | number): void
  (event: 'handleKeydown', keydownEvent: KeyboardEvent): void
  (event: 'handleClear'): void
}
interface Props {
  placeholder: string
  typeInput: string
  isShow: boolean
  error: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const value = ref<string>('')
const isError = ref(false)

const handleFocus = (event: FocusEvent) => {
  emit('handleFocus', event)
}

const handleBlur = (event: FocusEvent) => {
  emit('handleBlur', event)
}

const handleChange = (value: string | number) => {
  emit('handleChange', value)
}

const handleInput = (value: string | number) => {
  emit('handleInput', value)
}

const handleKeydown = (event: KeyboardEvent) => {
  emit('handleKeydown', event)
}
const handleClear = () => {
  emit('handleClear')
}

watch(
  () => props.error,
  (newValue) => {
    isError.value = newValue
  }
)
</script>

<template>
  <div class="v-input-item-wrap">
    <div class="user-input-wrp w-full">
      <el-input
        :class="{ 'red-border': isError }"
        class="h-14"
        v-model="value"
        :placeholder="props.placeholder"
        :type="props.typeInput"
        :show-password="props.isShow"
        @blur="handleBlur"
        @focus="handleFocus"
        @change="handleChange"
        @input="handleInput"
        @keydown="handleKeydown"
        @clear="handleClear"
      >
        <template #prefix>
          <slot name="prefix"></slot>
        </template>
        <template #suffix>
          <slot name="suffix"></slot>
        </template>
      </el-input>

      <el-text
        class="floating-label text-gray-400 bg-white px-5 fade-in"
        :class="{ show: value.length > 0 }"
      >
        {{ props.placeholder }}
      </el-text>
    </div>
  </div>
</template>
<style lang="scss">
.v-input-item-wrap {
  .red-border {
    border: 1px solid red;
    border-radius: 0.25rem;
    .is-focus {
      box-shadow: none;
    }
  }
  .user-input-wrp {
    position: relative;
    .inputText {
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid #777;
      box-shadow: none !important;
    }
    .inputText:focus {
      border-color: blue;
      border-width: medium medium 2px;
      transition: 0.2s ease all;
    }
    .floating-label {
      position: absolute;
      pointer-events: none;
      top: -0.75rem;
      left: 10px;
      transition: 0.2s ease all;
    }
    .user-input-wrp input:focus ~ .floating-label,
    .user-input-wrp input:not(:focus):valid ~ .floating-label {
      top: 0px;
      left: 10px;
      font-size: 13px;
      opacity: 1;
    }

    .fade-in {
      opacity: 0;
      transition: opacity 0.4s ease-in;
      padding: 0 5px;
    }

    .fade-in.show {
      opacity: 1;
    }
  }
}
</style>
