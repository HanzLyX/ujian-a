function simpan(){
    const nama = document.getElementById("nama");
    const status = document.getElementById("status");
    const barang = document.getElementById("inputBarang");
    const satuan = parseFloat(document.getElementById("inputSatuan").value);
    const jumlah = parseFloat(document.getElementById("inputJumlah").value);
    const subtotal = parseFloat(document.getElementById("subTotal").value);
    const diskon = parseFloat(document.getElementById("diskon").value);


    if (isNaN(nama)){
        alert("Data Tidak Boleh Kosong")
        return;
    }
    let hasil = "";
    hasil = satuan * jumlah;
    document.getElementById("subTotal").innerText = hasil;
}