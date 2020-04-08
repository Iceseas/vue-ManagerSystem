<template>
<div>
  <!-- 添加大题 -->
<el-form v-if="this.$store.state.nowQuestionType =='applicationQuestion'" :model="applicationQuestion" ref="applicationQuestion" label-width="100px" class="demo-dynamic">
  <el-form-item label="主问题">
  <el-input v-model="applicationQuestion.fatherQuestion" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="关系模式1">
  <el-input v-model="applicationQuestion.Entity1" placeholder="格式XX(XX,XX)" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="关系模式2">
  <el-input v-model="applicationQuestion.Entity2" placeholder="格式XX(XX,XX)" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="关系模式3">
  <el-input v-model="applicationQuestion.Entity3" placeholder="格式XX(XX,XX)" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="关系模式4">
  <el-input v-model="applicationQuestion.Entity4" placeholder="格式XX(XX,XX)" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="关系模式5">
  <el-input v-model="applicationQuestion.Entity5" placeholder="格式XX(XX,XX)" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="子问题1">
  <el-input v-model="applicationQuestion.ChildQuestion1" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="子问题2">
  <el-input v-model="applicationQuestion.ChildQuestion2" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="子问题3">
  <el-input v-model="applicationQuestion.ChildQuestion3" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="子问题4">
  <el-input v-model="applicationQuestion.ChildQuestion4" style="width:400px"></el-input>
  </el-form-item>
  <el-form-item label="子问题5">
  <el-input v-model="applicationQuestion.ChildQuestion5" style="width:400px"></el-input>
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

  <el-form-item>
    <el-button type="primary" @click="onAddQuestionSubmit()">提交</el-button>
    <!-- <el-button @click="addChildQuestion">新增子问题</el-button>
    <el-button @click="addEntityProp">新增关系模式</el-button>
    <el-button @click="addSQL">新增SQL</el-button> -->
  </el-form-item>
</el-form>
<!-- 添加填空题 -->
<el-form v-if="this.$store.state.nowQuestionType.substring(0,7)=='vacancy'" label-position="left" ref="vacancyQuestion" :model="vacancyQuestion" label-width="80px" size="mini">
<el-form-item label="问题">
    <el-input v-model="vacancyQuestion.Question" style="width: 400px;"></el-input>
</el-form-item>
<el-form-item label="空位1答案">
  <el-input v-model="vacancyQuestion.Space1Answer" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="空位2答案">
  <el-input v-model="vacancyQuestion.Space2Answer" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="空位3答案">
  <el-input v-model="vacancyQuestion.Space3Answer" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="空位4答案">
  <el-input v-model="vacancyQuestion.Space4Answer" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="章节">
    <el-cascader :options="options" v-model="vacancyQuestion.Chapter" clearable></el-cascader>
</el-form-item>
<el-form-item label="知识点">
    <el-input v-model="vacancyQuestion.KN" style="width: 200px;"></el-input>
</el-form-item>
<el-form-item label="难度" >
    <el-radio-group style="width:100%" v-model="vacancyQuestion.difficulty">
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
    <el-button type="primary" @click="onAddQuestionSubmit()">立即添加</el-button>
</el-form-item>
</el-form>
<!-- 判断和单选 -->
<el-form v-if="this.$store.state.nowQuestionType.substring(0,6) =='single' || this.$store.state.nowQuestionType =='decide'" label-position="left" ref="singleDecideQuestion" :model="singleDecideQuestion" label-width="80px" size="mini">
<el-form-item label="问题">
    <el-input v-model="singleDecideQuestion.Question" style="width: 400px;"></el-input>
</el-form-item>
<el-form-item label="选项A">
  <el-input v-model="singleDecideQuestion.Item1" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="选项B">
  <el-input v-model="singleDecideQuestion.Item2" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="选项C">
  <el-input v-model="singleDecideQuestion.Item3" :disabled="this.$store.state.updateItemDisabled" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="选项D">
  <el-input v-model="singleDecideQuestion.Item4" :disabled="this.$store.state.updateItemDisabled" style="width:400px"></el-input>
</el-form-item>
<el-form-item label="正确答案">
    <el-radio-group style="width:100%" v-model="singleDecideQuestion.Answer">
    <el-col :span="3">
    <el-radio-button label="A"></el-radio-button>
    </el-col>
    <el-col :span="3">
    <el-radio-button label="B"></el-radio-button>
    </el-col>
    <el-col :span="3">
    <el-radio-button label="C"></el-radio-button>
    </el-col>
    <el-col :span="3">
    <el-radio-button label="D"></el-radio-button>
    </el-col>
    </el-radio-group>
