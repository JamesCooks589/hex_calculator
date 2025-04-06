// Stub for hex input validation
export const isValidHex = (hex) => {
  return /^[0-9A-Fa-f]{1,2}$/i.test(hex); // Case-insensitive regex
};