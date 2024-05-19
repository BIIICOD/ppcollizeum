import {Stage, Container, Sprite, Text, useTick} from '@pixi/react';
import '@pixi/events'

import free from '../../icons/Seats/Free.png'
import close from '../../icons/Seats/Close.png'
import book from '../../icons/Seats/Book.png'

const GroupSize = [
    {
        state: 'free',
        x: 0,
        y: 0,
    },
    {
        state: 'book',
        x: 80,
        y: 0,
    },
    {
        state: 'close',
        x: 160,
        y: 0,
    },
    {
        state: 'free',
        x: 240,
        y: 0,
    },
    {
        state: 'book',
        x: 320,
        y: 0,
    },
    {
        state: 'close',
        x: 0,
        y: 0,
    },
    {
        state: 'close',
        x: 80,
        y: 0,
    },
    {
        state: 'close',
        x: 160,
        y: 0,
    },
    {
        state: 'close',
        x: 240,
        y: 0,
    },
    {
        state: 'close',
        x: 320,
        y: 0,
    },
];

const Sprites = GroupSize.map((sprite, pos,) => {
    return(
        <>
            <Text
                text={sprite.state}
                x={pos < 5 ? sprite.x+5 : sprite.x}
                y={pos < 5 ? sprite.y-30 : sprite.y+180}
            />
            <Sprite
                angle={pos < 5 ? 0 : 180}
                image={sprite.state === 'free' ? free : sprite.state === 'close' ? close : book}
                x={pos < 5 ? sprite.x : sprite.x+65}
                y={pos < 5 ? sprite.y : sprite.y+180}
                cursor={"pointer"}
                eventMode={"static"}
                alpha={1}
                onmousedown={(e) => {
                    console.log(e.target)
                }}
            />
        </>
    )
})

export const Pixi = () =>
{
    return (

        <Stage
            options={{background: 'white'}}
            raf={false}
            renderOnComponentChange={true}
        >
            <Container
                x={200}
                y={200}
            >
                {Sprites}
            </Container>
        </Stage>
    );
};
