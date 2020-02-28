var warna = ambilWarnaAcak(3)
    
var pilihanJawaban = document.querySelectorAll(".pilihanJawaban")
var warnaYangBenar = acakWarnaYangBenar()
var warnaPertanyaan  = document.getElementById("warnaPertanyaan")
var pesanPeringatan = document.getElementById("peringatan")
var tombolReset = document.getElementById("reset")

tombolReset.addEventListener("click", function(){
    //menghasilkan warna baru
    warna = ambilWarnaAcak(3)
    //ambil warna pertanyaan random yang baru
    warnaYangBenar = acakWarnaYangBenar()
    //ganti warna pertanyaan dengan warna yg baru
    warnaPertanyaan.textContent = warnaYangBenar
    //ganti warna pilihan
    for(var i = 0 ; i<pilihanJawaban.length; i++){
        pilihanJawaban[i].style.backgroundColor = warna[i]
    }
})

warnaPertanyaan.textContent = warnaYangBenar

for (var i = 0; i< pilihanJawaban.length;i++){
    //menambahkan huruf ke pilihan jawaban
    pilihanJawaban[i].style.background = warna[i]

    //membuat click listeners ke pilihan jawaban
    pilihanJawaban[i].addEventListener("click", function(){
        //mengambil pilihan jawaban yang diklik
        var warnaYangDiklik = this.style.background
        //membandingkan warna dengan warnaYangDipilih
        if(warnaYangDiklik === warnaYangBenar){
            pesanPeringatan.textContent = "You are correct!"
            tombolReset.textContent = "Play Again?"
            ubahWarna(warnaYangDiklik)
        }else{
            this.style.backgroundColor = "white"
            pesanPeringatan.textContent = "Try Again, kids :))"
        }

    })
}

function ubahWarna(warna){
    //loop seluruh pilihanJawaban
    for(var i =0 ; i<warna.length;i++){
        //mengubah seluruh warna agar sama dengan warna yang benar
        pilihanJawaban[i].style.backgroundColor = warna
    }
}

function acakWarnaYangBenar(){
    var warnaAcakBenar = warna[Math.floor(Math.random() * warna.length)];
    return warnaAcakBenar
}

function ambilWarnaAcak(jumlahPilihanWarna){

    var arr = []
    for(var i=0; i<jumlahPilihanWarna;i++){
        arr.push(acakWarnaPilihan())
    }
    return arr
}

function acakWarnaPilihan(){

    var arrayWarna = [
        "red",
        "yellow",
        "green",
        "blue",
        "purple",
        "black",
        "pink",
        "brown",
        "grey",
    ]
    
    var warnaAcakPilihan = arrayWarna[Math.floor(Math.random() * arrayWarna.length)]
    return warnaAcakPilihan
}