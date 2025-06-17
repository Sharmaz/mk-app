import chalk from "chalk";

export const colors = {
  backend: chalk.hex('#3677FF'),
  frontend: chalk.hex('#6DC6FE'),
  vanilla: chalk.hex('#EEC900'),
  react: chalk.hex('3B89E0'),
  typescript: chalk.hex('30B3ED'),
  ok: chalk.hex('30ED86'),
  error: chalk.hex('ED3066'),
  info: chalk.hex('42ECDE'),
  gray: chalk.hex('#686868'),
  vue: chalk.hex('54E6A5'),
  warn: chalk.hex('#EC9942'),
  webpack: chalk.hex('#75AFCC'),
  node: chalk.hex('#417E38'),
  rust: chalk.hex('#D34516'),
  experimental: chalk.hex('#FA2200'),
};

export function separator(title) {
  const padding = 22;
  const strlen = title.length;
  const gutter = padding - strlen;

  return chalk.reset(colors.gray(`${' '.repeat(gutter)}|${' '.repeat(2)}`));
}

export function setColor (val) {
  const valSplit = val.split(' ');

  if (val === 'Frontend') { return colors.frontend(val); }
  if (val === 'Backend') { return colors.backend(val);}
  if (val === 'VanillaJS') { return colors.vanilla(val);}
  if (val === 'NodeJS') { return colors.node(val);}
  if (valSplit.includes('Node')) { return colors.node(val); }
  if (valSplit.includes('JavaScript')) { return colors.react(val); }
  if (valSplit.includes('TypeScript')) { return colors.typescript(val); }
  if (valSplit.includes('React')) { return colors.react(val); }
  if (valSplit.includes('TypeScript')) { return colors.typescript(val); }

  return (val)
};

export function setUnderlineOff(val) {
  return chalk.reset(val);
}
