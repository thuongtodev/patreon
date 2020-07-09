import React, { useState } from 'react';
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
import Social from './components/Social';
import About from './components/About';

import banana from './banana.jpg';

interface ProfileProps {}

const listMemberShip = [
  {
    title: 'Monthly Banana',
    imageUrl: banana,
    value: '$1',
    content: `🍌 A banana a month. Becoming a patron on this tier will let you
    read our secret articles here. If you just want to support us and
    read our articles and updates, this is the one! With this tier,
    you're fuelling our days of creation and the tons of hours we
    spend listening to music a month. And that is awesome, thank you.`,
  },
  {
    title: 'Monthly Orange',
    imageUrl: banana,
    value: '$2',
    content: `🍌 A banana a month. Becoming a patron on this tier will let you
    read our secret articles here. If you just want to support us and
    read our articles and updates, this is the one! With this tier,
    you're fuelling our days of creation and the tons of hours we
    spend listening to music a month. And that is awesome, thank you.`,
  },
  {
    title: 'Monthly Lemon',
    imageUrl: banana,
    value: '$3',
    content: `🍌 A banana a month. Becoming a patron on this tier will let you
    read our secret articles here. If you just want to support us and
    read our articles and updates, this is the one! With this tier,
    you're fuelling our days of creation and the tons of hours we
    spend listening to music a month. And that is awesome, thank you.`,
  },
  {
    title: 'Monthly Apple',
    imageUrl: banana,
    value: '$4',
    content: `🍌 A banana a month. Becoming a patron on this tier will let you
    read our secret articles here. If you just want to support us and
    read our articles and updates, this is the one! With this tier,
    you're fuelling our days of creation and the tons of hours we
    spend listening to music a month. And that is awesome, thank you.`,
  },
];
const Profile: React.FC<ProfileProps> = () => {
  const aboutData = {
    about: `<strong>
    Welcome, feel free to take a seat - here, let's play
    some music.
    <br />
    </strong>
    <br />
    You probably know about Indiemono as playlists or as a
    place to submit your music, but we hope we can give you a
    quick view of what we do and what we're trying to
    build.&nbsp;`,
  };
  const social = {
    title: 'patrons',
    value: 999,
  };
  const [memberShip, setMembership] = useState(listMemberShip.slice(0, 3));
  const [show, setShow] = useState(false);

  const onSetShowHide = () => {
    if (!show) {
      setMembership(listMemberShip);
    } else {
      setMembership(listMemberShip.slice(0, 3));
    }
    setShow(!show);
  };
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
                    {memberShip.map((item) => (
                      <Box key={item.title} data={item} />
                    ))}
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      color: 'rgb(53,142,202)',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                    onClick={() => onSetShowHide()}
                  >
                    {show ? 'Hide' : 'Show more'}
                  </div>
                </div>
              </MemberShipWrap>
              <Social data={social} />
              <About data={aboutData} />
            </div>
          </Content>
        </MainContent>
      </MainWrap>
    </Container>
  );
};

export default Profile;
