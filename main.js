$(function() {
    $('#decrypt_btn').on('click', function() {
        var i, li, div;
        var input = strip($('#ciphertext').val()).toUpperCase(); 
        //cipherTextArea.value = strip(cipherTextArea.value).toUpperCase();
        crackInfo = Vigenere.crack(input, 26);
        for (i = 0; i < crackInfo.length; ++i) {
            // li = document.createElement('li');
            // li.innerHTML = crackInfo[i][1];
            // crackList.appendChild(li);
            var li = document.createElement('li');
            li.innerHTML = crackInfo[i][1];
            $('#resultslist').append(li);
        }
    });
});

function strip(str) {
return str.replace(/\s+/g, '');
}