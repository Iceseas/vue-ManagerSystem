<template>
    <el-form :model="applicationQuestion" ref="applicationQuestion" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="fatherQuestion"
    label="主问题"
  >
    <el-input v-model="applicationQuestion.fatherQuestion" style="width:400px"></el-input>
  </el-form-item>
    <el-form-item
    v-for="(entityprop, index) in applicationQuestion.entityprops"
    label="关系模式:"
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
  </el-form-item>

    <el-form-item
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
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('applicationQuestion')">提交</el-button>
    <el-button @click="addChildQuestion">新增子问题</el-button>
    <el-button @click="addEntityProp">新增关系模式</el-button>
    <el-button @click="addSQL">新增SQL</el-button>
  </el-form-item>
</el-form>
</template>

<script>
 export default {
    data() {
      return {
        applicationQuestion:{
          fatherQuestion:'',
          childQuestions:[
            {
              value:''
            }
          ],
          entityprops:[
              {
                  entity:'',
                  prop:'()'
              }
          ],
          sqls:[
              {
                  select:'SELECT ',
                  from:'FROM ',
                  where:'WHERE ',
                  group_by:'GROUP BY ',
                  having:'HAVING '
              }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
    }
  }
</script>

<style scoped>

</style>