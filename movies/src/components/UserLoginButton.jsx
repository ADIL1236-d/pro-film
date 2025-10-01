import React from 'react';
import styled from 'styled-components';
import UsersIcon from './UsersIcon';

const UserLoginButton = () => {
  return (
    <StyledWrapper>
      <div aria-label="User Login Button" tabIndex={0} role="button" className="user-profile">
        <div className="user-profile-inner">
          <UsersIcon width={27} height={27} strokeWidth={1.5} />
          <p>Log In</p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .user-profile {
    width: 131px;
    height: 51px;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s ease;
    background: linear-gradient(
      to bottom right,
      #680463ff 0%,
      rgba(150, 44, 150, 0) 30%
    );
    background-color: rgba(116, 5, 101, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-profile:hover,
  .user-profile:focus {
    background-color: rgba(221, 7, 210, 0.7);
    box-shadow: 0 0 10px rgba(161, 6, 167, 0.5);
    outline: none;
  }

  .user-profile-inner {
    width: 127px;
    height: 47px;
    border-radius: 13px;
    background-color: rgba(26, 26, 26, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    color: #fff;
    font-weight: 600;
  }

  .user-profile-inner svg {
    width: 27px;
    height: 27px;
    fill: #fff;
  }
`;

export default UserLoginButton;
