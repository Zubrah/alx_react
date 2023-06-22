//create a function named getFullYear that returns the current year:
export function getFullYear() {
  return new Date().getFullYear();
}

// create a function named getFooterCopy that takes a boolean isIndex as argument and returns:
export function getFooterCopy(isIndex) {
  return isIndex ? "ALX SWE" : "ALX Main dashboard";
}

// create a function named getLatestNotification that returns:
export function getLatestNotification() {
  return `<strong>Urgent requirement</strong> - complete by EOD`;
}


