// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./teamcard.css";
// //import Heading from "../Heading";

// // Define interface for team member data
// interface TeamMember {
//   name: string;
//   img: string;
//   post: string;
// }




// const TeamCard: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 724,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div id="team" className="team-section mb-12 w-11/12 md:px-12 mx-auto py-12">
//       <div className="text-center mb-8">
        
//         <p className="text-gray-500 md:text-xl text-lg mt-4">
//           Get to know the passionate team behind our mission.
//         </p>
//       </div>

//       <div className="slider-container">
//         <Slider {...settings}>
//           {teamData.map((member) => (
//             <TeamCardItem key={member.name} member={member} />
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// // Define props for TeamCardItem
// interface TeamCardItemProps {
//   member: TeamMember;
// }

// // Component for individual team member card
// const TeamCardItem: React.FC<TeamCardItemProps> = ({ member }) => {
//   return (
//     <div className="team-card flex flex-col justify-center items-center rounded-lg bg-gradient-to-t from-black to-zinc-800 transition-all duration-300 hover:scale-95 hover:shadow-lg">
//       <div className="team-image-container mb-4 flex items-center justify-center">
//         <img
//           className="team-image rounded-lg object-cover"
//           src={`/teamMember/${member.img}`}
//           alt={member.name}
//         />
//       </div>
//       <div className="team-info text-center">
//         <h3 className="team-name text-xl font-bold truncate">{member.name}</h3>
//         <p className="team-post text-sm text-gray-500">{member.post}</p>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;


import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./teamcard.css";

const Swiper = dynamic(() => import("swiper/react"), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });

import { Pagination, Autoplay } from "swiper/modules";

interface TeamMember {
  name: string;
  img: string;
  post: string;
}

const teamData: TeamMember[] = [
  {
    name: `Ayush Bansal`,
    img: `Ayush_Bansal.jpg`,
    post: "Member",
  },
  {
    name: `Ayush Bansal`,
    img: `Ayush_Bansal.jpg`,
    post: "Member",
  },
  {
    name: `Ayush Bansal`,
    img: `Ayush_Bansal.jpg`,
    post: "Member",
  },
  {
    name: `Ayush Bansal`,
    img: `Ayush_Bansal.jpg`,
    post: "Member",
  },
  {
    name: `Ayush Bansal`,
    img: `Ayush_Bansal.jpg`,
    post: "Member",
  },
  // ...other team members
];

const TeamCard: React.FC = () => {
  return (
    <div id="team" className="team-section mb-12 w-11/12 md:px-12 mx-auto py-12">
      <div className="text-center mb-8">
        <p className="text-gray-500 md:text-xl text-lg mt-4">
          Get to know the passionate team behind our mission.
        </p>
      </div>

      <div className="slider-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          breakpoints={{
            1024: { slidesPerView: 3 },
            724: { slidesPerView: 2 },
            576: { slidesPerView: 1 },
          }}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.name}>
              <TeamCardItem member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

interface TeamCardItemProps {
  member: TeamMember;
}

const TeamCardItem: React.FC<TeamCardItemProps> = ({ member }) => {
  return (
    <div className="team-card flex flex-col justify-center items-center rounded-lg bg-gradient-to-t from-black to-zinc-800 transition-all duration-300 hover:scale-95 hover:shadow-lg">
      <div className="team-image-container mb-4 flex items-center justify-center">
        <Image
          className="team-image rounded-lg object-cover"
          src={`/teamMember/${member.img}`}
          alt={member.name}
          width={200}
          height={200}
        />
      </div>
      <div className="team-info text-center">
        <h3 className="team-name text-xl font-bold truncate">{member.name}</h3>
        <p className="team-post text-sm text-gray-500">{member.post}</p>
      </div>
    </div>
  );
};

export default TeamCard;
