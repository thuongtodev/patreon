import styled from 'styled-components';

export const Container = styled.div`
  color: rgb(36, 30, 18);
  font-family: aktiv-grotesk, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  overflow-x: hidden;
  background-color: rgb(255, 255, 255);
`;

export const MainWrap = styled.div`
  width: 100%;
  min-height: 60vh;
`;

export const MainContent = styled.div`
  box-sizing: border-box;
  padding-top: 0rem;
  padding-right: 0rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export const Content = styled.div`
  width: 100%;

  div.wrap {
    box-sizing: border-box;
    max-width: 72rem;
    width: 100%;
    margin: 0px auto;

    @media only screen and (min-width: 1rem) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    div.content {
      box-sizing: border-box;
      padding-top: 0.5rem;
      padding-right: 0rem;
      padding-bottom: 0rem;
      padding-left: 0rem;
      margin-top: 0rem;
      margin-right: 0rem;
      margin-bottom: 2.5rem;
      margin-left: 0rem;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

      div.title {
        -webkit-box-align: center;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        padding-top: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        padding-left: 0rem;
        margin-top: 0rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        margin-left: 0rem;
        transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

        h1 {
          color: rgb(36, 30, 18);
          font-family: Walsheim, sans-serif;
          position: relative;
          text-align: center;
          font-weight: 700 !important;
          font-size: 1.3125rem !important;
          line-height: 1.5 !important;
          margin: 0px;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }

        span {
          color: rgb(112, 108, 100);
          font-family: aktiv-grotesk, sans-serif;
          position: relative;
          text-align: center;
          font-weight: 500 !important;
          font-size: 1rem !important;
          line-height: 1.5 !important;
          margin: 0px;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
      }
    }

    .socialWrap {
      align-items: flex-start;
      align-content: flex-start;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      -webkit-box-pack: start;
      justify-content: flex-start;
      padding-top: 0rem;
      padding-right: 0rem;
      padding-bottom: 0rem;
      padding-left: 0rem;
      margin-top: 0rem;
      margin-right: -0.5rem;
      margin-bottom: 0rem;
      margin-left: -0.5rem;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

      div.padding {
        box-sizing: border-box;
        max-width: 100%;
        flex: 0 0 100%;
        padding: 0rem 0.5rem;

        div.marginBottom {
          box-sizing: border-box;
          display: block;
          padding-top: 0rem;
          padding-right: 0rem;
          padding-bottom: 1rem;
          padding-left: 0rem;
          margin-top: 0rem;
          margin-right: 0rem;
          margin-bottom: 0rem;
          margin-left: 0rem;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

          div.marginTop {
            box-sizing: border-box;
            justify-content: center;
            padding-top: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
            padding-left: 0rem;
            margin-top: 0.5rem;
            margin-right: 0rem;
            margin-bottom: 0rem;
            margin-left: 0rem;
            transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

            @media (min-width: 30rem) {
              display: flex;
            }

            div.follow {
              box-sizing: border-box;
              padding-top: 0rem;
              padding-right: 0rem;
              padding-bottom: 0rem;
              padding-left: 0rem;
              margin-top: 0rem;
              margin-right: 0.5rem;
              margin-bottom: 0rem;
              margin-left: 0.5rem;
              transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

              div {
                align-items: flex-start;
                box-sizing: border-box;
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                padding-top: 0rem;
                padding-right: 0rem;
                padding-bottom: 0rem;
                padding-left: 0rem;
                margin-top: 1rem;
                margin-right: 0rem;
                margin-bottom: 0rem;
                margin-left: 0rem;
                transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              }
            }
          }
        }
      }
    }
  }
`;

export const MemberShipWrap = styled.div`
  box-sizing: border-box;
  padding-top: 0rem;
  padding-right: 0rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  div.titleMembership {
    box-sizing: border-box;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0.5rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

    h2 {
      color: rgb(36, 30, 18);
      font-family: Walsheim, sans-serif;
      position: relative;
      text-align: center;
      font-weight: 700 !important;
      font-size: 2.125rem !important;
      line-height: 1.25 !important;
      margin: 0px;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
  }

  div.contentMemberShip {
    box-sizing: border-box;
    padding-top: 0.5rem;
    padding-right: 0rem;
    padding-bottom: 0.5rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

    div.flex {
      grid-template-columns: repeat(1, 1fr);
      display: grid;
      grid-gap: 15px;
      margin-top: 2rem;

      @media (min-width: 30rem) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

export const SharingBox = styled.div`
  div.social {
    align-items: flex-start;
    align-content: flex-start;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: -0.5rem;
    margin-bottom: 0rem;
    margin-left: -0.5rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    div.social-button {
      @media (min-width: 30rem) {
        flex-basis: 50%;
        max-width: 50%;
        margin-left: 20%;
      }
      @media (min-width: 48rem) {
        flex-basis: 33.3333%;
        max-width: 33.3333%;
        margin-left: 33.3333%;
      }

      flex: 0 0 83.3333%;
      padding: 0rem 0.5rem;

      padding: 0rem 0.5rem;
      div.button-wrap {
        box-sizing: border-box;
        display: flex;
        padding-top: 0rem;
        padding-right: 0rem;
        padding-bottom: 1rem;
        padding-left: 0rem;
        margin-top: 1rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        margin-left: 0rem;
        transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
        div.button-more {
          box-sizing: border-box;
          padding-top: 0rem;
          padding-right: 0rem;
          padding-bottom: 0rem;
          padding-left: 0rem;
          margin-top: 0rem;
          margin-right: 0.25rem;
          margin-bottom: 0rem;
          margin-left: 0.25rem;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
          div.button {
            box-sizing: border-box;
            width: 100%;
            padding-top: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
            padding-left: 0rem;
            margin-top: 0rem;
            margin-right: 0rem;
            margin-bottom: 0rem;
            margin-left: 0rem;
            transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
            button:hover {
              background-color: rgb(222, 238, 249);
            }
            button:focus {
              outline: none;
            }
            button:active {
              background-color: rgb(213, 234, 248);
            }
            button {
              -webkit-box-align: center;
              align-items: center;
              backface-visibility: hidden;
              background-color: rgb(231, 242, 250);
              box-sizing: border-box;
              cursor: pointer;
              display: inline-flex;
              font-weight: 500;
              height: 2.25rem;
              -webkit-box-pack: center;
              justify-content: center;
              position: relative;
              pointer-events: unset;
              text-align: center;
              text-transform: none;
              user-select: none;
              white-space: unset;
              width: 2.25rem;
              color: rgb(53, 142, 202) !important;
              font-size: 0.875rem !important;
              border-radius: 9999px;
              border-width: 1px;
              border-style: solid;
              border-color: rgb(231, 242, 250);
              border-image: initial;
              padding: 0rem 0.46875rem;
              text-decoration: none;
              transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              div.circle {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
                z-index: 2000;
                flex-direction: column;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                display: none;
                svg.loading {
                  overflow: visible;
                  margin-left: auto;
                  margin-right: auto;
                  display: block;
                  height: 1rem;
                  width: 1rem;
                  animation: 1.116s linear 0s infinite normal none running
                    cJiLXh;
                  padding: 1.5px;
                  circle.svg-circle {
                    fill: none;
                    stroke: transparent;
                    stroke-width: 12;
                  }
                  circle.light {
                    fill: none;
                    stroke: rgb(255, 255, 255);
                    stroke-dasharray: 180;
                    transform-origin: center center;
                    stroke-width: 12;
                    animation: 1.8s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s
                      infinite normal none running fnezX;
                  }
                }
              }
              div.more-content {
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                visibility: visible;
                div.more-content-wrap {
                  align-self: center;
                  -webkit-box-align: center;
                  align-items: center;
                  display: inline-flex;
                  filter: none;
                  cursor: unset;
                  vertical-align: unset;
                  height: unset;
                  width: unset;
                  span {
                    height: 1rem;
                    width: 1rem;
                    display: flex;
                    svg {
                      align-self: center;
                      fill: rgb(53, 142, 202);
                      stroke-width: 1.2px;
                      height: 1rem;
                      width: 1rem;
                    }
                  }
                }
              }
            }
          }
        }
        div.button-content {
          box-sizing: border-box;
          flex-basis: 50%;
          padding-top: 0rem;
          padding-right: 0rem;
          padding-bottom: 0rem;
          padding-left: 0rem;
          margin-top: 0rem;
          margin-right: 0.25rem;
          margin-bottom: 0rem;
          margin-left: 0.25rem;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
          div.button {
            box-sizing: border-box;
            width: 100%;
            padding-top: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
            padding-left: 0rem;
            margin-top: 0rem;
            margin-right: 0rem;
            margin-bottom: 0rem;
            margin-left: 0rem;
            transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
            button {
              -webkit-box-align: center;
              align-items: center;
              backface-visibility: hidden;
              background-color: rgb(231, 242, 250);
              box-sizing: border-box;
              cursor: pointer;
              display: inline-flex;
              font-weight: 500;
              height: unset;
              -webkit-box-pack: center;
              justify-content: center;
              position: relative;
              pointer-events: unset;
              text-align: center;
              text-transform: none;
              user-select: none;
              white-space: unset;
              width: 100%;
              color: rgb(53, 142, 202) !important;
              font-size: 0.875rem !important;
              border-radius: 9999px;
              border-width: 1px;
              border-style: solid;
              border-color: rgb(231, 242, 250);
              border-image: initial;
              padding: 0.46875rem 1rem;
              text-decoration: none;
              transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
            }

            button:hover {
              background-color: rgb(222, 238, 249);
            }
            button:focus {
              outline: none;
            }
            button:active {
              background-color: rgb(213, 234, 248);
            }
          }
        }
      }
    }
    div.social-wrap {
      box-sizing: border-box;
      max-width: 100%;
      flex: 0 0 100%;
      padding: 0rem 0.5rem;
      div.social-content {
        display: flex;
        padding-top: 0rem;
        padding-bottom: 1rem;
        padding-right: 0rem;
        padding-left: 0rem;
        margin-top: 0.5rem;
        margin-bottom: 0rem;
        margin-right: 0rem;
        margin-left: 0rem;
        align-items: center;
        justify-content: center;
        div.social-item {
          box-sizing: border-box;
          display: block;
          padding-top: 0rem;
          padding-right: 0rem;
          padding-bottom: 0rem;
          padding-left: 0rem;
          margin-top: 0rem;
          margin-right: 0.5rem;
          margin-bottom: 0rem;
          margin-left: 0.5rem;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
          span.margin-right {
            display: inline-block;
            margin-top: 1rem;
          }
          column-span.margin-right::not(::last-child) {
            margin-right: 0.75rem;
          }
          div.social-icon {
            box-sizing: border-box;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            padding-top: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
            padding-left: 0rem;
            margin-top: 0rem;
            margin-right: 0.5rem;
            margin-bottom: 0rem;
            margin-left: 0.5rem;
            transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

            a {
              -webkit-box-align: center;
              align-items: center;
              backface-visibility: hidden;
              background-color: rgb(240, 239, 237);
              box-sizing: border-box;
              cursor: pointer;
              display: inline-flex;
              font-weight: 500;
              height: 2.25rem;
              -webkit-box-pack: center;
              justify-content: center;
              position: relative;
              pointer-events: unset;
              text-align: center;
              text-transform: none;
              user-select: none;
              white-space: unset;
              width: 2.25rem;
              color: rgb(112, 108, 100) !important;
              font-size: 0.875rem !important;
              border-radius: 9999px;
              border-width: 1px;
              border-style: solid;
              border-color: rgb(240, 239, 237);
              border-image: initial;
              padding: 0rem 0.46875rem;
              text-decoration: none;
              transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              div.circle {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                left: 0px;
                z-index: 2000;
                flex-direction: column;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                display: none;
                svg.svg {
                  margin-left: auto;
                  margin-right: auto;
                  display: block;
                  height: 1rem;
                  width: 1rem;
                  animation: 1.116s linear 0s infinite normal none running
                    cJiLXh;
                  padding: 1.5px;
                  overflow: visible;
                  circle.svg-circle {
                    fill: none;
                    stroke: transparent;
                    stroke-width: 12;
                  }
                  circle.light {
                    fill: none;
                    stroke: rgb(255, 255, 255);
                    stroke-dasharray: 180;
                    transform-origin: center center;
                    stroke-width: 12;
                    animation: 1.8s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s
                      infinite normal none running fnezX;
                  }
                }
              }
              div.icon {
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                visibility: visible;
                div.icon-wrap {
                  align-self: center;
                  -webkit-box-align: center;
                  align-items: center;
                  display: inline-flex;
                  filter: none;
                  cursor: unset;
                  vertical-align: unset;
                  height: unset;
                  width: unset;
                  span {
                    height: 1rem;
                    width: 1rem;
                    display: flex;
                  }
                }
              }
            }
          }
          div.patrons {
            align-items: flex-start;
            box-sizing: border-box;
            display: flex;
            -webkit-box-pack: center;
            justify-content: center;
            padding-top: 0rem;
            padding-right: 0rem;
            padding-bottom: 0rem;
            padding-left: 0rem;
            margin-top: 1rem;
            margin-right: 0rem;
            margin-bottom: 0rem;
            margin-left: 0rem;
            transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
            div.patron-content {
              -webkit-box-align: center;
              align-items: center;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              -webkit-box-pack: end;
              justify-content: flex-end;
              padding-top: 0rem;
              padding-right: 0rem;
              padding-bottom: 0rem;
              padding-left: 0rem;
              margin-top: 0rem;
              margin-right: 0.5rem;
              margin-bottom: 0rem;
              margin-left: 0.5rem;
              border-radius: 4px;
              transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              h2 {
                color: rgb(36, 30, 18);
                font-family: Walsheim, sans-serif;
                position: relative;
                text-align: center;
                font-weight: 700 !important;
                font-size: 1.3125rem !important;
                line-height: 1.25 !important;
                margin: 0px;
                transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              }
              span {
                color: rgb(112, 108, 100);
                font-family: aktiv-grotesk, sans-serif;
                letter-spacing: 0.1em;
                position: relative;
                text-transform: uppercase;
                text-align: center;
                font-weight: 700 !important;
                font-size: 0.625rem !important;
                line-height: 1.5 !important;
                margin: 0px;
                transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              }
            }
          }
        }
      }
    }
  }
`;

export const About = styled.div`
  div.about-wrap {
    box-sizing: border-box;
    margin-left: 0%;
    max-width: 100%;
    flex: 0 0 100%;
    padding: 0rem 0.5rem;
    @media (min-width: 64rem) {
      flex-basis: 50%;
      max-width: 50%;
      margin-left: 25%;
    }
    @media (min-width: 48rem) {
      flex-basis: 66.6667%;
      max-width: 66.6667%;
      margin-left: 16.6667%;
    }
    @media (min-width: 30rem) {
      flex-basis: 83.3333%;
      max-width: 83.3333%;
      margin-left: 8.3333%;
    }
    div.about-content {
      box-sizing: border-box;
      display: block;
      padding-top: 0rem;
      padding-right: 0rem;
      padding-bottom: 1rem;
      padding-left: 0rem;
      margin-top: 0rem;
      margin-right: 0rem;
      margin-bottom: 0rem;
      margin-left: 0rem;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
      div.content-wrap {
        box-sizing: border-box;
        padding-top: 0rem;
        padding-right: 0rem;
        padding-bottom: 0rem;
        padding-left: 0rem;
        margin-top: 3rem;
        margin-right: 0rem;
        margin-bottom: 0rem;
        margin-left: 0rem;
        transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
        div.content-title {
          box-sizing: border-box;
          padding-top: 0rem;
          padding-right: 0rem;
          padding-bottom: 0rem;
          padding-left: 0rem;
          margin-top: 0rem;
          margin-right: 0rem;
          margin-bottom: 1rem;
          margin-left: 0rem;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
          h2 {
            color: rgb(36, 30, 18);
            font-family: Walsheim, sans-serif;
            position: relative;
            text-align: center;
            font-weight: 700 !important;
            font-size: 2.125rem !important;
            line-height: 1.25 !important;
            margin: 0px;
            transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
        }
      }
      div.content {
        box-shadow: none;
        background-color: rgb(255, 255, 255);
        border-top: 1px solid rgb(229, 227, 221);
        border-bottom: 1px solid rgb(229, 227, 221);
        border-left: 1px solid rgb(229, 227, 221);
        border-right: 1px solid rgb(229, 227, 221);
        border-radius: 4px;
        overflow: hidden;
        div.content-padding {
          box-sizing: border-box;
          padding-top: 1.5rem;
          padding-right: 1.5rem;
          padding-bottom: 1.5rem;
          padding-left: 1.5rem;
          margin-top: 0rem;
          margin-right: 0rem;
          margin-bottom: 0rem;
          margin-left: 0rem;
          transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
          div.main-content {
            box-shadow: none;
            background-color: rgb(255, 255, 255);
            border-top: none;
            border-bottom: none;
            border-left: none;
            border-right: none;
            border-radius: 4px;
            overflow: hidden;
            div.relative {
              position: relative;
              height: 200px;
              overflow: hidden;
              transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              div.absolute {
                background-image: linear-gradient(
                  rgba(255, 255, 255, 0) 0%,
                  rgb(255, 255, 255) 100%
                );
                bottom: 0px;
                position: absolute;
                height: 80px;
                opacity: 0;
                pointer-events: none;
                width: 100%;
                transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
              }
              a {
                font-family: aktiv-grotesk, sans-serif;
                font-size: 16px;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizelegibility;
              }
              span {
                font-family: aktiv-grotesk, sans-serif;
                font-size: 16px;
                -webkit-font-smoothing: antialiased;
                text-rendering: optimizelegibility;
              }
              div.center {
                text-align: center;
              }
              span.markdown-color {
                color: rgb(227, 108, 9);
              }
            }
          }
        }
      }
    }
  }
`;
