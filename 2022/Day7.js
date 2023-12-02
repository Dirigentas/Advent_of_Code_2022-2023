let a = `$ k /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

console.log(a);
let b = {};
a = a.split('\n')
// a.map(n =>)




console.log(a);
console.log(b);



const family = {
    name: 'Petras', age: 55, children: [{
        name: 'Maryte', age: 66, children: [{
            name: 'Ona',
            age: 77,
            children: [
                {
                    name: 'Petras',
                    age: 78
                }, {
                    name: 'Petras',
                    age: 79
                }, {
                    name: 'Petras',
                    age: 80
                }
            ],
        }
        ],
    }, {
        name: 'Jonas',
        age: 44,
        children: [
            {
                name: 'Al',
                age: 88,
                children: [
                    {
                        name: 'Moliugelis',
                        age: 37,
                    }, {
                        name: 'Hipsteris',
                        age: 38
                    }
                ],
            }
        ],
    }
    ],
};

function oldest(person) {
    let age = person.age;

    if (person.children
        && Array.isArray(person.children)
        && person.children.length > 0) {
        for (const child of person.children) {
            const childAge = oldest(child);
            if (childAge > age) {
                age = childAge;
            }
        }
    }

    return age;
}

console.log('Vyriausias:', oldest(family));