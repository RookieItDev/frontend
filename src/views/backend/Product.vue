<template>
<h3 class="text text-center py-2">From Input Product</h3>
   <div class="container-fluid py-3">
 <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">ProductName</label>
    <div class="col-sm-10">
     <input type="text" class="form-control" >
    </div>
  </div>
  <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Price Receive</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" >
    </div>
  </div>
    <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Price Sale</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" >
    </div>
  </div>
   <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Amont Receive</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" >
    </div>
  </div>
   <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">TypeProduct</label>
    <div class="col-sm-10">
     <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
    </div>
  </div>
   <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Receive Date</label>
    <div class="col-sm-10">
      <input type="date" class="form-control" >
    </div>
  </div>
    <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label">Product Image</label>
    <div class="col-sm-10">
      <input type="file" class="form-control" >
    </div>
  </div>
    <div class="mb-3 row">
    <label  class="col-sm-2 col-form-label"></label>
    <div class="col-sm-10">
   <button class="btn btn-success" type="submit">Save</button>
    </div>
  </div>
 

</div>
</template>