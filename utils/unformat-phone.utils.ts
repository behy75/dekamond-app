export const unformatPhoneNumber = (formatted: string): string => {
  return formatted.replace(/\D/g, "");
};
