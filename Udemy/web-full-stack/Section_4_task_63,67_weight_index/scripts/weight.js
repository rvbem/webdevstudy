var weight = prompt("Введите Ваш вес в килограммах");
var growth = prompt("Введите Ваш рост в метрах");
var age = prompt("Введите ваш возраст");

var weight_index = weight / (growth * growth);
if (age >= 18 && age < 26){
    if (weight_index < 17,5){var weight_index_decision = "Недостаточен, опасно для здоровья";}
    else if (weight_index >= 17,5 && weight_index < 19,5){var weight_index_decision = "Слегка снижен, неопасно для здоровья";}
    else if (weight_index >= 19,5 && weight_index < 22,9){var weight_index_decision = "Нормальный";}
    else if (weight_index >= 22,9 && weight_index < 27,4){var weight_index_decision = "Излишний";}
    else if (weight_index >= 27,4 && weight_index < 29,9){var weight_index_decision = "Ожирение 1 степени";}
    else if (weight_index >= 29,9 && weight_index < 34,9){var weight_index_decision = "Ожирение 2 степени";}
    else if (weight_index >= 34,9 && weight_index < 39,9){var weight_index_decision = "Ожирение 3 степени";}
    else {var weight_index_decision = "Ожирение 4 степени";};
} else if (age >= 26 && age < 47){
    if (weight_index < 18){var weight_index_decision = "Недостаточен, опасно для здоровья";}
    else if (weight_index >= 18 && weight_index < 20){var weight_index_decision = "Слегка снижен, неопасно для здоровья";}
    else if (weight_index >= 20 && weight_index < 25,9){var weight_index_decision = "Нормальный";}
    else if (weight_index >= 25,9 && weight_index < 27,9){var weight_index_decision = "Излишний";}
    else if (weight_index >= 27,9 && weight_index < 30,9){var weight_index_decision = "Ожирение 1 степени";}
    else if (weight_index >= 30,9 && weight_index < 35,9){var weight_index_decision = "Ожирение 2 степени";}
    else if (weight_index >= 35,9 && weight_index < 40,9){var weight_index_decision = "Ожирение 3 степени";}
    else {var weight_index_decision = "Ожирение 4 степени";};
} else {
    var weight_index_decision = "Нет данных для Вашего возраста";
};

alert(weight_index_decision);