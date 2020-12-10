alert("Selamat Datang!")

let navbar = document.getElementById('navbar')
navbar.style.display = "flex"
navbar.style.width = "100%"
navbar.style.height = "70px"
navbar.style.boxShadow = "0px 0px 6px 0px black"
navbar.style.backgroundColor = "#4E85E3"

let logo = document.getElementById('logo')
logo.style.marginLeft = "20px"
logo.style.color ="white"

let logo1 = document.getElementById('logo1')
logo1.style.fontSize = "30px"
logo1.style.marginTop = "6px"

let logo2 = document.getElementById('logo2')
logo2.style.fontSize = "22px"
logo2.style.marginTop = "-10px"
logo2.style.marginLeft = "20px"

let navbar1 = document.getElementById('navbar1')
navbar1.style.marginTop = "1.5%"
navbar1.style.marginLeft = "50%"
navbar1.style.fontSize = "18px"

let main = document.getElementById('main')
main.style.display = "flex"

let poster = document.getElementById('poster')
poster.style.marginTop = "8%"
poster.style.marginLeft = "4%"

let form = document.getElementById('form')
form.style.display = "flex"

let judul = document.getElementById('judul')
judul.style.fontSize = "27px"
judul.style.marginLeft = "20px"
judul.style.marginTop = "10%"
judul.style.color = "#4E85E3"

let inputan = document.getElementById('inputan')
inputan.style.marginTop = "22%"
inputan.style.marginLeft = "-340px"

let nasabah = document.getElementById('nasabah')
nasabah.style.marginTop = "6px"
nasabah.style.marginLeft = "20px"
nasabah.style.width = "360px"
nasabah.style.height = "30px"
nasabah.style.backgroundColor = "#eaeaea"
nasabah.style.border = "none"

let tanggal = document.getElementById('tanggal')
tanggal.style.marginTop = "6px"
tanggal.style.marginLeft = "20px"
tanggal.style.width = "360px"
tanggal.style.height = "30px"
tanggal.style.backgroundColor = "#eaeaea"
tanggal.style.border = "none"

let jenisp = document.getElementById('jenisp')
jenisp.style.marginLeft = "20px"
jenisp.style.marginTop = "6px"
jenisp.style.width = "360px"
jenisp.style.height = "30px"
jenisp.style.backgroundColor = "#eaeaea"
jenisp.style.border = "none"

let besar = document.getElementById('besar')
besar.style.marginLeft = "20px"
besar.style.marginTop = "6px"
besar.style.width = "360px"
besar.style.height = "30px"
besar.style.backgroundColor = "#eaeaea"
besar.style.border = "none"

let button = document.getElementById('button')
button.style.marginTop = "20px"
button.style.marginLeft = "30%"
button.style.width = "190px"
button.style.height = "30px"
button.style.backgroundColor = "#4E85E3"
button.style.fontSize = "17px"
button.style.color = "#ffffff"
button.style.border = "none"

let tabeldata = document.getElementById('tabeldata')
tabeldata.style.backgroundColor = "#4E85E3"
tabeldata.style.position = "absolute"
tabeldata.style.top = "680px"
tabeldata.style.width = "1360px"
tabeldata.style.height = "680px"
tabeldata.style.backgroundSize = "cover"

let judult = document.getElementById('judult')
judult.style.textAlign = "center"
judult.style.paddingTop = "5%"
judult.style.color = "white"

let tabel = document.getElementById('tabel')
tabel.style.textAlign = "center"
tabel.style.marginTop = "3%"
tabel.style.marginLeft = "30%"

let inputtabel = document.getElementById('inputtabel')
inputtabel.style.marginLeft = "-12%"
inputtabel.style.width = "800px"
inputtabel.style.borderCollapse = "collapse"

function terimainput()
{
    var nasabah = document.getElementById("nasabah");
    var tanggal = document.getElementById("tanggal");
    var jenisp = document.getElementById("jenisp");
    var besar = document.getElementById("besar");

    if(nasabah.value == "")
        {
            alert("Masukkan Id Nasabah!");
            nasabah.fokus();
        }
    else if(tanggal.value == "")
        {
            alert("Masukkan Tanggal Pengajuan!");
            tanggal.fokus();
        }
    else if(jenisp.value == "")
        {
            alert("Masukkan Jenis Pinjaman!");
            jenisp.fokus();
        }
    else if(besar.value == "")
        {
            alert("Masukkan Besar Pinjaman!");
            besar.fokus();
        }

    var nasabah = document.forms["formPengajuan"]["nasabah"].value;
    var tanggal = document.forms["formPengajuan"]["tanggal"].value;
    var jenisp = document.forms["formPengajuan"]["jenisp"].value;
    var besar = document.forms["formPengajuan"]["besar"].value;

    var tabel = document.getElementById("inputtabel");
    var row = inputtabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = nasabah;
    cell2.innerHTML = tanggal;
    cell3.innerHTML = jenisp;
    cell4.innerHTML = besar;

    alert("Data Berhasil Ditambahkan!")
}




