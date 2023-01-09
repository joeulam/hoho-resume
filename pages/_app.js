import css from '../styles/home.css'

export default function Home() {
  return (
    <div class="homediv">

      <container class="namecard">
        <div class="firstcard">
          <h1>Joey Lam</h1>
          <h3>A programmer and a student</h3>
        </div>
        
      </container>
      
      <container class="namecard">
        <div class="firstcard">
          <h2>Here is some of my achivements</h2>
        </div>

        <div class="projectcon">
          <div class="ncl">
          
              <img src="https://www.alamancecc.edu/computer-information-technology-department-site/files/2020/02/ncl-logo.png"></img> 
            
              <div class="hidden">
                <h1>NCL Fall 2022</h1><br/>
                <h2>Individual Game</h2>
                <h3>Ranked 1159th place</h3>
              </div>
          
            
          </div>
          

          <div class="ncl">
            <img src="https://www.alamancecc.edu/computer-information-technology-department-site/files/2020/02/ncl-logo.png"></img> 
            
            <div class="hidden">
              <h1>NCL Fall 2022 Team Game</h1>
              
              <h3>Ranked 1159th place</h3>
            </div>
          </div>
          
          <div class="ncl">
            <img src="https://www.alamancecc.edu/computer-information-technology-department-site/files/2020/02/ncl-logo.png"></img> 
            
            <div class="hidden">
              <h1>NCL Fall 2022 Individual Game</h1>
              <h3>Ranked 1159th place</h3>
            </div>
          </div>


        </div>
      </container>

      <container class="namecard">
        Im currently working on
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