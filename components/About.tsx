import React from 'react'
import Image, { StaticImageData } from 'next/image'

export default function About() {
  return (
    <section id='about' className='dark-bg'>
      <div className='flex'>
        <div className='flex-full'>
          <AboutCard
            title='Quantitative Methods'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={[
              'Monte Carlo Simulations',
              'Finite Difference Methods',
              'Stochastic Processes',
              'PDE Solvers.',
            ]}
          />
          <AboutCard
            title='Financial Instruments'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={[
              'Derivatives',
              'Forex',
              'Fixed Income',
              'Interest Rate Swaps',
              'Equities',
            ]}
          />
          <AboutCard
            title='Backend Technologies'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={[
              'Java',
              'Socket.IO',
              'Spring Boot',
              'Microservices',
              'Hibernate',
              'Spring Security',
              'Spring Cloud',
              'Spring Batch',
              'Spring Data',
              'NodeJs',
              'Express',
              'Sequelize',
              'RestfulWeb service',
              'Python',
              'Flask',
              'Cron Job',
            ]}
          />
          <AboutCard
            title='Market Data Exchange Connectivity'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={[
              'FIX protocol',
              'Summit',
              'MarkitWire',
              'OMS (Order ManagementSystem)',
              'REST APIs',
              'WebSockets',
            ]}
          />
          <AboutCard
            title='Frontend Technologies'
            icon='/icons/code.svg'
            description=''
            images={['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Angular']}
          />
          <AboutCard
            title='Low-Latency System Design'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={[
              'Multi-threading',
              'Parallel processing',
              'High-throughput',
              'Kernel bypass',
              'Realtime data processing',
            ]}
          />
          <AboutCard
            title='Algorithmic Trading Strategy Development'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={[
              'Quantitative analysis',
              'High-frequency trading',
              'Arbitrage strategies',
              'Market making',
              'Backtesting',
            ]}
          />
          <AboutCard
            title='Programming Languages'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={['C++', 'JavaScript', 'Core Java', 'Python']}
          />

          <AboutCard
            title='DevOps Technologies'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={['Jenkins', 'Docker', 'Git', 'Kubernetes', 'Ansible']}
          />
          <AboutCard
            title='Message Brokers & Cache'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={['Kafka', 'RabbitMQ', 'Redis']}
          />
          <AboutCard
            title='Cloud Technologies'
            icon='/icons/code.svg'
            description='I develop cross-platform mobile applications.'
            images={['GCP', 'AWS', 'AZURE']}
          />
        </div>
        <div className='flex-full about-text'>
          <h5 className='gray'>Introduce</h5>
          <h1 className='white'>Hello, I&#39;m Shashikumar</h1>
          <h3 className='white'>
            It is possible to fly without motors, but not without knowledge and
            skill.
          </h3>
          <div>
            <h3 className='white' style={{ paddingTop: '1rem' }}>
              Education
            </h3>
            <p className='gray'>
              <hr />
              <p style={{ textAlign: 'left' }}>
                National Institute of Technology Karnataka
              </p>
              <br />
              <p style={{ textAlign: 'left' }}>
                Branch : Electrical and Electronics Engineering.
              </p>
              <hr style={{ border: '1px dashed white' }} />
            </p>
            <p className='gray'>
              Alvas Pre-university College : 97.33%
              <br />
              <br />
              <p style={{ textAlign: 'left' }}>
                Physics, Chemistry, Mathematics, Computer Science : 99.5%
              </p>
              <br />
              <p style={{ textAlign: 'left' }}>
                Karnatak CET State Rank: 632 COMEDK State Rank : 342
              </p>
              <hr style={{ border: '1px dashed white' }} />
            </p>
            <p className='gray'>
              S G Shintri English Medium School : 96.80%
              <br />
            </p>
          </div>
          <div>
            <p className='gray'>
              <hr />
              <p style={{ textAlign: 'left' }}>
                I have pursued my dream of becoming both a Quantitative
                Developer and a Full Stack Developer, a lifelong ambition that
                continues to drive my passion for technology and finance. Over
                the past six years, I've had the privilege of working with top
                companies, enhancing my expertise through collaboration with
                diverse clients, and creating impactful solutions that serve
                both business and customer needs. My journey has allowed me to
                blend my skills in building low-latency, algorithmic trading
                systems with my background in software development, making me
                adept at handling complex challenges across different domains.
              </p>
              <br />
              <p style={{ textAlign: 'left' }}>
                I am naturally persevered, self-confident, quietly curios,
                innovative and constantly challenging my skills.
              </p>

              <hr />
            </p>
            <p className='gray' style={{ textAlign: 'left' }}>
              In the world of quantitative development, my focus is on
              low-latency applications and high-frequency trading (HFT). I excel
              at building ultra-fast trading systems designed for optimal speed
              and precision. My expertise in C++ pricing libraries allows me to
              develop advanced pricing models for derivatives, forex, and fixed
              income instruments, capable of executing complex calculations in
              real time. I am well-versed in quantitative finance techniques,
              including Monte Carlo simulations, finite difference methods,
              stochastic processes, and PDE solvers.
              <br />
              <hr style={{ border: '.5px dashed white' }} />
              My experience extends to multi-threading, parallel processing,
              kernel bypass, and real-time data processing, all of which are
              crucial for high-throughput systems in HFT. I also have a strong
              command of the FIX protocol, allowing me to facilitate seamless
              communication between trading systems and various exchanges. I
              design systems that handle real-time market data processing and
              order execution with unparalleled efficiency, ensuring timely and
              accurate trade decisions.
              <br />
              <hr style={{ border: '.5px dashed white' }} />
              Furthermore, I have extensive experience with Order Management
              Systems (OMS), REST APIs, WebSockets, FPGA, and market
              connectivity solutions like Summit and MarkitWire. I am adept at
              integrating and normalizing market data from multiple exchanges,
              enabling informed decision-making and execution of complex trading
              strategies.
              <br />
              <hr style={{ border: '.5px dashed white' }} />
              I am a highly skilled developer with extensive experience in
              building web applications, microservices, and low-latency trading
              systems. My expertise spans a broad range of technologies,
              including Node.js, Spring Boot, Java, PostgreSQL, Oracle, Express,
              Sequelize, Knex, Hibernate, and cloud platforms like GCP and AWS.
              I excel at designing scalable, highly available applications with
              cloud-native architectures, leveraging my proficiency in cloud
              infrastructure to ensure optimal performance, fault tolerance, and
              security.
              <br />
              <hr style={{ border: '.5px dashed white' }} />
              On the back end, I am adept at database management, with deep
              experience in PostgreSQL and Oracle. I design efficient schemas,
              optimize queries, and utilize ORM libraries like Sequelize and
              Knex to streamline data operations, ensuring smooth
              application-to-database interaction. My technical acumen also
              extends to front-end development, where I specialize in building
              responsive, intuitive user interfaces using ReactJS, Redux,
              Angular, HTML, and CSS. I deliver dynamic Single Page Applications
              (SPAs) with seamless user experiences and optimized performance
              across different devices.
              <br />
              <hr style={{ border: '.5px dashed white' }} />
              Beyond trading systems, I am also a full-stack developer with a
              deep understanding of high-level and low-level system design. I
              architect scalable microservice architectures for web
              applications, utilizing cloud infrastructure for distributed
              computing. My ability to design systems that are modular,
              efficient, and scalable ensures that businesses can grow without
              compromising on performance.
              <br />
              <hr style={{ border: '.5px dashed white' }} />
              My passion lies in pushing the boundaries of trading technology by
              combining cutting-edge financial models with low-latency
              execution. Whether I’m building a full-stack web application or
              optimizing a C++ pricing engine, I bring a unique blend of
              technical expertise and financial acumen that drives both
              performance and profitability. Let's connect to explore how my
              skills can elevate your trading and technology strategies.
              <hr style={{ border: '.5px dashed white' }} />
            </p>
          </div>
        </div>
      </div>

      <div className='flex partners justify-space'>
        <Image
          src='/images/partners/wipro.svg'
          height={45}
          width={180}
          alt='wallety'
        />
        <Image
          src='/images/partners/mobiotics.svg'
          height={45}
          width={180}
          alt='artisty'
        />
        <Image
          src='/images/partners/lotus.png'
          height={45}
          width={180}
          alt='khedma-lik'
        />
        <Image
          src='/images/partners/db.png'
          height={200}
          width={180}
          alt='directy'
        />
        <Image
          src='/images/partners/HSBC-Logo.png'
          height={80}
          width={180}
          alt='directy'
        />
      </div>
    </section>
  )
}

type Props = {
  title: string
  icon: string | StaticImageData
  description: string
  images: string[]
}

function AboutCard({ title, icon, images }: Props) {
  return (
    <div className='light-bg about-card'>
      <div className='flex justify-space'>
        <h3 className='green'>{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          padding: '1rem 0',
        }}
      >
        {images?.map((item, index) => (
          <span className='skill-item' style={{ color: 'white' }} key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
