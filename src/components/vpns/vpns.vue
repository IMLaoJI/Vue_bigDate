<template>
    <div id="tmpl">
        <div>
            <yd-accordion accordion>
                <yd-accordion-item :title="list[0].city+'   '+checklist1.length+'/'+list[0].count">
                    <div style="padding-left:12px;margin-bottom: 10px;" class="demo-small-pitch">
                        <yd-checkbox v-model="isCheckAll1" shape="circle" @click.native="checkAll1(0)">全选 {{isCheckAll1}} </yd-checkbox>
                    </div>
                    <yd-checklist v-model="checklist1" ref="checklistDemo" :callback="change">
                        <yd-checklist-item v-for="(item, index) in sublist[list[4].ccode-1].vpns" :key="index"
                                           :val="item">
                            <div style="height: 50px;line-height: 50px;">{{item}}</div>
                        </yd-checklist-item>

                    </yd-checklist>
                </yd-accordion-item>

            </yd-accordion>
        </div>
        <div>
            <yd-accordion accordion>
                <yd-accordion-item :title="list[1].city+'   '+checklist2.length+'/'+list[1].count">
                    <div style="padding-left:12px;margin-bottom: 10px;" class="demo-small-pitch">
                        <yd-checkbox v-model="isCheckAll2" shape="circle" @click.native="checkAll(1)">
                            全选 {{isCheckAll2}}
                        </yd-checkbox>
                    </div>
                    <yd-checklist v-model="checklist2" ref="checklistDemo" :callback="change">
                        <yd-checklist-item v-for="(item, index) in sublist[list[4].ccode-1].vpns" :key="index"
                                           :val="item">
                            <div style="height: 50px;line-height: 50px;">{{item}}</div>
                        </yd-checklist-item>

                    </yd-checklist>
                </yd-accordion-item>

            </yd-accordion>
        </div>

        <div>
            <yd-accordion accordion>
                <yd-accordion-item :title="list[2].city+'   '+checklist3.length+'/'+list[2].count">
                    <div style="padding-left:12px;margin-bottom: 10px;" class="demo-small-pitch">
                        <yd-checkbox v-model="isCheckAll3" shape="circle" @click.native="checkAll(2)">全选 {{isCheckAll3}} </yd-checkbox>
                    </div>
                    <yd-checklist v-model="checklist3" ref="checklistDemo" :callback="change">
                        <yd-checklist-item v-for="(item, index) in sublist[list[4].ccode-1].vpns" :key="index"
                                           :val="item">
                            <div style="height: 50px;line-height: 50px;">{{item}}</div>
                        </yd-checklist-item>

                    </yd-checklist>
                </yd-accordion-item>

            </yd-accordion>
        </div>

        <div>
            <yd-accordion accordion>
                <yd-accordion-item :title="list[3].city+'   '+checklist4.length+'/'+list[3].count">
                    <div style="padding-left:12px;margin-bottom: 10px;" class="demo-small-pitch">
                        <yd-checkbox v-model="isCheckAll4" shape="circle" @click.native="checkAll(3)">全选 {{isCheckAll4}} </yd-checkbox>
                    </div>
                    <yd-checklist v-model="checklist4" ref="checklistDemo" :callback="change">
                        <yd-checklist-item v-for="(item, index) in sublist[list[4].ccode-1].vpns" :key="index"
                                           :val="item">
                            <div style="height: 50px;line-height: 50px;">{{item}}</div>
                        </yd-checklist-item>

                    </yd-checklist>
                </yd-accordion-item>

            </yd-accordion>
        </div>

        <div>
            <yd-accordion accordion>
                <yd-accordion-item :title="list[4].city+'   '+checklist5.length+'/'+list[4].count">
                    <div style="padding-left:12px;margin-bottom: 10px;" class="demo-small-pitch">
                        <yd-checkbox v-model="isCheckAll5" shape="circle" @click.native="checkAll(4)">全选 {{isCheckAll5}} </yd-checkbox>
                    </div>
                    <yd-checklist v-model="checklist5" ref="checklistDemo" :callback="change">
                        <yd-checklist-item v-for="(item, index) in sublist[list[4].ccode-1].vpns" :key="index"
                                           :val="item">
                            <div style="height: 50px;line-height: 50px;">{{item}}</div>
                        </yd-checklist-item>

                    </yd-checklist>
                </yd-accordion-item>

            </yd-accordion>
        </div>

        <yd-cell-group class="box-b">
            <yd-cell-item>
                <span slot="left">线路名称：</span>
                <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入线路名称"></yd-input>
            </yd-cell-item>

        </yd-cell-group>

    </div>

