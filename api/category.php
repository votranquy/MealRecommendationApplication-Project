<?php 

  include('connect/connect.php');
  try{
    $sql = "SELECT * 
    FROM FOOD_CATEGORY";
    
    $category = $mysqli->query($sql);
    // $max = $category->num_rows; //The nsumber of result
    
    $arrFood = array(); //0-> $max -1
    while( $row = $category->fetch_assoc()){
         array_push($arrFood,$row);
  }
  
    // $the_number_of_items_per_page = 10; //10 datas per page
    // $page = $_GET["pagenumber"];
    // $from = $page * $the_number_of_items_per_page;
    
    
    // $newArrayFood = array();
    // // if($from > $max){}
    // // else{
    //   for($i=$from; ($i <= $from + $the_number_of_items_per_page-1) && ($i <= $max-1); $i = $i + 1){
    //     array_push($newArrayFood,$arrFood[$i]);
    //   }  
    // } 
    $result = array('result'=>'success','data'=>$arrFood);
    echo json_encode($result);
  }catch(Exception $e){
         $result = array('result'=>'error');  
         echo json_encode($result);  
  }  



  
  // $query = mysqli_query($conn,$sql);
  // $max = mysqli_num_rows($query);
  // class FoodCategory{
  //   var $category_name;
  //   var $id;
  //   function FoodFoodCategory($_id,$_category_name){
  //     $this->category_name = $_category_name;
  //     $this->id = $_id;
  //   }
  // }

  
  // $arrFood = array();
  // while( $row = mysqli_fetch_array($query) ){
  //   array_push($arrFood,new FoodCategory($row["id"],$row["category_name"]));
  // }
  // echo json_encode($arrFood);
?>