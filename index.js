// Write your solution here!
function prependDriver (name){
 var clone = drivers.slice(0)
 clone.unshift(name)
 return clone
}
function removeLastDriver (){
 var clone = drivers.slice(0)
 clone.splice(-1,1)
 return clone
}
function removeFirstDriver (){
 var clone = drivers.slice(0)
 clone.shift(0)
 return clone
}