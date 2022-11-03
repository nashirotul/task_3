const judul = document.getElementById('judul');
judul.innerHTML = 'Nashirotul Maftuha';
judul.style.backgroundColor = 'lightblue';
sepeda.style.backgroundColor = '#bce5f7';
motor.style.backgroundColor = '#bce5f7';

const mysepeda = document.getElementById('sepeda');
const mymotor = document.getElementById('motor');

function TentangSaya(){
    sepeda.innerHTML="Saya Nashirotul Maftuha salah satu mahasiswi prodi Teknik Informatika di Institut Teknologi Sumatera. Saya menyukai hal baru dan menantang di kehidupan saya. Semester 5 ini, saya mengambil matakuliah kewirausahaan, dimana ada tugas besar yaitu membuat usasa di sekitar ITERA. Kelompok saya membuat usaha dengan nama Frooties, yang mana bergerak di bidang makanan sehat berbahan baku buah-buahan segar.";

}
function DataDiri(){
    motor.innerHTML='Nama : Nashirotul Maftuha NIM : 120140031 Email : nashirotul.120140031@student.itera.ac.id';
}

mysepeda.addEventListener("click", TentangSaya);
mymotor.addEventListener("click", DataDiri);