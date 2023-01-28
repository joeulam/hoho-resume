import css from '../styles/home.css'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    
    <div class="homediv">
      




      <container class="namecard">
        <div class="firstcard" id="title">
          <h1>Hi my name is Joey Lam</h1>
        <Typewriter
        options={{
          strings: ['developer', 'student'],
          loop: true,
        }}
          onInit={(typewriter) => {
          typewriter.typeString('I am an developer')
            .pauseFor(3500)
            .changeDeleteSpeed(52)
            .deleteChars(9)
            .typeString("student")
            .pauseFor(2500)
            .deleteChars(7)
            .start();
        }}
      />
      

          
        </div>
        <div>
        
    
        </div>
      </container>



      <container>
        <div class="firstcard">
          <h2>Here is some of my achivements</h2>
        </div>
      </container>

      <container>
        <div class="card" id ="c1">
          <div class="limg">
            <a href="https://cyberskyline.com/report/R5J1L7YN0BP8">
              <img src="https://www.alamancecc.edu/computer-information-technology-department-site/files/2020/02/ncl-logo.png"></img> 
            </a>
          </div>
        
          <div class="cleft">
          
                <h1>NCL Fall 2022</h1>
                <h2>Individual Game</h2>
                <h3>Ranked 1159th place</h3>
          </div>  
      </div>
      </container>
      




      <container>
        <div class="card" id="c2">
          <div class="limg">
            <a href="https://cyberskyline.com/report/86KN6BY4P0E2">
                <img src="https://www.alamancecc.edu/computer-information-technology-department-site/files/2020/02/ncl-logo.png"></img>   
            </a>
        </div>

          <div class="cleft">
            <h1>NCL Fall 2022</h1>
            <h2>Team Game</h2>
            <h3>Ranked 258th place</h3>
          </div>
                
        </div>
      </container>

      <container>
        <div class="card" id="c3">
          <div class="limg" id="c3i">
            <a href="https://www.freecodecamp.org/certification/joeulam/responsive-web-design">
              <img src="https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg"></img> 
            </a>
          </div>
          
          <div class="cleft" id="c3w">
              <h1>Reponsive Web Design</h1>
              <h2>Certificate</h2>
              <h3>Freecodecamp</h3>
          </div>
        </div>
      </container>

      
      
      <container>
        <div class="card" id="c1">
          <div class="limg">
            <a href="https://www.credly.com/badges/aa30c2a7-1819-47bf-a099-bb72ec1b97cf?source=linked_in_profile">
              <img src="https://images.credly.com/size/680x680/images/73e4a58b-a8ef-41a3-a7db-9183dd269882/image.png"></img> 
            </a>
          </div>
          
        <div class="cleft">
              <h1>Cloud Foundations</h1>
              <h2>Academy Graduate</h2>
              <h3>AWS</h3>
          </div>
        </div>
      </container>





      <container class="center">
        <h2 class="down">Im currently working on</h2>
        <div class="projectcon">
          <div class="ncl">
            <h1>Moogan</h1>
            <h2>2D parkour game</h2>
            <h3>Using Unity</h3>
          </div>
          <div class="ncl">
            <h1>Joey's profolio</h1>
            <h2>Contains all of my projects</h2>
            <h3>Using nextjs and css</h3>
          </div>
        </div>
      </container>
      

      <footer>
        <div class="con1">
          <h3>
            Contact me
          </h3>
          <p>Phone: <a href="tel:+16467446360">646-744-6360</a></p>
          <p>Email: <a href="mailto:joey.lamm@outlook.com">Joey.lamm@outlook.com</a></p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/joey-lam-89057021b/">Joey Lam</a></p>
        </div>
        
      </footer>
    </div>
  )
    
    
  
}

