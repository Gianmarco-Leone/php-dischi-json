<?php

// Salvo in una variabile contenuto file JSON
$data = file_get_contents(__DIR__ . "/../data/cds.json");

// Lo strasformo in un array leggibile per PHP (tramite metodo decode)
$data_decoded = json_decode($data);

// Intesto risposta per avvisare che il contenuto è un JSON
header("Content-Type: application/json; charset=utf-8");

// Stampo l'array trasformato (tramite metodo encode) in un contenuto JSON
echo json_encode($data_decoded);
?>