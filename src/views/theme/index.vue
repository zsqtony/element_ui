<style lang="less" scoped></style>

<template>
  <div class="store_page">
    <zsq_header_form @ok-query="queryfun">
      <el-input
        slot="form"
        placeholder="请输入名称"
        style="width:200px;"
        v-model="querykey.keyword"
        clearable
      >
      </el-input>
    </zsq_header_form>
    <div class="table_content">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column label="序号" width="100">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column label="封面" width="180"> </el-table-column>
        <el-table-column label="当前壁纸" width="100" align="center">
          <el-button type="primary" size="mini" plain>操作</el-button>
        </el-table-column>
        <el-table-column label="简介" width="180"> </el-table-column>
        <el-table-column prop="date" label="创建时间" width="180">
        </el-table-column>
        <el-table-column label="操作" fixed="right" min-width="180">
          <el-button type="primary" size="mini">编辑</el-button>
          <el-button type="danger" size="mini" plain>删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="page_style">
      <el-pagination
        background
        :current-page="querykey.page"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "古装",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      querykey: {
        keyword: "",
        page: 1,
        limit: 10
      },
      tableData: Array(16).fill(item)
    };
  },
  methods: {
    queryfun() {
      console.log(this.querykey);
    }
  }
};
</script>
