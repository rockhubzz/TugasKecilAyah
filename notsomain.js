let awal= parseInt(prompt("Masukkan saldo awal:"))
let tambahan= parseInt(prompt("Masukkan saldo tambahan:"))
let hari= new Date().getDay()
let detailDate= new Date()
const akhir= (awal + tambahan)

console.log(detailDate)
alert("Saldo akhir anda: Rp."+ akhir)

switch(hari){
    case 1:
        alert("Hari ini hari senin")
        break;
    case 2:
        alert("Hari ini hari selasa")
        break;
    case 3:
        alert("Hari ini hari rabu")
        break;
    case 4:
        alert("Hari ini hari kamis")
        break;
    case 5:
        alert("Hari ini hari jumat")
        break;
    case 6:
        alert("Hari ini hari sabtu")
        break;
    case 0:
        alert("Hari ini hari minggu")
        break;
}