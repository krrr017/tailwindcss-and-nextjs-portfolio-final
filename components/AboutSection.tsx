import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Java"},
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "MySQL"},
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              I studied Web & Mobile App Development for a year in Cornerstone International Community College of Canada, in 2022.
            </p>
            <br />
            <p>
            I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, 
            helpful and polite, have a good sense of humour. I am able to work independently in busy environments 
            and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop leaning
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and design a desire to always push the limits of what is
              possible.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/avator.png"
              alt=""
              width={250}
              height={250}
              className="hidden md:block md:relative md:bottom-4 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
