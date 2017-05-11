'use strict';

/**
 * See warrior.js for more on classes.
 */
module.exports = srcPath => {
  return {
    name: 'Scholar',
    description: 'Smart.',
    abilityTable: {
      // 5: { spells: ['fireball'] },
    },

    setupPlayer: player => {
      player.addAttribute('mana', 100);
      player.prompt = '[ %health.current%/%health.max% <b>hp</b> %mana.current%/%mana.max% <b>mana</b> ]\n>>';
    }
  };
};
