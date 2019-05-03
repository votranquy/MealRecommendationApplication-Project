<?php 
  $mang = array(
    new Singer("1","MR Siro","https://zingmp3.vn/nghe-si/Mr-Siro"),
    new Singer("2","Le Bao Binh","https://zingmp3.vn/nghe-si/Le-Bao-Binh"),
    new Singer("3","My Tam","https://zingmp3.vn/nghe-si/Le-Bao-Binh"),
    new Singer("4","Ho Ngoc Ha","https://zingmp3.vn/nghe-si/Le-Bao-Binh"),
  );
  echo json_encode($mang);
  class Singer{
    public $Ten;
    public $Hinh;
    public $id;
    function Singer($id,$t,$h){
      $this->id= $id;
      $this->Ten = $t;
      $this->Hinh = $h;
    }
  }  
?>