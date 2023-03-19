export type TInputValues = {
  name: string;
  country: string;
  language: string;
  genre: string;
};
type TgetStation = (
  url: string,
  searchValues: TInputValues,
  limit?: number,
  offset?: number
) => string;
export const getStationsUrl: TgetStation = (
  url,
  searchValues,
  limit = 15,
  offset = 0
) => {
  const getUrl = new URL(`${url}/stations/search`);
  getUrl.searchParams.set('limit', limit.toString());
  getUrl.searchParams.set('offset', offset.toString());
  getUrl.searchParams.set('order', 'votes');
  getUrl.searchParams.set('reverse', 'true');
  getUrl.searchParams.set('ishttps', 'true');
  getUrl.searchParams.set('hidebroken', 'true');
  if (searchValues.name) {
    getUrl.searchParams.set('name', stringCapitalize(searchValues.name));
  }
  if (searchValues.country) {
    getUrl.searchParams.set('country', stringCapitalize(searchValues.country));
  }
  if (searchValues.language) {
    getUrl.searchParams.set('language', searchValues.language);
  }
  if (searchValues.genre) {
    getUrl.searchParams.set('tag', searchValues.genre);
  }

  return getUrl.href;
};
export const stringCapitalize = (value: string): string => {
  return value
    .trim()
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.substring(1))
    .join(' ');
};
