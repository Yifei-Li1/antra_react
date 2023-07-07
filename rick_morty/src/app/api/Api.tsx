export const getCharacter =(url: string): Promise<any> =>{
    return fetch(url).then(res=>res.json());
}