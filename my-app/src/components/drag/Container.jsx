import React, { memo, useState, useCallback } from 'react';
import { SourceBox } from './SourceBox';
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { Colors } from './Color';
import { Dustbin } from './Dustbin';
import { Box } from './Box';
import { Card } from './Card.jsx';
import { Tree } from './dragtree/index';
export const Container = memo(function Container() {
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    console.log('dragIndex', dragIndex);
    console.log('hoverIndex', hoverIndex);
    //   setCards((prevCards) =>
    //     // update(prevCards, {
    //     //   $splice: [
    //     //     [dragIndex, 1],
    //     //     [hoverIndex, 0, prevCards[dragIndex]],
    //     //   ],
    //     // })
    //     console.log(prevCards)
    //   );
  }, []);
  return (
    <div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
      <Tree />
      {/* <div style={{ float: 'left' }}>
        <SourceBox color={Colors.BLUE}>
          <SourceBox color={Colors.YELLOW}>
            <SourceBox color={Colors.YELLOW} />
            <SourceBox color={Colors.BLUE} />
          </SourceBox>
          <SourceBox color={Colors.BLUE}>
            <SourceBox color={Colors.YELLOW} />
          </SourceBox>
        </SourceBox>
      </div>
      <div style={{ float: 'left' }}>
        <SourceBox color={Colors.BLUE}>
          <TargetBox>
            <SourceBox color={Colors.YELLOW}>
              <TargetBox>
                <SourceBox color={Colors.YELLOW} />
                <SourceBox color={Colors.BLUE} />
              </TargetBox>
            </SourceBox>
            <SourceBox color={Colors.BLUE}>
              <TargetBox>
                <SourceBox color={Colors.YELLOW} />
              </TargetBox>
            </SourceBox>
          </TargetBox>
        </SourceBox>
      </div> */}
      <div
        style={{
          overflow: 'hidden',
          width: '500px',
          clear: 'both',
          margin: '-1rem',
        }}
      >
        <Dustbin>
          <SourceBox
            color={Colors.BLUE}
            id="0-0"
            index={0}
            moveCard={moveCard}
            text="0-0"
          >
            <Dustbin>
              <SourceBox
                color={Colors.YELLOW}
                id="0-1"
                index={1}
                moveCard={moveCard}
                text="0-1"
              >
                <Dustbin>
                  <SourceBox
                    color={Colors.YELLOW}
                    id="0-2"
                    index={2}
                    moveCard={moveCard}
                    text="0-2"
                  />
                  <SourceBox
                    color={Colors.BLUE}
                    id="0-3"
                    index={3}
                    moveCard={moveCard}
                    text="0-3"
                  />
                </Dustbin>
              </SourceBox>
              <SourceBox
                color={Colors.BLUE}
                id="0-4"
                index={4}
                moveCard={moveCard}
                text="0-4"
              >
                <Dustbin>
                  <SourceBox
                    color={Colors.YELLOW}
                    id="0-5"
                    index={5}
                    moveCard={moveCard}
                    text="0-5"
                  />
                </Dustbin>
              </SourceBox>
            </Dustbin>
          </SourceBox>
        </Dustbin>
      </div>
      <div>
        <div style={{ overflow: 'hidden', clear: 'both', margin: '-1rem' }}>
          <Dustbin greedy={true}>
            <Dustbin greedy={true}>
              <Dustbin greedy={true} />
            </Dustbin>
          </Dustbin>
          <Dustbin>
            <Dustbin>
              <Dustbin />
            </Dustbin>
          </Dustbin>
        </div>

        <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
          <Box />
        </div>
      </div>
      <div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
        <TargetBox />
      </div>
    </div>
  );
});

const style = {
  width: 400,
};
export const Container1 = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
      },
      {
        id: 2,
        text: 'Make it generic enough',
      },
      {
        id: 3,
        text: 'Write README',
      },
      {
        id: 4,
        text: 'Create some examples',
      },
      {
        id: 5,
        text:
          'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
      },
      {
        id: 6,
        text: '???',
      },
      {
        id: 7,
        text: 'PROFIT',
      },
    ]);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      console.log('dragIndex', dragIndex);
      console.log('hoverIndex', hoverIndex);
      //   setCards((prevCards) =>
      //     // update(prevCards, {
      //     //   $splice: [
      //     //     [dragIndex, 1],
      //     //     [hoverIndex, 0, prevCards[dragIndex]],
      //     //   ],
      //     // })
      //     console.log(prevCards)
      //   );
    }, []);
    const renderCard = useCallback(
      (card, index) => (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        >
          <div>11111</div>
        </Card>
      ),
      []
    );
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
        <div style={style}>
          <Card
            key={'000'}
            index={0}
            id={'000'}
            text={'title'}
            moveCard={moveCard}
          >
            0
            <div>
              <Card
                key={'0000'}
                index={1}
                id={'0000'}
                text={'title'}
                moveCard={moveCard}
              >
                1
                <div>
                  <Card
                    key={'0-0'}
                    index={2}
                    id={'0-0'}
                    text={'title'}
                    moveCard={moveCard}
                  >
                    2
                  </Card>
                  <Card
                    key={'0001'}
                    index={3}
                    id={'0-0'}
                    text={'title'}
                    moveCard={moveCard}
                  >
                    3
                  </Card>
                </div>
              </Card>
              <Card
                key={'0-0'}
                index={4}
                id={'0-0'}
                text={'title'}
                moveCard={moveCard}
              >
                4
              </Card>
            </div>
          </Card>
          <Card key={0} index={6} id={0} text={'title'} moveCard={moveCard}>
            6
            <div>
              <Card
                key={'0-0'}
                index={5}
                id={'0-0'}
                text={'title'}
                moveCard={moveCard}
              >
                5
              </Card>
            </div>
          </Card>
        </div>
      </>
    );
  }
};
