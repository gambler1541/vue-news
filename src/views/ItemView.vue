<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <template v-slot:username> <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link></template>
        <template v-slot:time>{{ fetchedItem.time_ago }}</template>
      </user-profile>
      <!-- 질문 상세 정보 -->
      <!-- <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 본문 -->
      <div v-html="fetchedItem.content"></div>
    </section>
    <section>
      <h2>Comment</h2>
      <!-- 질문 댓글 -->
      <div v-for="item in fetchedItem.comments" v-bind:key="item.id">
        <div v-html="item.content"></div>
        <span>{{ item.user }} by {{ item.time_ago }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { UserProfile },
  computed: {
      ...mapGetters(['fetchedItem']),
  },
  created(){
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', id);
  }
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }

  .fa-user {
    font-size: 2.5rem;
  }

  .user-description {
    padding-left: 8px;
  }

  .time {
    font-size: 0.7px;
  }
</style>