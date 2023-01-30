<template>
    <div class="home-page" :style="{height}">
        <header class="header">
            <div class="header-icon">
                <div class="header-icon--left">
                    LUCKY
                    <div class="span">DUTY FREE</div>
                </div>
                <div class="header-icon--right">
                    <customize :width="1" :animationData="icon" :height="1"/>
                </div>
            </div>
            <div class="header-card">
                <span>
                    Hello!<br/>
                    welcome to lucky<br/>
                    _
                </span>
                <div class="header-card--cloud-left">
                    <cloud :width="4" :height="4"/>
                </div>
                <div class="header-card--cloud-right">
                    <cloud :width="3" :delay="800" :height="1.2"/>
                </div>
                <div class="header-card--astronaut">
                    <astronaut :width="8" :height="8"/>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="main-container">
                <div class="main-container--outside">
                    <div id="lopp"></div>
                    <div v-for="(animation,index) in animations" :key="index"  :class="`ball ball${index+1}`" @click="click">
                        <customize :width="1.2" :animationData="animation.data" :height="1.2" class="animation"/>
                        <span class="title">{{animation.title}}</span>
                    </div>
                </div>
                <div class="main-container--inside">
                    <div id="lopp"></div>
                    <div class="ball ball1" >
                        <customize :width="1.2" :animationData="creation" class="animation" :height="1.2"/>
                        <span class="title">创作者社区</span>
                    </div>
                </div>
            </div>

            <div class="main-title">
                <i>任务排行版</i><br/>
                Task leaderboard
            </div>

            <div class="main-swipe">
                <Swipe :autoplay="5000" @change="()=>{}" :show-indicators="false" :duration="1000">
                    <SwipeItem v-for="(color, index) in colors" :key="index" class="card" >
                    <div @click="()=>{}" class="cardWrap" :style="{background: `linear-gradient(${color.gradient})`}">
                        <div class="span">
                            <div class="span-title">用户id<div>{{ color.id }}</div></div>
                            <div class="span-title">订单次数<div>{{ color.OrderNo }}</div></div>
                            <div class="span-title">团队人数<div>{{ color.TeamSize }}</div></div>
                            <div class="span-title">奖励<div>{{ color.reward }}</div></div>
                        </div>
                        <div class="main-swipe--cloud-left">
                            <cloud :width="2" :delay="1200" :height="2"/>
                        </div>
                        <div class="main-swipe--cloud-right">
                            <cloud :width="1" :delay="1600" :height="1.2"/>
                        </div>
                        
                    </div>
                    </SwipeItem>
                </Swipe>
                </div>
        </main>

    </div>
</template>

<script>
import customize from './../../components/customize.vue';
import cloud from "./../../components/cloud.vue";
import astronaut from "./../../components/astronaut.vue";
import horn from './../../../public/113084-loud-speaker-horn.json';
import money from './../../../public/51720-making-money.json';
import creation from './../../../public/93344-creation-investment.json';
import about from './../../../public/121571-about.json';
import signIn from './../../../public/68469-pen-writing-sign-in.json';
import love from './../../../public/96004-premium-love.json';

import icon from './../../../public/132900-0101ftue-04.json';


import { Toast, Swipe, SwipeItem } from 'vant';
export default {
    name: 'home',
    components: {
        Swipe, SwipeItem,
        cloud,
        astronaut,
        customize
    },
    data(){
        return {
            colors: [
                { id:2400123, OrderNo: 12, TeamSize: 10, reward: '优惠券', gradient: '220.55deg, #A531DC 0%, #4300B1 100%'},
                { id:2402023, OrderNo: 19, TeamSize: 19, reward: '优惠券', gradient: '220.55deg, #FF896D 0%, #D02020 100%'},
                { id:2412123, OrderNo: 12, TeamSize: 12, reward: '优惠券', gradient: '220.55deg, #FFD439 0%, #FF7A00 100%'}
            ],

            height: '100vh',
            horn:horn,
            money: money,
            creation:creation,
            about:about,
            signIn:signIn,
            love:love,
            icon:icon,
            animations:[
                {data: horn,title: '平台收益介绍'},
                {data: money,title: '销售分红'},
                {data: about,title: '关于我们'},
                {data: signIn,title: '签到'},
                {data: love,title: '慈善公益'}
            ]
        }
    },
    mounted(){
        this.height = `${window.innerHeight}px`
    },
    methods:{
        click(){
            Toast('2')
        },
        handleAnimation: function (anim) {
            this.anim = anim;
        },
    }
}
</script>

