function submitQuestion() {
    var inputQuestion = document.getElementById("inputQuestion").value;
    var responseContainer = document.getElementById("responseContainer");
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            prompt: inputQuestion,
        })
    })
    .then(response => response.json())
    .then(data => {
        // Pastikan data.choices adalah array dan memiliki setidaknya satu elemen
        if (Array.isArray(data.choices) && data.choices.length > 0) {
            var response = data.choices[0].text.trim();
            responseContainer.innerHTML += "<p>" + response + "</p>";
            document.getElementById("inputQuestion").value = "";
        } else {
            console.error('Error: Unexpected response format');
        }
    })
    .catch(error => console.error('Error:', error));
}
