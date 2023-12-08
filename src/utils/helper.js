import moment from 'moment';

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

const checkDateEnd = (dividenDate, id) => {
  const currentDate = moment();
  const hasPassed = currentDate.isAfter(dividenDate);
  return hasPassed;
};

function openBlobInNewTab(blob, fileName) {
  const objectUrl = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = objectUrl;
  link.target = '_blank';
  link.download = fileName || 'document.pdf'; // You can specify the file name if needed

  // Append the link to the document and trigger a click event
  document.body.appendChild(link);
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);

  // Revoke the object URL to free up resources
  URL.revokeObjectURL(objectUrl);
}

// Example usage

export { slugify, numberWithCommas, checkRoi, filterByCategory, stringifyFile, generateReferalLink, checkDateEnd, openBlobInNewTab };
