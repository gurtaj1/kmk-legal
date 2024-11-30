export const formatPhoneNumber = (
  value: string,
  previousValue?: string
): string => {
  // Remove all non-digit characters
  const number = value.replace(/\D/g, "");

  // Don't format if deleting
  if (previousValue && value.length < previousValue.length) {
    return value;
  }

  // Handle different UK number formats
  if (number.startsWith("44")) {
    // International format
    if (number.length > 11) {
      return number
        .slice(0, 11)
        .replace(/(\d{2})(\d{2})(\d{3})(\d{4})/, "+$1 $2 $3 $4");
    }
  } else if (number.startsWith("0")) {
    // UK local format
    if (number.length >= 11) {
      return number.slice(0, 11).replace(/(\d{5})(\d{6})/, "$1 $2");
    }
  } else if (number.startsWith("7")) {
    // Mobile number without leading 0
    return "0" + number.slice(0, 10).replace(/(\d{5})(\d{5})/, "$1 $2");
  }

  return value;
};
