import css from './Profile.module.css';
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.userCard}>
      <div>
        <img className={css.userImg} src={image} alt="Profile" />
        <p className={css.userName}>{name}</p>
        <p className={css.userDescription}>{tag}</p>
        <p className={css.userDescription}>{location}</p>
      </div>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsObj}>Followers</span>

          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsObj}>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsObj}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
