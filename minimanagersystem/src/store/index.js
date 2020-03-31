import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tableData: [],
        cols: [],
        access_token: '',
        vuethis: null,
        nowQuestionType: '',
        isgetSingleC1: false,
        isgetDecide: false,
        isupdataFromShow: false,
        ispageinfoshow: false,
        updateItemDisabled: false,
        updateData: null,
        loading: false,
        total: 40,
        questionNum: 10
    },
    mutations: {
        getAccess_Token(state, loop) {
            state.access_token = loop
        },
        getVuethis(state, loop) {
            state.vuethis = loop
        },
        getUpdateData(state, loop) {
            state.updateData = loop
        },
        changePageInfo(state, loop) {
            console.log('loop', loop)
            state.questionNum = loop * 10
        }
    },
    actions: {
        get_listData_AJAX(store) {
            store.state.loading = true
            axios({
                    url: 'http://localhost:3000/getQuestion/getlist',
                    method: 'POST',
                    data: {
                        "questionNum": store.state.questionNum,
                        "nowQuestionType": store.state.nowQuestionType
                    }
                })
                .then(res => {
                    store.state.cols = []
                    for (var j = 0; j < res.data.cols_list.cols_list.length; j++) {
                        var obj = {}
                        obj.label = res.data.cols_list.cols_list[j].label
                        obj.prop = res.data.cols_list.cols_list[j].prop
                        store.state.cols.push(obj)
                    }
                    store.state.tableData = []
                    for (var i = 0; i < res.data.result.data.length; i++) {
                        store.state.tableData.push(JSON.parse(res.data.result.data[i]))
                    }
                    store.state.vuethis.$nextTick(() => {
                        store.state.loading = false
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        },
        update_listData_AJAX(store) {
            store.state.loading = true
            axios({
                    url: 'http://localhost:3000/updateQuestion/updatelist',
                    method: 'POST',
                    data: {
                        "data": store.state.updateData,
                        "nowQuestionType": store.state.nowQuestionType
                    }

                })
                .then(res => {
                    console.log(res)
                    if (res.data.result.errcode == 0) {
                        store.state.vuethis.$nextTick(() => {
                            store.state.loading = false
                        })
                        alert('更新成功！')
                    } else {
                        alert('更新失败，请检查参数')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        get_PageInfo_AJAX(store) {
            axios({
                    url: 'http://localhost:3000/getPageInfo/getPageInfo',
                    method: 'POST',
                    data: {
                        "nowQuestionType": store.state.nowQuestionType
                    }
                })
                .then(res => {
                    console.log('total', res)
                    store.state.total = res.data.result.pager.Total
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    modules: {}
})