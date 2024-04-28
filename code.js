// Referenced: 
// https://github.com/COSC3020/detecting-isomorphism-Hinckley28/blob/main/code.test.js
// https://en.wikipedia.org/wiki/Graph_isomorphism

function are_isomorphic(graph1, graph2){
    if (graph1.length !== graph2.length) { return false; }
    let map1 = Array(graph1.length).fill(-1);
    let map2 = Array(graph2.length).fill(false)
    return checkIsomorph(graph1, graph2, map1, map2, 0);
}

function checkIsomorph(graph1, graph2, map1, map2, vertex){
    if (vertex == graph1.length) { return true; }
    let next = graph1[vertex];
    for(let i = 0; i < graph2.length; i++){
        if(!map2[i]){
            map1[vertex] = i;
            map2[i] = true;
        }
        let allIsomorphs = true;
        for(let j = 0; j < next.length; j++){
            if(map1[j] == -1) { 
                continue;
            } else if(!graph2[i].includes(map1[j])) {
                allIsomorphs = false;
                break;
            }
        }
        if(allIsomorphs && checkIsomorph(graph1, graph2, map1, map2, vertex+1)){ return true; }
        map1[vertex] = -1;
        map2[i] = false;
    }
    return false;
}