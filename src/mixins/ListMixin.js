import bus from '../utils/eventbus'

export default {
    // 재사용할 컴포넌트 옵션
    created() {
        bus.$emit('start:spinner');
        setTimeout(() => {
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    console.log('fetched minxins1');
                    bus.$emit('end:spinner');
                })
                .catch(e => {
                    console.log(e);
                })
        }, 3000);   
    }
}