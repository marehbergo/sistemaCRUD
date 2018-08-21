<?php

    $conexion = mysqli_connect("localhost","root","","clientes");

    $nome = $_POST['client_name'];
    $cpf = $_POST['client_cpf'];
    $email = $_POST['client_email'];
    $fones[] = $_POST['client_phone[]'];
    $status = $_POST['client_status'];
    
    $query = $conexion->query("INSERT INTO clientes (nome_cliente, cpf_cliente, email_cliente, status_cliente) 
                                VALUES ('$nome', '$cpf', '$email', '$status')");

    $id = $_POST['id_cliente'];
    $num = count($fones);
    
    for ($i=0; $i < $num; $i++) {
        $query = $conexion->query("INSERT INTO fones (fone_client) VALUES ('$fone[$i]') WHERE id_cliente = '$id'");
    }