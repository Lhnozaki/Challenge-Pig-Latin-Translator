class Translator {
  constructor() {
    this.vowel = /[aeiou]+/;
  }

  toPigLatin(str) {
    return str
      .split(" ")
      .map(e => {
        let index = e.indexOf(e.match(this.vowel));
        let word = e.substr(index) + `-${e.slice(0, index)}ay`;
        return word.includes(".") === true
          ? word.replace(".", "").concat(".")
          : word;
      })
      .join(" ");
  }

  toEnglish(str) {
    return str
      .split(" ")
      .map(e => {
        let index = e.indexOf(e.match(/-+/));
        let word = e
          .slice(index + 1, e.length)
          .replace("ay", "")
          .concat(e.slice(0, index));
        return word.includes(".") === true
          ? word.replace(".", "").concat(".")
          : word;
      })
      .join(" ");
  }
}

module.exports = Translator;
