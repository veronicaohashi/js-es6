class DateHelper {
  textToDate(text){
    return new Date(...text.split('-').map((item,indice) => item - indice % 2));

  }

  dateToText(data){
    return data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear();
  }
}