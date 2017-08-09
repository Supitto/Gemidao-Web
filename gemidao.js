function enviar()
{   
    var request = new XMLHttpRequest();   // new HttpRequest instance 
    request.onreadystatechange = function() 
    {
        if (request.readyState == XMLHttpRequest.DONE) 
        {
            var response = JSON.parse(request.responseText);
            if(response["status"] == 200)
            {
                alert("Gemidão enviado com sucesso")
            }
            else
            {
                alert("Tivemos um problema : "+response["mensagem"])
            }
        }
    }
    request.open("POST", "https://api2.totalvoice.com.br/composto");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Access-Token", document.getElementById("Key").value);
    payload = 
    {
        "numero_destino" : document.getElementById("B").value,
        "dados":
        [
            {
                "acao" : "audio",
                "acao_dados" : 
                {
                    "audio_url" : "http://prtnsrc.com/2545.mp3"
                }
            }
        ],
        "bina" : document.getElementById("A").value
    }
    console.log(payload)
    request.send(JSON.stringify(payload));
}