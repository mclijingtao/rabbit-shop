<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from '@/views/Home/components/HomePanel.vue'
import { findNewAPI, getHotAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'

const newList = ref([])
const hotList = ref([])

onMounted(async () => {
    const newRes = await findNewAPI()
    newList.value = newRes.data.result
    const hotRes = await getHotAPI()
    hotList.value = hotRes.data.result
})

</script>

<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱">
        <ul class="goods-list">
            <li v-for="item in newList" :key="item.id">
                <RouterLink to="/">
                    <img :src="item.picture" alt="" />
                    <p class="name">{{ item.name }}</p>
                    <p class="price">&yen;{{ item.price }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
    <HomePanel title="人气推荐" subTitle="人气爆款 不容错过">
        <ul class="goods-list">
            <li v-for="item in hotList" :key="item.id">
                <RouterLink to="/">
                    <img v-img-lazy="item.picture" alt="">
                    <p class="name">{{ item.title }}</p>
                    <p class="desc">{{ item.alt }}</p>
                </RouterLink>
            </li>
        </ul>
    </HomePanel>
    <HomeProduct />
</template>

<style scoped lang='scss'>
.goods-list {
    display: flex;
    justify-content: space-between;
    height: 406px;

    li {
        width: 306px;
        height: 406px;

        background: #f0f9f4;
        transition: all .5s;

        &:hover {
            transform: translate3d(0, -3px, 0);
            box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
        }

        img {
            width: 306px;
            height: 306px;
        }

        p {
            font-size: 22px;
            padding-top: 12px;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }

        .price {
            color: $priceColor;
        }
    }
}
</style>