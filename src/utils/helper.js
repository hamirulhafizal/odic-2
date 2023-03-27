const slugify = (str) => {
  str
    ?.toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return str;
};

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const filterByCategory = (param, objArray) => {
  return objArray.filter((item) => {
    return item.category == param;
  });
};

const stringifyFile = (obj) => {
  const replacer = [];
  for (const key in obj) {
    replacer.push(key);
  }
  return JSON.stringify(obj, replacer);
};

const checkRoi = (value) => {
  let roi;

  if (value <= 10000) roi = 25;
  if (value >= 10000 && value <= 30000) roi = 27;
  if (value > 30000) roi = 30;

  return roi;
};

const generateReferalLink = (username) => {
  const baseUrl = window.location.origin;

  return ` ${baseUrl}/${username} `;
};

export { slugify, numberWithCommas, checkRoi, filterByCategory, stringifyFile, generateReferalLink };
