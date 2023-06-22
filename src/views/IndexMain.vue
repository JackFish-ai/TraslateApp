<template>
  <var-tabs elevation item-direction="vertical" color="var(--color-primary)" active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)" fixed-bottom="true" v-model:active="active">
    <var-tab>
      <var-icon class="tabs-example-icon" name="information" />
      <div>开始页</div>
    </var-tab>

    <var-tab>
      <var-icon class="tabs-example-icon" name="warning" />
      <div>历史记录</div>
    </var-tab>

    <var-tab>
      <var-icon class="tabs-example-icon" name="error" />
      <div>我的</div>
    </var-tab>
  </var-tabs>

  <!-- tabs进行的视图联动部分 -->
  <var-tabs-items v-model:active="active">
    <var-tab-item>
      <LeaveSchool></LeaveSchool>
    </var-tab-item>

    <var-tab-item>
      很多人不长眼睛，嚣张都靠武器。 赤手空拳就缩成蚂蚁。 不用麻烦了，不用麻烦了。 不用麻烦，不用麻烦了，不用麻烦了。
    </var-tab-item>
    <var-tab-item>
      你们一起上，我在赶时间。 每天决斗观众都累了，英雄也累了。 不用麻烦了，不用麻烦了。
      副歌不长你们有几个，一起上好了。 正义呼唤我，美女需要我。 牛仔很忙的。
    </var-tab-item>
  </var-tabs-items>
</template>

<script>

import LeaveSchool from '@/components/LeaveSchool.vue'

export default {
  components: { LeaveSchool },
  data() {
    return {
      active: 0,   //0：表示打开网页第一个显示的是“登录页”的


    }
  },

  methods: {

  }
}

</script>
<style></style>
