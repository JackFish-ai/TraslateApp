<template>
      <var-app-bar title="注册账号" title-position="center" round width="100%">
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
        <var-input type="password" variant="outlined" placeholder="请确认密码" :rules="[v => !!v || '密码不能为空']" v-model="formData.pose"
          @change="mdfuns" />
      </var-space>

      <div class="btn-css">
        <var-button text outline type="primary" @click="submitDate">注册账号</var-button>
      </div>

    </var-form>
  </div>
</template>

<script>
import StudentUserQuest from '@/nextdate/Student/StudentHttp'
import { Snackbar } from '@varlet/ui'
import router from '@/router/index'
import md5 from 'js-md5'

export default {
  data () {
    return {
      formData: {
        num: '',
        pwd: '',
        pose: ''
      },
      formSub: false
    }
  },
  methods: {
    mdfun (value, event) {
      const md = md5(value)
      this.formData.pwd = md
    },
    mdfuns (value, event) {
      const md = md5(value)
      this.formData.pose = md
      if (this.formData.pwd === this.formData.pose) {
        this.formSub = true
      }
    },
    submitDate () {
      this.$refs.form.validate().then(response => {
        if (this.formSub === true) {
          const param = {}
          param.num = this.formData.num
          param.pwd = this.formData.pwd
          StudentUserQuest.regiter(param).then(response => {
            if (response.data.resultCode === 200) {
              Snackbar('注册成功请重新登录')
              router.push('/login')
            } else {
              Snackbar('出错')
            }
          })
        } else {
          Snackbar('输入的密码不统一，请从新输入')
        }
      })
    },
    backToHome () {
      this.$router.push('/')
    }

  }
}

</script>
<style>
.page{
  margin-top: 20px;
}
.btn-css {
  margin-top: 60px;
  display: flex;
    justify-content: center;
    align-items: center;
}
</style>
