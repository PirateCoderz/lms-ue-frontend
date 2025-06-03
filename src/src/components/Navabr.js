/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineRight } from 'react-icons/ai';
import React from 'react';
import { motion } from 'framer-motion';
import { GoThreeBars } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import GPCSFLogo from '../assets/Logo.png';

const FaculityData = [
  {
    id: 0,
    programe: 'Arts & Social Sciences',
    courses: [
      {
        id: 1,
        name: 'Applied Psychology',
        data: {
          name: 'Applied Psychology',
          vision:
            'To develop high quality trained professional clinical psychologists to pursue the excellence in the field of psychology and to make significant and meaningful contribution towards the socio-economic betterment of our country.',
          mission:
            'To provide and inculcate the knowledge of human behavior to the students seeking such knowledge in an effective and research oriented manner. Moreover, the department is committed to meet the challenges of the modern age by producing researchers and professionals in the field, which will help to understand and ultimately resolve the problems of society.',
          introduction:
            'Psychology, being a scientific study of human behavior and mental processes, has not only achieved immense popularity with scholars of modern age but it has also helped in understanding the psychological problems of the society. Psychological knowledge is now applied to such diverse areas as psychotherapy, counseling and guidance, hospital management, environment, business, education, industry, crimes linguistics, and critical evaluation of literature and fine arts.',
        },
      },
      {
        id: 2,
        name: 'English Literature',
        data: {
          name: 'English Literature',
          vision:
            'To enable the students to cope with the radical changes taking place in the field of knowledge.The Department stimulates humanistic learning and the capacity to respond rationally and imaginatively to literature and the life among the students. Through the advancement of knowledge, skills and human creativity, the Department prepares students to be independent and enlightened thinkers, professionals and opinion leaders of tomorrow',
          mission:
            'To inspire an appreciation for the English language and its literatures, and to cultivate its effective use in creative expression and day-to-day life. The Department strives to enhance student success by fostering an environment conducive to intellectual and personal growth and aims to preserve and protect academic freedom and intellectual independence. It provides a forum for critical inquiry and debate. Our mission is to instill in the students a spirit of critical inquiry, capability to look beyond their parochial surroundings and analytical vision to place and define themselves in the wider social, cultural, political and ideological environment. Through our extensive curriculum, we aim at development of an educated and enlightened population capable of informed judgment and responsible citizenship and the availability of persons who have the knowledge, skills and adaptability required by public and private enterprise.',
          introduction:
            'The Department of English Literature is one of the leading departments of the University with a rich history of excellence, quality teaching and research spanning over decades. The Department has always been committed to the symbiotic relationship of teaching, research and the larger concerns of society. The Department of English seeks to provide the diverse needs of its students by offering them the opportunity to read widely understand and enjoy what they read, and to express themselves both orally and in writing with ease, force and clarity. The English Department maintains its strong commitment to traditional areas of study, while also supporting groundbreaking research and teaching in new and interdisciplinary approaches to literary studies.',
        },
      },
      {
        id: 3,
        name: 'Fine Arts',
        data: {
          name: 'Fine Arts',
          vision: 'To promote art and aesthetic sense at the demand of national and international requirements.',
          mission:
            'To prepare an artistic and educational community that values creativity, innovation, and conceptual tracks. The institute craves to temper craftsmanship with discipline and knowledge in the field of Art & Design.',
          introduction:
            'Faisalabad Institute of Textile & Fashion Design offers 4 year degree programs in Textile Design, Fashion Design, Graphic Design and Fine Arts. Our upcoming programs are M.A Fine Arts (Morning/Evening), 1 year diplomas are in Multimedia, Textile Design, Graphic Design, and Fashion Design & Painting. Furthermore, 8 short courses of 6 months duration are in Textile design, Weaving, Interior Design, Drawing & Sketching, Calligraphy and Hani-Craft as well. Studio teaching at institute is supported by well-equipped laboratories, broadband internet access, a sculpture workshop, photographic studio sewing lab, Pattern lab, print making studio drawing lab, a library and well equipped graphic and general labs. The following courses are being offered in BFA (Textile Design/Graphic Design/Fine Arts & Fashion Design',
        },
      },
      {
        id: 4,
        name: 'History',
        data: {
          name: 'History',
          vision:
            'We aim to be a leader of the disciplines of social sciences by developing analytical tools excelling in teaching, scholarship and exploiting opportunities for academic research.',
          mission:
            'To make the discipline of history an excellent part of social sciences for the students by inculcating a curiosity for raising and sorting out solutions to questions about the complex past of humankind. Thus, enabling them to become productive parts of the society. The department instills the students with a passion for in-depth knowledge and skills to understand phenomenon of the human experiences by a comparative study of the past and present societies cultures and Civilizations.',
          introduction:
            'The discipline of History was launched by bifurcation of already existing Department of Pakistan Studies and Political Science that was in 2011 renamed as the Department of History and Pakistan Studies.This department was further bifurcated in two independant departments i.e. History and Pakistan studies. As history focuses the actions and deeds of the human beings, therefore, it studies the past societies, cultures and events caused by human beings in particular time and space. The Department of History specifically deals with those societies, cultures and events with reference to the temporal and special dimensions. Besides the core subjects of History, Historiography/Philosophy of History and Research Methodology, the department imparts learning and understanding in a wide range of subjects and topics, such as social, cultural, geographical, political, economic and religious contours. The Department of History exclusively offers the courses of history, therefore, it also envisions in the near future to offer the neglected courses of the history of designing, history of art and history of architecture and History of Archives. The department believes to teach the courses in a way to enable the students to draw lessons from the past experiences of human beings and to help the contemporary society in correcting its course of action. The goal and objective of the faculty of the Department of History is to create a conducive environment for the students to polish their skills and become experts in carrying out quality research in the discipline of History. The horizon and spectrum of the discipline of history is very broad and it encompasses various periods, epochs and events. It covers the histories of geographies, topographies, areas, regions, continents, wars, religions, governments, elections, constitutional developments, economies, movements, personalities, concepts, languages, literature, cultures, civilizations, writings, medicines, food, arts and paintings. Being multi-disciplinary in nature, history is connected with all other social sciences as they deal with the actions and deeds of human beings within the society and has come out from the lap of history itself. History shares concepts and ideas with these various disciplines and in return borrows from them. Keeping in view, the faculty of the Department of History intends to teach the subject from that broader perspective. Besides, the Department aims at, the promotion of factual and interpretive history, curiosity to find the truth, generalization, objectivity, unbiased and unprejudiced approach, and curiosity to find the truth. For the pursuit of enhancing conceptual and intellectual capabilities of and activities of the students, the Department has a functional Society and Study Circle. That is why the Department is growing and flourishing day by day in size and performance.',
        },
      },
      {
        id: 5,
        name: 'Pakistan Studies',
        data: {
          name: 'Pakistan Studies',
          vision:
            'We aim to be a leader among other disciplines of social sciences at institutions of comparable size and character through excelling in teaching, scholarship and counseling and exploiting opportunities for academic research, experimental learning and off-campus study; the Department promotes scholarship, discipline and civic participation.',
          mission:
            'The Department of Pakistan Studies is dedicated to the pursuit of academic excellence and diversity. The department strives to polish the students’ intellectual curiosity with a focus on tools to assess and solve complex problems and inculcate skills to become independent and motivated decision-makers.',
          introduction:
            'The Department of Pakistan Studies was established in 2003. The Department offers programs i.e. BS (Pakistan Studies), M.Sc. Pakistan Studies (Morning/Evening), and M. Phil Pakistan Studies (Evening). It aims to impart deep learning and understanding of the historical, social and cultural, political and economic contours of the state and society of Pakistan. It also attempts to orientate the students towards the institutional strengths and weaknesses of the government in order to reinforce its strengths and correct what we may call our deficiencies. We envisage making the department as a center of excellence of Pakistan Studies with the aims of producing capable experts and quality research in the subject of Pakistan Studies. The Department aims to launch PhD program in the near future. Pakistan Studies is an inter-disciplinary subject and it offers courses which have close affinity with and understanding of other subjects of Social Sciences such as Economics, Sociology, History, Political Science, International Relations and Pakistani languages and their literature. We are trying our best to encourage and prepare the students for the exploration, analysis and advancement of research on the issues besetting Pakistan internally and externally. In this regard, the authorities of the university are planning to establish a Research Centre in near future which would not only concentrate on the basic issues of Pakistani state and society but also examine and boost the prospects of peace in South Asia and suggest ways and means to promote harmony and stability in the region.',
        },
      },
    ],
  },
  {
    id: 2,
    programe: 'Physical Science ',
    courses: [
      {
        id: 0,
        name: 'Applied Chemistry',
        data: {
          name: 'Applied Chemistry',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 1,
        name: 'Chemistry',
        data: {
          name: 'Chemistry',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 2,
        name: 'Computer Science',
        data: {
          name: 'Computer Science',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 3,
        name: 'Geography',
        data: {
          name: 'Geography',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 4,
        name: 'Information Technology',
        data: {
          name: 'Information Technology',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 5,
        name: 'Mathematics',
        data: {
          name: 'Mathematics',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 6,
        name: 'Physics',
        data: {
          name: 'Physics',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 7,
        name: 'Statistics',
        data: {
          name: 'Software Engineering',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
      {
        id: 8,
        name: 'Software Engineering',
        data: {
          name: 'Software Engineering',
          vision:
            'To prepare students for successful media professionals and specialists for media-related careers. The department seeks to inculcate the values of truth, objectivity and impartiality among the students so that they may perform their roles as disseminators of knowledge and makers of opinion without any bias and prejudice.',
          mission:
            'To promote healthy and positive approach towards the communication of information, knowledge and opinion.',
          introduction:
            'Communication and media studies have gained vital importance in this age of science and information technology. A nation cannot safeguard its domestic and foreign interests, and get its due status in the globe without using its communication channels effectively. Advancement in information technology has made the world a global village. So, it is the need of the hour to give special focus on mass media education. Although Mass Communication is an emerging discipline, yet, it has got paramount importance in recent times. Media is playing a vital role in promoting different ideologies both in the domestic arena and around the globe. It is a reality, that a plenty of factors influence the production and consumption of the message for effective communication. The productions of media contents have to pass through different phases. Therefore, in-depth understanding of covert and overt pressures on the production of the media contents is indispensable for the students of Mass Communication. Public Relations, Communication Strategy, Advertising Campaign, Media Policy, Image Building and Public Opinion Formation are the basic tools of communication in media studies. Keeping in view the challenges of modern time, Government College University, Faisalabad established the Department of Mass Communication in 2005. The foremost objective was to provide an opportunity to the students to equip themselves with the blend of skills and knowledge to meet challenges in national and international arena. The department has an excellent academic environment. All the faculty members are experienced and qualified. Students are also being benefited from the expertise of media educators and known professionals.',
        },
      },
    ],
  },
];

const Navbar = () => {
  const [isHover, toggleHover] = React.useState(false);
  const [isHoverList, toggleHoverList] = React.useState(false);
  const [sideShow, setSideShow] = React.useState(false);

  const handleShow = () => {
    setSideShow(true);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  };

  return (
    <div className="w-full relative flex-col">
      <div className="w-full  bg-bgColor text-white">
        <div className="md:w-[90%] w-[80%] p-2 m-auto flex items-center justify-between">
          <div className="md:w-[20%] w-[50%] items-center flex ">
            <div className="w-full" onClick={handleShow}>
              <GoThreeBars className="text-textColor md:hidden flex text-3xl" />
            </div>
            <Link to="/home">
              <div className=" w-full cursor-pointer">
                <img className="w-[50px]" src={GPCSFLogo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="md:flex text-[14px] mr-16 hidden items-center  md:gap-4 lg:gap-6 xl:gap-12">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>

            {/* Removed Admissions menu */}

            <motion.div
              onMouseOver={() => {
                toggleHoverList(true);
              }}
              className="flex relative cursor-pointer items-center "
              onMouseLeave={() => {
                toggleHoverList(false);
              }}
            >
              <div>Faculity</div>
              <BiChevronDown className="text-3xl group-hover:text-textColor" />
              <motion.div
                className="absolute bg-bgColor   text-white top-10 left-0 !w-60 !p-8  z-50 !flex !flex-col gap-4 "
                initial="exit"
                animate={isHoverList ? 'enter' : 'exit'}
                variants={subMenuAnimate}
              >
                {FaculityData.map((item) => (
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{
                      position: 'relative',
                      '&:hover .subCatTyp': {
                        display: 'flex',
                        flexDirection: 'column',
                      },
                    }}
                    key={item.id}
                  >
                    <div className="navbarLink">{item.programe}</div>
                    <AiOutlineRight />

                    <Box
                      sx={{
                        position: 'absolute',
                        left: '100%',
                        top: 0,
                      }}
                      display={'none'}
                      className="subCatTyp bg-bgColor w-44 p-4 gap-2"
                    >
                      {item.courses.map((course) => (
                        <Link
                          key={course.id}
                          state={{ data: course.data }}
                          to={`/programes/${course.name}`}
                        >
                          <div className="navbarLink">{course.name}</div>
                        </Link>
                      ))}
                    </Box>
                  </Box>
                ))}
              </motion.div>
            </motion.div>
            {/* <Link to="/colleges">Colleges</Link>
            <Link to="/acadamic">Acadamic</Link>
            <Link to="/qec">Qec</Link> */}

            <Link
              to="/login"
              className="text-white navbarLink bg-bgColor lg:px-12 md:px-6 text-[16px] hover:bg-textColor transition-all ease-out duration-500 hover:text-bgColor py-4 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
