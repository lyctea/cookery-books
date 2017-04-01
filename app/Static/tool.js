export function StorageGetter(key){
    var value = localStorage.getItem('ReactMusic_'+key);
    return JSON.parse(value);
}

export function StorageSetter(key,value){
    var json = JSON.stringify(value);
    localStorage.setItem('ReactMusic_'+key,json);
}