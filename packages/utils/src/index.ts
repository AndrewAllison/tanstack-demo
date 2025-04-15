export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === 'production';
};
