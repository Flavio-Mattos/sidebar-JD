// LOADING INÍCIO
// Simule o carregamento da página (pode ser substituído pelo seu código real de carregamento)
document.addEventListener('DOMContentLoaded', function () {
	// Simula um atraso de 1 segundo para carregamento (substitua pelo seu código real)
	setTimeout(function () {
		document.getElementById('preloader').style.display = 'none';
		document.getElementById('main-content').style.display = 'block';
	}, 1300);
});
// LOADING FIM

//SIDE BAR INÍCIO
let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');

btn.onclick = function () {
	sidebar.classList.toggle('active');
};
// SIDEBAR FIM
