<template>
  <div class="dialog-body">
    <el-form
      v-if="
        this.$store.state.nowQuestionType.substring(0, 6) == 'single' ||
          this.$store.state.nowQuestionType == 'decide'
      "
      label-position="left"
      ref="form"
      :model="NewDataForm"
      label-width="80px"
      size="mini"
    >
      <el-form-item label="问题">
        <el-input v-model="data.Question" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item label="选项A">
        <el-input v-model="data.Item1" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="选项B">
        <el-input v-model="data.Item2" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="选项C">
        <el-input
          v-model="data.Item3"
          :disabled="this.$store.state.updateItemDisabled"
          style="width:400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="选项D">
        <el-input
          v-model="data.Item4"
          :disabled="this.$store.state.updateItemDisabled"
          style="width:400px"
        ></el-input>
      </el-form-item>
      <el-form-item label="正确答案">
        <el-input v-model="data.Answer" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="章节">
        <el-cascader
          :options="options"
          v-model="data.Chapter"
          clearable
        ></el-cascader>
      </el-form-item>
      <el-form-item label="知识点">
        <el-input v-model="data.KN" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="难度">
        <el-radio-group style="width:100%" v-model="data.difficulty">
          <el-col :span="3">
            <el-radio-button label="简单"></el-radio-button>
          </el-col>
          <el-col :span="3">
            <el-radio-button label="较难"></el-radio-button>
          </el-col>
          <el-col :span="3">
            <el-radio-button label="困难"></el-radio-button>
          </el-col>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit(data)">立即更新</el-button>
      </el-form-item>
    </el-form>
    <!-- 添加大题 -->
    <el-form
      v-if="this.$store.state.nowQuestionType == 'applicationQuestion'"
      :model="NewDataForm"
      ref="applicationQuestion"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item label="主问题">
        <el-input v-model="data.Question" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="关系模式1">
        <el-input v-model="data.Entity1" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="关系模式2">
        <el-input v-model="data.Entity2" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="关系模式3">
        <el-input v-model="data.Entity3" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="关系模式4">
        <el-input v-model="data.Entity4" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="关系模式5">
        <el-input v-model="data.Entity5" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="子问题1">
        <el-input v-model="data.ChildQuestion1" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="子问题2">
        <el-input v-model="data.ChildQuestion2" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="子问题3">
        <el-input v-model="data.ChildQuestion3" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="子问题4">
        <el-input v-model="data.ChildQuestion4" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="子问题5">
        <el-input v-model="data.ChildQuestion5" style="width:400px"></el-input>
      </el-form-item>
      <!--<el-form-item
    v-for="(entityprop, index) in applicationQuestion.entityprops"
    :label="'关系模式' + (index+1) "
    :key="entityprop.key"
    :prop="'entityprops.' + index + '.entity'"
  >
    <el-input v-model="entityprop.entity" style="width:100px"></el-input>
    <el-input v-model="entityprop.prop" style="width:300px"></el-input>
    <el-button @click.prevent="removeEntityProp(entityprop)" style="margin-left:10px">删除</el-button>
  </el-form-item>
  <el-form-item
    v-for="(childQuestion, index) in applicationQuestion.childQuestions"
    :label="'子问题(' + (index+1) +')'"
    :key="childQuestion.key"
    :prop="'childQuestions.' + index + '.value'"
  >
    <el-input v-model="childQuestion.value" style="width:400px"></el-input><el-button @click.prevent="removeChildQuestion(childQuestion)" style="margin-left:10px">删除</el-button>
  </el-form-item> -->

      <!-- <el-form-item
    v-for="(sql) in applicationQuestion.sqls"
    label="SQL:"
    :key="sql.key"
  >
    <el-input v-model="sql.select" style="width:300px;display:block" ></el-input>
    <el-input v-model="sql.from" style="width:300px;display:block"></el-input>
    <el-input v-model="sql.where" style="width:300px;display:block"></el-input>
    <el-input v-model="sql.group_by" style="width:300px;display:block"></el-input>
    <el-input v-model="sql.having" style="width:300px;display:block"></el-input>
    <el-button @click.prevent="removeSQL(sql)" style="margin-left:10px">删除</el-button>
  </el-form-item> -->

      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit(data)">立即更新</el-button>
      </el-form-item>
    </el-form>
    <!-- 添加填空题 -->
    <el-form
      v-if="this.$store.state.nowQuestionType.substring(0, 7) == 'vacancy'"
      label-position="left"
      ref="vacancyQuestion"
      :model="NewDataForm"
      label-width="80px"
      size="mini"
    >
      <el-form-item label="问题">
        <el-input v-model="data.Question" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item label="空位1答案">
        <el-input v-model="data.Space1Answer" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="空位2答案">
        <el-input v-model="data.Space2Answer" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="空位3答案">
        <el-input v-model="data.Space3Answer" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="空位4答案">
        <el-input v-model="data.Space4Answer" style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="章节">
        <el-cascader
          :options="options"
          v-model="data.Chapter"
          clearable
        ></el-cascader>
      </el-form-item>
      <el-form-item label="知识点">
        <el-input v-model="data.KN" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="遵循顺序">
        <el-radio-group style="width:100%" v-model="data.Issequence">
          <el-col :span="3">
            <el-radio-button label="true"></el-radio-button>
          </el-col>
          <el-col :span="3">
            <el-radio-button label="false"></el-radio-button>
          </el-col>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="难度">
        <el-radio-group style="width:100%" v-model="data.difficulty">
          <el-col :span="3">
            <el-radio-button label="简单"></el-radio-button>
          </el-col>
          <el-col :span="3">
            <el-radio-button label="较难"></el-radio-button>
          </el-col>
          <el-col :span="3">
            <el-radio-button label="困难"></el-radio-button>
          </el-col>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit(data)">立即更新</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NewDataForm: null,
      options: [
        {
          value: "Ch1",
          label: "第一章",
        },
        {
          value: "Ch2",
          label: "第二章",
        },
        {
          value: "Ch3",
          label: "第三章",
        },
        {
          value: "Ch4",
          label: "第四章",
        },
        {
          value: "Ch5",
          label: "第五章",
        },
        {
          value: "Ch6",
          label: "第六章",
        },
        {
          value: "Ch7",
          label: "第七章",
        },
        {
          value: "Ch8",
          label: "第八章",
        },
        {
          value: "Ch9",
          label: "第九章",
        },
        {
          value: "Ch10",
          label: "第十章",
        },
        {
          value: "Ch11",
          label: "第十一章",
        },
      ],
    };
  },
  methods: {
    onSubmit(data) {
      this.NewDataForm = data;
      this.$emit("update", this.NewDataForm);
      this.$store.state.isFromShow = false;
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    if (this.$store.state.nowQuestionType == "decide") {
      this.$store.state.updateItemDisabled = true;
    } else {
      this.$store.state.updateItemDisabled = false;
    }
  },
};
</script>

<style scoped>
.dialog-body {
  width: 100%;
  height: 100%;
}
</style>
