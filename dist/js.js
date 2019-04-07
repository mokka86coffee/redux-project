
crossBrowserFetch('https://api1.remontista.ru/tools/all_work_type')
.then(res=>{
    // localStorage.setItem('work_types', JSON.stringify(res.work_types));
    if(res.result==='success') {
        const resultedArray = exportFromFetch(res.work_types);
        // store.dispatch({type: 'API_GOT_WORKS', payload: {
        //                             works: resultedArray,
        //                             list: resultedArray,
        //                             types: Object.keys(res.work_types)
        //                             }
        //                 })
    }
})        
.catch(err=>console.log(err));

function crossBrowserFetch(link) {
    if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) { //if IE
        return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open('GET', link, true);
            xhr.send();
            xhr.onload = xhr.onerror = function() {
                console.log(this);
                if (this.status == 200) {
                     resolve( JSON.parse(xhr.responseText) )
                } else {
                    reject(`${xhr.status} :  ${xhr.statusText}`);
                }
              };
        })
    } else {
        return fetch('https://api1.remontista.ru/tools/all_work_type')
                .then(res=>res.json())
    } 
}

function exportFromFetch(fetchedArray) {
    let worksAsArray = Object.keys(fetchedArray).reduce((res, el) => [...res, { [el]: fetchedArray[el] }], []);
    let id = 0;
    let resultedArray = [];
    let types = [];
    worksAsArray.forEach(el => {
        for (let i in el) {
            types.push(i);
            for (let j in el[i]) {
                resultedArray.push({
                    id: id++,
                    type_of_work: i,
                    work_title: j,
                    services_counter: el[i][j]
                });
            }
        }
    });
    return resultedArray;
}

if (localStorage.getItem('work_types')) {
	console.log("fetchedObj", JSON.parse(localStorage.getItem('work_types')))
    let fetchedObj = JSON.parse(localStorage.getItem('work_types'));
    
    let arr = Object
            .keys(fetchedObj)
            .map( key => Object.entries(fetchedObj[key])
                        .reduce( (res, pair) => res.concat({ 
                                category: key,
                                subcategory: pair[0], 
                                price: pair[1] 
                            })
                        , []) 
            );
    
    let 
    sortedByCategory = arr.sort( (a,b) => a.category - b.category );
	console.log( typeof ({abc: 'abc', valueOf: () => 2, toString: () => 'string'} + '') )
    
    
}