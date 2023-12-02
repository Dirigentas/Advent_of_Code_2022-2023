let fr;
document.getElementById('inputfile')
    .addEventListener('change', function () {

        fr = new FileReader();
        fr.onload = function () {

            let a = fr.result;

            console.log(a);

            console.log(a.split('\n'));

            console.log(a.split('\n').map(n => +n));

            a = a.split('\n').map(n => +n);

            let tarpinis = 0;
            let max = 0;
            let max2 = 0;
            let max3 = 0;


            for (let i = 0; i < a.length; ++i) {
                if (a[i] === 0) {
                    a[i] = tarpinis;
                    tarpinis = 0;
                } else {
                    tarpinis += a[i];
                    a[i] = 0;
                }
            }

            for (let i of a) {
                if (i > max) {
                    max3 = max2;
                    max2 = max;
                    max = i;
                }
                if (i > max2 && i < max) {
                    max2 = i;
                }
                if (i > max3 && i < max2) {
                    max3 = i;
                }
            }

            console.log(a);
            console.log('top3: ', max, max2, max3);
            console.log('top 3 suma: ', max + max2 + max3);
        }
        fr.readAsText(this.files[0]);
    });