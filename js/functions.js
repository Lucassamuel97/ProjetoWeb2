//Armazena as empresas
let empresas = [];
var estoque = [];

//Classe empresas
var empresa = {
    nome: "",
    imagem: "",
    insereDados: function (nome, imagem) {
        this.nome = nome;
        this.imagem = imagem;
    }
}

//Empresas nacionais
var nacional = Object.create(empresa);
var ford = Object.create(nacional);
ford.insereDados('Ford', 'img/ford.png');
var honda = Object.create(nacional);
honda.insereDados('Honda', 'img/honda.png');

//Empresas estranjeiras
var estrangeira = Object.create(empresa);

var bmw = Object.create(estrangeira);
bmw.insereDados('Bmw', 'img/bmw.png');
var labomrg = Object.create(estrangeira);
labomrg.insereDados('lamborgini', 'img/lambo.png');

var ferrari = Object.create(estrangeira);
ferrari.insereDados('ferrari', 'img/ferrari.png');

var audi = Object.create(estrangeira);
audi.insereDados('Audi', 'img/audi.png');

var mercedes = Object.create(estrangeira);
mercedes.insereDados('Mercedes', 'img/mercedes.png');

var mitisubishi = Object.create(estrangeira);
mitisubishi.insereDados('Mitisubishi', 'img/mitsubishi.png');


var yong = Object.create(estrangeira);
yong.insereDados('Ssangyong', 'img/yong.png');

//Guarda empresas
empresas.push(ford);
empresas.push(honda);
empresas.push(bmw);
empresas.push(labomrg);
empresas.push(ferrari);
empresas.push(audi);
empresas.push(mercedes);
empresas.push(mitisubishi);
empresas.push(yong);

//Classe Carros
var Car = function (descricao, cor, ano, imagem, combustivel, categoria, empresa, preco) {
    this.empresa = empresa;
    this.descricao = descricao;
    this.cor = cor;
    this.ano = ano;
    this.imagem = imagem;
    this.combustivel = combustivel;
    this.categoria = categoria;
    this.preco = preco;
    this.imprimirObjeto = function () {
        return '<div class="col s12 m4"><div class="card"><div class="card-image"><img class="materialboxed" width="650"  src="' + imagem + '"><span class="card-title">' + descricao + '</span></div><div class="card-content"><p class="descricao"><i class="material-icons dp48">local_gas_station</i>' + combustivel + '</p><p class="descricao"><i class="material-icons dp48">format_paint</i>' + cor + '</p><p class="descricao"><i class="material-icons dp48">date_range</i>' + ano + '</p></div><div class="card-action"><a href="#">Mais Detalhes</a> </div></div></div>';
    }
}

//Sedans
estoque.push(new Car('MERCEDES-BENZ SLK 200 1.8 CGI', 'Vermelho', '2018', 'img/products/car1.jpg', 'Gasolina', 1, mercedes, 84900));
estoque.push(new Car('HONDA CIVIC LXR 2.0 16V FLEX AUT.', 'Prata', '2015', 'img/products/car4.jpg', 'Flex', 1, honda, 56300));
estoque.push(new Car('BMW M3 COUPE 4.0 420 CV.', 'Vermelho', '2017', 'img/products/car3.jpg', 'Gasolina', 1, bmw, 223000));

//Sport
estoque.push(new Car('LAMBORGHINI GALLARDO', 'Amarelo', '2013', 'img/products/esp1.jpg', 'Gasolina', 2, labomrg, 998500));
estoque.push(new Car('FERRARI F360', 'Vermelho', '2018', 'img/products/esp2.jpg', 'Gasolina', 2, ferrari, 12000000));
estoque.push(new Car('AUDI R85.2 FSI', 'Branco', '2017', 'img/products/esp4.jpg', 'Gasolina', 2, audi, 6000000));

//Suv
estoque.push(new Car('Mitsubishi ASX', 'Preto', '2015', 'img/products/suv4.jpg', 'Gasolina', 3, mitisubishi, 600000));
estoque.push(new Car('Ssangyong Korando', 'Azul', '2016', 'img/products/suv2.jpg', 'Flex', 3, yong, 400000));
estoque.push(new Car('Ford Edge', 'Vermelho', '2018', 'img/products/suv3.jpg', 'Flex', 3, ford, 100000));

estoque.reverse();

function imprimirLogoEmpresas() {
    var imagens = '';
    for (var i = 0; i < empresas.length; i++) {
        imagens += '<a class="carousel-item" href="#one!"><img src="' + empresas[i].imagem + '"></a>';
    }
    return imagens;
}

//Filtra a categoria dos carros
function filtro(filtro) {
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

function retornaCarro(id) {
    return estoque[id];
}

function retornaTodosCarros() {
    var carros = '';
    for (var i = 0; i < estoque.length; i++) {
        var carro = estoque[i].imprimirObjeto();
        carros += carro.replace("#", "produto_detalhes.html?id=" + i);
    }
    return carros;
}

function retornaTipo(categoria) {
    var carros = '';
    for (var i = 0; i < estoque.length; i++) {
        if (estoque[i].categoria == categoria) {
            var carro = estoque[i].imprimirObjeto();
            carros += carro.replace("#", "produto_detalhes.html?id=" + i);
        }
    }
    return carros;
}

var recuperarId = function () {
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

var enviarEmail = () => {
    var email = prompt('Digite seu email Para receber mais dicas');
}

document.getElementById('empresas').innerHTML = imprimirLogoEmpresas();

filtro('todos');
document.getElementById('filtro').addEventListener("change", function () {
    var valor = document.getElementById('filtro').value;
    filtro(valor);
});
var selecionado = retornaCarro(recuperarId());
document.getElementsByClassName('section')[0].innerHTML = '<div class="col s12 m4"><div class="card"><div class="card-image"><img class="materialboxed" width="650"  src="' + selecionado.imagem + '"><span class="card-title">' + selecionado.descricao + '</span></div><div class="card-content"><p class="descricao"><i class="material-icons dp48">local_gas_station</i>' + selecionado.combustivel + '</p><p class="descricao"><i class="material-icons dp48">format_paint</i>' + selecionado.cor + '</p><p class="descricao"><i class="material-icons dp48">date_range</i>' + selecionado.ano + '</p><p class="descricao"><i class="material-icons dp48">attach_money</i>' + selecionado.preco.toLocaleString('pt-br') + '</p><p class="descricao"><img src="' + selecionado.empresa.imagem + '" alt="" class="circle responsive-img"></p></div><div class="card-action"><a href="produtos.html">Voltar</a><a href="contato.html">Contato</a></div></div></div>';
