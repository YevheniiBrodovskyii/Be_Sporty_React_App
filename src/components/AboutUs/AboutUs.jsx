import {
  AboutUsContent,
  AboutUsTitle,
  AboutUsDescr,
  AboutUsImg,
  AboutUsAuthors,
  AboutUsAuthorsSpan,
} from "./styled.js";

function AboutUs() {
  return (
    <AboutUsContent>
      <AboutUsTitle>We are BeSporty</AboutUsTitle>
      <AboutUsDescr>
        The main goal of BeSporty is to offer the user functionality with which
        he can get acquainted with the world of athletic exercises and create a
        suitable training plan for himself. This means the ability to
        independently organize your training program for the whole week, while
        avoiding critical mistakes that BeSporty will definitely warn you about.
        You have the ability to edit your training program at any time. In
        BeSporty you will find both basic and isolation exercises. Thanks to
        BySporty, sports will be just a pleasure!
      </AboutUsDescr>
      <AboutUsImg src="./assets/about_img.webp" alt="About_img" />
      <AboutUsAuthors>
        Developed by{" "}
        <AboutUsAuthorsSpan href="#">Vladyslav Lakhman</AboutUsAuthorsSpan> and{" "}
        <AboutUsAuthorsSpan href="#">Andrei Apanasik</AboutUsAuthorsSpan>
      </AboutUsAuthors>
    </AboutUsContent>
  );
}

export default AboutUs;
