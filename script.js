

function Date_diff_from_now(text) {
    var currentDate = new Date();
    const [day, month, year] = text.split('.');
    var currentYear = currentDate.getFullYear();

    var date1 = new Date(currentYear, +month - 1, +day);

    if (isNaN(date1)) {
        return "Invalid date format. Please use 'dd.mm.yyyy' format.";
    }

    var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

function checkBirthdays() {
    var birthdaysArr = []
    birthdaysArr[0] = {
        Friend: "Tina",
        Date: "11.11.2003",
        Phone: "+38000000000"
    };
    birthdaysArr[1] = {
        Friend: "John",
        Date: "15.11.2004",
        Phone: "+38099999999"
    };
    birthdaysArr[2] = {
        Friend: "Bobby",
        Date: "08.11.2006",
        Phone: "+38077777777"
    }
    birthdaysArr[3] = {
        Friend: "Alice",
        Date: "11.11.2003"
    }

    var table = document.getElementById("birthdayTable");

    // Очистити попередні рядки таблиці перед додаванням нових
    table.innerHTML = "<tr><th>Ім'я</th><th>Дата народження</th><th>Телефон</th><th>Повідомлення</th></tr>";

    for (var i = 0; i < birthdaysArr.length; i++) {
        var row = table.insertRow(-1);
        var nameCell = row.insertCell(0);
        var dateCell = row.insertCell(1);
        var phoneCell = row.insertCell(2);
        var messageCell = row.insertCell(3);

        nameCell.innerHTML = birthdaysArr[i].Friend;
        dateCell.innerHTML = birthdaysArr[i].Date;
        phoneCell.innerHTML = birthdaysArr[i].Phone || '<span style="color: red;">Немає телефону</span>';

        var diffDays = Date_diff_from_now(birthdaysArr[i].Date);
        if (diffDays === 3) {
            messageCell.innerHTML = "Відправити листівку!";
        } else if (diffDays === 1) {
            messageCell.innerHTML = "Подзвонити та привітати!";
        } else {
            messageCell.innerHTML = "";
        }
    }
}

