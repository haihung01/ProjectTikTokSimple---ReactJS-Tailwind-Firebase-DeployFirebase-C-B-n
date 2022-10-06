import React, { useRef, useState } from 'react';
import { FaComment, FaHeart, FaMusic, FaShare } from 'react-icons/fa';
const VideoInfo = () => {
    return <div className='flex flex-row'>
        <img 
        className='w-[50px] h-[50px] rounded-full' 
        src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg" 
        alt="avt" />
        <div className='ml-3 min-w-[80%]'>
            <div>
                <a href="#" className='text-xl font-bold hover:underline'>anh dang code</a>
                <a href="#" className='text-xl'>kenh lap trinh </a>
            </div>
            <div>hay ghe tham anh dang code </div>
            <div className='flex flex-row items-center'>
                <FaMusic /> <span className='ml-3'>bai hat dang phat</span>
            </div>
        </div>
        <div>
            <button className='p-1 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md'>Follow</button>
        </div>
    </div>
}
const VideoContent = () => {
    const videoRef = useRef();
    const[playing, setPlaying] = useState(false);
    const handleVideo = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false);
        } else {
            videoRef.current.play()
            setPlaying(true);
        }
    };

    return (
        <div className='flex flex-row '>
            <video
                ref={videoRef}
                onClick={handleVideo}
                className='w-[80%] max-h-[600px] ml-[50px] rounded-md mt-4 '
                src='https://v16-webapp.tiktok.com/adf816b633d4e2f195561b2935174308/63350f82/video/tos/useast2a/tos-useast2a-pve-0037-aiso/67167a522f6c41ee8ff1739fd9a0f9ac/?a=1988&amp;ch=0&amp;cr=0&amp;dr=0&amp;lr=tiktok&amp;cd=0%7C0%7C1%7C0&amp;cv=1&amp;br=1856&amp;bt=928&amp;cs=0&amp;ds=3&amp;ft=kLO5qy-gZmo0Pm5BWBkVQ.kBDiHKJdmC0&amp;mime_type=video_mp4&amp;qs=0&amp;rc=ZjQzN2c5OThpODZpN2g8N0BpM3VsdWQ6ZmQ1ZjMzZjgzM0A2Xl5eMDYvNmIxYGM1Ml5fYSNgNl8zcjRvcmlgLS1kL2Nzcw%3D%3D&amp;l=202209290222350102450220261529D71E&amp;btag=80000'
                loop
            />

            <div className='flex flex-col justify-end ml-7'>
                <div className='text-center mb-4'>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaHeart className='text-xl' />
                    </div>
                    <span>23123</span>
                </div>
                <div className='text-center mb-4'>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaComment className='text-xl' />
                    </div>
                    <span>231</span>
                </div>
                <div className='text-center'>
                    <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
                        <FaShare className='text-xl' />
                    </div>
                    <span>3</span>
                </div>
            </div>
        </div>
    )
};
const Video = () => {
    return (
        <div className='snap-start max-w-[600px]  border-b-2 border-gray-200 pb-10 pt-10'>
            <VideoInfo />
            <VideoContent />
        </div>
    );
};

export default Video;