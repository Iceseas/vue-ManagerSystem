<template>
  <div class="showTable_box">
    <div class="Icontainer" style="display: flex;flex-direction: column;">
      <div class="IcontainerTopRow">
        <div class="IcontainerTopTitle">查询列表</div>
        <div class="IcontainerTopBtns">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </div>
      </div>
      <div class="searchFormBody">
        <el-form>
          <el-row>
            <el-col :span="8">
              <el-form-item label="章节：" label-width="110px">
                <el-select
                  v-model="query.chapter"
                  filterable
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in chapterList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="难度：" label-width="110px">
                <el-select
                  v-model="query.difficulty"
                  filterable
                  placeholder="请选择"
                >
                  <el-option key="1" label="简单" value="1"></el-option>
                  <el-option key="2" label="较难" value="2"></el-option>
                  <el-option key="3" label="困难" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="Icontainer">
      <div class="IcontainerTopRow">
        <div class="IcontainerTopTitle">查询列表</div>
        <div class="IcontainerTopBtns">
          <el-button type="primary" @click="freshTableData()"
            >刷新数据</el-button
          >
          <el-button type="primary" @click="addNewQuestion()">{{
            addButtonValue
          }}</el-button>
        </div>
      </div>
      <el-table
        fit
        border
        :data="this.$store.state.tableData"
        row-key="index"
        :height="tableHeight"
        stripe
        style="width: 100%"
        v-loading="this.$store.state.loading"
      >
        <el-table-column
          align="center"
          :key="col.prop"
          :label="col.label"
          :prop="col.prop"
          v-for="col in this.$store.state.cols"
          show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-row class="showquestions_serch_add">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page="query.pageCurrent"
            :page-size="query.pageSize"
            layout="total, prev, pager, next, jumper"
            :total="this.$store.state.total"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <div class="masking_out" v-if="this.$store.state.isFromShow">
      <div id="dialogBodybox" class="dialog-bodybox">
        <div class="dialog_body_header" @mousedown="mousemove">
          <span class="dialog_close_title">{{ FormTitle }}</span>
          <span class="dialog_close_span" @click="close_doalog">
            <i class="el-icon-close dialog_close"></i>
          </span>
        </div>
        <div class="updataForm">
          <addNewQuestion
            v-if="this.$store.state.addNewQuestionFromShow"
            v-on:getAddData="getAddData"
          ></addNewQuestion>
          <updataForm
            v-if="this.$store.state.updateQuestionFormShow"
            v-on:update="getUpdateData"
            :data="data"
          ></updataForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import updataForm from "./common/updateForm.vue";
import addNewQuestion from "./common/addNewQuestion.vue";
export default {
  data() {
    return {
      // 查询条件
      query: {
        difficulty: "",
        chapter: "",
        pageSize: 10,
        pageCurrent: 1,
      },
      tableHeight: 0,
      data: null,
      currentPage4: 1,
      input3: "",
      select: "",
      loading: false,
      addButtonValue: "",
      FormTitle: "",
      // 章节
      chapterList: [
        {
          key: "Ch1",
          value: "Ch1",
          label: "第一章",
        },
        {
          key: "Ch2",
          value: "Ch2",
          label: "第二章",
        },
        {
          key: "Ch3",
          value: "Ch3",
          label: "第三章",
        },
        {
          key: "Ch4",
          value: "Ch4",
          label: "第四章",
        },
        {
          key: "Ch5",
          value: "Ch5",
          label: "第五章",
        },
        {
          key: "Ch6",
          value: "Ch6",
          label: "第六章",
        },
        {
          key: "Ch7",
          value: "Ch7",
          label: "第七章",
        },
        {
          key: "Ch8",
          value: "Ch8",
          label: "第八章",
        },
        {
          key: "Ch9",
          value: "Ch9",
          label: "第九章",
        },
        {
          key: "Ch10",
          value: "Ch10",
          label: "第十章",
        },
        {
          key: "Ch11",
          value: "Ch11",
          label: "第十一章",
        },
      ],
    };
  },
  mounted() {
    window.onresize = () => {
      this.$nextTick(() => {
        this.tableHeight = document.body.clientHeight - 395 + "px";
      });
    };
    this.$nextTick(() => {
      this.tableHeight = document.body.clientHeight - 395 + "px";
    });
    let nowQuestionType = window.localStorage.getItem("questionType");
    if (nowQuestionType.substring(0, 6) == "single") {
      this.FormTitle = "添加选择题";
      this.addButtonValue = "添加选择题";
    } else if (nowQuestionType == "applicationQuestion") {
      this.FormTitle = "添加大题";
      this.addButtonValue = "添加大题";
    } else if (nowQuestionType.substring(0, 7) == "vacancy") {
      this.FormTitle = "添加填空题";
      this.addButtonValue = "添加填空题";
    } else if (nowQuestionType == "decide") {
      this.FormTitle = "添加判断题";
      this.addButtonValue = "添加判断题";
    }
    this.freshTableData();
  },
  methods: {
    handleEdit(index, row) {
      this.FormTitle = "更新数据";
      this.$store.state.isFromShow = true;
      this.$store.state.addNewQuestionFromShow = false;
      this.$store.state.updateQuestionFormShow = true;
      this.data = row;
    },
    freshTableData() {
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
    },
    handleDelete(index, row) {
      this.$store.commit("changeNowDeleteDataId", row.Id);
      this.$store.dispatch("Delete_listData_AJAX");
    },
    handleCurrentChange(val) {
      this.$store.commit("changePageInfo", val);
      this.$store.dispatch("get_PageInfo_AJAX");
      this.$store.dispatch("get_listData_AJAX");
    },
    mousemove(event) {
      let dialogBox = document.getElementById("dialogBodybox");
      let leftcha = event.clientX - dialogBox.offsetLeft;
      let topcha = event.clientY - dialogBox.offsetTop;
      document.onmousemove = function(eventmove) {
        let left = eventmove.clientX - leftcha;
        let top = eventmove.clientY - topcha;
        dialogBox.style.left = left + "px";
        dialogBox.style.top = top + "px";
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
    close_doalog() {
      this.$store.state.isFromShow = false;
    },
    getUpdateData(data) {
      //传递更新的数据
      this.$store.commit("getUpdateData", data);
      this.$store.dispatch("update_listData_AJAX");
    },
    getAddData(data) {
      this.$store.commit("getAddData", data);
      this.$store.dispatch("add_listData_AJAX");
    },
    addNewQuestion() {
      this.$store.state.isFromShow = true;
      this.$store.state.updateQuestionFormShow = false;
      this.$store.state.addNewQuestionFromShow = true;
    },
  },
  beforeDestroy() {
    this.$store.state.isFromShow = false;
  },
  components: {
    updataForm: updataForm,
    addNewQuestion: addNewQuestion,
  },
};
</script>

<style scoped>
.updataForm {
  height: auto;
  text-align: left;
  box-sizing: border-box;
  padding: 20px;
  z-index: 6;
}

.masking_out {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}

.showTable_box {
  text-align: center;
}

>>> .el-date-editor {
  width: 100% !important;
}
.dialog-bodybox {
  width: 700px;
  min-height: 400px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #eee;
  border-radius: 6px;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 99;
}
.dialog_body_header {
  width: 100%;
  height: 40px;
  background: #fff;
  border-bottom: 1px solid #eee;
  cursor: move;
  position: relative;
}
.dialog_close {
  font-size: 16px;
}
.dialog_close_span {
  line-height: 25px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: inline-block;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.dialog_close_title {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 16px;
}
</style>
