// ❓ DESCRIPTION:
// Make a program that filters a list of strings and returns
// a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure
// that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// ✅ SOLUTION:
function friend(friends){
    let arrMyFriends = [];
    for (let name of friends) {
        if(isNaN(Number(name)) && name.length===4) arrMyFriends.push(name)
    }
    return arrMyFriends;
}

console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))