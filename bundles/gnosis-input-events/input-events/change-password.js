'use strict';

/**
 * MOTD event
 */
module.exports = (srcPath) => {
  const EventUtil = require(srcPath + 'EventUtil');

  return {
    event: state => (socket, args) => {
      const say = EventUtil.genSay(socket);
      const write = EventUtil.genWrite(socket);

      say("PASSWORD MUST CONTAIN AT LEAST 8 CHARACTERS.");
      write('NEW PASSWORD: ');

      socket.toggleEcho();
      socket.once('data', pass => {
        socket.toggleEcho();
        say('');

        pass = pass.toString().trim();

        if (!pass) {
          say('<red>PASSWORD REQUIRED.</red>');
          return socket.emit('change-password', socket, args);
        }

        if (pass.length < 8) {
          say('<red>PASSWORD TOO SHORT.</red>');
          return socket.emit('change-password', socket, args);
        }

        // setPassword handles hashing
        args.account.setPassword(pass);
        state.AccountManager.addAccount(args.account);
        args.account.save();

        socket.emit('confirm-password', socket, args);
      });
    }
  };
};
