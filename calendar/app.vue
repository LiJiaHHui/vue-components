<template>
    <calendar :value="now"></calendar>
</template>
<script>
import calendar from './calendar'
export default {
    data() {
        return {
            now: new Date()
        }
    },
//生命周期 - 创建完成（访问当前this实例）
    created() {

    },
//生命周期 - 挂载完成（访问DOM元素）
    mounted() {
    },
    components:{
        calendar
    }
}
</script>
<style lang="stylus">
/* @import url(); 引入css类 */
</style>