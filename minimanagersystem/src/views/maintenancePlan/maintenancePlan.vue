<template>
  <div class="app-container">
    <div class="container-bg">
      <template v-if="showList">
        <div class="search-container">
          <el-form ref="searchForm" :inline="true">
            <el-row class="search-button">
              <el-col :span="4">
                <h2 class="search_h2">
                  <svg class="icon icon-back icon_color" aria-hidden="true">
                    <use xlink:href="#icon-sousuo1"/>
                  </svg>
                  <span>条件查询</span>
                </h2>
              </el-col>
              <el-col :span="20" class="button_col">
                <el-button v-waves v-if="checkPermission(['ADMIN','EM_CUSTOM_PARAM_ALL','EM_CUSTOM_PARAM_READ'])" type="primary" icon="el-icon-search" size="small" @click="handleSearch">{{ $t('button.search') }}</el-button>
                <el-button v-waves v-if="checkPermission(['ADMIN','EM_CUSTOM_PARAM_ALL','EM_CUSTOM_PARAM_READ'])" type="primary" plain size="small" icon="el-icon-edit" @click="handleReset">{{ $t('button.reset') }}</el-button>
              </el-col>
            </el-row>
            <!-- 查询条件 -->
            <el-row class="search-content">
              <el-col :xs="12" :sm="6" :md="6" :lg="6">
                <el-form-item label="名称:" label-width="110px">
                  <el-input v-model="query.name" placeholder="请输入名称" class="filter-item" @keyup.enter.native="handleSearch"/>
                </el-form-item>
              </el-col>
              <!--<el-col :xs="12" :sm="6" :md="6" :lg="6">
                <el-form-item label="参数：" label-width="110px" class="search_col">
                  <el-input v-model="query.params" placeholder="请输入参数" class="filter-item" @keyup.enter.native="handleSearch"/>
                </el-form-item>
              </el-col>-->
              <el-col :xs="12" :sm="6" :md="6" :lg="6">
                <el-form-item label="状态：" label-width="110px" class="search_col">
                  <el-select v-model="query.enabled" placeholder="请选择状态" @keyup.enter.native="handleSearch">
                    <el-option key="" label="全部" value=""/>
                    <el-option v-for="item in enOptions" :key="item.value" :label="item.label" :value="item.value"/>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <!-- table -->
        <div class="content-container">
          <el-row type="flex">
            <el-col :span="4">
              <h2 class="content_h2">
                <svg class="icon icon-back icon_color" aria-hidden="true">
                  <use xlink:href="#icon-liebiao1"/>
                </svg>
                <span>数据列表</span>
              </h2>
            </el-col>
            <el-col :span="20" class="button_col">
              <el-button v-waves v-if="checkPermission(['ADMIN', 'EM_CUSTOM_PARAM_ALL','EM_CUSTOM_PARAM_CREATE'])" type="primary" size="small" icon="el-icon-plus" @click="handleAdd">{{ $t('button.add') }}</el-button>
              <el-button v-waves v-if="checkPermission(['ADMIN', 'EM_CUSTOM_PARAM_ALL','EM_CUSTOM_PARAM_DELETE'])" type="primary" plain size="small" icon="el-icon-delete" @click="handleDeteteMore">{{ $t('button.batchDeletion') }}</el-button>
            </el-col>
          </el-row>
          <!-- table list -->
          <el-table
            v-loading="listLoading"
            ref="table"
            :data="list"
            :height="tableHeight"
            border
            stripe
            fit
            highlight-current-row
            style="width:100%;"
            @sort-change="sortChange"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center"/>
            <el-table-column v-if="false" :label="$t('table.id')" prop="id" sortable="custom" align="center" width="80">
              <template slot-scope="scope">
                <span>{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column type="index" label="序号" header-align="center" align="center" width="60" fixed="left">
              <template slot-scope="scope">{{ scope.$index+(query.pageNum - 1) * query.pageSize + 1 }}</template>
            </el-table-column>
            <el-table-column :show-overflow-tooltip="true" label="名称" min-width="120px" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column :show-overflow-tooltip="true" label="自定义参数" min-width="120px" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.customParam }}</span>
              </template>
            </el-table-column>
            <el-table-column :show-overflow-tooltip="true" label="更新时间" min-width="120" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.updateTime }}</span>
              </template>
            </el-table-column>
            <el-table-column :show-overflow-tooltip="true" label="状态" min-width="120" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.enabled | enFilter }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$t('table.actions')" align="center" width="160" class-name="small-padding fixed-width" fixed="right">
              <template slot-scope="scope">
                <el-button v-waves v-if="checkPermission(['ADMIN','EM_CUSTOM_PARAM_ALL','EM_CUSTOM_PARAM_READ'])" :title="$t('button.details')" type="success" icon="el-icon-tickets" plain circle @click="handleDetail(scope.row)"/>
                <el-button v-waves v-if="checkPermission(['ADMIN','EM_CUSTOM_PARAM_ALL','EM_CUSTOM_PARAM_UPDATE'])" :title="$t('button.edit')" type="primary" icon="el-icon-edit" plain circle @click="handleEdit(scope.row)"/>
                <el-popover
                  v-if="checkPermission(['ADMIN','EM_CUSTOM_PARAM_ALL','EM_CUSTOM_PARAM_DELETE'])"
                  v-model="scope.row.delPopover"
                  placement="top"
                  width="200">
                  <p>确定删除【{{ scope.row.name }}】信息吗！</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text" @click="scope.row.delPopover = false">{{ $t('button.cancel') }}</el-button>
                    <el-button :loading="delLoading" type="primary" @click="handleDelete(scope.row)">{{ $t('button.confirm') }}</el-button>
                  </div>
                  <el-button slot="reference" :title="$t('button.delete')" type="danger" plain icon="el-icon-delete" circle @click="scope.row.delPopover = true" />
                </el-popover>
              </template>
            </el-table-column>
          </el-table>
          <!-- page -->
          <pagination v-show="total>0" :total="total" :page.sync="query.pageNum" :limit.sync="query.pageSize" @pagination="findList" />
        </div>
      </template>
      <div v-if="!showList" class="manageForm_add">
        <el-form ref="dataForm" :model="deviceData" :rules="rules" :disabled="isDetail" label-position="right" label-width="200px">
          <el-tabs class="addForm_tabs">
            <el-tab-pane label="基本信息">
              <h2 class="dialog_h2 paddingVertical_15"><span/>分类信息</h2>
              <el-row :gutter="20">
                <el-col :span="8">
                  <el-form-item label="名称" prop="name">
                    <el-input v-model.trim="deviceData.name"/>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="状态" prop="enabled">
                    <el-select v-model="deviceData.enabled">
                      <el-option v-for="item in enOptions" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="其他属性" prop="equipAssign">
                    <el-select v-model="deviceData.equipAssign">
                      <el-option v-for="item in otherOptions" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <h2 class="dialog_h2 paddingVertical_15"><span/>固定参数</h2>
              <el-row :gutter="20">
                <el-col v-for="item in emPublicParamDTOList" :span="8" :key="item.id">
                  <el-form-item :label="item.name">
                    <el-select v-model="item.way" :disabled="true">
                      <el-option v-for="item in wayOptions" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <div style="display:flex;align-items:center;">
                    <label style="flex-basis:200px;text-align:right;font-weight:normal;padding-right:10px;color:#666;">自定义参数</label>
                    <tinymce ref="tinymce" :height="250" v-model="deviceData.customParam" :disabled="isDetail" placeholder="自定义参数" style="flex:1;"/>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-form>
        <div class="manageForm_add_btn">
          <el-button v-if="!isDetail" :loading="loadingForm" size="small" type="primary" @click="handleSave">{{ $t('button.save') }}</el-button>
          <el-button size="small" type="primary" plain @click="handleReturn">{{ $t('button.back') }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: { Pagination },
  directives: { waves },
  filters: {
    enFilter(type) {
      return enValues[type];
    }
  },
data() {
    return {
      enOptions,
      otherOptions,
      wayOptions,
      showList: true,
      query: {
        name: null,
        enabled: '',
        pageNum: 1,
        pageSize: 20
      },
      total: 0,
      list: [],
      listLoading: false,
      tableHeight: 0,
      multipleSelection: [],
      delLoading: false,
      deviceData: {},
      isDetail: false,
      loadingForm: false,
      emPublicParamDTOList: [],
      rules: {
        name: [{ required: true, message: '不能为空', trigger: ['blur', 'change'] },
          { length: 64, validator: validateLength, name: '', trigger: ['blur', 'change'] }],
        equipAssign: [{ required: true, message: '不能为空', trigger: ['blur', 'change'] }],
        enabled: [{ required: true, message: '不能为空', trigger: ['blur', 'change'] }]
      }
    };
  },
};
</script>
