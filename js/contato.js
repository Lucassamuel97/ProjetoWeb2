 $(document).ready(function () {
     $('.datepicker').datepicker();

 });

 $(document).ready(function () {
     $('select').formSelect();
 });
 $(document).ready(function () {
     $("#btnSubmit").click(function (event) {
         event.preventDefault();
     });
 });




 $("select[required]").css({
     display: "block",
     height: 0,
     padding: 0,
     width: 0,
     position: 'absolute'
 });


 $("#telefone").mask("(00) 0000-00009");


 var $$ = function (id) {
     return document.getElementById(id);
 }

 $$("data").addEventListener("focus", function () {
     $('.datepicker').datepicker('open');
 })



 function ganhaFocus(id) {
     var text = $$(id);
     if (text.value == "Digite aqui sua mensagem!") {
         text.value = "";
     }

 }

 function perdeFocus(id) {
     var text = $$(id);
     if (text.value == "") {
         text.value = "Digite aqui sua mensagem!";
     }
 }

 function pri_mai(obj) {
     str = obj.value;
     qtd = obj.value.length;
     prim = str.substring(0, 1);
     resto = str.substring(1, qtd);
     str = prim.toUpperCase() + resto;
     obj.value = str;
 }

 var form = document.forms[0];
 var nomeInput = form.elements[0];
 var sobrenomeInput = form.elements[1]

 nomeInput.addEventListener('blur', function (event) {
     if (nomeInput.validity.patternMismatch) {
         nomeInput.setCustomValidity("Certifique-se que você digitou caracteres corretos!");
     } else
         nomeInput.setCustomValidity("");
 });

 sobrenomeInput.addEventListener('blur', function () {
     if (sobrenomeInput.validity.patternMismatch) {
         sobrenomeInput.setCustomValidity("Certifique-se que você digitou caracteres corretos!");
     } else
         sobrenomeInput.setCustomValidity("");
 });

 var Cliente = {
     nome: "",
     sobrenome: "",
     data_nasc: "",
     estado: "",
     cidade: "",
     email: "",
     telefone: "",
     mensagem: "",
     insereDados: function (nome, sobrenome, data_nasc, estado, cidade, email, telefone, mensagem) {
         this.nome = nome,
             this.sobrenome = sobrenome,
             this.data_nasc = data_nasc,
             this.estado = estado,
             this.cidade = cidade,
             this.email = email,
             this.telefone = telefone,
             this.mensagem = mensagem;
     }
 }
 var cliente = Object.create(Cliente);

 function obtemDados() {
     cliente.insereDados($$("nome").value, $$("sobrenome").value, $$("data").value, $$("estado").value, $$("cidade").value, $$("email").value, $$("telefone").value, $$("mensagem").value);
     for (i in cliente) {
         if (cliente[i].value != undefined) {
             $("#btnSubmit").removeClass("disable");
         }
     }
 }


 function criaCliente() {

     function confirma_envio() {
         $$('confirma_envio').textContent = "Seu formulário foi enviado com sucesso senhor(a) " + cliente.nome;
     }
     if (cliente.estado != "0") {
         var confim = confirm("Todas as informações estão corretas?");
         if (confim == true) {
             localStorage.setItem(cliente.nome + " " + cliente.sobrenome, JSON.stringify(cliente));
             var objCliente = JSON.parse(localStorage.getItem(cliente.nome + " " + cliente.sobrenome));
             $$('confirm').innerHTML = $$('confirm').innerHTML + " " + objCliente.nome;
             $(".form").addClass('hidden');
             $("#confirma").removeClass("hidden");
             var segundos = 10
             var tempo = window.setInterval(function () {

                 $$("redirecionar").innerHTML = "Você será redirecionado de volta em " + segundos;
                 segundos--
                 if (segundos < 0) {
                     window.setTimeout(tempo);
                     window.location.href = "contato.html";
                 }
             }, 1000);
         }
     } else
         alert("Selecione um estado!");
 }
 $(document).ready(function () {
     validate();
     $('#nome, #sobrenome, #data, #estado, #cidade, #email, #telefone, #mensagem').change(validate);
 });

 function validate() {
     if ($('#nome').val() != '' &&
         $('#sobrenome').val() != '' &&
         $('#data').val() != '' &&
         $('#estado').val() != '0' &&
         $('#cidade').val() != '' &&
         $('#email').val() != '' &&
         ($('#telefone').val().length == 14 || $('#telefone').val().length == 15) &&
         $('#mensagem').val() != '')
         $("button[type=submit]").prop("disabled", false);
     else {
         $("button[type=submit]").prop("disabled", true);
     }
 }
