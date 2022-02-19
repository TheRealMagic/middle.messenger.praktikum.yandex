const symbols = [
  ".",
  "-",
];

function trim(value: string, chars: string = " ") {
  const uniqueChars: Set<string> = new Set<string>();
  chars.split("").forEach((item: string) => {
    if (symbols.indexOf(item) < 0) {
      uniqueChars.add(item);
    } else {
      uniqueChars.add(`\\${item}`);
    }
  });
  if (!uniqueChars.has(" ")) {
    uniqueChars.add("\\s");
  }
  const regExp = `(?<=^)[${Array.from(uniqueChars).join("")}]+|[${Array.from(uniqueChars).join("")}]+(?=$)`;
  const reg = new RegExp(regExp, "gi");
  return value.replace(reg, "");
}

export default trim;
