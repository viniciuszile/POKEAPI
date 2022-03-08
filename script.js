function buscar(){ 
    
    let input = document.querySelector("#input").value.toLowerCase();
    let value =  input;
    let url = new URL(`https://pokeapi.co/api/v2/pokemon/${value}`);
    fetch(url)
        .then((response) => {
            return response.json()  
        })
        .then((data) => {
        
        console.log(data);
        document.getElementById('nome').innerHTML = data['name'];
        document.getElementById('numero').innerHTML = data['id'];
        let img = data['sprites']['front_default'];
        document.getElementById('pic').setAttribute('src',img);
        document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];  
        })

        if (value > 899)
            alert("Pokemon não encontrado.");
}
const btn = document.querySelector("#bnt1");
btn.addEventListener("click", buscar);



