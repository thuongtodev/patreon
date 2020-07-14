import React, { useState } from 'react';
import { HeaderContainer } from './header.styled';

import {
  HeaderWrapper,
  HeaderTag,
  HeaderLeft,
  LinkMenuWrap,
  HeaderRight,
  InputSearchWrap,
  FormControl,
  MobileWrap,
  MenuIcon,
  MobileContent,
  FormMobileControl,
  MobileLable,
} from './header.styled';

interface Props {}

const Header: React.FC<Props> = () => {
  const [open, setOpen] = useState(false);

  const styledOpen = open
    ? { right: 0, bottom: 0, height: '100%', overflow: 'auto' }
    : {};
  const styledContentOpen = !open ? { display: 'none' } : {};
  const styledHiddenBorder = open ? { border: 'none' } : {};

  return (
    <HeaderWrapper>
      <div className="wrap">
        <MobileWrap style={styledOpen}>
          <div>
            <HeaderContainer style={styledHiddenBorder}>
              <HeaderLeft>
                <a href="/">
                  <span>
                    <svg
                      height="546px"
                      version="1.1"
                      viewBox="0 0 569 546"
                      width="569px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Patreon logo</title>
                      <g>
                        <circle
                          cx="362.589996"
                          cy="204.589996"
                          data-fill="1"
                          r="204.589996"
                        ></circle>
                        <rect
                          data-fill="2"
                          height="545.799988"
                          width="100"
                          x="0"
                          y="0"
                        ></rect>
                      </g>
                    </svg>
                  </span>
                </a>
              </HeaderLeft>

              <HeaderRight>
                <ul>
                  <li>
                    {/* <LinkMenuWrap>
                      <a href='/login'>Log in</a>
                    </LinkMenuWrap> */}
                  </li>
                  <li>
                    <LinkMenuWrap>
                      <a>
                        <MenuIcon>
                          <span className="menu">
                            {!open && (
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setOpen(true)}
                              >
                                <path
                                  d="M2.25 18.003h19.5M2.25 12.003h19.5M2.25 6.003h19.5"
                                  data-stroke="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            )}

                            {open && (
                              <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => setOpen(false)}
                              >
                                <path
                                  d="M21 3l-9 9m-9 9l9-9m0 0l9 9m-9-9L3 3"
                                  data-stroke="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="bevel"
                                ></path>
                              </svg>
                            )}
                          </span>
                        </MenuIcon>
                      </a>
                    </LinkMenuWrap>
                  </li>
                </ul>
              </HeaderRight>
            </HeaderContainer>
          </div>
          <MobileContent style={styledContentOpen}>
            <FormMobileControl>
              <div className="searchForm">
                <div>
                  <div>
                    <div>
                      <div>
                        <span className="iconSearch">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M13.187 16.974A7.158 7.158 0 1 0 7.587 3.8a7.158 7.158 0 0 0 5.6 13.174z"
                              data-fill="1"
                              data-stroke="1"
                              fillRule="evenodd"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M15.448 15.448L20.999 21"
                              data-stroke="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                      </div>
                      <input
                        name="q"
                        placeholder="Find a creator"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FormMobileControl>
            <MobileLable>
              <div>
                <a href="#">
                  <div>
                    <span>Create on Patreon</span>
                  </div>
                </a>
              </div>
            </MobileLable>
            <MobileLable>
              <div>
                <a href="#">
                  <div>
                    <span>Explore creators</span>
                  </div>
                </a>
              </div>
            </MobileLable>
            <MobileLable>
              <div>
                <a href="#">
                  <div>
                    <span>Log in</span>
                  </div>
                </a>
              </div>
            </MobileLable>
            <MobileLable>
              <div>
                <a href="#" className="last-child">
                  <div>
                    <span>Sign up</span>
                  </div>
                </a>
              </div>
            </MobileLable>
          </MobileContent>
        </MobileWrap>
      </div>

      <div className="wrap">
        <div className="content">
          <HeaderTag>
            <HeaderLeft>
              <a href="/">
                <span>
                  <svg
                    height="546px"
                    version="1.1"
                    viewBox="0 0 569 546"
                    width="569px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Patreon logo</title>
                    <g>
                      <circle
                        cx="362.589996"
                        cy="204.589996"
                        data-fill="1"
                        r="204.589996"
                      ></circle>
                      <rect
                        data-fill="2"
                        height="545.799988"
                        width="100"
                        x="0"
                        y="0"
                      ></rect>
                    </g>
                  </svg>
                </span>
              </a>
            </HeaderLeft>

            <HeaderRight>
              <ul>
                <li>
                  <InputSearchWrap>
                    <a>
                      <div>
                        <div>
                          <FormControl>
                            <div className="searchForm">
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <span className="iconSearch">
                                        <svg
                                          viewBox="0 0 24 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            clipRule="evenodd"
                                            d="M13.187 16.974A7.158 7.158 0 1 0 7.587 3.8a7.158 7.158 0 0 0 5.6 13.174z"
                                            data-fill="1"
                                            data-stroke="1"
                                            fillRule="evenodd"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                          <path
                                            d="M15.448 15.448L20.999 21"
                                            data-stroke="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          ></path>
                                        </svg>
                                      </span>
                                    </div>
                                    <input
                                      name="q"
                                      placeholder="Find a creator"
                                      type="search"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </FormControl>
                        </div>
                      </div>
                    </a>
                  </InputSearchWrap>
                </li>
                <li>
                  <LinkMenuWrap>
                    <a href="/create">Create on Patreon</a>
                  </LinkMenuWrap>
                </li>
                <li>
                  <LinkMenuWrap>
                    <a href="/login">Log in</a>
                  </LinkMenuWrap>
                </li>
              </ul>
            </HeaderRight>
          </HeaderTag>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
