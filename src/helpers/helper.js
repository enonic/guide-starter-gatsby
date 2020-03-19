const defaultPageTitle = 'Home';

export const getPageTitle = (pageContext, node) => {
  let pageTitle = pageContext.title || defaultPageTitle;
  if (!!node && pageTitle.startsWith('.')) {
    pageTitle = node[pageTitle.slice(1)] || node.data[pageTitle.slice(1)];
  }

  return pageTitle;
};
