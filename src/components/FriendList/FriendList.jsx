import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem {...friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
