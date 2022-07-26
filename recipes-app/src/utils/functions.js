export const getDescription = (description) =>
  description.replace(/<\/?[^>]+(>|$)/g, "");
