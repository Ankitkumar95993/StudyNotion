import HighlightText from "../components/core/Homepage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import Img1 from "../assets/Images/FoundingStory.png";
import StatsComponents from "../components/core/AboutPage/Stats";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="text-white">
      {/* section1 */}
      <section className="bg-richblack-800 p-12 relative h-[500px]">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-12">
            <header className="text-4xl text-richblack-5 text-center w-[60%] mx-auto">
              Driving Innovation in Online Education for a
              <HighlightText text={"Brighter Future"} />
              </header>
              <p className="mt-5 w-[50%] text-[14px] text-richblack-300 text-center mx-auto">
                Studynotion is at the forefront of driving innovation in online
                education. We're passionate about creating a brighter future by
                offering cutting-edge courses, leveraging emerging technologies,
                and nurturing a vibrant learning community.
              </p>
            
            <div className="flex gap-x-5 mt-12 bottom-32 w-[80%] mx-auto justify-evenly shadow-lg shadow-yellow-500">
              <img src={BannerImage1} />
              <img src={BannerImage2} />
              <img src={BannerImage3} />
            </div>
          </div>

        </div>
      </section>

      {/* section2 */}
      <section>
        <div className="mt-[200px] w-[70%] mx-auto text-center leading-6">
          <Quote />
        </div>
      </section>

      {/* section3 */}
      <section>
        <div className="flex flex-col gap-x-6 mt-[150px] w-[80%] mx-auto">
          <div className="flex gap-x-10 justify-evenly">
            <div className="flex flex-col w-[40%] justify-evenly items-start gap-15 h-[372px]">
              <h2 className="text-3xl text-pink-500 font-semibold ">Our Founding Story</h2>
              <p className="text-[14px] text-richblack-400 p-y-10">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-[14px] text-richblack-400 p-y-[30px]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            <div className="mt-8 h-[342px] shadow-lg  shadow-blue-400 ">
              <img src={Img1} />
            </div>
          </div>

          <div className="flex mt-[100px]  gap-x-12 mx-auto text-left justify-evenly p-12">
            <div className="leading-2 h-[250px] w-[45%]">
              <h1 className="text-3xl text-yellow-500 font-semibold">Our Vision</h1>
              <p className="text-richblack-500 text-[14px] mt-5">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="leading-2 h-[250px] w-[45%]">
              <h1 className="text-3xl text-blue-400 font-semibold">Our Mission</h1>
              <p className="text-richblack-500 text-[14px] mt-5">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* {section4} */}
      <StatsComponents />

      {/* section5 */}
      <section className="flex flex-col justify-center items-center w-[80%] mx-auto mt-[50px]">
        <LearningGrid/>
        <ContactFormSection/>
      </section>

      {/* section6 */}
      <section>
        <div className="mt-[100px]">
          {/* {reviews from others} */}
        </div>

      </section>

      <Footer className/>
    </div>
  );
};
export default About;
