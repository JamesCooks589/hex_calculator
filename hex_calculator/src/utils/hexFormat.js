export const formatHexOutput = (raw) => {
    const cleaned = raw.toUpperCase().replace(/[^0-9A-F]/g, '');
    return cleaned.slice(-4).padStart(4, '0'); // Truncate & pad
  };