</template>

<script>


    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';

    export default {
        components: {},
        data() {
            return {
                spinner1: 0,
                input1: '',
                flag: true,
                checklist: [],
                checklist1: [],
                checklist2: [],
                checklist3: [],
                checklist4: [],
                checklist5: [],
                isCheckAll1: false,
                isCheckAll2: false,
                isCheckAll3: false,
                isCheckAll4: false,
                isCheckAll5: false,
                isCheckAll: [],
                flag: 0,
                list: [
                    {
                        city: "广东广州",
                        ccode: 1,
                        count: 2
                    },
                    {
                        city: "广东深圳",
                        ccode: 2,
                        count: 2
                    },
                    {
                        city: "浙江杭州",
                        ccode: 3,
                        count: 2
                    },
                    {
                        city: "广西南宁",
                        ccode: 4,
                        count: 2
                    },
                    {
                        city: "广西南宁",
                        ccode: 5,
                        count: 2
                    }
                ],
                sublist: [
                    {vpns: ["天河电信", "海珠网通"], checked: false, status: 'open'},
                    {vpns: ["南山网通", "福田电信"], checked: false, status: 'open'},
                    {vpns: ["天河电信", "海珠网通"], checked: false, status: 'open'},
                    {vpns: ["天河电信", "海珠网通"], checked: false, status: 'open'},
                    {vpns: ["天河电信", "海珠网通"], checked: false, status: 'open'}
                ]
            }
        },
        created() {
            var len = 5;
            for (var i = 0; i < len; i++) {

                var item = {checklistname: []};
                var item1 = {checkall: false};
                this.checklist.push(item);
                this.isCheckAll.push(item1);
            }
        },
        methods: {
            change(value, index, isCheckAll) {
                console.log(this.checklist1);
                console.log(this.checklist2);
                console.log(this.checklist3);
            },

            checkAll(index) {
                console.log(index);
                if (this.flag == index) {


                }


            },
            checkAll1(index) {
                var temp = "checklist" + (index + 1);
                console.log(temp);
                this.isCheckAll1 = !this.isCheckAll1;
                if (temp == "checklist1" && this.flag) {
                    this.flag = false;
                    this.checklist1 = ["天河电信", "海珠网通"];
                    console.log(this.checklist1);
                } else {
                    this.checklist1 = [];
                    this.flag = true;
                }

            }
        }
    }

</script>

<style scoped>
    /*图片详情样式*/
    .yd-cell-box {
        margin-bottom: 3.35rem;
        padding-bottom: 1rem;
        position: absolute;
        bottom: 0%;
    }

    #desc {
        padding: 10px;
    }

    #desc .title h4 {
        color: #0094ff;
    }

    #desc .title p {
        color: rgba(0, 0, 0, 0.4);
        margin-top: 10px;
    }

    #desc .title .line {
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }

    .mui-content, .mui-content ul {
        background-color: #fff;
    }

    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0px;
        border-bottom: 0px;
    }

    .mui-grid-view.mui-grid-9 {
        border-top: 0px;
        border-left: 0px;
    }

    /* 9宫格缩略图的样式*/
    .mui-content img {
        width: 100px;
        height: 100px;
    }
    .box-b{
        width: 100%;
        position: fixed;
        z-index: 5;
        bottom: 0;
        margin: 0;
        padding: 0;
    }
</style>