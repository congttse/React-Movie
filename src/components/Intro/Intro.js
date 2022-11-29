import React, { useState } from 'react'
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc'
import './Intro.css'
export default function Intro() {
    const [isMuted, setIsMuted] = useState(false);

    return (
        <div className='introPF'>
            <ReactPlayer className='videoIntro'
                playing={true} loop={true}
                width='100%'
                height='100%'
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/514160588" />
            <div className='infoPF'>
                <h1 className='headingPF'>Netflix Elite</h1>
                <p className='overviewPF'>Client: Netflix Japan
                    CG PRODUCER: Anna Briand Hashimoto
                    VFX SUPERVISOR: Kenji Watanabe
                    VFX ARTIST: Sin Soongkwan
                    VFX ARTIST: Yusuke Yasu</p>
            </div>
            {
                isMuted ? (
                    <VscMute className='btnVolume' onClick={() => setIsMuted(prev => !prev)} />
                ) : (
                    <VscUnmute className='btnVolume' onClick={() => setIsMuted(prev => !prev)} />
                )
            }
            <div className='introBottom'></div>
        </div>
    )
}
