<!--  -->
<template>
    <!-- <div>
        爱拼才会赢
    </div> -->
    <calenday :value="now"></calenday>
</template>
<script>
import calenday from './calenday'
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
        calenday
    }
}
</script>
<style lang="stylus">
/* @import url(); 引入css类 */
    div
        background red
</style>