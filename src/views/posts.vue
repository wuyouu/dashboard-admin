<template>
  <section class="posts">
    <header class="heading">
      <h1 class="title" v-if="selections.length">{{ selections.length }} {{ selections.length === 1 ? 'item' : 'items' }} selected</h1>
      <transition name="fade">
        <ul class="action" v-show="selections.length">
          <li><a href="#" class="icon-before icon-checkmark"></a></li>
          <li><a href="#" class="icon-before icon-blocked"></a></li>
          <li><a href="#" class="icon-before icon-bin"></a></li>
          <li><a href="#" class="icon-before icon-copy"></a></li>
        </ul>
      </transition>
      <label class="search icon-before icon-search">
        <input type="text" placeholder="Search">
      </label>
      <router-link :to="{ name: 'new', params: { type: $route.params.type } }"><el-button type="primary" size="small" icon="el-icon-edit">Add item</el-button></router-link>
    </header>
    <el-table @selection-change="handleSelectionChange">
      <el-table-column type="selection"></el-table-column>
      <el-table-column label="Title" show-overflow-tooltip>title</el-table-column>
      <el-table-column label="Status" width="100">published</el-table-column>
      <el-table-column label="Categories" width="200">
        <a href="#">cate, </a>
        <a href="#">cate, </a>
        <a href="#">cate, </a>
      </el-table-column>
      <el-table-column label="Tags" width="240">
        <a href="#">tag, </a>
        <a href="#">tag, </a>
        <a href="#">tag, </a>
      </el-table-column>
      <el-table-column label="Author" width="100">
        <a href="#">小吴</a>
      </el-table-column>
      <el-table-column label="Comments" width="120" align="center"></el-table-column>
      <el-table-column label="Date" width="120"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page="4"
      :page-sizes="[50, 100, 150, 200]"
      :page-size="50"
      :total="400">
    </el-pagination>
  </section>
</template>

<script>
export default {
  name: 'posts',
  data () {
    return {
      size: 0,
      selections: []
    }
  },
  created () {
    this.$title = this.$route.params.type
  },
  methods: {
    handleSelectionChange (value) {
      this.selections = value
    },
    handleSizeChange (value) {
      console.log(`每页 ${value} 条`)
      this.size = value
      this.initData()
    },
    handleCurrentChange (value) {
      this.currentPage = value
      console.log(`当前页: ${value}`)
    }
  }
}
</script>

<style scoped>
.el-pagination {
  margin: 1rem 0 2rem;
  text-align: right;
}
</style>
