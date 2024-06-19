const bfsTreversal=(graph,start)=>{
   const visited=new Set()
   const queue=[start]

   while(queue.length>0){
    const node=queue.shift()
    for (const neighbor of graph[node]) {
        if(!visited.has(neighbor)){
            visited.add(neighbor)
            queue.push(neighbor)
        }
    }
   }
   return visited
}

const graph={
    a:['b','c'],
    b:['a','c','d'],
    c:['a','b','d'],
    d:['b','c'],
    e:['f'],
    f:['e']
}

console.log(bfsTreversal(graph,'a'));