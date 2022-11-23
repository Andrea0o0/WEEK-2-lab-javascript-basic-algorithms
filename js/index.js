// Iteration 1: Names and Input
const hacker1 = "Paco"
const hacker2 = "andrea"
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
for(let i=0;i<hacker1.length;i++){
    console.log(hacker1[i])
}

for(let i=0;i<hacker1.length;i++){
    console.log(hacker1[(hacker1.length-1)-i])
}


const shortername = (drivername,navigatorname) => {
    if(drivername>=navigatorname){
        console.log(drivername)
        return drivername
    }
    if(drivername<navigatorname){
        console.log(navigatorname)
        return navigatorname
    }
}


//WITHOUT LOOP
function lexicorder(drivernameNoLoop,navigatornameNoLoop){
    if(drivernameNoLoop>navigatornameNoLoop){
        console.log("The driver's name goes first.")
    }
    if(drivernameNoLoop<navigatornameNoLoop){
        console.log("Yo, the navigator goes first definitely.")
    }
    if(drivernameNoLoop==navigatornameNoLoop){
        console.log("What?! You both have the same name?")
    }
}

lexicorder(hacker1,hacker2)