</el-form-item>
<el-form-item label="章节">
    <el-cascader :options="options" v-model="singleDecideQuestion.Chapter" clearable></el-cascader>
</el-form-item>
<el-form-item label="知识点">
    <el-input v-model="singleDecideQuestion.KN" style="width: 200px;"></el-input>
</el-form-item>
<el-form-item label="难度" >
    <el-radio-group style="width:100%" v-model="singleDecideQuestion.difficulty">
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
    <el-button type="primary" @click="onAddQuestionSubmit()">立即添加</el-button>
</el-form-item>
</el-form>
</div>
</template>

<script>
export default {
    data() {
      return {
        vacancyQuestion: {
          'Question':'',
          'Space1Answer':'',
          'Space2Answer':'',
          'Space3Answer':'',
          'Space4Answer':'',
          'KN':'',
          'Chapter':'',
          'difficulty':''
        },
        options: [{
          value: 'Ch1',
          label: '第一章',
        }, {
          value: 'Ch2',
          label: '第二章',
        }, {
          value: 'Ch3',
          label: '第三章',
        },{
          value: 'Ch4',
          label: '第四章',
        },{
          value: 'Ch5',
          label: '第五章',
        },{
          value: 'Ch6',
          label: '第六章',
        },{
          value: 'Ch7',
          label: '第七章',
        },{
          value: 'Ch8',
          label: '第八章',
        },{
          value: 'Ch9',
          label: '第九章',
        },{
          value: 'Ch10',
          label: '第十章',
        },{
          value: 'Ch11',
          label: '第十一章',
        }],
        singleDecideQuestion: {
          'Question':'',
          'Item1':'',
          'Item2':'',
          'Item3':'',
          'Item4':'',
          'Answer':'',
          'KN':'',
          'Chapter':'',
          'difficulty':''
        },
        applicationQuestion:{
          'fatherQuestion':'',
          'Entity1':'',
          'Entity2':'',
          'Entity3':'',
          'Entity4':'',
          'Entity5':'',
          'ChildQuestion1':'',
          'ChildQuestion2':'',
          'ChildQuestion3':'',
          'ChildQuestion4':'',
          'ChildQuestion5':'',

          // childQuestions:[
          //   {
          //     value:''
          //   }
          // ],
          // entityprops:[
          //     {
          //         entity:'',
          //         prop:'()'
          //     }
          // ],
          // sqls:[
          //     {
          //         select:'SELECT ',
          //         from:'FROM ',
          //         where:'WHERE ',
          //         group_by:'GROUP BY ',
          //         having:'HAVING '
          //     }
          // ]
        }
      }
    },
    methods: {
      onAddQuestionSubmit(){
        if(this.$store.state.nowQuestionType =='applicationQuestion')
        {
            this.$emit('getAddData',this.applicationQuestion)
        }
        else if(this.$store.state.nowQuestionType.substring(0,7)=='vacancy')
        {
            this.$emit('getAddData',this.vacancyQuestion)
        }
        else
        {
            this.$emit('getAddData',this.singleDecideQuestion)
        }
        this.$store.state.isFromShow = false
      },
      removeChildQuestion(item) {
        var index = this.applicationQuestion.childQuestions.indexOf(item)
        if (index !== -1) {
          this.applicationQuestion.childQuestions.splice(index, 1)
        }
      },
      addChildQuestion(){
        this.applicationQuestion.childQuestions.push({
          value: '',
          key: Date.now()
        });
      },
      addEntityProp(){
          this.applicationQuestion.entityprops.push({
          entity: '',
          prop:'()',
          key: Date.now()
        });
      },
      removeEntityProp(item) {
        var index = this.applicationQuestion.entityprops.indexOf(item)
        if (index !== -1) {
          this.applicationQuestion.entityprops.splice(index, 1)
        }
      },
      addSQL(){
          this.applicationQuestion.sqls.push({
        select:'SELECT ',
        from:'FROM ',
        where:'WHERE ',
        group_by:'GROUP BY ',
        having:'HAVING ',
          key: Date.now()
        });
      },
      removeSQL(item){
          var index = this.applicationQuestion.sqls.indexOf(item)
        if (index !== -1) {
          this.applicationQuestion.sqls.splice(index, 1)
        }
      }
    },
    props:{
      
    },
    mounted() {
      if(this.$store.state.nowQuestionType == 'decide')
      {
        this.$store.state.updateItemDisabled = true
      }
      else{
        this.$store.state.updateItemDisabled = false
      }
    },
  };
</script>

<style scoped>
.dialog-body{
    width: 100%;
    height: 100%;
}   
</style>