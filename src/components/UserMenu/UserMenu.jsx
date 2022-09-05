import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'redux/authSlice';

import s from './UserMenu.module.css';
import '../App.module.css';

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
        <NavLink className={getActive} to="/" />
        {tokenAuth.isLoggedIn && (
          <NavLink className={getActive} to="/contacts" />
        )}
      </div>
      <div>
        {tokenAuth.isLoggedIn ? (
          <div className={s.userWelcome}>
            <p>
              Welcome,{' '}
              <span className={s.username}>{tokenAuth.user.name}!</span>
            </p>
            <button className="button" type="button" onClick={onClickHandle}>
              Log Out
            </button>
          </div>
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