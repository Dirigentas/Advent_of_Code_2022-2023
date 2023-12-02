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
    
    $row_answer = '';

    $one_row_array = str_split($row);

    $reversed_row = '';

    // first number
    foreach ($one_row_array as $key => $symbol) {
        if (ctype_digit($symbol)) {
                $row_answer .= $symbol;
                break;
        }
    }

    // last number
    foreach ($one_row_array as $key => $symbol) {
        $reversed_row = $symbol . $reversed_row;
    }

    $reversed_row = str_split($reversed_row);

    foreach ($reversed_row as $key => $symbol) {
        if (ctype_digit($symbol)) {
            $row_answer .= $symbol;
            echo $row_answer;
            echo "--------";
            break;
        }
    }
    $final_answer += $row_answer;
    $reversed_row = '';
}
    // echo "________";
    // echo $final_answer;

?>
