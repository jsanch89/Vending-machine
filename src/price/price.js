const prices = {
  "Papas margaritas": 2300,
  "Chiclitos": 800,
}
exports.productPrice = (product) => {
  return prices[product];
}

exports.exchange = (product, pay) => {
  return pay - prices[product];
}