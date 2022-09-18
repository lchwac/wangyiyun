<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
    <!-- 使用一个容器装输入框下面的东西 -->
    <div class="search_wrap" v-if="theBest.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <!-- 热搜关键词容器,需要数据渲染的地方 -->
      <div class="hot_name_wrap">
        <!-- 每个搜索词 -->
        <span
          class="hot_item"
          v-for="(item, index) in hotWordsList"
          :key="index"
          @click="onbut(item.first)"
          >{{ item.first }}</span
        >
      </div>
    </div>
    <!-- 最佳匹配的样式 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <van-cell
        v-for="item in theBest"
        :key="item.id"
        center
        :id="item.id"
        :title="item.name"
        :label="item.ar[0].name + '-' + item.name"
      >
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon" />
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getHotSearchWordsApi, searchResultApi } from "@/Api";
export default {
  data() {
    return {
      value: "",
      hotWordsList: [],
      theBest: [],
      timer: null,
      flag: false,
    };
  },
  async created() {
    const res = await getHotSearchWordsApi();

    this.hotWordsList = res.data.result.hots;
    console.log(this.hotWordsList);
  },
  methods: {
    async onbut(params) {
      this.value = params;
      const res = await searchResultApi({ type: 1, keywords: this.value });
      this.theBest = res.data.result.songs;
      this.flag = true;
    },
  },
  watch: {
    async value() {
      if (this.flag) {
        if (this.timer) clearTimeout(this.timer);
        if (this.value.length === 0) return (this.theBest = []);
        this.timer = setTimeout(async () => {
          const res = await searchResultApi({ type: 1, keywords: this.value });
          this.theBest = res.data.result.songs;
          console.log(this.theBest);
        }, 1000);
      }
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .van-icon-search {
  font-size: 16px;
}
/deep/ .van-cell {
  border-bottom: 10px;
}

.search_wrap {
  padding: 0.266667rem;
}

.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}
/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
/* 给单元格设置底部边框 */
.van-cell {
  border-bottom: 1px solid lightgray;
}
</style>>
