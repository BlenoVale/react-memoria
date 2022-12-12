import { GridItemType } from '../../types/GridItemType';
import * as C from './styles';
import blockImg from '../../images/block.png';
import { items } from '../../data/items';

type Props = {
    item: GridItemType,
    onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
    return (
        <C.Container
            showBackground={item.permanentShown || item.shown}
            onClick={onClick}>

            {item.permanentShown === false && item.shown === false &&
                <C.Icon
                    showWidth={item.permanentShown || item.shown}
                    src={blockImg} alt='' />
            }
            {(item.permanentShown || item.shown) && item.item !== null &&
                <C.Icon
                    showWidth={item.permanentShown || item.shown}
                    src={items[item.item].icon} alt='' />
            }
        </C.Container>
    );
}