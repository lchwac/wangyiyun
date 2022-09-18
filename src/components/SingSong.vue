<template>
  <div>
    <!-- 最新音乐 -->
    <van-cell-group>
      <van-cell
        v-for="item in newestList"
        :key="item.id"
        center
        :title="item.name"
        :label="item.song.artists[0].name + '-' + item.name"
      >
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
    newestList: [],
    id: {
      type: Number,
    },
  },
  methods: {
    play() {
      this.$router.push({
        path: "play",
        params: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style>
</style>