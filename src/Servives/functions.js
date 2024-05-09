function Price (price) {
    const arrayPrice = price.split("");
    arrayPrice.splice([price.length - 2], 0 , ".");
    const newPrice = arrayPrice.join("");
    return newPrice;
};

export {
    Price
}