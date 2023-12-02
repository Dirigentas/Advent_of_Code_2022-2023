<?php

$input = '14gxqgqsqqbxfpxnbccjc33eight
eight2sevenkl
mrjstg5onetwoeightgcczx8vgrgl
9246
ninetwo2crrqk2grsctqxqbcrmrdsqbrz9eight
nlnineeightmndkqz8nineonenrqm
nrhdxfsqvxcbcghf35eightthreeseven5';

$rows_array = explode("\r\n", $input);

$final_answer = 0;

foreach ($rows_array as $key => $row) {
    
    $row_answer = 0;

    $one_row_array = str_split($row);
    
    foreach ($one_row_array as $key => $symbol) {
        if (ctype_digit($symbol)) {
                $row_answer = $symbol;
                echo $row_answer;
                $final_answer += $row_answer;
                break;
            }
        }
    }
        
    // echo $final_answer;
        
    // print_r($rows_array);
    // echo gettype($row);


    // $a = "14gxqgqsqqbxfpxnbccjc33eight";

    // foreach ($a as $key => $value) {
    //     echo $value;
    // }

?>
