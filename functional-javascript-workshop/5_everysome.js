function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (testUser) {
      return goodUsers.some(function (goodUser) {
        return goodUser.id === testUser.id
      })
    })
  };
}

module.exports = checkUsersValid
