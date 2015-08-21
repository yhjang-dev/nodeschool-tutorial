function loadUsers(userIds, load, done) {
  var users = []
  users.forEach(function (userId) {
    load(userId[i],function (user){
      users.push(user)
      if (users.length == userIds.length) { done(users) }
    })
  })
}

module.exports = loadUsers
