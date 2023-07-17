// const greet =(name)=>{
//     console.log('hello ${name}');
// }

// const greetAkin=(greetFn)=>{
//     const name='Akinola';
//     greetFn(name);
// }

// greetAkin(greet);


const greet = (name) => {
    console.log(`hello ${name}`);
};

const higherOrderFunction = (callback) => {
    const name = 'Akinola';
    callback(name);
};

higherOrderFunction(greet);
