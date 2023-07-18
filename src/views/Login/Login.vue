<template>
  <div class="bg flex justify-center items-center h-full">
    <div
      class="box-wrapper h-600px min-w-1100px flex -md:min-w-550px animate__animated animate__zoomInDown"
    >
      <div class="login-left-bg -md:hidden">
        <div class="login-house relative">
          <img
            class="img w-40px h-40px left-[-20px] absolute"
            src="../../assets/images/login/6.png"
          />
          <img
            class="img w-40px h-40px right-[-60px] top-[120px] absolute"
            src="../../assets/images/login/9.png"
          />
          <img
            class="img w-60px h-60px right-[180px] absolute"
            src="../../assets/images/login/7.png"
          />
          <img
            class="img w-30px h-35px left-[300px] top-[45px] absolute"
            src="../../assets/images/login/2.png"
          />
          <img
            class="img w-40px h-50px left-[440px] top-[65px] absolute"
            src="../../assets/images/login/2.png"
          />
          <img
            class="img w-15px h-25px left-[330px] top-[100px] absolute"
            src="../../assets/images/login/8.png"
          />
          <img
            class="img w-15px h-25px left-[270px] top-[80px] absolute"
            src="../../assets/images/login/8.png"
          />
          <img
            class="img w-15px h-25px right-[100px] top-[20px] absolute"
            src="../../assets/images/login/8.png"
          />
          <img
            class="img w-50px h-60px right-[40px] bottom-[20px] absolute"
            src="../../assets/images/login/2.png"
          />
          <img
            class="img w-50px h-60px right-[250px] bottom-[60px] absolute"
            src="../../assets/images/login/2.png"
          />
          <img
            class="img w-30px h-40px right-[210px] bottom-[140px] absolute"
            src="../../assets/images/login/2.png"
          />
        </div>
      </div>
      <div class="flex-1 flex flex-col h-full items-center justify-center relative">
        <div class="h-[80%] w-full flex flex-col items-center">
          <div class="text-26px font-bold tracking-wide text-[#409eff] h-80px">
            Vue3 Template
          </div>
          <div class="w-full px-80px flex-1 flex flex-col justify-between">
            <el-form :model="form" ref="formRef" :rules="rules">
              <el-form-item prop="username">
                <el-input
                  resize="none"
                  size="large"
                  placeholder="请输入账户名"
                  v-model="form.username"
                  class="rounded-5px placeholderText"
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <img src="../../assets/images/login/account.png" />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  resize="none"
                  size="large"
                  placeholder="请输入密码"
                  v-model="form.password"
                  type="password"
                  class="rounded-5px placeholderText"
                >
                  <template #prefix>
                    <el-icon class="el-input__icon">
                      <img src="../../assets/images/login/password.png" />
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item prop="code">
                <Verify
                  ref="verifyRef"
                  :mode="'pop'"
                  :captcha-type="'blockPuzzle'"
                  :img-size="{ width: '420px', height: '210px' }"
                  @success="onVerifySuccess"
                />
                <el-button
                  v-if="!form.code"
                  size="large"
                  class="w-full flex !justify-start btnBoxShadow"
                  @click="handleVerify"
                >
                  <span class="text-[#566B88]">点击进行验证</span>
                  <el-icon class="el-icon--right">
                    <img src="../../assets/images/login/verify.png" />
                  </el-icon>
                </el-button>
                <el-button
                  v-else
                  :disabled="true"
                  size="large"
                  class="w-full flex !justify-start btnBoxShadow"
                >
                  <span class="text-[#566B88]">验证成功</span>
                  <el-icon class="el-icon--right">
                    <img src="../../assets/images/login/verify.png" />
                  </el-icon>
                </el-button>
              </el-form-item>
            </el-form>
            <!-- <div class="flex justify-between items-center">
              <el-button
                @click="handleForgetPassword"
                class="hoverBtn text-16px !text-[#566B88]"
                type="text"
              >
                忘记密码
              </el-button>
            </div> -->
            <div class="flex-1 w-full flex flex-col items-center justify-end mb-60px">
              <el-button
                class="w-full login-button"
                :loading="loading"
                @click="handleLogin(formRef)"
                size="large"
                type="primary"
              >
                登录
              </el-button>
              <!-- <span class="text-14px font-din mt-5px text-[#566B88]">
                {{ t('login.loginTips')
                }}<button class="text-[var(--el-color-primary)]">{{ t('login.serviceAgreement') }}</button
                >{{ t('login.and')
                }}<button class="text-[var(--el-color-primary)]">{{ t('login.privacyPolicy') }}</button></span
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <ForgetPassword @handleConfirm="handleConfirm" v-model:visible="forgetPasswordVisible" />
    <CommonDialog
      :visible="forgetPasswordResultVisible"
      :isConfirm="true"
      type="success"
      tipsBody="重置密码已发送至管理员"
      :btns="['confirm']"
      @close="forgetPasswordConfirm"
      @confirm="forgetPasswordConfirm"
    >
      <template #describe>
        <div class="text-16px text-[var(--content-title)] leading-22px mt-12px px-20px text-center">
          {{ forgetPasswordResultMsg }}
        </div>
      </template>
    </CommonDialog> -->
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch, onUnmounted } from 'vue'
import { ElLoading, ElMessage, ElNotification, FormInstance, FormRules } from 'element-plus'
import { useUserStore } from '@/store/modules/user'
import Verify from '@/components/Verifition/Verify.vue'
import { website } from '@/constants/website'
import { aesEncrypt } from '@/utils/encryption'
import cookie from '@/utils/cookie'
import { useRouter } from 'vue-router'
import { routerStoreWithOut } from '@/store/modules/router'

