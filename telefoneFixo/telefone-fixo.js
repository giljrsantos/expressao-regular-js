/*----------------------------FORMATANDO NUMERO DE TELEFONE FIXO------------------------------*/
// REGEX para formatar um numero de telefone
let regexFormatarNumeroTelefoneFixo = (/(\d{2})(\d{4})(\d{4})/g)

let numeroTelefoneFixo = "2833452692";

let formatarNumeroTelefoneFixo = numeroTelefoneFixo.replace(regexFormatarNumeroTelefoneFixo, '($1) $2-$3')

// resultado: Número Telefone Fixo: (28) 3345-2692
console.log(`Número Telefone Fixo: ${formatarNumeroTelefoneFixo}`)
/*----------------------------FORMATANDO NUMERO DE TELEFONE FIXO------------------------------*/