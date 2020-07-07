import styled from 'styled-components';

export const BannerContainer = styled.div`
  box-sizing: border-box;
  padding-top: 0rem;
  padding-right: 0rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-bottom: 2.5rem;
  margin-left: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  @media (min-width: 48rem) {
    margin-bottom: 4rem;
  }

  div.banner {
    background-size: cover;
    height: 25vw;
    width: 100%;
    align-items: flex-end;
    display: flex;
    position: relative;
    background-repeat: no-repeat;
    background-position: center center;

    @media (min-width: 48rem) {
      height: calc(25vw - 0px);
    }

    div {
      transform: translateY(15%);
      width: auto;
      position: relative;
      margin: 0px auto;

      a {
        div.imageBanner {
          display: block;
          background-clip: padding-box;
          background-image: url(https://c10.patreonusercontent.com/3/eyJ3IjoyMDB9/patreon-media/p/campaign/1252407/7e60c779f4a84f35afe1d16b57e31d65/1.jpg?token-time=2145916800&token-hash=BV2P9JY05ndVnU4c-_2vyktmLfPyDknagQrAOhGGqaQ%3D);
          background-size: cover;

          border-width: 4px;
          border-style: solid;
          border-color: rgb(255, 255, 255);
          border-image: initial;
          border-radius: 50%;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center center;
          width: 5rem;
          min-width: 5rem;
          height: 5rem;

          @media (min-width: 48rem) {
            width: 10rem;
            min-width: 10rem;
            height: 10rem;
          }
        }
      }
    }
  }
`;
