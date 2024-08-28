import React from "react";
import '../Css/VideoReview.css';

const VideoPage = () => {
  return (
    <div className="bg-white bg-opacity-75 ">
      <h1 className="page-heading font-bold mb-5">Video Reviews Page</h1>
      <p className="page-description bg-white bg-opacity-50">
        <div className="ml-5">
            Welcome to the <strong>Video Review Page</strong>! Here you can find
        reviews and insights related to <strong>placements</strong> and{" "}
        <strong>college life</strong> in general. Whether you're seeking advice
        on <em>job interviews</em>, <em>internship experiences</em>, or want to
        learn more about <em>campus life</em>, our videos cover a wide range of
        topics. Explore the valuable information shared by fellow students and
        professionals to enhance your college experience.
        </div>
      </p>
      
      <div className="video-container flex flex-col py-2 px-6 sm:px-6 justify-between items-center">
        <label className='flex flex-row  justify-between items-center mt-10 mb-10'>
        <div className="mr-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CgihpPN4BVA?si=YpvWtvlw35HkY_XT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
       </div>
        <iframe
    
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kR17Lc4MlNE?si=_0eNi4HprjwxN7Hp"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
 </label>
 <label className='flex flex-row justify-between items-center mt-10 mb-10'>
 <div className="mr-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/_A_hqpPpnpM?si=nGpFAK8HCbKpMIKs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
       </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ksAd-Qrlj5U?si=toDJR9gSvW1O_99u"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
       </label>
     
       <label className='flex flex-row justify-between items-center mt-10 mb-10'>
       <div className="mr-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/00PcPsNvRXY?si=SqzW4yVc0E26O8ab"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ClRWmncBDN4?si=VXaycALapkdpU8RI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
         </label>

         <label className='flex flex-row justify-between items-center mt-10 mb-10'>
         <div className="mr-10">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/GwCD-e6t8Qc?si=snMP-QwjrEJiv1uY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
 </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KKpSP8OHDIw?si=IOPgHzZ65ZKuXQuB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        </label>
      </div>
    </div>
  );
};

export default VideoPage;