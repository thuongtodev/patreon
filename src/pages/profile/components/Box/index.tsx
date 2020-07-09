import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  BoxContainer,
  Card,
  ShowMore,
  ShowMoreContainer,
  Fade,
} from './box.styled';

interface IData {
  title: string;
  imageUrl: string;
  value: string;
  content: string;
}
interface Props {
  data: IData;
}

const Box: React.FC<Props> = ({ data }) => {
  const { title, imageUrl, value, content } = data;
  const [show, setShow] = useState(false);

  const style = show ? { height: '100%' } : {};
  const styleFade = show ? { display: 'none' } : {};
  return (
    <BoxContainer>
      <div className="box">
        <div className="boxPadding">
          <Card>
            <div className="image">
              <div className="title">{title}</div>
              <div className="picture">
                <img alt="reward item" src={imageUrl} />
              </div>
            </div>

            <div className="money">
              <div className="value">{value}</div>
              <div className="perMonth">PER MONTH</div>
            </div>

            <div className="button">
              <div className="buttonWrap">
                <a>Join</a>
              </div>
            </div>

            <div className="contentBox" style={style}>
              <ReactMarkdown source={content} />
              {!show && (
                <ShowMoreContainer>
                  <ShowMore>
                    <button onClick={() => setShow(true)} className="showMore">
                      Show More
                    </button>
                  </ShowMore>
                </ShowMoreContainer>
              )}

              <Fade style={styleFade} />
            </div>
          </Card>
        </div>
      </div>
    </BoxContainer>
  );
};

export default Box;
