const formatAppName = (name) => name.toLowerCase().split(/[\s|_]/).join("-");
const validateAppName = (name) => !name.match(/[^a-zA-Z0-9-\s]/g) ? true : 'App name should not contain special characters except hyphen (-)';

export { formatAppName, validateAppName };
