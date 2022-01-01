function vaxTrail(list) {
    A = []
    B = []
    C = []
    D = []
    list.map(info => {
        if ((20 <= info.age) && (info.age <= 30) && (info.temperature < 100)) {
            A.push(info)
        }
        if ((31 <= info.age) && (info.age <= 40) && (info.temperature < 100)) {
            B.push(info)
        }
        if ((41 <= info.age) && (info.age <= 50) && (info.temperature < 100)) {
            C.push(info)
        }
        if ((info.temperature >= 100)) {
            D.push(info)
        }
    })
    return { A, B, C, D }

}

console.log(vaxTrail(
    [{ name: 'Nayem', age: 50, temperature: 100 }, {
        name: 'Sabnaj',
        age: 51,
        temperature: 101
    }]
));