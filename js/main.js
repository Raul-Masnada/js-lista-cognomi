 var array = ["raul" , "andrea" , "mauro", "francesco", "alessandro", "matteo", "martino", "mirko",];
    var name = prompt("inserire il tuo cognome");
    array.push(name);
    array.sort();

    console.log(array);

    for (var j = 0; j < array.length; j++) {

      var elem = array[j];
      if (elem == name) {

        console.log("Posizione umana di " + name +": " + (j+1));
