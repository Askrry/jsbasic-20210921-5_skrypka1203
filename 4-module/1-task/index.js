function makeFriendsList(friends) {

  let ul = document.createElement("ul");

  for (let object of friends) {
    let li = document.createElement("li");
    li.innerHTML = `${object.firstName} ${object.lastName}`;
    ul.appendChild(li);
  }

  return ul;
}
