import Character from "./domain";

import Bowerman from "./bowerman";

import Swordsman from "./swordsman";

import Magician from "./magician";

import Daemon from "./daemon";

import Undead from "./undead";

import Zombie from "./zombie";

class Game {
  start() {
    console.log("game started");
  }
}

class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}

export default Character;

export {
	readGameSaving,
	writeGameSaving,
	Game,
	GameSavingData,
	Bowerman,
	Swordsman,
	Magician,
	Daemon,
	Undead,
	Zombie
};