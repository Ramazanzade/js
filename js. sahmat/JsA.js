








function at() {
    let one = document.getElementById('one');
    let tabl = document.getElementById('tabl');

    let data = "";
    let color = ""
    for (let i = 1; i < one.value; i++) {
        data += `<tr> `;
        for (let j = 1; j < one.value; j++) {
            //color = (i+j)%2 == 0 ? "black" : "";



            if (i == j) {
                color = 'black';
            } else if (i + j == one.value) {
                color = 'black';
            }
            else {
                color = 'white';
            }




            data += `<td style='background-color:${color}'></td>`
        }

        data += `<tr/>`
    }
    tabl.innerHTML = data

}













let rdm=Math.floor(Math.random() * 10)
//let pro=prompt("Mehculu tap");

let value="";

for(let i=0; i<=2; i++){
  
    console.log(rdm);
let pro=prompt("Mehculu tap");
    if(rdm =='value' ){
        
        alert('cavab doqru');
    }else{
        alert('cavab yalnis');
    }
}


