<template>
  <div>
    <van-nav-bar
    title="相关评论"
  left-arrow
  @click-left="$router.back()"
  fixed/>
    
    <div class="main">
      <van-cell  v-for="item in  commentList" :key="item.commentId">
        <template>
        <div class="wrap">
          <div class="img_wrap">
            <img :src="item.user.avatarUrl" />
          </div>
          <div class="content_wrap">
            <div class="header_wrap">
              <div class="info_wrap">
                <p>{{item.user.nickname}}</p>
                <p>{{item.timeStr}}</p>
              </div>
              <div>{{item.likedCount}}点赞</div>
            </div>
            <div class="footer_wrap">{{item.content}}</div>
          </div>
        </div>  
         </template>
        </van-cell>     
      </div>
    </div>
  
  </div>

 
</template>

<script>
import { getCommentAPI } from "@/Api";
export default {
  data() {
    return {
      commentList: [],
    };
  },
  async created() {
    console.log(this.$route.query.id);
    const data = await getCommentAPI({ id: this.$route.query.id, limit: 20 });
    this.commentList = data.data.comments;
    console.log(data.data);
    console.log(this.commentList);
  },
};
</script>

<style lang="less" scoped>
.main {
}
.wrap {
  display: flex;
}
.img_wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-left: 0.266667rem;
}
.img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.content_wrap {
  flex: 1;
}

.header_wrap {
  display: flex;
}
.info_wrap {
  flex: 1;
}
.info_wrap p:first-child {
  font-size: 0.373333rem;
  color: #666;
}
.info_wrap p:last-child {
  font-size: 0.24rem;
  color: #999;
}
.header_wrap div:last-of-type {
  color: #999;
  font-size: 0.293333rem;
}
.footer_wrap {
  font-size: 0.4rem;
  color: #333;
}
</style>>
