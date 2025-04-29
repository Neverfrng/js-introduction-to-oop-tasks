// BEGIN
function getMutualFriends(user1, user2) {
  const friends1 = user1.getFriends();
  const friends2 = user2.getFriends();

  const friends2Ids = new Set(friends2.map(friend => friend.id));

  const mutual_friends = friends1.filter(friend => friends2Ids.has(friend.id));

  return mutual_friends;
}

export { getMutualFriends };
// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});