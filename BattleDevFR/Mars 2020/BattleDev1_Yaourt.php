<?php
    $vote = (int)readline("How many persons will vote ? ");
    $array = [];
    for($i = 0; $i<$vote; $i++){
        $color = readline("choice $i : ");
        array_push($array, $color);
    }
    
    function FamousColors($array){
        sort($array);
        $newarray = [];
        foreach($array as $elt){
            if(array_key_exists($elt, $newarray)){
                $newarray[$elt]++;
            }
            else{
                $newarray[$elt]=1;
            }
        }
        asort($newarray);
        $lastarray = array_keys($newarray);
        $length = count($lastarray);
        return $lastarray[$length-1].' '. $lastarray[$length-2];
    }

    print_r(FamousColors($array));
?>