class DateHelper {
  
  constructor(){
    throw new Error('DateHelper não pode ser instanciado');
  }

  // Métodos estáticos: são invocados direto da classe sem a necessidade de uma instância 
  static textToDate(text){
    // Transformo a string em um array
    // Spread operator - 
    return new Date(...text.split('-').map((item,indice) => item - indice % 2));

  }

  static dateToText(data){
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}