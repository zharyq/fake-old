function removeSpacesAndCharacters(
  value,
  options = {
    symbol: "KZT",
    space: true,
  }
) {
  const result = value.replace(options.symbol, "");
  if (options.space) {
    return result.replace(" ", "").trim(); /* removing all spaces in string */
  }
  return result; /* not remove spaces */
}

function conversionToBalanceType(
  balance,
  options = {
    space: true,
    symbol: "KZT",
  }
) {
  if (!options.space) {
    return balance + options.symbol;
  }

  balance = String(balance).split("").reverse();
  let endResult = [];

  let counter = 1;
  balance.forEach((value) => {
    if (counter === 4 || counter === 7) {
      endResult.push(" ");
      endResult.push(String(value));
    } else {
      endResult.push(String(value));
    }
    counter += 1;
  });
  endResult = endResult.reverse().join("").trim() + options.symbol;

  return endResult;
}

export {
  removeSpacesAndCharacters,
  conversionToBalanceType,
};
