<?php
//conexão com php
include("conexao.php");

//obter dados
$obterDados = file_get_contents("php://input");

//extrair os dados do json
$extrair = json_decode($obterDados);

//separando os dados do json
$nomeCurso = $extrair ->cursos->nomeCurso;
$valorCurso = $extrair ->cursos->valorCurso;

//sql
$sql = "INSERT INTO cursos (nomeCurso, valorCurso) VALUES ('$nomeCurso', $valorCurso)";
mysqli_query($conexao,$sql);
//exportar os dados cadastrados
$curso = [
    'nomeCurso' => $nomeCurso,
    'valorCurso' => $valorCurso
]

json_encode(['curso'] => $curso);

?>