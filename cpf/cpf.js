// REGEX para deixar somente
// numeros de uma string/texto
let regexSomenteNumeros = (/\D+/g)

let numeroCpf = "123.123.952-85"

let numeroCpfSemFormatacao = numeroCpf.replace(regexSomenteNumeros, '')

console.log(`CPF sem formatação: ${numeroCpfSemFormatacao}`)// resultado: CPF sem formatação: 12312395285
/*------------------------------------SOMENTE NUMEROS-----------------------------------*/

/*------------------------------------FORMATAR NUMERO CPF-----------------------------------*/
// REGEX para formatar o
// numero de um CNPJ
let regexFomatarCpf = (/(\d{3})(\d{3})(\d{3})/)

let Cpf = "12312395285"

let cpfFormatado = Cpf.replace(regexFomatarCpf, '$1.$2.$3-')

// resultado: CPF formatado: 123.123.952-85
console.log(`CPF formatado: ${cpfFormatado}`)
/*------------------------------------FORMATAR NUMERO CPF-----------------------------------*/