import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useRouter } from 'next/navigation'

type Props = {
    time: number;
}

const Timer = (props: Props) => {
    const route = useRouter()

    return (
        <div className=''>
            <CountdownCircleTimer
                size={110}
                isPlaying
                duration={props.time*50 + 15}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={() => route.push('/test/result')}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}

export default Timer