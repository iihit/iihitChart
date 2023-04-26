<style lang="scss" scoped>
.comment-list {
  padding: 30px 0;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 20px;
  text-align: center;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list li {
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 20px;
}

.user-info {
  align-items: center;
  display: flex;
  margin-bottom: 10px;
}

.avatar {
  border-radius: 50%;
  height: 50px;
  margin-right: 10px;
  width: 50px;
}

.name {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.comment-content {
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

.date {
  font-size: 14px;
  margin: 0;
  text-align: right;
}
</style>

<template>
  <div class="comment-list">
    <h2 class="title">좋아요와 댓글</h2>
    <ul class="list">
      <li v-for="(comment, index) in comments" :key="index">
        <div class="user-info">
          <img class="avatar" :src="comment.avatar" :alt="comment.name" />
          <div class="name">{{ comment.name }}</div>
        </div>
        <div class="comment-content">{{ comment.content }}</div>
        <div class="date">{{ comment.date }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

