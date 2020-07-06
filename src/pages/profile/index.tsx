import React from 'react';
import {
  Container,
  MainWrap,
  MainContent,
  Content,
  MemberShipWrap,
} from './profile.styled';

import Header from './components/Header';
import Banner from './components/Banner';
import Box from './components/Box';

interface ProfileProps {}
const Profile: React.FC<ProfileProps> = () => {
  return (
    <Container>
      <Header />
      <div style={{ marginTop: 64 }}></div>
      <MainWrap>
        <MainContent>
          <Banner />

          <Content>
            <div className="wrap">
              <div className="content">
                <div className="title">
                  <h1>Indiemono</h1>
                  <span>
                    is creating artist development and&nbsp;playlists.
                  </span>
                </div>
              </div>
              <MemberShipWrap>
                <div className="titleMembership">
                  <h2>Select a membership level</h2>
                </div>
                <div className="contentMemberShip">
                  <div className="flex">
                    <Box />
                    <Box />
                    <Box />
                  </div>
                </div>
              </MemberShipWrap>

              <div className="socialWrap">
                <div className="padding">
                  <div className="marginBottom">
                    <div className="marginTop"></div>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </MainContent>
      </MainWrap>
    </Container>
  );
};

export default Profile;
