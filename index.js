// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(){
  drivers.push("Ralph")
}
function destructivelyPrependDriver(){
  drivers.unshift("name")
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriverName(name){
  var clone = drivers.slice(0)
  clone.push(name)
  return clone
}