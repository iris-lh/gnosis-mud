'use strict';

module.exports = srcPath => {
  const Broadcast = require(srcPath + 'Broadcast');
  const Flag = require(srcPath + 'EffectFlag');

  return {
    config: {
      name: 'Drug Buff',
      type: 'drug.buff',
    },
    flags: [Flag.BUFF],
    state: {
      stat: "strength",
      magnitude: 1
    },
    modifiers: {
      attributes: function (attribute, current) {
        if (attribute !== this.state.stat) {
          return current;
        }

        return current + this.state.magnitude;
      }
    },
    listeners: {
      effectActivated: function () {
        Broadcast.sayAt(this.target, "You inject the syringe and feel stronger!");
      },

      effectDeactivated: function () {
        Broadcast.sayAt(this.target, "You feel less powerful.");
      }
    }
  };
};
