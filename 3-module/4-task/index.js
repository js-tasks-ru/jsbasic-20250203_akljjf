function showSalary(users, age) {
  const filterUsers = users.filter((user) => user.age <= age);
  const stringUser = filterUsers.map((user) => `${user.name}, ${user.balance}`);

  return stringUser.join("\n");
}
