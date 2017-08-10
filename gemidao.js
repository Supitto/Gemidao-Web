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
    request.setRequestHeader("Access-Token", document.getElementById("Key").value.replace(/\s/g,''));
    payload = 
    {
        "numero_destino" : document.getElementById("B").value,
        "dados": 
        [
            {
                "acao": 'audio',
                "acao_dados": 
                {
                    "url_audio": 'https://github.com/haskellcamargo/gemidao-do-zap/raw/master/resources/gemidao.mp3'
                }
            }
        ],
        "bina" : document.getElementById("A").value
    }
    console.log(payload)
    request.send(JSON.stringify(payload));
}