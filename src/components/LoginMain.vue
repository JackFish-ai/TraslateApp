<template>
    <var-app-bar title="用户登录" title-position="center" round width="100%">
        <template #left>
            <var-icon name="chevron-left" @click="backToHome" size="35px" />Home
        </template>
        <template #right>
                <var-radio v-model="value">
                <template #unchecked-icon>
                    <var-icon name="white-balance-sunny" @click="changeStyle" size="24px"/>
                </template>
                <template #checked-icon>
                    <var-icon name="weather-night" @click="changeStyle" size="24px"/>
                </template>
            </var-radio>
        </template>
    </var-app-bar>
    <div class="page">
        <var-form ref="form" scroll-to-error="start">
            <var-space direction="column" :size="[14, 0]">
                <var-input placeholder="请输入用户名" variant="outlined" :rules="[v => !!v || '用户名不能为空']" v-model="formData.num" />
                <var-input type="password" variant="outlined" placeholder="请输入密码" :rules="[v => !!v || '密码不能为空']" v-model="formData.pwd"
                    @change="mdfun" />
            </var-space>

            <div class="btn-css">
                <var-space :size="[10, 10]">
                    <var-button text outline type="primary" @click="submitData">登录</var-button>
                    <var-button text outline type="primary" @click="openRediter">注册</var-button>
                </var-space>
            </div>

        </var-form>
    </div>
</template>

<script>

import router from '@/router/index'
import md5 from 'js-md5'
import StudentUserQuest from '@/nextdate/Student/StudentHttp'
import { StyleProvider, Themes, Snackbar } from '@varlet/ui'
export default {
  data () {
    return {
      formData: {
        num: '',
        pwd: ''
      },
      value: '',
      currentTheme: null
    }
  },
  methods: {
    mdfun (value, event) {
      const md = md5(value)
      this.formData.pwd = md
    },

    submitData () {
      this.$refs.form.validate().then(response => {
        if (response === true) {
          StudentUserQuest.loginStudent(this.formData).then(response => {
            if (response.data.resultCode === 200) {
              const token = response.data.datas
              localStorage.setItem('Authorization', token)
              router.push('/translate')
            } else {
              Snackbar('出错' + response.data.datas)
            }
          }).catch(error => {
            Snackbar(error)
          })
        }
      })
    },
    openRediter () {
      router.push('/rediter')
    },
    changeStyle () {
      this.value = this.value ? true : Themes.dark
      StyleProvider(this.value)
    },
    backToHome () {
      this.$router.push('/')
    }
  }
}

</script>

<style>
.username-css {
    width: 100%;
}

.btn-css {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ui-css {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.page{
    margin-top: 20px;
}
</style>
