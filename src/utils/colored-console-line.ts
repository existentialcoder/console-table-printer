import { COLOR } from './table-constants';

const COLOR_MAP: {
  [key in COLOR]?: string;
} = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  crimson: '\x1b[38m',
  white_bold: '\x1b[01m',
  reset: '\x1b[0m',
};

export default class ColoredConsoleLine {
  text: string;

  constructor() {
    this.text = '';
  }

  addWithColor(color: COLOR, text: string) {
    this.text += color && COLOR_MAP[color];
    this.text += text;
    this.text += COLOR_MAP.reset;
  }

  printConsole(): string {
    console.log(this.text);
    return this.text;
  }
}
