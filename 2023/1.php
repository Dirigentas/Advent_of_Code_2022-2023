<?php
$input = 'two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen';

$rows_array = explode("\r\n", $input);

// 1.2
$valid_digits = ["kalafijorasmanovardas", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// print_r($valid_digits);

foreach ($rows_array as $key => &$row) {
    foreach ($valid_digits as $key => $digit) {
        // echo $digit . " ";
        echo strpos($row, $digit);
        if (strpos($row, $digit) !== false) {
            $row[strpos($row, $digit)] = $key;
            // echo "LABASSSS";
        }
        // echo ".";
    }
    // echo "\n";
}
// remove reference
unset($row);

print_r($rows_array);


$final_answer = 0;

// 1.1
foreach ($rows_array as $key => $row) {
    
    $row_answer = '';

    $one_row_array = str_split($row);

    $reversed_row = '';

    // first number
    foreach ($one_row_array as $key1 => $symbol) {
        if (ctype_digit($symbol)) {
                $row_answer .= $symbol;
                // echo $key . "-" . $row . "-" . $row_answer;
                break;
        }
    }

    // last number
    foreach ($one_row_array as $key2 => $symbol) {
        $reversed_row = $symbol . $reversed_row;
    }

    $reversed_row = str_split($reversed_row);

    foreach ($reversed_row as $key3 => $symbol) {
        if (ctype_digit($symbol)) {
            $row_answer .= $symbol;
            echo $row_answer;
            // echo ".";
            break;
        }
    }
    echo "\r\n";
    $final_answer += $row_answer;
    $reversed_row = '';
}
    echo "________";
    echo "\r\n";
    echo $final_answer;
//54031, 54087 netiko, per mazas
?>
