import styled from "styled-components";
import { auth, storage } from "../firebase";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { Container } from "../components/basic-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  padding-top: 100px;
`;

const AvatarUpload = styled.label`
  width: 140px;
  overflow: hidden;
  height: 140px;
  border-radius: 20%;
  background-color: #1d9bf0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
`;
const AvatarInput = styled.input`
  display: none;
`;
const Name = styled.span`
  font-size: 30px;
`;

export default function Profile() {
  const user = auth.currentUser;
  const [img, setImg] = useState(user?.photoURL);
  const onImgChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      const file = files[0];
      const locationRef = ref(storage, `avatars/${user?.uid}`);
      const result = await uploadBytes(locationRef, file);
      const url = await getDownloadURL(result.ref);
      await updateProfile(user, { photoURL: url });
      setImg(url);
    }
  };
  return (
    <Container>
      <Wrapper>
        <Wrapper2>
          <AvatarUpload htmlFor="avater">
            {img ? (
              <AvatarImg src={img} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </AvatarUpload>
          <AvatarInput
            id="avater"
            type="file"
            accept="image/*"
            onChange={onImgChange}
          />
          <Name>{user?.displayName ?? "Anonymous"}</Name>
        </Wrapper2>
      </Wrapper>
    </Container>
  );
}
