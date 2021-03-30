<!--  -->
<template>
<div class='car'>
    <div class='header'>
        <img src="../../static/image/back.png" alt="" class='back_icon' @click='goBack' >
        <p class='title'>购物车</p>
        <span></span>
    </div>
    <div class='edit'>
        <p class='edit-text edit-texts' @click='del_show=false' v-if='del_show' >完成</p>
        <p class='edit-text ' @click="del_show=true" v-else>编辑</p>
    </div>
    <div class='car-box'>
        <div class='car-list' v-for='(item,index) in carList'  :key='index'>
            <img src="../../static/image/radios.png" alt="" class='choose-icon'  v-if='item.selected' @click='select(item.productId)'>
             <img src="../../static/image/radio.png" alt="" class='choose-icon' v-else @click='select(item.productId)'>
            <img :src="item.img" alt="" class='car-img' >
            <div class='car-fr'>
                <div class='car-name'>{{item.title}}</div>
                <div class='fr-btm'>
                    <div class='car-money'>
                        <p class='money-now'>￥{{item.sellPrice}}</p>
                    </div>
                    <div class='car-num'>
                        <img src="../../static/image/jian1.png" alt="" class='num-icon'  v-if='item.num==1'>
                         <img src="../../static/image/jian.png" alt="" class='num-icon' @click='jianNum(item.productId)' v-else>
                        <span class='car-nums'>{{item.num}}</span>
                        <img src="../../static/image/jia.png" alt=""  class='num-icon' @click='addNum(item.productId)' >
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class='car-btm'>
        <div class='btm-fl' @click="selectAll()">
            <img src="../../static/image/radios.png" alt="" class='choose-icon' v-if='allSelsect' >
            <img src="../../static/image/radio.png" alt="" class='choose-icon' v-else >
            <span class='all-text'>全选</span>
        </div>
        <div class='all-money'>共计：￥{{allMoney}}</div>
        <div class='del' v-if='del_show' @click="del()">删除</div>
        <div class='pay' v-else>结算</div>
    </div>
</div>
</template>

<script>
    import { mapActions ,mapGetters} from 'vuex'
    export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
    //这里存放数据
    return {
        del_show:false
    };
    },
    //监听属性 类似于data概念
    computed: {   //computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理；
        ...mapGetters(['carList','allMoney','allSelsect'])   
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        ...mapActions(['headTitle','addNum','jianNum','select','selectAll','del','showBtm']),
        goBack:function(){
           this.$router.back(-1)
        }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>
<style>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background:#fff;
        height:50px;
        padding:0 10px;
    }
    .back_icon{
        width:20px;
        height:20px;
    }
    .title{
        font-size:16px;
        color:#000;
    }
    .edit{
        padding:14px;
        display: flex;
        justify-content: flex-end;
    }
    .edit-text{
        width:80px;
        height:30px;
        text-align: center;
        line-height:30px;
        border:1px solid #888;
        color:#888;
        border-radius:30px;
    }
    .edit-texts{
        color:#d81e06;
        border:1px solid #d81e06;
    }
    .car-box{
        padding:0 14px;
    }
    .car-list{
        background:#fff;
        margin-bottom:16px;
        display: flex;
        align-items: center;
        padding:10px 6px;
        border-radius:4px;
    }
    .choose-icon{
        width:20px;
        height:20px;
        margin-right:10px;
    }
    .car-img{
        width:100px;
        margin-right:16px;
    }
    .car-fr{
        width:180px;
    }
    .car-name{
        font-size:14px;
        color:#333;
        margin-bottom:20px;
    }
    .fr-btm{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .money-now{
        font-size:14px;
        color:#d81e06;
    }
    .car-num{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .num-icon{
        width:20px;
        height:20px;
        border-radius:2px;
    }
    .car-nums{
        width:30px;
        text-align: center;
    }
    .car-btm{
        width:100%;
        height:60px;
        background:#fff;
        position: fixed;
        bottom:0;
        left:0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:16px;
        color:#333;
    }
    .btm-fl{
        padding-left:18px;
        display: flex;
        align-items: center;
    }
    .pay{
        width:120px;
        text-align: center;
        line-height:60px;
        background:#d81e06;
        color:#fff;
        font-size:20px;
        font-weight: bold;
    }
    .del{
        width:100px;
        height:30px;
        text-align: center;
        line-height:30px;
        color:#d81e06;
        border:1px solid #d81e06;
        border-radius:30px;
        margin-right:20px;
    }
</style>
