<template>
  <div>
    <p class="title">推荐歌单</p>
    <van-row type="flex" justify="space-between" gutter="3">
      <van-col span="8" v-for="item in commendlist" :key="item.id"
        ><van-image width="100%" height="100" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p>
      </van-col>
    </van-row>
    <p class="title">最新音乐</p>
    <!-- 最新音乐 -->
    <SingSong
      v-for="item in newestListo"
      :key="item.id"
      :id="item.id"
      :title="item.name"
      :lableAuthor="item.song.artists[0].name + '-' + item.name"
    ></SingSong>
  </div>
</template>

<script>
import { getCommendListApi, getNewestApi } from "@/Api";
import SingSong from "@/components/SingSong";

export default {
  data() {
    return {
      commendlist: [],
      newestListo: [],
    };
  },
  async created() {
    const res = await getCommendListApi({ limit: 6 });
    this.commendlist = res.data.result;

    const data = await getNewestApi({ limit: 20 });
    this.newestListo = data.data.result;
    console.log(this.newestListo);
  },
  components: {
    SingSong,
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
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>>
