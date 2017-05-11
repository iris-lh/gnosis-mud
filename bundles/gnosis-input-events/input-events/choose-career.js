'use strict';

/**
 * Player career selection event
 */
module.exports = (srcPath) => {
  const Broadcast = require(srcPath + 'Broadcast');
  const EventUtil = require(srcPath + 'EventUtil');
  const Config     = require(srcPath + 'Config');

  return {
    event: state => (socket, args) => {
      const say = EventUtil.genSay(socket);
      const write  = EventUtil.genWrite(socket);

      /*
      Player selection menu:
      * Can select existing player
      * Can create new (if less than 3 living chars)
      */
      say('  Pick your career');
      say(' --------------------------');
      const careers = [...state.CareerManager].map(([id, instance]) => {
        return [id, instance.config];
      });
      for (const [ id, config ] of careers) {
        say(`[<bold>${id}</bold>] - <bold>${config.name}</bold>`);
        say(Broadcast.wrap(`      ${config.description}\r\n`, 80));
      }
      write('> ');

      socket.once('data', choice => {
        choice = choice.toString().trim();
        choice = careers.find(([id, config]) => {
          return id.includes(choice) || config.name.toLowerCase().includes(choice);
        });

        if (!choice) {
          return socket.emit('choose-career', socket, args);
        }

        args.playerCareer = choice[0];
        socket.emit('finish-player', socket, args);
      });
    }
  };
};
