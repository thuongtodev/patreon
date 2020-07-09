import React from 'react';
import { SharingBox } from './social.styled';

interface IData {
  title: string;
  value: number;
}
interface Props {
  data: IData;
}
const Social: React.FC<Props> = ({ data }) => {
  const { title, value } = data;

  return (
    <SharingBox>
      <div className="social">
        <div className="social-wrap">
          <div className="social-content">
            <div className="social-item">
              <div className="patrons">
                <div className="patron-content">
                  <h2 color="dark" className="sc-AxgMl kHusHC">
                    {value}
                  </h2>
                  <span color="gray2" className="sc-AxirZ dPfpTD">
                    {title}
                  </span>
                </div>
              </div>
            </div>
            <div className="social-item">
              <span className="margin-right">
                <div className="social-icon">
                  <a href="#">
                    <div className="circle">
                      <svg
                        aria-label="Loading"
                        viewBox="0 0 64 64"
                        className="svg"
                      >
                        <circle
                          cx="32"
                          cy="32"
                          r="32"
                          className="svg-circle"
                        ></circle>
                        <circle
                          color="light"
                          cx="32"
                          cy="32"
                          r="32"
                          stroke-linecap="round"
                          className="light"
                        ></circle>
                      </svg>
                    </div>
                    <div className="icon">
                      <div className="icon-wrap">
                        <span>
                          <svg viewBox="0 0 24 24" height="100%" width="100%">
                            <path
                              clip-rule="evenodd"
                              d="M13.319 24H8.976V12.788H6v-4.1h2.893c.11-.142.072-.257.072-.361 0-1.046.01-2.097 0-3.154 0-.667.11-1.319.351-1.943C9.96 1.593 11.2.657 12.868.225c1.06-.269 2.136-.247 3.212-.187.527.033 1.049.039 1.614.148-.033 1.26-.06 2.513-.093 3.745-.143.093-.247.06-.362.06-.747 0-1.505 0-2.251-.011-.23 0-.45.022-.67.071-.527.11-.84.422-.944.947-.033.159-.05.318-.05.487-.01 1.013-.01 2.026-.01 3.039 0 .038.021.082.037.148h4.365c-.071 1.385-.131 2.737-.197 4.1h-4.195c-.005 3.76-.005 7.478-.005 11.228z"
                              data-fill="1"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </span>
              <span className="margin-right">
                <div className="social-icon">
                  <a href="#">
                    <div className="circle">
                      <svg
                        aria-label="Loading"
                        viewBox="0 0 64 64"
                        className="svg"
                      >
                        <circle
                          cx="32"
                          cy="32"
                          r="32"
                          className="svg-circle"
                        ></circle>
                        <circle
                          color="light"
                          cx="32"
                          cy="32"
                          r="32"
                          stroke-linecap="round"
                          className="light"
                        ></circle>
                      </svg>
                    </div>
                    <div className="icon">
                      <div className="icon-wrap">
                        <span>
                          <svg viewBox="0 0 24 24" height="100%" width="100%">
                            <path
                              data-fill="1"
                              d="M12 3.803c2.67 0 2.987.01 4.042.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.047 1.37-.057 4.04-.057zM12 2c-2.716 0-3.056.012-4.122.06-3.632.167-5.65 2.182-5.817 5.817C2.01 8.944 2 9.284 2 12s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122c-.163-3.629-2.18-5.65-5.816-5.817C15.057 2.01 14.716 2 12 2zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </span>
              <span className="margin-right">
                <div className="social-icon">
                  <a href="#">
                    <div className="circle">
                      <svg
                        aria-label="Loading"
                        viewBox="0 0 64 64"
                        className="svg"
                      >
                        <circle
                          cx="32"
                          cy="32"
                          r="32"
                          className="svg-circle"
                        ></circle>
                        <circle
                          color="light"
                          cx="32"
                          cy="32"
                          r="32"
                          stroke-linecap="round"
                          className="light"
                        ></circle>
                      </svg>
                    </div>
                    <div className="icon">
                      <div className="icon-wrap">
                        <span>
                          <svg viewBox="0 0 24 24" height="100%" width="100%">
                            <path
                              d="M5.866 20.18c.44.094.885.158 1.333.203.041.004.086.004.127.004.605 0 1.21-.004 1.819 0a7.14 7.14 0 001.057-.102c.877-.131 1.729-.357 2.55-.689.89-.357 1.719-.82 2.484-1.4a11.627 11.627 0 003.242-3.782 12.33 12.33 0 001.315-3.707c.15-.82.22-1.649.183-2.48-.004-.095.018-.151.097-.211a8.18 8.18 0 001.886-1.969l.034-.052c.003-.004.003-.012.007-.03l-.004-.004a8.095 8.095 0 01-2.304.628 4.242 4.242 0 001.77-2.27l-.003-.003c-.176.094-.337.185-.501.267-.65.332-1.33.569-2.043.715a.108.108 0 01-.104-.03 4.116 4.116 0 00-2.297-1.215c-.113-.02-.228-.02-.34-.053h-.015c-.03.015-.064.004-.097.008-.03-.004-.064.007-.094-.008h-.224a.143.143 0 01-.097 0h-.034c-.03.015-.06.008-.085.008 0 .003-.004.003-.008.007-2.401.188-4.246 2.48-3.682 5.085-3.429-.23-6.245-1.679-8.479-4.325-.526.945-.683 1.946-.448 3 .236 1.058.818 1.886 1.692 2.518a3.285 3.285 0 01-.937-.14 4.147 4.147 0 01-.878-.36c-.086 1.535.997 3.616 3.275 4.113-.16.049-.306.075-.455.098-.153.026-.306.034-.46.045-.153.007-.306 0-.459-.008a4.737 4.737 0 01-.456-.06c.02.478.796 1.577 1.442 2.055.702.52 1.49.79 2.375.824-.134.117-.265.207-.395.298a8.144 8.144 0 01-2.973 1.29c-.785.17-1.58.226-2.383.159a4.483 4.483 0 00-.228-.02c-.022 0-.052-.018-.071.016.265.154.527.316.796.463.974.512 1.994.888 3.07 1.114z"
                              data-fill="1"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="social">
        <div className="social-button">
          <div className="button-wrap">
            <div className="button-content">
              <div className="button">
                <button>Share</button>
              </div>
            </div>
            <div className="button-content">
              <div className="button">
                <button>Follow</button>
              </div>
            </div>
            <div className="button-more">
              <div className="button">
                <button>
                  <div className="circle">
                    <svg
                      aria-label="Loading"
                      viewBox="0 0 64 64"
                      className="loading"
                    >
                      <circle
                        cx="32"
                        cy="32"
                        r="32"
                        className="svg-circle"
                      ></circle>
                      <circle
                        color="light"
                        cx="32"
                        cy="32"
                        r="32"
                        stroke-linecap="round"
                        className="light"
                      ></circle>
                    </svg>
                  </div>
                  <div className="more-content">
                    <div className="more-content-wrap">
                      <span>
                        <svg
                          viewBox="0 0 24 24"
                          height="100%"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="4.33"
                            cy="12.33"
                            data-fill="1"
                            data-stroke="1"
                            r="2.33"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></circle>
                          <circle
                            cx="12"
                            cy="12.33"
                            data-fill="1"
                            data-stroke="1"
                            r="2.33"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></circle>
                          <circle
                            cx="19.66"
                            cy="12.33"
                            data-fill="1"
                            data-stroke="1"
                            r="2.33"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></circle>
                        </svg>
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SharingBox>
  );
};
export default Social;
