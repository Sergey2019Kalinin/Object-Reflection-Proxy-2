import healthValue from '../js/app'

import {sortHeroes} from '../js/app'

import Character from "../js/domain";

import Bowerman from "../js/bowerman";

import Swordsman from "../js/swordsman";

import Magician from "../js/magician";

import Daemon from "../js/daemon";

import Undead from "../js/undead";

import Zombie from "../js/zombie";

import {sortProperties, specialsExtract} from '../js/app'


test('значение уровня жизни игрового персонажа - healthy', () => {

  const input = {name: 'Маг', health: 90};
  const expected = "healthy";
  const received = healthValue(input);

  expect(received).toBe(expected);
});

test('значение уровня жизни игрового персонажа - wounded', () => {

  const input = {name: 'Маг', health: 50};
  const expected = "wounded";
  const received = healthValue(input);

  expect(received).toBe(expected);
});

test('значение уровня жизни игрового персонажа - critical', () => {

  const input = {name: 'Маг', health: 14};
  const expected = "critical";
  const received = healthValue(input);

  expect(received).toBe(expected);
});

test('сортировка персонажей по уровню жизни - уровень первого больше', () => {

  const input = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const received = sortHeroes(input);

  expect(received).toEqual(expected);
});

test('сортировка персонажей по уровню жизни - уровень второго больше', () => {

  const input = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
  ];
  const expected = [
    {name: 'маг', health: 100},
    {name: 'мечник', health: 10},
  ];
  const received = sortHeroes(input);

  expect(received).toEqual(expected);
});

test('сортировка персонажей по уровню жизни - персонажи с одинаковым уровнем', () => {

  const input = [
    {name: 'мечник', health: 100},
    {name: 'маг', health: 100},
  ];
  const expected = [
    {name: 'мечник', health: 100},
    {name: 'маг', health: 100},
  ];
  const received = sortHeroes(input);

  expect(received).toEqual(expected);
});

test("соблюдение длины имени персонажа (от 2 до 10 символов) - менее 2 символов", () => {
  const input1 = "W";
  const input2 = "Bowerman";

  expect(() => {
    new Character(input1, input2);
  }).toThrowError(
    new Error("Имя персонажа должно содержать от 2 до 10 символов.")
  );
});

test("соблюдение длины имени персонажа (от 2 до 10 символов) - менее 2 символов", () => {
  const input1 = "WertuWertu6";
  const input2 = "Bowerman";

  expect(() => {
    new Character(input1, input2);
  }).toThrowError(
    new Error("Имя персонажа должно содержать от 2 до 10 символов.")
  );
});

test("соблюдение типа персонажа", () => {
  const input1 = "WertuWertu";
  const input2 = "Bowerman6";

  expect(() => {
    new Character(input1, input2);
  }).toThrowError(
    new Error(
      "Неверно указан тип персонажа. Доступные типы: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie."
    )
  );
});

test("правильность заполнения объекта класса Character", () => {
  const input1 = "WertuWertu";
  const input2 = "Bowerman";

  const expected = {
    name: "WertuWertu",
    type: "Bowerman",
    health: 100,
    level: 1
  };
  const received = new Character(input1, input2);

  expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Bowerman", () => {
  const input1 = "WertuWertu";

  const expected = {
    name: "WertuWertu",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };
  const received = new Bowerman(input1);

  expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Swordsman", () => {
  const input1 = "WertuWertu";

  const expected = {
    name: "WertuWertu",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };
  const received = new Swordsman(input1);

  expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Magician", () => {
  const input1 = "WertuWertu";

  const expected = {
    name: "WertuWertu",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };
  const received = new Magician(input1);

  expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Daemon", () => {
  const input1 = "WertuWertu";

  const expected = {
    name: "WertuWertu",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  };
  const received = new Daemon(input1);

  expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Undead", () => {
  const input1 = "WertuWertu";

  const expected = {
    name: "WertuWertu",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  };
  const received = new Undead(input1);

  expect(received).toEqual(expected);
});

