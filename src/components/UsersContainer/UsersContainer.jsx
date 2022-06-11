import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/users/usersActions';

const UsersContainer = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((stat) => stat.users);
  const { users, error, isLoading } = usersData;
  return (
    <div>
      {isLoading ? (
        <p>LOADING...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        users.length &&
        usersData &&
        users.map((user) => {
         return <p key={user.id}>{user.name}</p>;
        })
      )}
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        get users
      </button>
    </div>
  );
};

export default UsersContainer;
