function generate() {
    alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    beta = "abcdefghijklmnopqrstuvwxyz";
    num = "1234567890";
    special = "!@#$%^&*()_+=-~";
    amount = 26;
    str = "";
    while (amount != 0) {
      num1 = Math.floor(Math.random() * 5);
      if (num1 == 0) {
        str = str + alpha[Math.floor(Math.random() * 26)];
      }
      if (num1 == 1) {
        str = str + beta[Math.floor(Math.random() * 26)];
      }
      if (num1 == 2) {
        str = str + num[Math.floor(Math.random() * 10)];
      }
      if (num1 == 3) {
        str = str + special[Math.floor(Math.random() * 16)];
      }
  
      amount = amount - 1;
      str = str.replace("undefined", "");
    }
    document.getElementById("password").innerHTML = str;
  }
  
  function check() {
    query = document.getElementById("box1").value;
    points = 0;
  
    if (query.length > 15) {
      points = points + 1;
    }
  
    hasCapitalLetter = false;
    string = query;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] >= "A" && string[i] <= "Z") {
        hasCapitalLetter = true;
        break;
      }
    }
  
    if (hasCapitalLetter == true) {
      points = points + 1;
    }
  
    regex = /[!@#$%^&*()_+~]/;
    containsSpecialCharacters = regex.test(string);
  
    if (containsSpecialCharacters == true) {
      points = points + 1;
    }
  
    containsNumber = /\d/.test(query);
  
    if (containsNumber == true) {
      points = points + 1;
    }
  
    heading = document.getElementById("results");
  
    if (points == 0) {
      str1 = "Super low protection, we recommend you generate a new password";
      heading.style.color = "red";
    }
    if (points == 1) {
      str1 = "Low protection, we recommend you generate a new password";
      heading.style.color = "orange";
    }
  
    if (points == 2) {
      str1 = "Moderate protection, we recommend you generate a new password";
      heading.style.color = "yellow";
    }
  
    if (points == 3) {
      str1 = "Average protection, no need for change";
      heading.style.color = "blue";
    }
  
    if (points == 4) {
      str1 = "High protection, don't change it";
      heading.style.color = "green";
    }
  
    document.getElementById("results").innerHTML = str1;
  }
  