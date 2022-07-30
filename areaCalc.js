const args = process.argv.slice(2);

const areaOfCircle = (radius) => {
  const _area = radius ** 2 * Math.PI;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${_area.toFixed(2)}`);
};

areaOfCircle(args[0] * 1);
