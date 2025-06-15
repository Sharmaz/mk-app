import colors from './colors';

function setColor (val) {
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

export default setColor;
