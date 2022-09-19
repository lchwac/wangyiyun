<template>
  <div>
    <!-- 最新音乐 -->
    <van-cell-group>
      <van-cell center :title="title" :label="lableAuthor" @click="comment">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="play-circle-o" class="search-icon" @click="play" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    lableAuthor: String,
    title: String,
  },
  methods: {
    play() {
      console.log(this.id);
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
    comment() {
      console.log(this.id);
      this.$router.push({
        path: "/comment",
        query: { id: this.id },
      });
    },
  },
};
</script>

<style>
</style>