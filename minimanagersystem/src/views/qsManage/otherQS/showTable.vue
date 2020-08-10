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
              size="mini"
              @click="handleShow(scope.$index, scope.row)"
              >查看</el-button
            >
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
    <singleQsForm ref="singleQsForm" @callBack="handleQsCallBack" />
    <decideQsForm ref="decideQsForm" @callBack="handleQsCallBack" />
    <vacancyQsForm ref="vacancyQsForm" @callBack="handleQsCallBack" />
  </div>
</template>

<script>
import singleQsForm from './single/singleQsForm'
import decideQsForm from './decide/decideQsForm'
import vacancyQsForm from './vacancy/vacancyQsFrom'
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
      // 现在的qsType
      questionType: '',
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
    this.questionType = window.localStorage.getItem("questionType");
    let nowQuestionType = window.localStorage.getItem("questionType");
    if (nowQuestionType.substring(0, 6) == "single") {
      this.addButtonValue = "添加选择题";
    } else if (nowQuestionType == "applicationQuestion") {
      this.addButtonValue = "添加大题";
    } else if (nowQuestionType.substring(0, 7) == "vacancy") {
      this.addButtonValue = "添加填空题";
    } else if (nowQuestionType == "decide") {
      this.addButtonValue = "添加判断题";
    }
    this.freshTableData();
  },
  methods: {
    handleEdit(index, row) {
      if (this.questionType.substring(0, 6) == "single") {
       this.$refs.singleQsForm.init('update', row)
      } else if (this.questionType == "applicationQuestion") {
        this.$refs.singleQsForm.init('update', row)
      } else if (this.questionType.substring(0, 7) == "vacancy") {
        this.$refs.vacancyQsForm.init('update', row)
      } else if (this.questionType == "decide") {
        this.$refs.decideQsForm.init('update', row)
      }
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
    addNewQuestion() {
      if (this.questionType.substring(0, 6) == "single") {
       this.$refs.singleQsForm.init('add', {})
      } else if (this.questionType == "applicationQuestion") {
        this.$refs.singleQsForm.init('add', {})
      } else if (this.questionType.substring(0, 7) == "vacancy") {
        this.$refs.vacancyQsForm.init('add', {})
      } else if (this.questionType == "decide") {
        this.$refs.decideQsForm.init('add', {})
      }
    },
    handleShow(index, row) {
      if (this.questionType.substring(0, 6) == "single") {
       this.$refs.singleQsForm.init('show', row)
      } else if (this.questionType == "applicationQuestion") {
        this.$refs.singleQsForm.init('show', row)
      } else if (this.questionType.substring(0, 7) == "vacancy") {
        this.$refs.vacancyQsForm.init('show', row)
      } else if (this.questionType == "decide") {
        this.$refs.decideQsForm.init('show', row)
      }
    },
    // 处理添加的单选
    handleQsCallBack(obj, type){
      if (type === 'add') {
        this.$store.commit("getAddData", obj);
        this.$store.dispatch("add_listData_AJAX");
      } else if (type === 'update') {
        this.$store.commit("getUpdateData", obj);
        this.$store.dispatch("update_listData_AJAX");
      } 
    }
  },
  beforeDestroy() {
    this.$store.state.isFromShow = false;
    this.$store.state.questionNum = 10;
  },
  components: {
    singleQsForm,
    decideQsForm,
    vacancyQsForm
  },
};
</script>

<style scoped>
>>> .el-date-editor {
  width: 100% !important;
}
>>>.el-button--mini {
  padding: 5px 5px;
}
</style>
