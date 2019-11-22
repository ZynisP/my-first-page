// var x = "bbb";

// function validateForm() {
	
//   return false;
// }
// window.onload = function() {
// 	var request = new XMLHttpRequest();
//   request.open("GET", "http://api.nbp.pl/api/exchangerates/rates/A");
//   request.onreadystatechange = function() {
//         // Check if the request is compete and was successful
//         if(this.status === 200) {
//         	console.log("response", this.responseText)
//           var element = document.getElementById("waluta").innerHTML = JSON.parse(this.responseText).rates[0].mid
//         }
//         console.log("response", this.status)
//       };
//       request.send();
//     }

// window.onload = function(){
//   //getCurrency();
//   testDlaNauki();
// }

function getCurrency() {
  $.ajax( {url:'http://api.nbp.pl/api/exchangerates/tables/A',
      headers: {
          "Accept":"application/json"
      },
      success:function(data) {
        onGetCurrencySuccess(data);
      },
   });
}

function onGetCurrencySuccess(data) {
  if (data.length > 0) {
    console.log("ma wiecej niz jeden element");
    var table2 = data[0];

    table2.rates.forEach(function(item, index, array) {
      console.log(item, index);
    });
  } else {
    console.log("nie ma wiecej niz jeden elementow");
  }
}

function myFunction() {
	console.log("dass")
}

  function myButton(){
    document.getElementById("demo1").innerHTML = "Hello Paulina";
    document.getElementById("demo2").innerHTML = "How are you";
  }

// var paunlina = {
//   "imie" : "Paunlina",
//   "nazwisko" : "Lewandowsk",
//     "wina" : [
//     {
//         "nazwa": "bianko",
//         "rodzaj": "musujace"
//     }, {
//         "nazwa": "redhot",
//       "rodzaj": "fajne"
//     }
//   ]
// };

// function testDlaNauki() {
//   console.log(paunlina.wina[1].nazwa)
//   console.log(paunlina.wina.length)

// paunlina.wina.forEach(function(wina, index, array) {
//       console.log(wina.nazwa);
//     });
// }

var zdjecia = {
  "nazwa" : "slubne" ,
  "rodzaj" : "czarno-biale" ,
   "selfie" : [
   {
    "nazwa" : "lubie placki" ,
    "rodzaj" :  "blysczace" ,
    "osoba" :  "mama" ,
    "imie": "helena"
   },
   { 
    "nazwa" : "meksyk" ,
    "rodzaj" :  "matowe" ,
    "osoba" :  "tata" ,
    "imie": "karol"
   }
   ]
};

function paulina() {
  console.log(zdjecia.selfie[0])
  console.log(zdjecia.selfie[1])
  console.log(zdjecia.selfie[0].nazwa)
  console.log(zdjecia.selfie[1].rodzaj)
  console.log(zdjecia.selfie[0].osoba)
  console.log(zdjecia.selfie[1].imie)
  console.log(zdjecia.selfie[1].nazwa)
  console.log(zdjecia.selfie.length)
 
zdjecia.selfie.forEach(function(selfie) {
  console.log(selfie.osoba)
});
}

window.onload = function() {
  paulina() ;
}


