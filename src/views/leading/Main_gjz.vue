<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="24" style="text-align: left">
          <span>WEB前端-HTML基础</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" style="text-align: left;">
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="24" style="text-align: left">
          <span>WEB前端-CSS基础</span>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="24" style="text-align: left">
          <span>WEB前端-JS基础</span>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-row>
        <el-col :span="24" style="text-align: left">
          <span>WEB前端-进阶框架</span>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Main_gjz"
  }
</script>

<style scoped lang="less">
  div {
    background: #FFF;
    text-align: center;
    .el-card {
      width: 80%;
      height: 400px;
      border-radius: 6px;
      border: 1px solid #CCCCCC;
      margin-left: 10%;
      margin-top: 20px;
      .el-row {
        .el-col {
          span {
            font-weight: 700;
            display: inline-block;
            font-size: 20px;
            color: #666666;
            margin-left: 2%;
            line-height: 40px;
          }
          label{
            color: #FFF;
          }
        }
      }
    }
    .el-card:hover {
      /*-moz-box-shadow: 0px 0px 7px #CCCCCC;
      -webkit-box-shadow: 0px 0px 7px #CCCCCC;
      box-shadow: 0px 0px 7px #CCCCCC;*/
      box-shadow: inset 0 0 38px rgba(0,0,0,.08);
    }
  }
</style>
