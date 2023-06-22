<template>
    <var-app-bar title="水族文字翻译" title-position="center" round width="100%">
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

    <div class="check">
      <var-button text @click="center = true" outline type="primary">水族简介</var-button>
    </div>

    <var-divider description="水族文化特色" />
    <var-swipe class="swipe-example" :autoplay="2000" >
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/1.jpg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/2.jpeg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/4.jpeg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/4.png')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/6.jpg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/7.jpeg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/8.jpeg')">
        </var-swipe-item>
    </var-swipe>

    <var-divider description="水族文字" />
    <var-swipe class="swipe-example" :autoplay="2000" >
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/11.jpeg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/13.jpeg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/14.jpeg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/16.png')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/17.jpeg')">
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-example-image" :src="require('../assets/18.jpeg')">
        </var-swipe-item>
    </var-swipe>

  <div class="check">
    <var-button text @click="checkLogin" outline type="primary">翻译水字</var-button>
  </div>

  <var-popup v-model:show="center" style="width:100%">
    <div class="popup-example-block">
      水族自称“虽”,是我国南方古代“百越”族群中“骆越”的一支发展而成的单一民族，聚居在贵州南部边陲的三都水族自治县，在中华民族大家庭中，水族是为数不多的既有民族语言，又有民族文字的少数民族之一。
      水书直接或间接地记录了水族先民关于天文历法、生产、防卫、营造、婚丧、生育、祭祀、出行等诸多方面的社会实践和认识。据考证，水书在宋代就已盛行于水族民间，至今在水族人民日常生活中仍然被广泛应用，其中以丧葬、婚嫁和营造方面应用最广。如丧葬，从入殓、停棺、出殡、定亲、立碑和开控以及事后除服等等，每一细小环节均受水书的种种制约。又如嫁娶，从问亲、定亲、开亲到新婚出阁、入新房、回门以及婚配双方生庚八字生克，无不依据水书的规定来行事。除此之外，像平时的裁寿衣、装棺木、修圈门、搭鸡笼、挖厕所、炒制火药、补高寿、背幼婴回娘家等等，也都要依照水书的规定择吉避凶。
      文章标题:三都水族之古老文字“水书”来自:藏风得水
    </div>
  </var-popup>
  <!-- <var-tabs-items v-model:active="active">
    <var-tab-item>

      </var-tab-item>
      <var-tab-item>
        <LoginMain></LoginMain>
      </var-tab-item>
      <var-tab-item>
        <Regiter></Regiter>
      </var-tab-item>
    </var-tabs-items>

  <var-bottom-navigation active-color="#ba68c8" :active="active" fixed="true" @change="handleClick">
    <var-bottom-navigation-item label="假期登记" icon="home" />
    <var-bottom-navigation-item label="历史记录" icon="magnify" />
    <var-bottom-navigation-item label="我的" icon="account-circle" />
  </var-bottom-navigation> -->

</template>

<script>
import { StyleProvider, Themes } from '@varlet/ui'
// import LoginMain from '@/components/LoginMain.vue'
// import Regiter from '@/components/RegiterUser.vue'
export default {
  components: { },
  data () {
    return {
      active: 0,
      username: '',
      value: '',
      currentTheme: null,
      center: false
    }
  },
  beforeUnmount () {
    console.log('destroyed')
    window.removeEventListener('scroll', this.handleScrollx, true)
  },
  methods: {
    handleClick (active) {
      this.active = active
    },
    changeStyle () {
      this.currentTheme = this.currentTheme ? null : Themes.dark
      StyleProvider(this.currentTheme)
    },
    showText () {
      this.$router.push('/translate')
    },
    checkLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
body {
  transition: background-color .25s, color .25s;
  color: var(--color-text);
  background-color: var(--color-body);
}
.swipe-example {
  height: 160px;
  margin-top: 10px;
}

.swipe-example-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
.check {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.popup-example-block {
  padding: 20px 24px;
  width: 400px;
}
</style>
