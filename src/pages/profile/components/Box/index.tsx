import React, { useState } from 'react';

import { BoxContainer, Card, ShowMore } from './box.styled';

interface Props {}

const Box: React.FC<Props> = () => {
  const [show, setShow] = useState(false);

  const style = show ? { height: '100%' } : {};
  return (
    <BoxContainer>
      <div className="box">
        <div className="boxPadding">
          <Card>
            <div className="image">
              <div className="title">Monthly Banana</div>
              <div className="picture">
                <img
                  alt="reward item"
                  src="https://c10.patreonusercontent.com/3/eyJ3Ijo0MDB9/patreon-media/p/reward/2608433/24a988b5ba8d47e4bc102584186c932b/1.jpg?token-time=2145916800&amp;token-hash=8Vg5PzaiwX4hOSuhV_J0iCmsb9p8eLGo1XUpCUE834M%3D"
                />
              </div>
            </div>

            <div className="money">
              <div className="value">$1</div>
              <div className="perMonth">PER MONTH</div>
            </div>

            <div className="button">
              <div className="buttonWrap">
                <a>Join</a>
              </div>
            </div>

            <div className="contentBox" style={style}>
              🍌 A banana a month. Becoming a patron on this tier will let you
              read our secret articles here. If you just want to support us and
              read our articles and updates, this is the one! With this tier,
              you're fuelling our days of creation and the tons of hours we
              spend listening to music a month. And that is awesome, thank you.
            </div>

            {!show && (
              <ShowMore>
                <button onClick={() => setShow(true)} className="showMore">
                  Show More
                </button>
              </ShowMore>
            )}
          </Card>
        </div>
      </div>
    </BoxContainer>
  );
};

export default Box;
