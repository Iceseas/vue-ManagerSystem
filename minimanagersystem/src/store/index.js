import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addNewQuestionFromShow: false,
    updateQuestionFormShow: false,
    SubjectiveFormShow: false,
    nowLoginUserCount: "",
    tableData: [],
    cols: [],
    vuethis: null,
    nowQuestionType: "",
    isgetSingleC1: false,
    isgetDecide: false,
    isFromShow: false,
    ispageinfoshow: false,
    updateItemDisabled: false,
    updateData: null,
    deleteDataId: null,
    addData: null,
    loading: false,
    total: 40,
    questionNum: 10,
  },
  mutations: {
    getAccess_Token(state, loop) {
      state.access_token = loop;
    },
    getVuethis(state, loop) {
      state.vuethis = loop;
    },
    getUpdateData(state, loop) {
      state.updateData = loop;
    },
    getAddData(state, loop) {
      state.addData = loop;
    },
    changePageInfo(state, loop) {
      state.questionNum = loop * 10;
    },
    nowLoginUserCount(state, loop) {
      state.nowLoginUserCount = loop;
    },
    changeNowQuestionType(state, loop) {
      state.nowQuestionType = loop;
    },
    changeNowDeleteDataId(state, loop) {
      state.deleteDataId = loop;
    },
  },
  actions: {
    get_listData_AJAX(store) {
      store.state.loading = true;
      if (!store.state.nowQuestionType) {
        store.state.nowQuestionType = window.localStorage.getItem(
          "questionType"
        );
      }
      axios({
        url: "http://localhost:3000/getQuestion/api/getlist",
        method: "POST",
        data: {
          questionNum: store.state.questionNum,
          nowQuestionType: store.state.nowQuestionType,
        },
      })
        .then((res) => {
          store.state.cols = [];
          if ("single_list" in res.data) {
            for (let u = 0; u < res.data.single_list.single_list.length; u++) {
              let obj1 = {};
              obj1.label = res.data.single_list.single_list[u].label;
              obj1.prop = res.data.single_list.single_list[u].prop;
              store.state.cols.push(obj1);
            }
          } else if ("decide_list" in res.data) {
            for (let v = 0; v < res.data.decide_list.decide_list.length; v++) {
              var obj2 = {};
              obj2.label = res.data.decide_list.decide_list[v].label;
              obj2.prop = res.data.decide_list.decide_list[v].prop;
              store.state.cols.push(obj2);
            }
          } else if ("vacancy_list" in res.data) {
            for (
              let w = 0;
              w < res.data.vacancy_list.vacancy_list.length;
              w++
            ) {
              let obj3 = {};
              obj3.label = res.data.vacancy_list.vacancy_list[w].label;
              obj3.prop = res.data.vacancy_list.vacancy_list[w].prop;
              store.state.cols.push(obj3);
            }
          } else if ("application_list" in res.data) {
            for (
              let x = 0;
              x < res.data.application_list.application_list.length;
              x++
            ) {
              let obj4 = {};
              obj4.label = res.data.application_list.application_list[x].label;
              obj4.prop = res.data.application_list.application_list[x].prop;
              store.state.cols.push(obj4);
            }
          } else if ("subjective_publish_list" in res.data) {
            for (
              let y = 0;
              y <
              res.data.subjective_publish_list.subjective_publish_list.length;
              y++
            ) {
              let obj5 = {};
              obj5.label =
                res.data.subjective_publish_list.subjective_publish_list[
                  y
                ].label;
              obj5.prop =
                res.data.subjective_publish_list.subjective_publish_list[
                  y
                ].prop;
              store.state.cols.push(obj5);
            }
          }
          store.state.tableData = [];
          for (var i = 0; i < res.data.result.data.length; i++) {
            store.state.tableData.push(JSON.parse(res.data.result.data[i]));
          }
          store.state.vuethis.$nextTick(() => {
            store.state.loading = false;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update_listData_AJAX(store) {
      store.state.vuethis.$Spin.show()
      axios({
        url: "http://localhost:3000/updateQuestion/api/updatelist",
        method: "POST",
        data: {
          data: store.state.updateData,
          nowQuestionType: store.state.nowQuestionType,
        },
      })
        .then((res) => {
          if (res.data.result.errcode == 0) {
            store.state.vuethis.$Spin.hide()
            store.state.vuethis.$Message.destroy()
            store.state.vuethis.$Message.success('更新成功')
          } else {
            store.state.vuethis.$Spin.hide()
            store.state.vuethis.$Message.destroy()
            store.state.vuethis.$Message.error('更新失败，请联系管理员')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add_listData_AJAX(store) {
      store.state.vuethis.$Spin.show()
      axios({
        url: "http://localhost:3000/addQuestion/api/addQuestionData",
        method: "POST",
        data: {
          data: store.state.addData,
          nowQuestionType: store.state.nowQuestionType,
        },
      })
        .then((res) => {
          if (res.data.AddmodelNewDataOresult.errcode == 0) {
            store.state.vuethis.$nextTick(() => {
            });
            store.state.vuethis.$Spin.hide()
            store.state.vuethis.$Message.destroy()
            store.state.vuethis.$Message.success('新增成功')
          } else {
            store.state.vuethis.$Spin.hide()
            store.state.vuethis.$Message.destroy()
            store.state.vuethis.$Message.error('新增失败，请联系管理员')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Delete_listData_AJAX(store) {
      store.state.vuethis.$Spin.show()
      axios({
        url: "http://localhost:3000/deleteQuestion/api/DeleteQuestionData",
        method: "POST",
        data: {
          Id: store.state.deleteDataId,
          nowQuestionType: store.state.nowQuestionType,
        },
      })
        .then((res) => {
          if (res.data.DeletemodelDataresult.errcode == 0) {
            store.state.vuethis.$Spin.hide()
            store.state.vuethis.$Message.destroy()
            store.state.vuethis.$Message.success('删除成功')
          } else {
            store.state.vuethis.$Spin.hide()
            store.state.vuethis.$Message.destroy()
            store.state.vuethis.$Message.error('删除失败，请联系管理员')
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get_PageInfo_AJAX(store) {
      if (!store.state.nowQuestionType) {
        store.state.nowQuestionType = window.localStorage.getItem(
          "questionType"
        );
      }
      axios({
        url: "http://localhost:3000/getPageInfo/api/getPageInfo",
        method: "POST",
        data: {
          nowQuestionType: store.state.nowQuestionType,
        },
      })
        .then((res) => {
          store.state.total = res.data.result.pager.Total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  plugins: [],
});
