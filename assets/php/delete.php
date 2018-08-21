<?php

    $conexion = mysqli_connect("localhost","root","","clientes");

    $nome = $_POST['client_name'];
    $query = $conexion->query("SELECT id_cliente FROM clientes WHERE nome_cliente = '$nome'");
    
    $id = $_POST['id_cliente'];
    
    $query = $conexion->query("DELETE FROM cliente WHERE id_cliente = '$id'"); 
    $query = $conexion->query("DELETE FROM fones WHERE id_cliente = '$id'");

    mysqli_close($conexion);