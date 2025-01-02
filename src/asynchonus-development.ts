// Write a function that accepts an array of URLs,
// makes parallel queries for each of them, and returns an
// an array of results in the order in which the queries are completed.

// Example input data:
// const urls = ['https://jsonplaceholder.typicode.com/posts/1', 
// 'https://jsonplaceholder.typicode.com/posts/2'];

// Expected result:
// [
// { data: { ... }, status: 200 },
// { data: { ... }, status: 200 }
// ] 
type RequestsResult = {
    data: any,
    status: number
}

async function fetchAll(urls: string[]): Promise<RequestsResult[]> {
    //Your code goes here
const promises = urls.map(url =>
        fetch(url)
            .then(response => response.json())
            .then(data => ({
                data,
                status: 200  // Успешный ответ
            }))
            .catch(error => ({
                data: error,
                status: 500  // Статус ошибки
            }))
    );
    return Promise.all(promises);
}

module.exports = { fetchAll };
