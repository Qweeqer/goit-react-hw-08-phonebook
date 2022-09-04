import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/authSlice';

import s from './UserMenu.module.css';

const getActive = ({ isActive }) => (isActive ? s.active : s.link);

const UserMenu = () => {
  const tokenAuth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const onClickHandle = () => {
    dispatch(logoutUser());
  };
  return (
    <nav>
      <div>
        <NavLink className={getActive} to="/">
          Home
        </NavLink>
        {tokenAuth.isLoggedIn && (
          <NavLink className={getActive} to="/contacts" />
        )}
      </div>
      <div>
        {tokenAuth.isLoggedIn ? (
          <>
            <span>
              Welcome, <span>{tokenAuth.user.name}</span>
            </span>
            <button className="button" type="button" onClick={onClickHandle}>
              Log Out
            </button>
          </>
        ) : (
          <>
            <button className={getActive} to="/logInUser">
              Sign in
            </button>
            <button className={getActive} to="/register">
              Sign up
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default UserMenu;
