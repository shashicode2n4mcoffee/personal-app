import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
      <section id='about' className='dark-bg'>
        <div className='flex'>
          <div className='flex-full'>
            <AboutCard
              title='Frontend Technologies'
              icon='/icons/code.svg'
              description=''
              images={[
                'html.png',
                'css.png',
                'js.png',
                'react-1.svg',
                'redux.svg',
                'angular.svg',
              ]}
            />
            <AboutCard
              title='Backend Technologies'
              icon='/icons/code.svg'
              description='I develop cross-platform mobile applications.'
              images={[
                'nodejs-2.svg',
                'java-4.svg',
                'spring.svg',
                'oracle-6.svg',
                'postgresql.svg',
                'mongodb-icon-1.svg',
              ]}
            />
            <AboutCard
              title='DevOps Technologies'
              icon='/icons/code.svg'
              description='I develop cross-platform mobile applications.'
              images={[
                'jenkins.svg',
                'docker.svg',
                'git.svg',
                'kubernets.svg',
                'ansible.svg',
              ]}
            />
            <AboutCard
              title='Cloud Technologies'
              icon='/icons/code.svg'
              description='I develop cross-platform mobile applications.'
              images={[
                'google-cloud-1.svg',
                'aws-2.svg',
                'azure.svg'
              ]}
            />
          </div>

          <div className='flex-full about-text'>
            <h5 className='gray'>Introduce</h5>
            <h1 className='white'>Hello, I&#39;m Shashikumar</h1>
            <h3 className='white'>
              Design is not just what it looks like. Design is how it works!
            </h3>
            <p className='gray'>
              I have proceeded my dream to be a developer as it has been my
              lifelong ambition. I am a talented Full Stack developer. During my
              4 years of work in multiple top companies, I had the opportunity
              to enhance my expertise by collaborating with different clients
              and by creating useful content for both business and customer use.
              <br />
              <br />I am naturally persevered, self-confident, quietly curios,
              innovative and constantly challenging my skills.
            </p>
          </div>
        </div>
        <div className='flex partners justify-space'>
          <Image
            src='/images/partners/wipro1.svg'
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
            height={45}
            width={180}
            alt='directy'
          />
        </div>
      </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    images:string[];
}

function AboutCard ({title, icon, images} : Props) {
    return (
      <div className='light-bg about-card'>
        <div className='flex justify-space'>
          <h3 className='green'>{title}</h3>
          <Image src={icon} width={28} height={28} alt={title} />
        </div>
        <div className='flex partners justify-space'>
            {images?.map((item,index)=>(<Image
            src={`/images/skill/${item}`}
            height={50}
            width={50}
            alt='wallety'
            key={index}
          />))}
          
        </div>
      </div>
    )
}