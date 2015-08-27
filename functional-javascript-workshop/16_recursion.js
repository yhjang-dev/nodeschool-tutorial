
 function getDependencies(tree, list) {
   if (typeof list == "undefined") { list = [] }
   if (tree && tree.hasOwnProperty("dependencies")) {
   var dependencies = tree["dependencies"]
     var keys = Object.keys(dependencies)
     keys.forEach(function (key) {
       var dependency = key + "@" + dependencies[key].version
       if (list.indexOf(dependency) < 0) {
         list.push(dependency)
       }
       getDependencies(dependencies[key], list)
     })
   }
   return list.sort();
 }

module.exports = getDependencies
