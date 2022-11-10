import ListView from './ListView.vue'
import bus from '../utils/eventbus'
import {h} from 'vue'

export default function createListView(name){
    return {
        name: name,
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }, 3000);        
        },
       // 재사용할 인스턴스(컴포넌트)
        render(){
            return h(ListView);
        },
    }
}