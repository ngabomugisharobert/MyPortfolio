// Purpose: To store the content of the website.
const content = {
  nav: {
    logo: 'N M R',
    links: [
      { text: 'Who_Am_I', to: 'mywork' },
      { text: 'Get_in_Touch', to: 'mycontact' },
    ],
  },
  header: {
    img:process.env.PUBLIC_URL + '/assets/profile.png',
    imgPlaceholder:
    process.env.PUBLIC_URL + '/assets/profile.png',
    text: ['Hi!', "It's me Robert.", 'I am '],
    typical: [
      'Software Engineer. 🖥',
      2000,
      'Challenges Cracker. 👨🏽‍💻',
      2000,
      'Mobile Developer. 📱',
      2000,
    ],
    btnText: 'Articles on Medium',
  },
  work: {
    title: '',
    img: process.env.PUBLIC_URL + '/assets/review.svg',
    imgPlaceholder:
      'data:image/png;base64,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',
    projectName: 'Who am I',
    desc:
      // ' I’m a software developer, I enjoy being challenged and engaging with projects that requires me to work outside my comfort and knowledge set, as I continue to learn new languages and development techniques that are important to me.',
      ['Driven and adaptable Software Engineer with a passion for solving complex problems and delivering impactful software solutions. I specialize in designing, building, and optimizing applications that seamlessly integrate user needs with technical excellence. My approach focuses on creating scalable, maintainable, and high-performance systems while ensuring alignment with business objectives. By leveraging modern development practices, I deliver software that is both robust and user-friendly.',
      'I bring strong technical expertise in software architecture, cloud computing, and backend development, complemented by proficiency in a diverse set of languages and frameworks, including Kotlin, Python, JavaScript, React, Node.js, and Java.My skill set extends to working with cloud platforms like AWS and Google Cloud, database systems such as PostgreSQL, MongoDB, and Redis, and tools like Docker, Kubernetes, and Jenkins.My work spans end- to - end development, system architecture design, DevOps practices, and cross- functional team collaboration, enabling me to transform ideas into high - quality, impactful software.']
  },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
    ],
    desc: `this is me try my best`,
  },
  contact: {
    title: 'Ping Me!',
    desc:
      "robertmugishatc@gmail.com",
    socials: [
      {
        alt: 'github',
        img: process.env.PUBLIC_URL + '/assets/github.png',
      },
      {
        alt: 'link',
        img: process.env.PUBLIC_URL + '/assets/link.png',
      },
    ],
    img:
      '',
    imgPlaceholder:
      'data:image/jpeg;base64,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',
  }
};


export default content;