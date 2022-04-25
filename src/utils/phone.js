function phoneConversion(phone = "87474446622") {
  phone = [...phone.split("")];
  if (phone[0] === "8") phone[0] = "+7";
  phone = phone.join("");

  phone = [...phone.split("")];
  const newArray = [];

  function addBracket(index) {
    if (index === 2) newArray.push(" (");
    else if (index === 5) newArray.push(") ");
  }
  function addLine(index) {
    if (index === 8 || index === 10) newArray.push("-");
  }

  phone.forEach((value, index) => {
    addBracket(index);
    addLine(index);
    newArray.push(value);
  });
  return newArray.join("");
}

export { phoneConversion };
