/*- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.*/
function random_integers() {
    let arrayInt = [];
    for (let i = 0; i < 20; i++) {
        arrayInt[i] = Math.round(Math.random() * 100);
    }
    console.log(arrayInt);
}

random_integers();

/*- Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.*/
function random_integers2(min, max) {
    let arrayInt2 = [];
    for (let i = 0; i < 20; i++) {
        arrayInt2[i] = Math.round(Math.random() * max + min);
    }
    console.log(arrayInt2);
    return arrayInt2;
}

random_integers2(1, 10);
/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort*/
let aa = random_integers2(5, 50);
let integerSort = aa.sort((a, b) => {
    return a - b;
});
console.log(integerSort);
/*- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа*/
let bb = random_integers2(1, 100);
let integerFilter = bb.filter((x) => {
    return x % 2 === 0;
});
console.log(integerFilter);
/*- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.*/
let cc = random_integers2(3, 30);
let integerStr = cc.map(function (item) {
    return item + '';
});
console.log(integerStr);

/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone*/
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

/*створити пустий масив, наповнити його 10 об'єктами new User(....)*/
let users = [
    new User(8, 'Olia', 'Bilanyk', 'bilanyk@gmail.com', '0998877665'),
    new User(7, 'Maksym', 'Turkot', 'max34@gmail.com', '0978900865'),
    new User(10, 'Tetiana', 'Sampara', 'samt123@gmail.com', '0998879855'),
    new User(4, 'Ruslan', 'Chorney', 'rex666@gmail.com', '0953247661'),
    new User(1, 'Sofiya', 'Shabat', 'sonia777@gmail.com', '0664327665'),
    new User(6, 'Petro', 'Hryb', 'phryb@gmail.com', '0998002560'),
    new User(2, 'Iryna', 'Drozd', 'ira123d@gmail.com', '0975877665'),
    new User(5, 'Taras', 'Ohirok', 'taras2004@gmail.com', '0998019842'),
    new User(9, 'Anna', 'Lypka', 'anial1203@gmail.com', '0952947634'),
    new User(3, 'Ivan', 'Schur', 'boss10@gmail.com', '0997437800'),
];
console.log(users);
/*Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)*/
let userFilt = users.filter(function (user) {
    return user.id % 2 === 0;
});
console.log(userFilt);
let userSort = users.sort(function (u1, u2) {
    return u1.id - u2.id;
})
console.log(userSort);