test("правильность заполнения объекта класса Zombie", () => {
  const input1 = "WertuWertu";

  const expected = {
    name: "WertuWertu",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  };
  const received = new Zombie(input1);

  expect(received).toEqual(expected);
});

test("корректность метода повышения левела - невозможность повышения левела умершего", () => {
  const input1 = "TestMan";

  expect(() => {
    let testMan = new Bowerman(input1);
    testMan.health = 0;
    testMan.levelUp();
  }).toThrowError(new Error("Нельзя повысить левел умершего."));
});

test("корректность метода повышения левела - повышение значений характеристик персонажа", () => {
  const input1 = "TestMan";

  const expected = {
    name: "TestMan",
    type: "Bowerman",
    health: 100,
    level: 2,
    attack: 30,
    defence: 30
  };

  const received = new Bowerman(input1);
  received.levelUp();

  expect(received).toEqual(expected);
});

test("корректность метода нанесения урона персонажу - 1", () => {
  const input1 = "TestMan";

  const expected = {
    name: "TestMan",
    type: "Bowerman",
    health: 0,
    level: 1,
    attack: 25,
    defence: 25
  };

  const received = new Bowerman(input1);
  received.health = 10;
  received.damage(100);

  expect(received).toEqual(expected);
});

test("корректность метода нанесения урона персонажу - 2", () => {
  const input1 = "TestMan";

  const expected = {
    name: "TestMan",
    type: "Bowerman",
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25
  };

  const received = new Bowerman(input1);
  received.health = 100;
  received.damage(10);

  expect(received).toEqual(expected);
});

test("сортировка свойств объектов персонажей согласно данному массиву", () => {
  const input1 = new Bowerman("TestMan");
  const input2 = ["name", "level"]; // sortArray, данный в условии

  const expected = {
    name: "TestMan",
    level: 1,
    type: "Bowerman",
    health: 100,
    attack: 25,
    defence: 25
  };

  const received = sortProperties(input1, input2);

  expect(received).toEqual(expected);
});

test("сортировка свойств объектов персонажей согласно данному массиву", () => {
  const input1 = new Swordsman("TestMan");
  const input2 = ["name", "level"]; // sortArray, данный в условии

  const expected = {
    name: "TestMan",
    level: 1,
    type: "Swordsman",
    health: 100,
    attack: 40,
    defence: 10
  };

  const received = sortProperties(input1, input2);

  expect(received).toEqual(expected);
});

test("сортировка свойств объектов персонажей согласно данному массиву", () => {
  const input1 = new Magician("TestMan");
  const input2 = ["name", "level"]; // sortArray, данный в условии

  const expected = {
    name: "TestMan",
    level: 1,
    type: "Magician",
    health: 100,
    attack: 10,
    defence: 40
  };

  const received = sortProperties(input1, input2);

  expect(received).toEqual(expected);
});

test("сортировка свойств объектов персонажей согласно данному массиву", () => {
  const input1 = new Daemon("TestMan");
  const input2 = ["name", "level"]; // sortArray, данный в условии

  const expected = {
    name: "TestMan",
    level: 1,
    type: "Daemon",
    health: 100,
    attack: 25,
    defence: 25
  };

  const received = sortProperties(input1, input2);

  expect(received).toEqual(expected);
});

test("сортировка свойств объектов персонажей согласно данному массиву", () => {
  const input1 = new Undead("TestMan");
  const input2 = ["name", "level"]; // sortArray, данный в условии

  const expected = {
    name: "TestMan",
    level: 1,
    type: "Undead",
    health: 100,
    attack: 40,
    defence: 10
  };

  const received = sortProperties(input1, input2);

  expect(received).toEqual(expected);
});

test("Destructuring", () => {
  const input1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
    }
  ] 
};

  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    }, 
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно'
    }
  ];

  const received = sortProperties(input1);

  expect(received).toEqual(expected);
});