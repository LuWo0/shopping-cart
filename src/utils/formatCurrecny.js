const FORMAT = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
});

export const formatCurrency = (price) => {
    return FORMAT.format(price);
}