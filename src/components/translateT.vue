<template>
  <var-app-bar title="图片上传" title-position="center" round width="100%">
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
  <var-progress v-show="loading" label :value="values" />
  <var-button @click="addpict"><var-icon name="plus"/></var-button>
  <div class="inputStyle">
    <input type="file" @change="onchangemd" />
    <img v-if="imgUrl" :src="imgUrl" alt="上传的图片" style="width: 100%;height:100%;"/>
  </div>
  <var-button type="primary" block @click="preview">翻译</var-button>
</template>

<script>
import axios from 'axios'
import { StyleProvider, Themes, ImagePreview } from '@varlet/ui'
import { ref, onMounted } from 'vue'
export default {
  setup () {
    const values = ref(0)
    const interval = ref(null)

    onMounted(() => {
      interval.value = window.setInterval(() => {
        if (values.value >= 100) values.value = 0
        else values.value += 20
      }, 1000)
    })

    return { values, interval }
  },
  data () {
    return {
      imgUrl: '',
      resultUrl: '',
      value: '',
      currentTheme: null,
      loading: false
    }
  },
  methods: {
    onchangemd (e) {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          this.imgUrl = event.target.result
          console.log(this.imgUrl)
        }
        reader.readAsDataURL(file)
        
        const formdata = new FormData()
        formdata.append('waterImg', file)
        
        axios
          .post(
            'http://114.132.245.131:26146/waterlanguange/recognition/',
            formdata
          )
          .then((res) => {
            this.resultUrl = res.data.data.url
          })
      }
    },
    changeStyle () {
      this.value = this.value ? true : Themes.dark
      StyleProvider(this.value)
    },
    preview () {
      this.loading = true
      ImagePreview(this.resultUrl)
      this.loading = false
    },
    backToHome () {
      this.$router.push('/')
    },
    addpict () {
      this.imgUrl = ''
    }
  }
}
</script>

<style>
.bg {
  background-color: aqua;
}
.inputStyle {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
