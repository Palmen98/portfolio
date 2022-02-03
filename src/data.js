import GitlabNotifyer from './images/GitlabNotifyer.PNG'
import KitchenOverwatchSystem from './images/KitchenOverwatchSystem.PNG'
import HomeAlarm from './images/Presenting data.PNG'
import QuizGame from './images/QuizGame.PNG'
import PalmMedia from './images/PalmMedia.png'
export const projects = [
  {
    title: 'GitlabNotifyer',
    subtitle: 'MERN Stack and Firebase',
    description:
        'GitlabNotifyer has a login system which is connected to firebase, after logged in you select your gitlab group by entering the ID. Then information from GitLab is displayed, furthermore slack settings are connected which can notify you on slack when turned on and an update on GitLab.',
    image: GitlabNotifyer
    // link: ''
  },

  {
    title: 'PalmMedia',
    subtitle: 'React.js, Sanity.io and TailwindCss',
    description:
        'A social media app were I have used the techniques React.js with TailwindCSS to make the Web GUI and Sanity as backend to work as a database for the created users, pins, comments and saved images.',
    image: PalmMedia,
    link: 'https://palmmedia.netlify.app/'
  },
  {
    title: 'IoT, Kitchen Overwatch system',
    subtitle: 'React and Python',
    description:
        'My first IoT project, which is a system that collects data from the kitchen whenever someone walks by. The system consist of a Lopy4, PIR sensor and temperatur sensor. The data are temperature in Celsius and Farenheit, the timestamp of the latest trigger and how many times it has been triggered per day.',
    image: KitchenOverwatchSystem
    // link: ''
  },
  {
    title: 'IoT, Home Alarm',
    subtitle: 'Python and ubidots',
    description:
        'The system collects data from my home whenever someone walks by. The system consist of a Lopy4, PIR sensor and push button. The data gather is sent to my ubidots dashboard, on ubidots can the home alarm mode change between 3 modes. mode [0] the alarm is turned off, [1] alarm is on silent mode and [2] the alarm is fully armed. When the alarm is fully armed it plays a super mario tune to scare of burglars. ',
    image: HomeAlarm
    // link: ''
  },
  {
    title: 'QuizGame',
    subtitle: 'Javascript,HTML and CSS',
    description:
        'A Quiz that gets questions from APIs and stores the games locally with local storage.',
    image: QuizGame
    // link: ''
  }
]

export const skills = [
  'JavaScript', 'C#', 'PHP', 'Python', 'GitHub', 'GitLab', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'Node.js', 'React.js', 'TypeScript', 'Express', 'API', 'MongoDB', 'MySQL', 'NoSQL', 'Cypress', 'Jest', 'Photoshop', 'Illustrator', '3D Studio Max'
]
