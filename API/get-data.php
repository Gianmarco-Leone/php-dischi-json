<?php

// Salvo in una variabile contenuto file JSON
$data = file_get_contents(__DIR__ . "/../data/cds.json");

// Lo strasformo in un array leggibile per PHP (tramite metodo decode)
$discs = json_decode($data);

// Setto il risultato inizialmente come nullo
$result = null;

// SE ho ricevuto parametro title
if(isset($_GET["title"])) {
    // gli assegno una variabile
  $searched_title = $_GET["title"];

  foreach($discs as $disc){
    // Se il titolo del disco è lo stesso di quello passato dal parametro
    if($disc->title === $searched_title) {
        // Aggiorno risultato
      $result = $disc;
    }
  }
  
//   ALTRIMENTI copio nel risultato le informazioni che mi servono per il layout base
} else {
  
  $result = [];
  foreach($discs as $disc){
    $result[] = [
      "title" => $disc->title,
      "author" => $disc->author,
      "poster" => $disc->poster,
    ];
  }
}

// Intesto risposta per avvisare che il contenuto è un JSON
header("Content-Type: application/json; charset=utf-8");

// Stampo l'array trasformato (tramite metodo encode) in un contenuto JSON

echo json_encode($result);
?>