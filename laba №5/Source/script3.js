class fiscalCode {
  constructor(firstName, surname, gender, dob){
    this.name = firstName;
    this.surname = surname;
    this.gender = gender;
    this.dob = dob;
    this.dobDay = dob.split("/")[0];
    this.dobMonth = dob.split("/")[1];
    this.dobYear = dob.split("/")[2];
  }
  
  nameConvertor(name) {
    var vowels = "aeiou"
    var name = name.toLowerCase();
    var result = "";

      for (var i = 0; i < name.length; i++){
        if (vowels.indexOf(name[i]) < 0){
            result += name[i];
          }
      }

      if (result.length > 3){
        result = result[0]+result[2]+result[3];
      } else if (result.length < 3){
        for (var i = 0; i < name.length & result.length < 3; i++){
            if (vowels.indexOf(name[i]) > -1){
                result += name[i];
            }
        }

          if (result.length < 3){
            result += "x".repeat(3-result.length);
          }
      }

      return result.toUpperCase();
  }
  
  get code(){
    var result = this.nameConvertor(this.surname) + this.nameConvertor(this.name);
    result += this.dobYear[2] + this.dobYear[3];
    
    const months = {"1":"A","2":"B","3":"C","4":"D","5":"E","6":"H","7":"L","8":"M","9":"P","10":"R","11":"S","12":"T"}
    result += months[this.dobMonth];
    var day = this.dobDay;
    if (this.gender == "F"){
      day = (parseInt(day)+40).toString();
    }
    
    if (day.length < 2){
      day = "0"+day;
    }
    result += day;
    
    return result;
  }
}

var doc = new fiscalCode("Matt", "Edabit", "M", "1/1/1900");
document.write(doc.code);
