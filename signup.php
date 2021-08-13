<?php
$pw = $_POST['password'];
$pw_check = $_POST['pw_check'];

echo $pw;
if ($pw != $pw_check) {
    echo "PASSWORD IS WRONG";
} else {
    $mysqli = mysqli_connect(/* TODO MySQL connect file */);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    echo $password;
    $sql = "insert into account values('{$_POST['id']}', '{$password}', '{$_POST['name']}', '{$_POST['email']}');";

    $result = mysqli_query($mysqli, $sql);

    if ($result === false) {
        echo "ERROR!";
        echo mysqli_error($mysqli);
    } else {
        ?>
        <script>
            alert("회원가입이 성공적으로 됬습니다");
        </script>
        <?php
        header("Location: ./index.html");
    }
}
?>