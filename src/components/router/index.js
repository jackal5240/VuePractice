import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
//金融常識
import finTest from "@/components/fin/finTest.vue";
import finTestinOrder from "@/components/fin/finTestinOrder.vue";
import finTestMock100 from "@/components/fin/finTestMock100.vue";
//道德
import finEthics from "@/components/fin/finEthics.vue";
//測試
import testMainPage from "@/components/test/testMainPage.vue";
import testAxios from "@/components/test/testAxios.vue";
import testComputed from "@/components/test/testComputed.vue";
import testStore from "@/components/test/testStore.vue";
import testPathVal from "@/components/test/testPathVal.vue";
//測試UI設計
import testImage from "@/components/testUI/testImage.vue";
import testCSSLeave from "@/components/testUI/testCSSLeave.vue";
import testSlide from "@/components/testUI/testSlide.vue";
import testIV01 from "@/components/testUI/testIV01.vue";
import testIV02 from "@/components/testUI/testIV02.vue";
import cssLight from "@/components/testUI/cssLight.vue";

// cbp2
import t1 from "@/components/cbp2/t1.vue";
import t3get from "@/components/cbp2/t3get.vue";
import t3list from "@/components/cbp2/t3list.vue";
import t1newtable from "@/components/cbp2/t1newtable.vue";
import apiList from "@/components/cbp2/apiList.vue";




Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    // base: process.env.VUE_APP_PUBLIC_PATH,
    //routes
    routes: [

        {
            path: '/example',
            name: 'example',
            component: HelloWorld
        },
        {
            path: '/finTest',
            name: 'finTest',
            component: finTest,
            children: [{
                path: 'finTestH',
                name: 'finTestH',
                component: finTestinOrder
            },
            {
                path: 'finTestT',
                name: 'finTestT',
                component: finTestMock100
            },
            ],
        },

        {
            path: '/finEthics',
            name: 'finEthics',
            component: finEthics
        },
        {
            path: '/testImage',
            name: 'testImage',
            component: testImage
        },
        {
            path: '/testCSSLeave',
            name: 'testCSSLeave',
            component: testCSSLeave
        },
        {
            path: '/testSlide',
            name: 'testSlide',
            component: testSlide
        },
        {
            path: '/testIV01',
            name: 'testIV01',
            component: testIV01
        },
        {
            path: '/testIV02',
            name: 'testIV02',
            component: testIV02
        },
        {
            path: '/cssLight',
            name: 'cssLight',
            component: cssLight
        },
        {

            path: '/testMainPage',
            name: 'testMainPage',
            component: testMainPage,
            children: [{
                path: 'testAxios',
                name: 'testAxios',
                component: testAxios
            },

            {
                path: 'testComputed',
                name: 'testComputed',
                component: testComputed
            },
            {
                path: 'testStore',
                name: 'testStore',
                component: testStore
            },
            {
                path: 'testPathVal',
                name: 'testPathVal',
                component: testPathVal
            },


            ],
        },
        {
            path: '/t1',
            name: 't1',
            component: t1
        },
        {
            path: '/t3get',
            name: 't3get',
            component: t3get
        },
        {
            path: '/t3list',
            name: 't3list',
            component: t3list
        },
        {
            path: '/t1newtable',
            name: 't1newtable',
            component: t1newtable
        },
        {
            path: '/apiList',
            name: 'apiList',
            component: apiList
        },
    ]
});



export default router;