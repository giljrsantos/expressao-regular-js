/*----------------------------FORMATANDO NUMERO DE TELEFONE CELULAR------------------------------*/
// REGEX para formatar um numero de telefone
let regexFormatarNumeroCelular = (/(\d{2})(\d{1})(\d{4})(\d{4})/g)

let numeroTelefoneCelular = "28945678912";

let formatarNumeroTelefoneCelular = numeroTelefoneCelular.replace(regexFormatarNumeroCelular, '($1) $2 $3-$4')

// resultado: Número Telefone Celular: (28) 9 4567-8912
console.log(`Número Telefone Celular: ${formatarNumeroTelefoneCelular}`)

/*----------------------------FORMATANDO NUMERO DE TELEFONE CELULAR------------------------------*/