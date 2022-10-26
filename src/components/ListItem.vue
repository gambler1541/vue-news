<template>
    <ul class='post-list'>
        <li v-for="item in itemList" v-bind:key="item.id" class="post">
            <div class='points'>
            {{  item.points || 0 }}
            </div>
            <div class='content'>
                <p class='title'>
                    <template v-if='item.domain'>
                        <a v-bind:href="item.url">{{ item.title }}</a>
                    </template>
                    <template v-else>
                        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
                    </template>
                </p>
                <small class='link-text'>
                    by
                    <router-link 
                        v-if="item.user"
                        v-bind:to="`/user/${item.user}`" 
                        class='link-text'
                    >
                        {{ item.user }}
                    </router-link>                
                    <a v-else v-bind:href="item.url" class='link-text'>{{ item.domain }}</a>
                    {{ item.time_ago }}
                </small>
            </div>
        </li>
    </ul>  
</template>
<script>
export default {
    computed: {
        itemList() {
            const name = this.$route.name;
            if( name === 'news'){
                return this.$store.state.news;
            } else if( name === 'ask'){
                return this.$store.state.ask;
            } else if( name === 'jobs' ){
                return this.$store.state.jobs;
            }else {
                return ''
            }              
        }
    }
}
</script>
<style>
    .post-list {
        margin: 0;
        padding: 0;
    }

    .post {
        list-style: none;
        display: flex;
        align-content: center;
        border-bottom: 1px solid #eee;
    }

    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #41b883;
    }
    
    .title {
        margin: 0;
    }

    .content{
        padding: 5px;
    }

    .link-text {
        color: #828282;
    }
</style>