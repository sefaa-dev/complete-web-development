/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerinin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

// let ogr1_ad = "Ada";
// let ogr1_soyad = "Bilgi";
// let ogr1_dogumTarihi = "2010";
// let ogr1_matematik1 = 70;
// let ogr1_matematik2 = 70;
// let ogr1_matematik3 = 80;
// let ogr1_ortalama = (ogr1_matematik1 + ogr1_matematik2 + ogr1_matematik3) / 3;
// console.log(parseFloat(ogr1_ortalama));
// console.log(ogr1_ortalama >= 50);

// let ogr2_ad = "Yiğit";
// let ogr3_soyad = "Bilgi";
// let ogr2_dogumTarihi = "2012";
// let ogr2_matematik1 = 40;
// let ogr2_matematik2 = 40;
// let ogr2_matematik3 = 50;
// let ogr2_ortalama = (ogr2_matematik1 + ogr2_matematik2 + ogr2_matematik3) / 3;
// console.log(parseFloat(ogr2_ortalama));
// console.log(typeof ogr2_ortalama);
// console.log(ogr2_ortalama >= 50);

// let suankiYil = new Date().getFullYear();

// let ogr1_yas = suankiYil - parseInt(ogr1_dogumTarihi);
// let ogr2_yas = suankiYil - parseInt(ogr2_dogumTarihi);
// console.log(ogr2_yas);


// var sayi = 62
// console.log(sayi >= 10 && sayi <= 50)

// console.log(sayi > 0 && sayi%2==1)

// x = 15, y= 100, z=120
// if(x>y && x>z)
// console.log("en büyük x")
// else if (y>x && y>z)
// console.log("en büyük y")
// else
// console.log("en büyük z")

// vizeBir = 10
// vizeİki = 10
// finalN = 70
// vizeOrt = ((vizeBir + vizeİki)/2) * 0.40
// finalOrt = finalN*0.60

// gop = vizeOrt + finalOrt
// console.log(gop)

// if(gop >= 50 || finalN >= 70)
// console.log("geçti")
// else
// console.log("kaldı")

// let url = "https://www.sadikturan.com/";

// let kursAdi = "Kopmle Web Geliştirme Kursu";


// var yeniString = kursAdi.replaceAll(" ","-");

// var istenen = yeniString.toLowerCase()
// console.log(istenen)

// console.log(`${url}${istenen}`)

// var yeniSonuc = kursAdi.includes("Geliştirme") ? "var" : "yok";
// console.log(yeniSonuc)

// var sonuc = url.startsWith("https") ? "var" : "yok";
// console.log(sonuc);

// let cevap = url.length;

// console.log(cevap)

// sonuc = kursAdi.split(" ").length;
// console.log(sonuc)

// let meyveDizi = ["elma","armut","muz","çilek"];


// var son = meyveDizi[meyveDizi.length-1]
// console.log(meyveDizi[0])
// console.log(son)

// var varmi = meyveDizi.includes("elmah")
// var varmii = meyveDizi.indexOf("elmasfg")
// console.log(varmii)

// meyveDizi.push("kiraz")

// console.log(meyveDizi)

// meyveDizi.splice(-2)

// console.log(meyveDizi)

// let ogr1 = ["yiğit bilgi",2010,[70,60,80]]
// let ogr2 = ["ada bilgi",2012,[80,80,90]]
// let ogr3 = ["ahmet turan",2009,[60,60,70]]

// var suAnkiYil = new Date().getFullYear();


// let ist1 = `Yaş: ${suAnkiYil - ogr1[1]} Not Ort: ${(ogr1[2][0]+ogr1[2][1]+ogr1[2][2])/3}`
// let ist2 = `Yaş: ${suAnkiYil - ogr2[1]} Not Ort: ${(ogr2[2][0]+ogr2[2][1]+ogr2[2][2])/3}`
// let ist3 = `Yaş: ${suAnkiYil - ogr3[1]} Not Ort: ${(ogr3[2][0]+ogr3[2][1]+ogr3[2][2])/3}`
// console.log(ist1,ist2,ist3)

// let sayilar = [1,5,7,15,3,25]

// for(let i=0; i<sayilar.length; i++){

//     kare = sayilar[i]*sayilar[i]
//     console.log(kare)

// }

// for(let i=1; i<sayilar.length;i++){

//     if(sayilar[i] % 5 == 0)
//     console.log(sayilar[i])
    
// }

// let toplam = 0

// for(let i = 0; i<sayilar.length; i++){
//     if(sayilar[i] % 2 == 0)
//     toplam += sayilar[i]
// }
// console.log(toplam)

// let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"]

// for(let i=0 ; i<urunler.length ; i++){

//     yeni = urunler[i].toUpperCase()
//     console.log(yeni)
// }
// let toplam = 0
// for(let i=0; i<urunler.length;i++){

//     if(urunler[i].includes("samsung"))
//     toplam ++
// }
// console.log(toplam)

// let ogrenciler = [
//     {"ad":"yiğit","soyad":"bilgi","notlar":[60,70,60]},
//     {"ad":"ada","soyad":"bilgi","notlar":[80,70,80]},
//     {"ad":"çınar","soyad":"turan","notlar":[70,70,60]},
// ];

// function msg(message,adet){

//     for(let i =0; i<adet; i++){
//         console.log(message)
//     }
// }
// msg("selam",5);

// function hesapla(kısaKenar,uzunKenar){

//     let alan = kısaKenar * uzunKenar;
//     let cevre = (kısaKenar + uzunKenar)*2

//     console.log(`Diktörgenin alanı:${alan}, Çevresi:${cevre}`)
// }
// hesapla(10,15)

// function yaziTura() {
//     var rastgeleSayi = Math.random(); // 0 ile 1 arasında rastgele bir sayı oluşturur
//     if (rastgeleSayi < 0.5) {
//         return "Yazı";
//     } else {
//         return "Tura";
//     }
// }

// var sonuc = yaziTura();
// console.log("Atılan: " + sonuc); // "Yazı" veya "Tura" çıktısı alınır

// function bolenler(sayı){

//     var bolenler = []
//     for(let i=1; i<=sayı;i++){

//         if(sayı % i == 0){

//             bolenler.push(i)
//         }
//     }
//     console.log(bolenler)
// }
// bolenler(8)

function toplam(){
    let sonuc = 0;

    for(let i = 0; i<arguments.length;i++){

        sonuc += arguments[i];

    }
    return sonuc;
}

console.log(toplam(2,5,77))



















