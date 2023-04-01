$(document).ready(function(){
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00)00000-0000',{
        placeholder: "(00)12345-6789"
    })
    $('#cpf').mask('000.000.000-00',{
        placeholder: "000.000.000-00"
    })
    $('#cep').mask('00000000',{
        placeholder: "12345678"
    })

    $('form').validate({
        rules:{
            nome:{
                required: true,
                minlength:true
            },
            email:{
                required: true,
                email:true
            },
            telefone:{
                required: true

            },
            cep:{
                required: true

            },
            cpf:{
                required: true

            }
        },
        messages:{
                nome:{
                    required:'Campo invalido, insira seu nome completo',
                    minlength:'insra seu nome completo'
                },
                telefone:'Campo obrigatorio, insrira seu telefone com o DDD',
                email:'email invalido',
                cep:'cep invalido',
                cpf:'cpf invalido',
            }
    })
})