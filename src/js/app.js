const game = new Game();
game.start();

import {
  Game,
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame
} from "./game.js";

export default function healthValue(healthObj) {
  if (Number(healthObj.health) > 50) {
    return "healthy";
  } else if (50 >= Number(healthObj.health) && Number(healthObj.health) >= 15) {
    return "wounded";
  } else if (Number(healthObj.health) < 15) {
    return "critical";
  }
}

function sortHeroes(heroesArray) {
  return heroesArray.sort(function (a, b) {
    if (a.health < b.health) {
      return 1;
    }

    if (a.health > b.health) {
      return -1;
    }

    return 0;
  });
}

export { sortHeroes };

function sortProperties(obj, sortArray) {
  const newObj = {};

  for (let i = 0; i < sortArray.length; i++) {
    if (sortArray[i] in newObj) {
      newObj.sortArray[i] = obj.sortArray[i];
      delete obj.sortArray[i];
    }
  }

  let propertiesArray = Object.keys(obj);

  let alphabetPropertiesArray = propertiesArray.sort(function (a, b) {
    if (a[0] > b[0]) {
      return 1;
    }

    if (a[0] < b[0]) {
      return -1;
    }

    return 0;
  });

  for (let k = 0; k < alphabetPropertiesArray.length; k++) {
    newObj[alphabetPropertiesArray[k]] = obj[alphabetPropertiesArray[k]];
  }

  return newObj;
}

export {sortProperties};

function specialsExtract(object) {
	const {special, ...newObj} = obj;
	for (let i = 0; i < special.length; i++) {
		 if (!("description" in special[i])) {
		 	special[i].description = 'Описание недоступно';
		 }
	}
	return special;
}

export {specialsExtract}
