export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "");
  const match = digits.match(/(\d{0,4})(\d{0,3})(\d{0,2})(\d{0,2})/);
  if (!match) return "";
  const [, part1, part2, part3, part4] = match;
  return [part1, part2, part3, part4].filter(Boolean).join("-");
};
