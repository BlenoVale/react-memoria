import { useEffect, useState } from 'react';

import * as C from './App.styles';

import logoImage from './images/Mario_Series_Logo.png';
import restartIcon from './images/greenlvl.png'
import ImgWinner from './images/winnerMario.png';

import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';
import { GridItem } from './components/GridItem';

import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { formatTimerElapsed } from './helpers/formatTimerElapsed';


const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [winner, setWinner] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showncount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => resetAndCreateGrid(), []);

  useEffect(() => {
    if (showncount === 2) {
      let opened = gridItems.filter(item => item.shown === true);

      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }
        setMoveCount(moveCount => moveCount + 1);
      }
    }
  }, [showncount, gridItems]);

  useEffect(() => {
    if (moveCount > 0 && gridItems.every(item => item.permanentShown === true)) {
      setPlaying(false);
      setWinner(true);
    }
  }, [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    // Resetar o Jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    setWinner(false);

    // Criar o Grid
    // 1. Criar o Grid vazio
    let tmpGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    }

    // 2. Preencher Grid
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }

        tmpGrid[pos].item = i;
      }
    }

    // 3. Jogar no State
    setGridItems(tmpGrid);

    // Começar o jogo
    setPlaying(true);

  }

  const handleItemClick = (index: number) => {
    if (playing && index !== null && showncount < 2) {
      let tmpGrid = [...gridItems];
      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(showncount + 1);
      }
      setGridItems(tmpGrid);
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href='#' ><img src={logoImage} width='300' /></C.LogoLink>

        <C.InfoArea>
          <InfoItem label='Tempo' value={formatTimerElapsed(timeElapsed)} />
          <InfoItem label='Movimentos' value={moveCount.toString()} />
        </C.InfoArea>
        <Button label='Reiniciar' icon={restartIcon} onClick={resetAndCreateGrid} />
      </C.Info>
      <C.GridArea>
        <C.Grid isWinner={winner}>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </C.Grid>
        <C.WinnerArea isWinner={winner}>
          <C.TextWinner>
            Parabéns<br/>Você Venceu!!
          </C.TextWinner>
          <C.ImgWinner src={ImgWinner}></C.ImgWinner>
        </C.WinnerArea>
      </C.GridArea>
    </C.Container>
  );
}

export default App;