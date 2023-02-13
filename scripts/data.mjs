
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
            // store the sreach into a dictionary
            let list = getLocalStorage("dictionary");
            if (list == null){
                list = [];
            }
            list.push(data);
            console.log(list);
            setLocalStorage("dictionary", list);
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
    return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}