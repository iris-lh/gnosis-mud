'use strict';

const B = require('./Broadcast');

class Helpfile {
  constructor(bundle, name, options) {
    this.bundle = bundle;
    this.name = name;

    if (!options || !options.body) {
      throw new Error(`Help file [${name}] has no content.`);
    }

    this.keywords = options.keywords || [name];
    this.command = options.command;
    this.channel = options.channel;
    this.related = options.related || [];
    this.body = options.body;
  }

  render(state) {
    let body = this.body;
    const name = this.name;

    const width = 80;
    const bar = B.line(width, '-', 'yellow') + '\r\n';

    let header = bar + B.center(width, name, 'white') + '\r\n' + bar;

    const formatHeaderItem = (item, value) => `${item}: ${value}\r\n\r\n`;
    if (this.command) {
      let actualCommand = state.CommandManager.get(this.command);

      header += formatHeaderItem('Syntax', actualCommand.usage);

      if (actualCommand.aliases && actualCommand.aliases.length > 0){
        header += formatHeaderItem('Aliases', actualCommand.aliases.join(', '));
      }
    } else if (this.channel) {
      header += formatHeaderItem('Syntax', state.ChannelManager.get(this.channel).getUsage());
    }

    let footer = bar;
    if (this.related.length) {
      footer = B.center(width, 'RELATED', 'yellow', '-') + '\r\n';
      const related = this.related.join(', ');
      footer += B.center(width, related) + '\r\n';
      footer += bar;
    }

    return header + B.wrap(this.body, 80) + footer;
  }
}

module.exports = Helpfile;