<style lang="less">
    .home-page{
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        .header{
            padding: .5rem;
            position: relative;
            span{
                position: absolute;
                padding: .5rem;
                color: #fff;
                font-size: .6rem;
            }
            &-icon{
                height: 1rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                &--left{
                    width: 1.8rem;
                    height: 1rem;
                    color: rgb(176, 135, 135);
                    .span{
                        font-size: .3rem;
                        color: rgb(176, 135, 135);
                    }
                }
                &--right{
                    width: .8rem;
                    height: .8rem;
                }
            }

            &-card{
                margin-top: .5rem;
                height: 4.5rem;
                width: 100%;
                background-color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                border-radius: 8px;
                background: linear-gradient(#FF626E, #FFBE71);
                overflow: hidden;
                &--cloud{
                    &-left{
                        width: 4rem;
                        height: 4rem;
                        transform: translate(-20%,60%);
                    }
                    &-right{
                        width: 3rem;
                        height: 2rem;
                        transform: translate(230%,-210%);
                    }
                }
                &--astronaut{
                    width: 8rem;
                    height: 8rem;
                    transform: translate(40%,-98%);
                }
            }
        }
        .main{
            padding: .5rem;
            &-container{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                height: 7rem;
                &--outside{
                    @keyframes animX{
                    0%{ left: 0px;}
                    100%{ left: 8rem;}
                }
                @keyframes animY{
                    0%{ top: 0px;}
                    100%{ top: 4.8rem;}
                }
                @keyframes scale {
                    0% {
                    transform: scale(0.7)
                    }
                    50% {
                    transform: scale(1)
                    }
                    100% {
                    transform: scale(0.7)
                }
                }

                
                .ball {
                    z-index: 9999;
                    height: 1.3rem;
                    position: absolute;
                    color:#fff;
                    display:flex;
                    align-items: center;
                    .animation{
                        width: 1.3rem;
                        height: 1.3rem;
                    }
                    .title{
                        display: inline-block;
                        justify-content: center;
                        padding: 0 .2rem 0;
                        line-height: 1rem;
                        font-size: .3rem;
                        color: #e2ccce;
                        flex: 2;
                        height: 1rem;
                        align-items: center;
                        border-radius: 10px;
                        white-space: nowrap;
                        color: #a95050;
                    }
                }
                .ball1 {
                    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
                    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
                    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;

                }

                .ball2 {
                    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -9s infinite alternate,
                    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate,
                    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate;
                }

                .ball3 {
                    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13s infinite alternate,
                    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate,
                    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate;
                }

                .ball4 {
                    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -17s infinite alternate,
                    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate,
                    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
                }

                .ball5 {
                    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -21s infinite alternate,
                    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate,
                    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate;
                }

                #lopp {
                    width: 8rem;
                    height: 4.8rem;
                    border: 3px solid rgb(255, 255, 255);
                    border-radius: 50%;
                    position: absolute;
                    left: .6rem;
                    top: 1.2rem;
                }                }
                &--inside{
                    position: absolute;
                    left: 2rem;
                    top: 1rem;
                    @keyframes animX2{
                    0%{ left: 0px;}
                    100%{ left: 4rem;}
                    }
                    @keyframes animY2{
                        0%{ top: 0px;}
                        100%{ top: 2.4rem;}
                    }
                    @keyframes scale2 {

                        0% {
                        transform: scale(0.7)
                        }
                        50% {
                        transform: scale(1)
                        }
                        100% {
                        transform: scale(0.7)
                    }
                }

                
                .ball {
                    width: 4rem;
                    height: 1.2rem;
                    position: absolute;
                    color:#fff;
                    display:flex;
                    .animation{
                        width: 1.3rem;
                        height: 1.3rem;
                    }
                    .title{
                        display: inline-block;
                        justify-content: center;
                        padding: 0 .2rem 0;
                        z-index: 9999;
                        color: #e2ccce;
                        flex: 2;
                        font-size: .3rem;
                        height: 1rem;
                        line-height: 1rem;
                        align-items: center;
                        border-radius: 10px;
                        white-space:nowrap;
                        color:#a95050;
                    }
                }
                .ball1 {
                    animation: animX2 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
                    animY2 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
                    scale2 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;

                }

                #lopp {
                    width: 4rem;
                    height: 2.4rem;
                    border: 3.8px solid rgb(255, 255, 255);
                    border-radius: 50%;
                    position: absolute;
                    left: .6rem;
                    top: 1.2rem;
                }
                }
            }
            &-item{
                position: absolute;
                left: 50%;
                top:50%;
                transform: translate(-50%,-50%);

                background-color: #FF626E;
            }
            &-swipe{
                width: 100%;
                .card{
                    padding: 0 .3rem;
                    background-color: transparent;
                    height: 1.8rem;
                    width: 100%;
                    .cardWrap{
                        background-color: white;
                        height: 100%;
                        width: 100%;
                        border-radius: 8px;
                        overflow: hidden;
                        position: relative;
                        .span{
                            text-align: center;
                            line-height: 0.7rem;
                            width: 80%;
                            height: 1.8rem;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            z-index: 999;
                            padding: .2rem;
                            color: #fff;
                            font-size: .6rem;
                            display: flex;
                            justify-content: space-around;
                            font-size: .28rem;
                            &-title{
                                font-size: .35rem;
                            }
                        }
                    }
                }
                &--cloud{
                    &-left{
                        width: 2rem;
                        height: 2rem;
                        transform: translate(-19%,30%);
                    }
                    &-right{
                        width: 1rem;
                        height: 1.2rem;
                        transform: translate(750%,-190%);
                    }
                }
            }
            &-title{
                padding: 0 .3rem .5rem;
                font-size: .3rem;
                color:#c1606892;
                i{
                    font-weight: 700;
                    color: #FF626E;
                    font-size: .48rem;
                }
            }
        }
    }
    

</style>

