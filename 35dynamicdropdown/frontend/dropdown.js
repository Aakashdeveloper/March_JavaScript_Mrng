const url = "http://localhost:4500"

const getCity = () => {
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var node = document.createElement('option');
            var textnode = document.createTextNode(data[i].name);
            node.appendChild(textnode);
            document.getElementById('city').appendChild(node)
        }
    })
}