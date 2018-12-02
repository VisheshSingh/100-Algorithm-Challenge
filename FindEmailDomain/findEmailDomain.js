function findEmailDomain(address) {
  let lastIndex = address.lastIndexOf("@");
  return address.slice(lastIndex + 1);
}

console.log(findEmailDomain("prettyandsimple@example.com"));
console.log(findEmailDomain('<>[]:,;@"!#$%&*+-/=?^_{}| ~.a"@example.org'));
