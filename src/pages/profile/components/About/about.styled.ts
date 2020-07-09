import styled from 'styled-components';
export const AboutContainer = styled.div`
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
