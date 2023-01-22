export const build_callback_url = (pathName) => {
  var hostname = document.location.hostname;
  var protocol = document.location.protocol;
  return `${protocol}//${hostname}/${pathName}`;
};