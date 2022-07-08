<template>
  <div class="user">
    <div class="top"></div>
    <div class="bottm">
      <div class="action">
        <el-button size="large" type="primary">添加</el-button>
        <el-button size="large" type="danger">批量删除</el-button>
      </div>
      <div class="tabl">
        <el-table
          ref="multipleTableRef"
          :data="tableData.value"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" />
          <el-table-column prop="userId" label="用户ID"> </el-table-column>
          <el-table-column prop="userName" label="用户名"></el-table-column>
          <el-table-column prop="userEmail" label="用户邮箱"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template #default="scope">
              <el-button
                type="danger"
                size="small"
                @click="del(scope.row.userId)"
                >删除</el-button
              >
              <el-button type="primary" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pation.pageSize"
        :total="pation.total"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { UserList } from '../../api/user'
import { reactive, ref } from 'vue'
const tableData = reactive([])
const pation = ref({ pageSize: '10', pageNum: '1', total: 10 })
const del = async (row) => {
  console.log(row)
}

UserList(pation.value.pageNum, pation.value.pageSize).then((res) => {
  tableData.value = res.data.list
  pation.value = res.data.page
})

const handleCurrentChange = (newNum) => {
  pation.value.pageNum = newNum
  UserList(pation.value.pageNum, pation.value.pageSize).then((res) => {
    tableData.value = res.data.list
    pation.value = res.data.page
  })
}
</script>
<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
  .top {
    width: 98%;
    height: 70px;
    margin: 0px 10px;
    background: rgb(241, 206, 206);
  }
  .action {
    width: 98%;
    height: 70px;
    margin: 0px 20px;
    display: flex;
    align-items: center;
  }
}
</style>
