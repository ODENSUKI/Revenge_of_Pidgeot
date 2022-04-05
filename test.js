const testmap = [[1,1,1],
                [2,5,2],
                [3,3,3]]

function testfunc(){
    for(let [Xfirst, Xsecond] of testmap.entries()){
        console.log("First", Xfirst)
        console.log("Second", Xsecond)
    }
}

testfunc()

console.log('test hairetu ;', testmap[1][1])