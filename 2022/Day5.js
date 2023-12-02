document.getElementById('inputfile').addEventListener('change', function () {
    let fr;
    fr = new FileReader();
    fr.onload = function () {
        let a = fr.result;
        console.log(a);

        let vienas = ['D', 'T', 'R', 'B', 'J', 'L', 'W', 'G']
        let du = ['S', 'W', 'C']
        let trys = ['R', 'Z', 'T', 'M']
        let keturi = ['D', 'T', 'C', 'H', 'S', 'P', 'V']
        let penki = ['G', 'P', 'T', 'L', 'D', 'Z']
        let sesi = ['F', 'B', 'R', 'Z', 'J', 'Q', 'C', 'D']
        let septyni = ['S', 'B', 'D', 'J', 'M', 'F', 'T', 'R']
        let astuoni = ['L', 'H', 'R', 'B', 'T', 'V', 'M']
        let devyni = ['Q', 'P', 'D', 'S', 'V']

        a = a.split('\n')
        a = a.map(n => n.split(' '))
        a = a.map(n => n.map(n => +n))
        a = a.map(n => [n[1], n[3], n[5]])
        console.log(a);

        const masyvas = ['nulis', vienas, du, trys, keturi, penki, sesi, septyni, astuoni, devyni]

        // for (let i of a) {
        //     masyvas[i[2]].push(...masyvas[i[1]].slice(masyvas[i[1]].length - i[0]).reverse());
        //     masyvas[i[1]] = masyvas[i[1]].slice(0, - i[0]);
        // }
        for (let i of a) {
            masyvas[i[2]].push(...masyvas[i[1]].slice(masyvas[i[1]].length - i[0]));
            masyvas[i[1]] = masyvas[i[1]].slice(0, - i[0]);
        }





        console.log(masyvas);
    }
    fr.readAsText(this.files[0]);
});

// let vienas = ['D', 'T', 'R', 'B', 'J', 'L', 'W', 'G']
// let du = ['S', 'W', 'C']
// let trys = ['R', 'Z', 'T', 'M']
// let keturi = ['D', 'T', 'C', 'H', 'S', 'P', 'V']
// let penki = ['G', 'P', 'T', 'L', 'D', 'Z']
// let sesi = ['F', 'B', 'R', 'Z', 'J', 'Q', 'C', 'D']
// let septyni = ['S', 'B', 'D', 'J', 'M', 'F', 'T', 'R']
// let astuoni = ['L', 'H', 'R', 'B', 'T', 'V', 'M']
// let devyni = ['Q', 'P', 'D', 'S', 'V']

// keturi.push(...penki.slice(penki.length - 5).reverse());
// console.log(keturi);
// console.log(penki.slice(0, -5));

// SHMSDGZVC
// VRZGHDFBQ
