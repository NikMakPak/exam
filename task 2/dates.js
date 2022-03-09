function getDayInfo(time) {
    let arr = time.split(".");
    arr = [arr[2], arr[1], arr[0]];
    time = arr.join("-");
    let date = new Date(time);

    let mnth = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря"
    ];

    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];

    console.log(
        `${days[date.getDay()]}, ${Math.ceil(arr[2] / 7)} неделя ${
        mnth[date.getMonth()]
      } ${date.getFullYear()} года.`
    );
}

getDayInfo("1.1.2022"); // Суббота, 1 неделя января 2022 года.