<template>
   <div>
       <div class='header'>
            <p class='title'>首页</p>
            <img src="../../static/image/cart.png" alt="" class='header-icon' @click='goCart' >
        </div>
        <div  class='list_box'>
            <div class='list' v-for='(item,index) in list' :key='index'>
                <img :src="item.img" alt="" class='banner_img' >
                <p class='list_name'>{{item.title}}</p>
                <p class='list_parice'>
                    <span class='parice'>￥ {{item.sellPrice}}</span>
                    <span @click="addCar(index)" class='add_tip'>加入购物车</span>
                </p>
            </div>
        </div>
   </div>
</template>
<script>
 import { mapActions } from 'vuex'    //引入方法
export default {
  name: '',
  data () {
    return {
        list:[{
           title:'鱼竿鱼竿1鱼竿1鱼竿1鱼竿1鱼竿11' ,
           img:'../../static/image/img3.png',
           num:1,
           sellPrice:12,
           productId:1
        },
        {
           title:'鱼竿鱼竿1鱼竿1鱼竿1鱼竿1鱼竿12' ,
           img:'../../static/image/img3.png',
           num:1,
           sellPrice:12,
           productId:2
        },
        {
           title:'鱼竿鱼竿1鱼竿1鱼竿1鱼竿1鱼竿13' ,
           img:'../../static/image/img4.png',
           num:1,
           sellPrice:12,
           productId:3
        },
        {
           title:'鱼竿鱼竿1鱼竿1鱼竿1鱼竿1鱼竿14' ,
           img:'../../static/image/img4.png',
           num:1,
           sellPrice:12,
           productId:4
        }]
    }
  },
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
       ...mapActions(['addGoods']),   //es6的扩展运算符
        // 加入购物车
        addCar:function(index){
            this.addGoods(this.list[index])    
            this.$toast.success('加入成功！');
        },
        goCart:function(){
            this.$router.push('/cart')
        }
  },
  watch: {}
}
</script>
<style>
    .header{
        display: flex;
        justify-content: center;
        align-items: center;
        background:#fff;
        height:50px;
        padding:0 10px;
        margin-bottom:10px;
        position: relative;
    }
    .back_icon{
        width:20px;
        height:20px;
    }
    .header-icon{
        width:30px;
        height:30px;
        position: absolute;
        right:10px;
        top:10px;
    }
    .title{
        font-size:16px;
        color:#000;
    }
.list_box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:10px;
}
.list{
    width:48%;
    overflow: hidden;
    background:#fff;
    box-shadow: 0 0 4px 4px rgba(0,0,0,0.1);
    margin-bottom:10px;
    padding-bottom:10px;
}
.banner_img{
    width:100%;
    display: block;
}
.list_name{
    font-size:14px;
    padding:10px 6px;
}
.list_parice{
   padding:0 6px; 
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.parice{
    color:rgba(254,1,55,1);
}
.cart_icon{
    width:30px;
    height:30px;
}
.add_tip{
    width:80px;
    height:24px;
    text-align: center;
    line-height:24px;
    border:1px solid #d81e06;
    color:#d81e06;
    border-radius:40px;
}
</style>
