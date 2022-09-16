<template>
  <div class="main">
    <van-nav-bar :title="title" fixed />

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      title: this.$route.meta.title,
    };
  },
  watch: {
    $route() {
      this.title = this.$route.meta.title;
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}

.search-icon {
  font-size: 16px;
  line-height: inherit;
}

.main {
  padding-top: 46px;
  padding-bottom: 50px;
}

/deep/.van-icon {
  font-size: 25px;
}
</style>