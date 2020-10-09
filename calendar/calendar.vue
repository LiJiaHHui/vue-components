<template>
    <div v-click-outside>
        <input type="text" :value="formatDate">
        <div class="pannel" v-show="isVisible">
            <div class="pannel-nav">
                tou
            </div>
            <div class="pannel-connent">neir</div>
            <div class="pannel-footer">wei</div>
        </div>
    </div>
</template>

<script>
    // 将js中的所有方法都变成utils对象，便于调用
    import * as utils from './util'
    export default {
        data(){
            return{
                isVisible:false
            }
        },
        props: {
            value: {
                type: Date,
                default: () => new Date()//返回函数类型
            }
        },
        directives: {
            // el当前绑定的元素,vnode虚拟节点
            clickOutside:{
                bind(el,bindings,vnode){
                    let handler = (e)=>{
                       if(el.contains(e.target)){
                        // 当前节点上下文
                           vnode.context.focus()
                            console.log('bh')
                        }else{
                            vnode.context.blur()
                            console.log('bgh')
                    }
                }
                
                el.handler=handler
                document.addEventListener('click',handler)
            },
            // 移除监听
            unbind(el){
                document.removeEventListener('click',el.handler)
            }}
        },
        methods:{
            focus(){
                this.isVisible=true
            },
            blur(){
                this.isVisible=false
            }
        },
        computed:{
            formatDate(){
                let {year,month,day}=utils.getYearMonthDay(this.value)
                return `${year}-${month+1}-${day}`
            }
        }
    }
</script>
<style lang="stylus">
.pannel
    position absolute
</style>