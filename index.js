function wakeDog(dogName, dogBreed) {
    let a = `Wake ${dogName} the ${dogBreed}`;
    console.log(a);
    return a;
}

function leashDog(dogName, dogBreed) {
    let b = `Leash ${dogName} the ${dogBreed}`;
    console.log(b);
    return b;
}

function walkToPark(dogName, dogBreed) {
    let c = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(c);
    return c;
}

function throwFrisbee(dogName, dogBreed) {
    let d = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(d);
    return d;
}

function walkHome(dogName, dogBreed) {
    let e = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(e);
    return e;
}

function unleashDog(dogName, dogBreed) {
    let f = `Unleash ${dogName} the ${dogBreed}`;
    console.log(f);
    return f;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
    let exercise = [];
    let i = 0
    while (i < routine.length) {
        exercise.push(routine[i](dogName, dogBreed));
        i++;
    }
    return exercise;
}