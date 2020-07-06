import React from 'react';

import {
  HeaderWrapper,
  HeaderTag,
  HeaderLeft,
  LinkMenuWrap,
  HeaderRight,
  InputSearchWrap,
  FormControl,
} from './header.styled';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderWrapper>
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
                                            clip-rule="evenodd"
                                            d="M13.187 16.974A7.158 7.158 0 1 0 7.587 3.8a7.158 7.158 0 0 0 5.6 13.174z"
                                            data-fill="1"
                                            data-stroke="1"
                                            fill-rule="evenodd"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          ></path>
                                          <path
                                            d="M15.448 15.448L20.999 21"
                                            data-stroke="1"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
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
