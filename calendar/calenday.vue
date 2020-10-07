<template>
    <div>
        <input type="text" :value="formatDate">
        <div>
            content
        </div>
    </div>
</template>

<script>
    // 将js中的所有方法都变成utils对象，便于调用
    import * as utils from './util'
    export default {
        props: {
            value: {
                type: Date,
                default: () => new Date()//返回函数类型
            }
        },
        //生命周期 - 创建完成（访问当前this实例）
        created() {
        },
        //生命周期 - 挂载完成（访问DOM元素）
        mounted() {
        },
        computed:{
            formatDate(){
                let {year,month,day}=utils.getYearMonthDay(this.value)
            }
        }
    }
</script>
<style scoped>
    /* @import url(); 引入css类 */
</style>