import styled from 'styled-components';

export const BoxContainer = styled.div`
  box-sizing: border-box;
  display: block;
  height: 100%;
  padding-top: 0rem;
  padding-right: 0rem;
  padding-bottom: 1rem;
  padding-left: 0rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  div.box {
    box-shadow: none;
    background-color: rgb(255, 255, 255);
    height: 100%;
    border-top: 1px solid rgb(229, 227, 221);
    border-bottom: 1px solid rgb(229, 227, 221);
    border-left: 1px solid rgb(229, 227, 221);
    border-right: 1px solid rgb(229, 227, 221);
    border-radius: 4px;
    overflow: hidden;

    div.boxPadding {
      box-sizing: border-box;
      height: 100%;
      padding-top: 1.5rem;
      padding-right: 1.5rem;
      padding-bottom: 1.5rem;
      padding-left: 1.5rem;
      margin-top: 0rem;
      margin-right: 0rem;
      margin-bottom: 0rem;
      margin-left: 0rem;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
  }
`;

export const Card = styled.div`
  -webkit-box-align: stretch;
  align-items: stretch;
  align-content: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  -webkit-box-pack: start;
  justify-content: flex-start;
  padding-top: 0rem;
  padding-right: 0rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  div.image {
    box-sizing: border-box;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0.5rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

    @media (min-width: 48rem) {
      margin-bottom: 1.5rem;
    }

    div.title {
      color: rgb(36, 30, 18);
      font-family: aktiv-grotesk, sans-serif;
      position: relative;
      text-align: center;
      font-weight: 700 !important;
      font-size: 1rem !important;
      line-height: 1.5 !important;
      margin: 0px;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }

    div.picture {
      align-items: flex-start;
      align-content: flex-start;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      -webkit-box-pack: center;
      justify-content: center;
      padding-top: 0.5rem;
      padding-right: 0rem;
      padding-bottom: 0.5rem;
      padding-left: 0rem;
      margin-top: 0rem;
      margin-right: 0rem;
      margin-bottom: 0rem;
      margin-left: 0rem;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

      img {
        max-height: 8em;
        width: auto;
        max-width: 100%;
      }
    }
  }

  div.money {
    box-sizing: border-box;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-bottom: 0.5rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

    @media (min-width: 48rem) {
      margin-bottom: 1rem;
    }

    div.value {
      color: rgb(36, 30, 18);
      font-family: Walsheim, sans-serif;
      position: relative;
      text-align: center;
      font-weight: 700 !important;
      margin: 0px;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
      font-size: 2.125rem !important;
      line-height: 1.25 !important;
    }

    div.perMonth {
      color: rgb(112, 108, 100);
      font-family: aktiv-grotesk, sans-serif;
      letter-spacing: 0.1em;
      position: relative;
      text-transform: uppercase;
      text-align: center;
      font-weight: 700 !important;
      font-size: 0.875rem !important;
      line-height: 1.5 !important;
      margin: 0px;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    }
  }

  div.button {
    box-sizing: border-box;
    padding-top: 0rem;
    padding-right: 0rem;
    padding-bottom: 0rem;
    padding-left: 0rem;
    margin-top: 0rem;
    margin-right: 0rem;
    margin-left: 0rem;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

    @media (min-width: 48rem) {
      margin-bottom: 1.5rem;
    }

    div.buttonWrap {
      box-sizing: border-box;
      text-align: center;
      padding-top: 0rem;
      padding-right: 0rem;
      padding-bottom: 0rem;
      padding-left: 0rem;
      margin-top: 0rem;
      margin-right: 0rem;
      margin-bottom: 0rem;
      margin-left: 0rem;
      transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

      a {
        -webkit-box-align: center;
        align-items: center;
        backface-visibility: hidden;
        background-color: rgb(53, 142, 202);
        box-sizing: border-box;
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
        width: unset;
        color: rgb(255, 255, 255) !important;
        font-size: 1rem !important;
        border-radius: 9999px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(53, 142, 202);
        border-image: initial;
        transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
        padding: 0.85rem 4rem;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }

  div.contentBox {
    position: relative;
    overflow: hidden;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    padding-bottom: 1rem;
  }
`;

export const Fade = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(100, 100, 100, 0) 0%,
    #ececec 75%
  );
  height: 100px;
  margin-top: -150px;
  position: relative;
`;

export const ShowMoreContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 100;
  text-align: center;
  background: white;
  width: 100%;
  height: 70px;
`;

export const ShowMore = styled.div`
  box-sizing: border-box;
  text-align: center;
  padding-top: 0rem;
  padding-right: 0rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
  margin-top: 0rem;
  margin-right: 0rem;
  margin-bottom: 0rem;
  margin-left: 0rem;
  transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;

  button.showMore {
    margin-top: 10px;
    color: rgb(53, 142, 202);
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    max-width: 100%;
    text-overflow: ellipsis;
    vertical-align: bottom;
    font-size: 1rem !important;
    line-height: 1.5 !important;
    border-radius: 4px;
    background: none;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 0px;
    overflow: hidden;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
    text-decoration: underline !important;

    &:focus {
      outline: none;
    }

    &:hover {
      text-decoration: none;
    }
  }
`;
