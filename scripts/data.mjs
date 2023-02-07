
// fetch(minionUrl)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

export async function apiFetch(url){
    try {
        const res = await fetch(url);
        if (res.ok){
            let data = await res.json();
            console.log(data)
            return data
        }else{
            throw Error(await response.text())
        }
    }catch (error) {
        console.log(error);
    }
}

// retrieve data from localstorage
export function getLocalStorage(key) {
return localStorage.getItem(key);
}
// save data to local storage
export function setLocalStorage(key, data) {
localStorage.setItem(key, data);
}