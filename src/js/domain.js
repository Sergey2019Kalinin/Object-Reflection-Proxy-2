class Character {
  constructor(name, type) {
    let characters = [
      "Bowerman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie"
    ];

    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя персонажа должно содержать от 2 до 10 символов.");
    } else if (!characters.includes(type)) {
      throw new Error(
        "Неверно указан тип персонажа. Доступные типы: Bowerman, Swordsman, Magician, Daemon, Undead, Zombie."
      );
    } else {
      this.name = name; // имя
      this.type = type; // тип
      this.health = 100; // уровень жизни
      this.level = 1; // уровень персонажа
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error("Нельзя повысить левел умершего.");
    }
  }

  damage(points) {
    let healthNow = this.health;
    healthNow -= points * (1 - this.defence / 100);

    if (healthNow > 0) {
      this.health = healthNow;
    } else {
      this.health = 0;
    }
  }
}

export default Character;
