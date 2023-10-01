export interface IExperience {
  id: number;
  projectName: string;
  company: string;
  description: string;
  time: string;
  technicals?: string,
  backendRp?: string[],
  frontendRp?: string[]
}

export const Experiences_Data: IExperience[] = [
  {
    id: 1,
    projectName: 'Fullstack Developer - Euro Fitness Web',
    company: 'Senlink Technology Development JSC',
    description:'An ERP system is built on the web platform',
    time: 'Oct 2020 - Mar 2022 (1 yr, 5 mos )',
    technicals: 'Java 1.8, Spring Boot, PostgreSQL, Redis cache, RESTful API, RabbitMQ, ReactJS, Rematch, Ant Design',
    backendRp: [
      'Build microservices via Java Spring Boot',
'Use RabbitMQ to communicate between microservices',
'Create API based on RESTful API architecture',
'Create cron job services for complex product calculation, delete the expired object',
'Authentication and Authorization by Spring Security, JWT',
'Build a database with PostgreSQL, HikariCP, JPA',
'Database migration with Liquibase',
'Use Redis Cache for caching session users',
'Create import - export excel, send mail function',
    ],
    frontendRp: [
      'Build base with ReactJS, Axios interceptor, Redux',
'Build UI, logic, and reusable components.',
'Maintain, upgrade old versions, and optimize code.',
'Design UI by Ant Design v4.x',
'Style component by ‘styled-components’',
'Managing global states by Rematch',
    ]
  },
  {
    id: 2,
    projectName: 'Backend Developer - MBAL Web',
    company: 'Senlink Technology Development JSC',
    description:'A CRM system serves insurance contract management ',
    time: 'Sep 2021 - Dec 2022 (1 yr, 4 mos)',
    technicals: 'Java 11, Spring Boot, PostgreSQL, GraphQL, gRPC, MinIO',
    backendRp: [
      'Build microservices via Java Spring Boot',
'Use gRPC to communicate between microservices',
'Create API based on GraphQL architecture & an API Gateway service',
'Build database with PostgreSQL, HikariCP, JPA',
'Database migration with Liquibase',
'Use Database Replication solution: a Master database & a Slave database ',
'Upload, and download files, and documents to the MinIO server',
'Create import - export excel, send mail function',
'Create cron jobs about updating data, send mail',
'Maintain, check log product in Rancher, fix bug in Jira ',
'Optimize code (improve performance of system) with any solutions: bulk insert, multi-thread,…',
    ]
  },
  {
    id: 3,
    projectName: 'Frontend Developer - Smart Plug Application',
    company: 'Senlink Technology Development JSC',
    description:'Application support for IoT smart home ',
    time: 'Mar 2022 - Aug 2022 (5 mos)',
    technicals: 'Typescript, React Native, Rematch, Firebase, Axios',
    frontendRp: [
      'Build project base using React Native, Axios Instance',
'Build UI, logic, components',
'Managing state using Redux - Rematch',
'Scan and connect device with BLE Manager',
'Connect manual wireless network with WIFI Reborn',
'Notification with Firebase & Notifee'
    ]
  },
  {
    id: 4,
    projectName: 'Frontend Developer - WeCheck Application',
    company: 'Senlink Technology Development JSC',
    description:'Application to support workers`s rights',
    time: 'Jun 2022 - Dec 2022 (6 mos)',
    technicals: 'Typescript, React Native, Redux Toolkit, Firebase, Axios, Socket IO, React Query',
    frontendRp: [
      'Build project base with Typescript, React Native, Axios instance',
'Build UI, logic, reusable components, custom hook',
'Managing state using Redux Toolkit',
'Caching asynchronous data with React Query',
'Chat realtime service using Socket io',
'Notification with Firebase & Notifee',
'Mentor, support, review code for the team members',
'Maintain and optimize code',
'Build and upload to Google Play and App Store',
    ]
  },
  {
    id: 5,
    projectName: 'Frontend Developer - INSO WEB',
    company: 'Senlink Technology Development JSC',
    description:'A CRM system serves insurance contract management ',
    time: 'Jul 2022 - Oct 2022 (3 mos)',
    technicals: 'Typescript, ReactJS, Redux Saga, Material UI',
    frontendRp: [
      'Build UI, logic, components with ReactJS, TypeScript, RESTful API ',
      'Use Material-UI library to build UI/UX.',
      'Managing state using Redux Saga',
      'Maintain and optimize code',      
    ]
  },
  {
    id: 6,
    projectName: 'Frontend Developer - Chain99 Web',
    company: 'Moonlab (On-site)',
    description:'An advertising pages for blockchain business',
    time: 'Dec 2022 - Feb 2023 (2 mos)',
    technicals: 'Typescript, Next JS, Tailwind CSS, i18next',
    frontendRp: [
      'Build project base, UI, logic, components with TypeScript, Next JS',
'Style component, responsive by Tailwind CSS, DaisyUI, SCSS',
'Multi language with i18next',
'Maintain and optimize code',
    ]
  },
  {
    id: 7,
    projectName: 'Full-stack Developer - Tongdaididong MCC Web',
    company: 'Viettel Telecom (On-site)',
    description:'Mobile contact center is a CRM system for mobile switchboard',
    time: 'Feb 2023 - Sep 2023 (8 mos)',
    technicals: 'Java 1.8, Spring Boot, Java PrimeFaces, SOAP, Oracle SQL',
    backendRp: [
      'Create API service based on SOAP architecture',
    'Use Java and Spring Boot framework',
    'Build database with OracleSQL, JDBC-CP, JPA',
    'Build UI with PrimeFaces 7',
    'Maintain, check log server, resolve complaints from customers',
    ]
  },
  {
    id: 8,
    projectName: 'Full-stack Developer - Tongdaididong MCC Application',
    company: 'Viettel Telecom (On-site)',
    description:'A mobile app to manage customers, colleague groups, call history, view pack of data',
    time: 'April 2023 - Sep 2023 (6 mos)',
    technicals: 'Java 1.7, Spring MVC, OracleSQL, Dart, Flutter, GetX, Dio',
    frontendRp: [
      'Build project base, UI, logic, and components with Flutter',
      'Managing state by GetX ',
      'Call API using Dio Intercepter',
      'Sync contact data with Contact services',
      'Build and upload to Google Play and App Store',
    ],
    backendRp: [
      'Build a service and a website CRM via  Java Spring MVC',
'Create API based on RESTful API Architecture',
'Build database with OracleSQL, JDBC-CP, Mybatis',
'Using Redis cache for storage session user',
    ]
  },
  {
    id: 9,
    projectName: 'Full-stack Developer - DMS One Web',
    company: 'Viettel Telecom (On-site)',
    description:'A distribution management system is built on the web platform',
    time: 'Jun 2023 - Sep 2023 (3 mos)',
    technicals: 'Java 1.7, Struts, Oracle SQL, Tomcat',
    backendRp: [
      'Create API service based on RESTful architecture',
'Use Java EE, Servlet, Tomcat server',
'Build database with OracleSQL, Tomcat CP, JPA',
'Use Struts framework to build UI-UX',
'Maintain, fix bug',
    ]
  },
];