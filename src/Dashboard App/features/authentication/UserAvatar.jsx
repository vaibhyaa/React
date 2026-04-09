import React from "react";
import styled from "styled-components";
import { useUser } from "./useUser";
import { CiUser } from "react-icons/ci";

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

const UserName = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
`;

function UserAvatar() {
  const { user } = useUser();
  // console.log(user);

  const fullName = user?.user_metadata?.fullName || "User";
  // console.log(fullName);

  // const avatarUrl = user?.user_metadata?.avatar || "default_user.jpg";

  return (
    <StyledUserAvatar>
      <CiUser size={20} />
      {/* <Avatar src={avatarUrl} alt={`Avatar of ${fullName}`} /> */}
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
