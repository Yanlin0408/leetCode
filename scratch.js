const bi = [3,4,5];
ai = bi;
ci = [...bi]
di = Array.from(bi);
// di.splice(1,1)

setTimeout(() => {
    ai.splice(0,1)
    console.log(ai)
    console.log(bi)
    console.log(ci)
    console.log(di)
}, 200);