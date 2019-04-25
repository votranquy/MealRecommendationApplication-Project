<?php 
  require("dbCon.php"); //Connect database 
  try{
   $foodjsondata = file_get_contents('./CRAWL_DATA/DATA/data-banhdap.json');

    $data = json_decode($foodjsondata, true);

    $n = count($data );
    for($i = 0; $i < $n; $i++){
      try{
        //id thi auto
        if(
          $data[$i]["name"] != "" && $data[$i]["address"] != "" && $data[$i]["district"] != "" 
          && $data[$i]["lat"] != "" && $data[$i]["long"]  != "" && $data[$i]["octime"]  != "" 
          && $data[$i]["rate"] != "" && $data[$i]["type"] != "" && $data[$i]["id"] != ""
          && $data[$i]["local_image"] != "" 
        ){
          try{
            $name = $data[$i]["name"];
            $address = $data[$i]["address"];
            //food id: chua xu ly (benduoi) [1]
            $district = $data[$i]["district"];
            $latitude = $data[$i]["lat"];
            $longitude = $data[$i]["long"];
            $worktime = $data[$i]["octime"];
            //xu ly luu anh [2]
            $rate = $data[$i]["rate"];
            $foodtype = $data[$i]["type"];
            $idfoodtype = 0;
            $image_path = $data[$i]["id"]."/".$data[$i]["local_image"];


            //[1]=======================Xu ly cai id food
            $sql = "SELECT * FROM FOOD_CATEGORY
                    WHERE category_name = '$foodtype' 
                    ";
            $sql_result = mysqli_query($conn,$sql);
            if(mysqli_num_rows($sql_result)==1){
              //Neu the loai ton tai thi chi can lay id
              $f_c =mysqli_fetch_array($sql_result);
              $idfoodtype = $f_c["id"];
            }else{
              //Neu khong ton tai thi do la the loai moi
              //1. Them the loai moi
              $query = "INSERT INTO FOOD_CATEGORY VALUES(null,'$foodtype',null)";
              mysqli_query($conn,$query);
              $last_id =  mysqli_insert_id($conn);
              //2. Id duoc insert cuoi cung la id cua the loai moi
              $idfoodtype = mysqli_insert_id($conn);
            }
            //===========================

            echo $name."<br>";
            echo $address."<br>";
            echo $district."<br>";
            echo $latitude."<br>";
            echo $longitude."<br>";
            echo $worktime."<br>";
            echo $rate."<br>";
            echo $idfoodtype."<br>";
            echo $foodtype."<br>";
            echo $image_path."<br>";

            //=============INSERT TO DATABASE
            $sql = "SELECT * FROM FOOD
                WHERE address = '$address' 
                AND district = '$district' 
                AND id_food_category = '$idfoodtype'
              ";

            $sql_result = mysqli_query($conn,$sql);
            if(mysqli_num_rows($sql_result)==1){
              //Da ton tai, bo qua
              echo "Bi trung voi du lieu co san<br>";
            } 
            else{
              //Chua ton tai, iten hanh insert
                //Bang Food
                $query = "INSERT INTO FOOD VALUES(null,'$name','$address','$idfoodtype','$district','$latitude','$longitude','$worktime','$rate')";
                mysqli_query($conn,$query);
                $idfood = mysqli_insert_id($conn);
                echo "Da insert mot du lieu moi<br>";
                //Bang Hinh anh cua food
                
                $query = "INSERT INTO FOOD_IMAGE VALUES(null,'$idfood','$image_path')";
                mysqli_query($conn,$query);


            }
          }
          catch(Exception $e) {
            echo 'ERR: ' .$e->getMessage();
          }
        }
       //==============================
      }catch(Exception $e){
        echo "Phần tử rỗng nên bỏ qua";
      }
    echo "=========XU LY XONG DU LIEU THU".$i."=======<br>";
    }
  }catch(Exception $e){
    echo "File input không tồn tại";
  }

?>