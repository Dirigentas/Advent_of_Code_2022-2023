let fr;
document.getElementById('inputfile')
    .addEventListener('change', function () {

        fr = new FileReader();
        fr.onload = function () {
            let a = fr.result;
            console.log(a);

            a = a.split('\n')

            console.log(a);

            a = a.map(n => n.replaceAll('-', ','))

            console.log(a);

            a = a.map(n => n.split(','));

            console.log(a);

            a = a.map(n => n.map(i => +i))

            console.log(a);

            let count = 0;

            a.forEach(i => i[0] <= i[2] && i[1] >= i[2] || i[0] >= i[2] && i[0] <= i[3] ? count++ : count = count);

            console.log(count);
        }
        fr.readAsText(this.files[0]);
    });

aa = 79
bb = 80
cc = 2
dd = 79

if (aa <= cc && bb >= cc || aa >= cc && aa <= dd) {
    console.log('bent dalinis padengimas');
} else {
    console.log('ne');
}

