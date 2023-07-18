<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

interface account {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
}
const userLogin = reactive({
  email: '',
  password: ''
})

const accounts = ref<account[]>([])
const isLogin = ref<boolean>(true)
const router = useRouter()

const errorEmail = ref(true)
const ACOUNTS = 'acounts'

const getAccountsFromLocal = () => {
  const accountsStorage = window.localStorage.getItem(ACOUNTS)
  return accountsStorage ? JSON.parse(accountsStorage) : []
}

onMounted(() => {
  accounts.value = getAccountsFromLocal()
})

const handleChangeInput = (data: string, type: keyof typeof userLogin) => {
  userLogin[type] = data
  if (type === 'email') {
    errorEmail.value = validateEmail(data)
  }
}

const handleClickLogin = () => {
  isLogin.value = authenticateUser(userLogin.email, userLogin.password)
  if (isLogin.value) {
    loginSuccessAlert()
  }
}

const authenticateUser = (user: string, password: string) => {
  return accounts.value.some((x) => x.email === user && x.password === password)
}

const loginSuccessAlert = () => {
  ElMessageBox.alert('Login success', 'Title', {
    confirmButtonText: 'OK',
    callback: () => {
      console.log('login success')
      isLogin.value = true
    }
  })
}

const handleCreateNewAccount = () => {
  router.push('/sign-up')
}
const validateEmail = (email: string) => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  let result = expression.test(email)
  return result
}
</script>

<template>
  <div class="v-login-wrap flex w-screen h-screen items-center justify-between">
    <div class="h-full w-full flex items-center justify-center" style="flex: 2">
      <div class="login w-80 flex flex-col gap-4">
        <el-text class="sign-in w-full font-bold">Sign in</el-text>
        <el-form class="flex flex-col gap-4">
          <v-input
            placeholder="Email Address *"
            typeInput="text"
            :isShow="false"
            :error="errorEmail"
            @handleChange="(data:string)=> handleChangeInput(data,'email')"
          >
          </v-input>
          <v-input
            placeholder="Password *"
            typeInput="password"
            isShow
            :error="false"
            @handleChange="(data: string)=> handleChangeInput(data, 'password')"
          ></v-input>
          <el-alert
            v-if="isLogin === false"
            title="user or password is not true"
            type="error"
            show-icon
          />
          <div class="flex items-center justify-between h-auto">
            <v-button type="primary" @click="handleClickLogin">
              <template #suffix>
                <VArrowForWard></VArrowForWard>
              </template>
              <template #default> LOGIN </template>
            </v-button>
            <el-text class="cursor-pointer">Forgot your password?</el-text>
          </div>
          <v-button class="mt-10" type="info" @click="handleCreateNewAccount" style="width: 100%">
            <template #default>CREATE NEW ACCOUNT</template>
          </v-button>
        </el-form>
      </div>
    </div>

    <div class="side h-full w-full bg-gray-50 flex items-center justify-center" style="flex: 3">
      <img src="../assets/login-promotion 1.png" alt="" style="width: 468px" />
    </div>
  </div>
</template>
<style lang="scss">
.v-login-wrap {
  .login {
    .el-text.sign-in {
      font-size: 20px;
      color: #000000;
    }
  }
}
</style>
