const getBooks = (URL: string): Promise<any> => fetch(URL).then((data) => data.json());
export default getBooks