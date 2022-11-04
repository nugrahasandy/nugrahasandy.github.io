function addRow(){
    let table = document.getElementById("IsiTabel");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let nama = document.getElementById('exampleInputNama').value;
    let umur = document.getElementById('exampleInputUmur').value;
    cell1.innerHTML = nama;
    cell2.innerHTML = umur;
}

function deleteRow(){
    document.getElementById('IsiTabel').deleteRow(0);
}

fetch('https://kipi.covid19.go.id/api/get-faskes-vaksinasi')
.then(response => response.json())
.then(data => bacaDataVaksin(data));

function bacaDataVaksin(data){
    console.log(data['data']);
        let table = document.getElementById("IsiTabelCovid");

        data['data'].forEach(element => {
            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let nama_kode = element['kode'];
            let nama_kecamatan = element['nama'];
            let nama_kabkot = element['kota'];
            let nama_provinsi = element['provinsi'];
            let nama_status = element['status'];
            cell1.innerHTML = nama_kode;
            cell2.innerHTML = nama_kecamatan;
            cell3.innerHTML = nama_kabkot;
            cell4.innerHTML = nama_provinsi;
            cell5.innerHTML = nama_status;
            
        });     
    }
