function filtro(filtro){    
    switch (filtro) {
        case 'todos':
        document.getElementById('section-cars').innerHTML = retornaTodosCarros();
        document.querySelector('body').className = "corrida";
        break;
        case 'section-1':
        document.getElementById('section-cars').innerHTML = retornaTipo(1);
        document.querySelector('body').className = "fundo_sedan";
        break;
        case 'section-2':
        document.getElementById('section-cars').innerHTML = retornaTipo(2);
        document.querySelector('body').className = "fundo_sport";
        break;
        case 'section-3':
        document.getElementById('section-cars').innerHTML = retornaTipo(3);
        document.querySelector('body').className = "fundo_suv";
        break;
        default:
        document.getElementById(filtro).style.display = ''; 
        break;
    }       
}

var Car = function(descricao, cor, ano, imagem, combustivel, categoria){
    this.descricao = descricao;
    this.cor = cor;
    this.ano = ano;
    this.imagem = imagem;
    this.combustivel = combustivel;
    this.categoria = categoria;
    this.imprimirObjeto = function(){
      return '<div class="col s12 m4"><div class="card"><div class="card-image"><img class="materialboxed" width="650"  src="'+imagem+'"><span class="card-title">'+descricao+'</span></div><div class="card-content"><p class="descricao"><i class="material-icons dp48">local_gas_station</i>'+combustivel+'</p><p class="descricao"><i class="material-icons dp48">format_paint</i>'+cor+'</p><p class="descricao"><i class="material-icons dp48">date_range</i>'+ano+'</p></div><div class="card-action"><a href="#">Mais Destalhes</a> </div></div></div>';
  }
}

var estoque = [];

//Sedans
estoque.push(new Car('MERCEDES-BENZ SLK 200 1.8 CGI', 'Vermelho', '2018', 'img/products/car1.jpg', 'Gasolina', 1));
estoque.push(new Car('HONDA CIVIC LXR 2.0 16V FLEX AUT.', 'Prata', '2015', 'img/products/car4.jpg', 'Flex', 1));
estoque.push(new Car('BMW M3 COUPE 4.0 420 CV.', 'Vermelho', '2017', 'img/products/car3.jpg', 'Gasolina', 1));

//Sport
estoque.push(new Car('LAMBORGHINI GALLARDO', 'Amarelo', '2013', 'img/products/esp1.jpg', 'Gasolina', 2));
estoque.push(new Car('FERRARI F360', 'Vermelho', '2018', 'img/products/esp2.jpg', 'Gasolina', 2));
estoque.push(new Car('AUDI R85.2 FSI', 'Branco', '2017', 'img/products/esp4.jpg', 'Gasolina', 2));

//Suv
estoque.push(new Car('Mitsubishi ASX', 'Preto', '2015', 'img/products/suv4.jpg', 'Gasolina', 3));
estoque.push(new Car('Ssangyong Korando', 'Azul', '2016', 'img/products/suv2.jpg', 'Flex', 3));
estoque.push(new Car('Ford Edge', 'Vermelho', '2018', 'img/products/suv3.jpg', 'Flex', 3));

function retornaCarro(id){
     return estoque[id];
}


function retornaTodosCarros(){
    var carros = '';
    for (var i = 0; i < estoque.length; i++){
        var carro = estoque[i].imprimirObjeto();
        carros += carro.replace("#", "produto_detalhes.html?id="+i);
    }
    return carros;
}

function retornaTipo(categoria){
    var carros = '';
    for (var i = 0; i < estoque.length; i++){
        if (estoque[i].categoria == categoria){
            var carro = estoque[i].imprimirObjeto();
            carros += carro.replace("#","produto_detalhes.html?id="+i);
        }
    }
    return carros;
}

var recuperarId = function(){
     var query = location.search.slice(1);
     var partes = query.split('&');
     var id;
     var valor;
     partes.forEach(function (parte) {
      var chaveValor = parte.split('=');
      id = chaveValor[0];
      valor = chaveValor[1];
    }); 
     return valor;
}
