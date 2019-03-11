<template>
  <div class="row">
    <div class="col">
      <h1>This is an about page about {{name}} who's {{age}}</h1>
      <input v-model="age" type="text" class="form-control" placeholder="Age" />
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style= "{width: age + '%'}" ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: 'longfei ma',
    age: '20'
    })
  
}
</script>

<style type= 'scss'>

</style>

