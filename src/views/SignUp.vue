<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'

import { ElMessageBox } from 'element-plus'
// import type { Action } from 'element-plus' // Import the MessageBox component
import { useRouter } from 'vue-router'

interface account {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
}
const router = useRouter()

const infoUser = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: ''
})

const validate = reactive({
  email: '',
  password: true,
  phone: ''
})
const accounts = ref<account[]>([])
const ACOUNTS = 'acounts'

const saveToLocal = () => {
  window.localStorage.setItem(ACOUNTS, JSON.stringify(accounts.value))
}

const getAccountsFromLocal = () => {
  const acountStorage = window.localStorage.getItem(ACOUNTS)
  if (!acountStorage) return ''
  return JSON.parse(acountStorage)
}

onMounted(() => {
  accounts.value = getAccountsFromLocal() || []
})

const handleChangeInput = (value: string, type: keyof typeof infoUser) => {
  // AccountToCreate[type as keyof typeof AccountToCreate] = value
  infoUser[type] = value

  switch (type) {
    case 'email':
      validate.email = validateEmail(value)
      break
    case 'password':
      validate.password = validatePassword(value)
      break
    case 'phoneNumber':
      validate.phone = validatePhoneNumber(value)
      break

    default:
      break
  }
}

const validateEmail = (email: string) => {
  const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  if (!expression.test(email)) {
    return 'email not valid'
  }

  const emailExists = accounts.value.some((x) => x.email === email)
  return emailExists ? 'email already exists' : ''
}

const validatePassword = (password: string) => {
  const expression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
  const result = expression.test(password) // true
  return result
}

const validatePhoneNumber = (phoneNumber: string) => {
  const expression = /(84|0[3|5|7|8|9])+([0-9]{8})/

  if (!expression.test(phoneNumber)) {
    return 'Phone number not valid'
  }

  const phoneNumberExists = accounts.value.some((x) => x.phoneNumber === phoneNumber)
  return phoneNumberExists ? 'Phone number already exists' : ''
}

const handleClickSignUp = () => {
  validate.email = validateEmail(infoUser.email)

  validate.password = validatePassword(infoUser.password)

  validate.phone = validatePhoneNumber(infoUser.phoneNumber)

  if (!validate.email && validate.password && !validate.phone) {
    accounts.value.unshift(infoUser)
    saveToLocal()
    signUpSuccess()
  }
}

const signUpSuccess = () => {
  ElMessageBox.alert('Sign up uccess', 'Title', {
    confirmButtonText: 'Move to LOGIN',
    callback: (event: string) => {
      if (event === 'cancel') {
        window.location.reload()
      } else router.push('/')
    }
  })
}
</script>
<template>
  <el-form>
    <div class="v-sign-up-wrap flex w-screen h-screen items-center justify-between">
      <div class="h-full w-full flex items-center justify-center" style="flex: 3">
        <div class="v-sign-up w-1/2 flex flex-col gap-4">
          <el-text class="sign-up w-full font-bold">Sign up to socialRepeat</el-text>

          <div class="grid grid-cols-2 items-center justify-center gap-5 w-full">
            <v-input
              placeholder="First name"
              typeInput="text"
              :isShow="false"
              :error="false"
              @handleChange="(value: string) => handleChangeInput(value, 'firstName')"
            ></v-input>
            <v-input
              placeholder="Last name"
              typeInput="text"
              :isShow="false"
              :error="false"
              @handleChange="(value: string) => handleChangeInput(value, 'lastName')"
            ></v-input>
          </div>
          <v-input
            placeholder="Email"
            typeInput="text"
            :isShow="false"
            :error="Boolean(validate.email.length)"
            @handleChange="(value: string) => handleChangeInput(value, 'email')"
          ></v-input>
          <el-alert v-if="validate.email" type="error" show-icon>
            <template #title>
              {{ validate.email }}
            </template></el-alert
          >
          <v-input
            placeholder="Password"
            typeInput="password"
            isShow
            :error="!validate.password"
            @handleChange="(value: string) => handleChangeInput(value, 'password')"
          ></v-input>
          <el-alert v-if="!validate.password" title="Password not valid" type="error" show-icon />

          <v-input
            placeholder="phone number"
            typeInput="text"
            :isShow="false"
            :error="Boolean(validate.phone.length)"
            prefix-icon=""
            suffix-icon=""
            @handleChange="(value: string) => handleChangeInput(value, 'phoneNumber')"
          ></v-input>

          <el-alert v-if="validate.phone" type="error" show-icon>
            <template #title>
              {{ validate.phone }}
            </template></el-alert
          >

          <v-button type="primary" style="width: 100%" @click="handleClickSignUp">
            <template #default> SIGN UP </template>
          </v-button>
          <router-link to="/">
            <v-button type="info" style="width: 100%"> BACK TO LOGIN </v-button>
          </router-link>
        </div>
      </div>

      <div
        class="side h-full w-ful flex items-center justify-center"
        style="flex: 2; background: #0057ff"
      ></div>
    </div>
  </el-form>
</template>

<style>
.el-text.sign-up {
  font-size: 20px;
  color: #000000;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
