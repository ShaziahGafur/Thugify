// JavaScript File

document.getElementById('go').onclick = function() {
                var div = document.getElementById('texter').value;
                var add = div + ", dawg";
                document.getElementById('output').innerHTML = add;
            }