// Sukurkite klasę, skirtą darbui su spalvomis, pagrindinių spalvos kodų gavimui norimais formatais bei dviejų spalvų sujungimui. klasė Color turės:
// privačius laukus:
// red, green, blue; - (sveikųjų skaičių reikšmės nuo 0 iki 255);
// Konstruktorių: sukuriamas objektas iš RGB reikšmių; Jei bent viena paduodama reikšmė yra didesnė nei 255 arba mažesnė nei 0, išmesti error pasinaudojant:
// throw new Error(‘Blogos reikšmės’);

// Geterius:
// a. rgb - gražinantis RGB spalvos kodą, kaip string reikšmę
// b. hsl - gražinantis HSL spalvos kodą, kaip string reikšmę
// c. hex - gražinantis HEX spalvos kodą, kaip string reikšmę

class Color {
  #red;
  #blue;
  #green;
  constructor(red, green, blue) {
    if (
      red > 255 ||
      green > 255 ||
      blue > 255 ||
      red < 0 ||
      green < 0 ||
      blue < 0
    ) {
      throw new Error("Red, green, blue values must be between 0 and 255");
    } else {
      this.#red = red;
      this.#green = green;
      this.#blue = blue;
    }
  }
  get rgb() {
    return `rgb(${this.#red}, ${this.#green}, ${this.#blue})`;
  }
  get hsl() {
    return `hsl(${this.#red}, ${this.#green}, ${this.#blue})`;
  }
  get hex() {
    return `#${this.#red}${this.#green}${this.#blue}`;
  }
}

const color = new Color(255, 220, 10);

console.log(color.rgb);
console.log(color.hsl);
console.log(color.hex);

// Sukurti klasę ColorPalette, kuri turi:
// Statinius geterius, grąžinsiančius Color Objektą:
// WHITE
// BLACK
// BROWN
// PINK
// RED
// ORANGE
// YELLOW
// GREEN
// CYAN
// BLUE
// PURPLE
// Statinį metodą, kuris sujungia dvi spalvas - gražina Color objektą

class ColorPalette {
  WHITE = new Color(255, 255, 255);
  BLACK = new Color(0, 0, 0);
  BROWN = new Color(165, 42, 42);
  PINK = new Color(255, 192, 203);
  RED = new Color(255, 0, 0);
  ORANGE = new Color(255, 165, 0);
  YELLOW = new Color(255, 255, 0);
  GREEN = new Color(0, 255, 0);
  CYAN = new Color(0, 255, 255);
  BLUE = new Color(0, 0, 255);
  PURPLE = new Color(128, 0, 128);
  constructor() {
    this.colors = [
      this.WHITE,
      this.BLACK,
      this.BROWN,
      this.PINK,
      this.RED,
      this.ORANGE,
      this.YELLOW,
      this.GREEN,
      this.CYAN,
      this.BLUE,
      this.PURPLE,
    ];
  }
  static combineColors(color1, color2) {
    // Combine the RGB values of two colors
    const combinedRed = Math.round((color1.red + color2.red) / 2);
    const combinedGreen = Math.round((color1.green + color2.green) / 2);
    const combinedBlue = Math.round((color1.blue + color2.blue) / 2);

    // Create a new Color object with the combined RGB values
    return new Color(combinedRed, combinedGreen, combinedBlue);
  }
}

const Red = new Color(255, 0, 0);
const Green = new Color(0, 255, 0);

const colorPalette = new ColorPalette.combineColors(Red, Green);

console.log(colorPalette.rgb);
