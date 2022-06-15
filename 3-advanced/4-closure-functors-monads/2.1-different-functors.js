/*
 * Different structures can be a functor, as long as they allow
 * you to pass a mapper method, which returns a identical structure
 * but with mapped values
 */

const tree = {
    value: "simon",
    nodes: [{
        value: "mia",
        nodes: [
            { value: "sven" },
            { value: "elsa" }
        ]},
        {
        value: "anders",
        nodes: [
            { value: "janne" },
            { value: "lena" }
        ]
    }]
}

const functor = (t) => {
    const r = (mapper, node)=> {
        const newValue = mapper(node.value);
        const newNodes = [];
        if(node.nodes)
            for( const n of node.nodes ) 
                newNodes.push(r(mapper, n)); // <-- I know I know, but you get the point
        return {value: newValue, nodes: newNodes};
    }
    return {
        map: (mapper) => functor( r(mapper, t) )
    }
}

functor(tree).map(n => n.toUpperCase()).map(n => n.substr(0, 3)).map(console.log);