
        document.getElementById('encodeButton').addEventListener('click', function() {
            const input = document.getElementById('inputText').value;
            
            const encoded = input.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 3)).join('');
            document.getElementById('outputText').value = encoded;
        });
        document.getElementById('decodeButton').addEventListener('click', function() {
            const input = document.getElementById('inputText').value;
            const decoded = input.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 3)).join('');
            document.getElementById('outputText').value = decoded;
        });
