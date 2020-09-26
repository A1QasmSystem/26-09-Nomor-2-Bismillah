var nilaiSantri = [50, 90, 65, 67, 89, 80, 50, 97, 84];

var total = 0;
var bykNilai = nilaiSantri.length;

for (i = 0; i < bykNilai; i++) {
  total += nilaiSantri[i];
}

document.write(total / bykNilai);
