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
