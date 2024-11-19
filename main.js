let names = prompt(`Ismingizni kiriting`);
let bigOrSmall = prompt(`Ismingizni Katta yoki Kichik qilmoqchimisiz? \n \n 1) Katta \n 2) Kichik`);

if (bigOrSmall == 1) {
    alert(names.toUpperCase());
} else if (bigOrSmall == 2) {
    alert(names.toLowerCase());
} else {
    alert(`Xatolik yuz berdi`);
}

let sorov = confirm(`${names} Ismingizda nechta harf bor ekanligini bilishni hoxlaysizmi?`);

if (sorov) {
    alert(`${names} ismingizda ${names.length} ta harf bor.`);
} else {
    alert(`Xatolik yuz berdi`);
}