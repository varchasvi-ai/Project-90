function addUser()
{
    var player_1Name = document.getElementById("player1_input").value;
    var player_2Name = document.getElementById("player2_input").value;
    localStorage.setItem("Player 1" , player_1Name);
    localStorage.setItem("Player 2" , player_2Name);
    window.location = "index2.html";
}