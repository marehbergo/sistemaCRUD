<?php

    $conexion = mysqli_connect("localhost","root","","clientes");

    $nome = $_POST['client_name'];
    $cpf = $_POST['client_cpf'];
    $email = $_POST['client_email'];
    $fones[] = $_POST['client_phone[]'];
    $status = $_POST['client_status'];
    
    $query = $conexion->query("UPDATE clientes SET nome_cliente = '$nome', cpf_cliente = '$cpf', email_cliente = '$email', status_cliente = '$status'"); 
    
    $id = $_POST['id_cliente'];
    $num = count($fones);
    
    for ($i=0; $i < $num; $i++) {
        $query = $conexion->query("UPDATE fones SET fone_client) VALUES ('$fone[$i]') WHERE id_cliente = '$id'");
    }

    mysqli_close($conexion);
