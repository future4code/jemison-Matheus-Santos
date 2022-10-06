const convertFahrenheitToCelsius = (fahrenheit) => {
   const celsius = parseFloat((fahrenheit - 32) / 1.8);

   return `${celsius}°C é equivalente a ${fahrenheit}°F.`;
};
console.log(convertFahrenheitToCelsius(50));

/* =============================================== */
const convertKelvinToCelsius = (Kelvin) => {
   const celsius = parseFloat(Kelvin - 273.15);

   return `${celsius}°C é equivalente a ${Kelvin}k.`;
};
console.log(convertKelvinTocelsius(1200));

/* =============================================== */
/* const tempConvert = (celsius, escala) => {
   let fahrenheit = celsius * 1.8 + 32;
   let kelvin = celsius + 273.15;

   if (isNaN(fahrenheit) || isNaN(celsius) || isNaN(kelvin)) {
      return console.log(`Erro. Parâmetro inválido (valor)`);
   } else if (
      escala == !"F" ||
      escala == !"f" ||
      escala == !"K" ||
      escala == !"k"
   ) {
      return console.log(`Erro. Parâmetro inválido (escala)`);
   }
};

tempConvert(); */
