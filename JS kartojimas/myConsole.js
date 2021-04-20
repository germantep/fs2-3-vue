'use strict';
module.exports = {
  log: (headerText, varOrFunction, ...args) => {
    const header = '--- ' + headerText + ' ---';
    console.group(header);
    if (varOrFunction instanceof Function) {
      const returnValue = varOrFunction(...args);
      if (returnValue !== undefined)
        console.log(returnValue);
    }
    else
      console.log(varOrFunction);
    console.groupEnd();
    console.log('-'.repeat(header.length) + '\n')
  }
}