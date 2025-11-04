function checkForm() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const age = document.getElementById("age").value.trim();
    const email = document.getElementById("email").value.trim();
    const language = document.getElementById("language").value;
    const os = document.querySelector('input[name="os"]:checked');
    const level = document.querySelector('input[name="level"]:checked');
    const likes = document.querySelectorAll('input[name="like"]:checked');
    const hours = document.getElementById("hours").value.trim();
    const editor = document.getElementById("editor").value;
    const about = document.getElementById("about").value.trim();
    const errorMsg = document.getElementById("errorMsg");
    let errors = "";

    if (!name) errors += "⚠️ Введіть ім'я (без 'admin').<br>";
    if (!surname) errors += "⚠️ Введіть прізвище.<br>";
    if (!age) errors += "⚠️ Скільки вам років, програміст?<br>";
    if (!email) errors += "⚠️ Вкажіть Email (обіцяємо не надсилати спам).<br>";
    if (!language) errors += "⚠️ Оберіть мову, яка змушує вас не спати вночі.<br>";
    if (!os) errors += "⚠️ Оберіть операційну систему (надія на Linux?).<br>";
    if (!level) errors += "⚠️ Оберіть рівень досвіду.<br>";
    if (likes.length === 0) errors += "⚠️ Оберіть хоча б одну сферу інтересу.<br>";
    if (!hours) errors += "⚠️ Скільки годин ви живете в коді?<br>";
    if (!editor) errors += "⚠️ Оберіть улюблений редактор коду.<br>";
    if (!about) errors += "⚠️ Напишіть кілька слів про себе.<br>";

    if (errors) {
        errorMsg.innerHTML = errors;
        return false;
    }

    alert("🎉 Анкета прийнята! Тепер HR знатиме, що ви не боїтеся нуля в масиві!");
    errorMsg.innerHTML = "";
    return false; 
}