defineOptions({ name: 'Login' })

// type ForgetPasswordRes = string | false

const animationFlag = ref(true)
const userStore = useUserStore()
const loading = ref<boolean>(false)
// const forgetPasswordResultVisible = ref<boolean>(false)
// const forgetPasswordResultType = ref<boolean>(false) //忘记密码提示文案文字 false 普通用户 true 超管

const form = reactive<LoginParams>({
  username: '',
  password: '',
  code: '',
  randomStr: 'blockPuzzle'
})
const formRef = ref<FormInstance>()
const verifyRef = ref<ElRef>()

const passwordValid = (_rule: any, value: any, callback: any) => {
  if (!value) {
    callback(new Error('请输入密码'))
  } else if (value.length < 6 || value.length > 16) {
    callback(new Error('密码小于6位或大于16位，密码格式不正确!'))
  } else {
    callback()
  }
}
const verifyValid = (_rule: any, _value: any, callback: any) => {
  if (!form.code) {
    callback(new Error('点击进行验证'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules>({
  username: [{ required: true, trigger: ['blur', 'change'], message: '请输入用户名' }],
  password: [{ validator: passwordValid, trigger: ['blur', 'change'] }],
  code: [{ validator: verifyValid, trigger: ['blur'] }]
})

watch(
  () => form.code,
  (newVal) => {
    if (newVal) {
      setTimeout(() => {
        form.code = ''
      }, 45000)
    }
  },
  {
    immediate: true
  }
)

const onVerifySuccess = (params) => {
  form.code = params.captchaVerification
  formRef.value!.clearValidate('code')
}

const handleVerify = () => {
  verifyRef.value && (verifyRef.value as any).show()
}

function run(dom) {
  const offsetX = Math.random() * 50 - 50
  const offsetY = Math.random() * 50 - 50
  dom.style.transform = `translate3d(${offsetX}px,${offsetY}px,0)`
  if (animationFlag.value) {
    setTimeout(() => {
      run(dom)
    }, 2000)
  }
}

onMounted(() => {
  let dom = document.getElementsByClassName('img')
  let length = dom.length
  for (let i = 0; i < length; i++) {
    run(dom[i])
  }
})

onUnmounted(() => {
  animationFlag.value = false
})

//忘记密码
// const handleForgetPassword = () => {
//   forgetPasswordVisible.value = true
// }

// const handleConfirm = (res: ForgetPasswordRes) => {
//   forgetPasswordVisible.value = false
//   if (!res) {
//     forgetPasswordResultType.value = false
//     forgetPasswordResultMsg.value = t('login.sendPasswordTips')
//     forgetPasswordResultVisible.value = true
//   } else {
//     forgetPasswordResultType.value = true
//     forgetPasswordResultMsg.value = `${t('login.resetEmailTips')}${res}${t('login.email')}`
//     forgetPasswordResultVisible.value = true
//   }
// }

// const forgetPasswordConfirm = () => {
//   forgetPasswordResultVisible.value = false
// }

const router = useRouter()

const routerStore = routerStoreWithOut()

const setTokenAndGetUserInfo = async (res) => {
  const CSRF_KEY = 'access_token'
  if (!res[CSRF_KEY]) {
    ElMessage.success('登录失败')
    return false
  }
  const loading = ElLoading.service({
    lock: true,
    text: '登录中，正在跳转。。。',
    background: 'rgba(255, 255, 255, 0.7)'
  })

  fullLoadingStore.setLoading(loading)

  cookie.set(CSRF_KEY, res[CSRF_KEY], window.location.host, '/', 6000)
  sessionStorage.setItem(CSRF_KEY, res[CSRF_KEY])

  await userStore.getUserInfo()
  await routerStore.generateRoutes()
  ElNotification.success('登录成功！')
  router.push({ path: '/' })
}

const triggerLoginApi = () => {
  const loginForm = {
    ...form,
    password: aesEncrypt(form.password, website.encPassword)
  }
  userStore
    .login(loginForm as LoginParams)
    .then((res) => {
      setTokenAndGetUserInfo(res)
    })
    .catch((err) => {
      form.code = ''
      ElMessage.error(err.msg)
    })
    .finally(() => {
      loading.value = false
    })
}

//登录
const handleLogin = async (formEl: FormInstance | undefined) => {
  router.push('/')
  // if (!formEl) return
  // await formEl.validate((valid) => {
  //   if (valid) {
  //     loading.value = true
  //     triggerLoginApi()
  //   }
  // })
}
</script>

<style lang="scss" scoped>
::v-deep(.common-dialog) {
  .tips-body {
    font-weight: bold;
    font-size: 18px;
  }
}
.hoverBtn:hover {
  color: var(--el-color-primary) !important;
}
.img {
  transition: all 2s linear;
}
.bg {
  width: 100%;
  height: 100vh;
  background: url('../../assets/images/login/bg.png') no-repeat 50% 50%;
  background-size: cover;
}
.box-wrapper {
  background: #fff;
  box-shadow: 0px 0px 4px 1px rgba(0, 53, 100, 0.1);
  border-radius: 6px;
}

.login-left-bg {
  position: relative;
  width: 50%;
  height: 100%;
  background: url('../../assets/images/login/login-left-bg.png') no-repeat 100% 100%;
  background-size: cover;
}
.login-house {
  position: absolute;
  width: 105%;
  height: 75%;
  background: url('../../assets/images/login/login-house.png') no-repeat 100% 100%;
  background-size: 100% 100%;
  left: -100px;
  bottom: 0;
}
.btnBoxShadow {
  box-shadow: 0 0 0 1px #566b88 inset !important;
}
</style>
<style lang="scss">
.box-wrapper {
  .el-input__wrapper.is-focus {
    box-shadow: 0 0 0 1px #409eff inset;
  }
  .login-button {
    background-color: #409eff;
    border: none;
    &:hover {
      background-color: rgba(64, 158, 255, 0.6);
    }
  }
}
</style>
