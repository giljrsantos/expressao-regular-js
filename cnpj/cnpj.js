/*------------------------------------SOMENTE NUMEROS-----------------------------------*/
// REGEX para deixar somente
// numeros de uma string/texto
let regexSomenteNumeros = (/\D+/g)

let numeroCnpj = "12.345.678/0001-22"


let numeroCnpjSemFormatacao = numeroCnpj.replace(regexSomenteNumeros, '')

// resultado: CNPJ sem formatação: 12345678000122
console.log(`CNPJ sem formatação: ${numeroCnpjSemFormatacao}`)
/*------------------------------------SOMENTE NUMEROS-----------------------------------*/

/*-----------------------------------FORMATANDO NUMERO CNPJ-----------------------------------*/
// REGEX para formatar o
// numero de um CNPJ
let regexFomatarCnpj = (/(\d{2})(\d{3})(\d{3})(\d{4})/)

let Cnpj = "12345678000122"

let cnpjFormatado = Cnpj.replace(regexFomatarCnpj, '$1.$2.$3/$4-')

// resultado: CNPJ formatado: 12.345.678/0001-22
console.log(`CNPJ formatado: ${cnpjFormatado}`)
/*-----------------------------------FORMATANDO NUMERO CNPJ-----------------------------------*/