function addUser()
{
    player1_name = document.getElementById("player1_name", player1_name);
    player2_name = document.getElementById("player2_name", player2_name);

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location = "mathquiz_page.html";
}
