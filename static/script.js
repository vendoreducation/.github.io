function searchQuestion() {
    var question = document.getElementById('questionInput').value;

    // AJAX request to backend
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/search', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
        if (xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById('answer').innerText = response.answer;
        } else {
            alert('Error occurred: ' + xhr.statusText);
        }
    };
    xhr.onerror = function() {
        alert('Request failed');
    };
    xhr.send(JSON.stringify({ question: question }));
}
