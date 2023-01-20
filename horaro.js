function horaro() {
	d = new Date;
	horo = d.getUTCHours() - 5;
	minutoj = d.getUTCMinutes();
	sekundoj = d.getUTCSeconds();
	if (horo < 23) {
		horo = 24 + horo;
	}
	if (horo > 23) {
		horo = horo - 24;	
	}
	if (horo == 6 & minutoj == 0) {
		horarotxt.innerText = "Nun elsendiĝas: Nacia Himno"
	}
	if (horo == 6 & minutoj == 1 & sekundoj == 58) {
		horarotxt.innerText = "Nun elsendiĝas: Karikaturoj"
	}
	if (horo == 6 & minutoj == 1 & sekundoj == 59) {
		horarotxt.innerText = "Nun elsendiĝas: Karikaturoj"
	}
	if (horo == 6 & minutoj >= 2) {
		horarotxt.innerText = "Nun elsendiĝas: Karikaturoj"
	}
	if (horo == 7) {
		horarotxt.innerText = "Nun elsendiĝas: Karikaturoj"
	}
	if (horo == 9) {
		horarotxt.innerText = "Nun elsendiĝas: Vetero kaj Novaĵoj"
	}
	if (horo == 10) {
		horarotxt.innerText = "Nun elsendiĝas: Eduka Programado"
	}
	if (horo == 12) {
		horarotxt.innerText = "Nun elsendiĝas: Vetero kaj Novaĵoj"
	}
	if (horo == 13) {
		horarotxt.innerText = "Nun elsendiĝas: Ĝenerala Programado"
	}
	if (horo == 15) {
		horarotxt.innerText = "Nun elsendiĝas: Karikaturoj"
	}
	if (horo == 16) {
		horarotxt.innerText = "Nun elsendiĝas: Ĝenerala Programado"
	}
	if (horo == 18) {
		horarotxt.innerText = "Nun elsendiĝas: Vetero kaj Novaĵoj"
	}
	if (horo == 19) {
		horarotxt.innerText = "Nun elsendiĝas: Ĝenerala Programado"
	}
	if (horo == 20) {
		horarotxt.innerText = "Nun elsendiĝas: Karikaturoj"
	}
	if (horo == 21 & minutoj == 0) {
		horarotxt.innerText = "Nun elsendiĝas: Nacia Himno"
	}
	if (horo == 21 & minutoj == 1 & sekundoj == 58) {
		horarotxt.innerText = "Nun elsendiĝas: For aero"
	}
	if (horo == 21 & minutoj == 1 & sekundoj == 59) {
		horarotxt.innerText = "Nun elsendiĝas: For aero"
	}
	if (horo == 21 & minutoj >= 2) {
		horarotxt.innerText = "Nun elsendiĝas: For aero"
	}
	if (horo == 22) {
		horarotxt.innerText = "Nun elsendiĝas: For aero"
	}
}
