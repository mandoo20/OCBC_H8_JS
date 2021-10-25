// const kursi = {
//     warna: "Hitam Biru",
//     bahan: "Rosewood",
//     merk: "Li ning",
//     jumlahKaki: 3,
//     kategori: "Sport",
//     harga: 1500000,
//     bebanMaks: 120,
// };

// console.log(kursi);

//cara 1 : object.property
// console.log(kursi.merk);

// cara 2: object['property']
// console.log(kursi['bahan']);

// kursi.distribusi = ['Jkt', 'Bd','Srb'];


// kursi["jumlahKaki"] = 5;
// console.log(kursi);

function removeSpaces(text){
    return text.replace(/\s+/g,'');
}

function reverseText(text) {
    var split = text.split("");
    var revers = split.reverse();
    var join = revers.join("");

    return join;
}

function updateVowels(text){
    var vokal = "aiueoAIUEO";
    var temp,tRe;
    tRe = text.split("");
    for(var i = 0;i<text.length;i++){
        if(vokal.search(tRe[i]) != -1){
            temp = String.fromCharCode(text.charCodeAt(i)+1);
            tRe[i] = temp;

        }
    }
    return tRe.join("");
}


var password = "qwerty anjay";


var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var updated = updateVowels(reversed);
console.log(noSpaces);
console.log(reversed);
console.log(updated);



