import './App.css';
import Avatar from './img/avatar.png'
import Programming from './img/programming.svg'
import Html from './img/imgAbout/html.svg'
import Css from './img/imgAbout/css.svg'
import Js from './img/imgAbout/javascript.svg'
import ReactJs from './img/imgAbout/react.png'
import ReduxJs from './img/imgAbout/redux.svg'
import NodeJs from './img/imgAbout/nodejs.svg'
import MySql from './img/imgAbout/mysql.svg'
import Git from './img/imgAbout/git.png'
import Project from './component/Project';

function App() {

  const projects = [
    {
      id: 1,
      projectName: 'Clon mercadoLibre',
      projectImg: Avatar,
      projectTecnologies: 'react'
    },
    {
      id: 2,
      projectName: 'Clon twitter',
      projectImg: Avatar,
      projectTecnologies: 'react'
    },
    {
      id: 3,
      projectName: 'Clon netflix',
      projectImg: Avatar,
      projectTecnologies: 'react'
    }
  ]
  
  const navLinks = document.querySelectorAll('.navLink');
  const fontSizes = document.querySelectorAll('.chooseSize span');
  const colorPalette = document.querySelectorAll('.chooseColor span');
  var root = document.querySelector(':root');
  const showMenu = () =>{
    document.getElementById("nav-menu").classList.add("showMenu")
  }

  const closeMenu = () =>{
    document.getElementById("nav-menu").classList.remove("showMenu")
  }

  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
  
    navMenu.classList.remove('showMenu')
  }
  const linkMenu = () => {linkAction()}
  navLinks.forEach(n => n.linkMenu)

  const openThemeModal = () =>{
    document.getElementById('customizeTheme').style.display = 'grid'
  }

  const closeThemeModal = (e) => {
    if(e.target.classList.contains('customizeTheme')){
      document.getElementById('customizeTheme').style.display = 'none'
    }
  }

  const removeSizeSelector = () => {
    document.querySelector(".fontSize1").classList.remove('active')
    document.querySelector(".fontSize2").classList.remove('active')
    document.querySelector(".fontSize3").classList.remove('active')
    document.querySelector(".fontSize4").classList.remove('active')
  }

  const sizeChange = (e) => {
    removeSizeSelector()
    let fontSize;
    e.target.classList.toggle('active')
    if(e.target.classList.contains('fontSize1')){
      fontSize = '12px'
    } else if(e.target.classList.contains('fontSize2')){
      fontSize = '14px'
    } else if(e.target.classList.contains('fontSize3')){
      fontSize = '16px'
    } else if(e.target.classList.contains('fontSize4')){
      fontSize = '18px'
    }
    document.querySelector('html').style.fontSize = fontSize;
  }

  fontSizes.forEach(sizeChange)


  const removeColorSelector = () => {
    document.querySelector(".color1").classList.remove('active')
    document.querySelector(".color2").classList.remove('active')
    document.querySelector(".color3").classList.remove('active')
    document.querySelector(".color4").classList.remove('active')
    document.querySelector(".color5").classList.remove('active')
  }

  const chooseColor = (e) => {
    let primaryHue = 152;
    removeColorSelector()
    if(e.target.classList.contains('color1')){
      primaryHue = 252;
    } else if(e.target.classList.contains('color2')){
      primaryHue = 52;
    } else if(e.target.classList.contains('color3')){
      primaryHue = 152;
    } else if(e.target.classList.contains('color4')){
      primaryHue = 352;
    } else if(e.target.classList.contains('color5')){
      primaryHue = 202;
    }

    e.target.classList.add("active")
    root.style.setProperty('--primary-color-hue', primaryHue)
  }
  colorPalette.forEach(chooseColor)

    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

  const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty("--dark-color-lightness", darkColorLightness)
  }


  const bg2Btn = () => {
    
    document.querySelector('.bg1').classList.add('active')
    document.querySelector('.bg2').classList.remove('active')
    document.querySelector('.bg3').classList.remove('active')
    window.location.reload()
  }

  const bg1Btn = () => {
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLightness = "92%";
    
    document.querySelector('.bg2').classList.add('active')
    document.querySelector('.bg1').classList.remove('active')
    document.querySelector('.bg3').classList.remove('active')
    changeBG()
  }

  const bg3Btn = () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";
    
    document.querySelector('.bg3').classList.add('active')
    document.querySelector('.bg1').classList.remove('active')
    document.querySelector('.bg2').classList.remove('active')
    changeBG()
  }

  
  

  return (
    <>
      <header className="header">
    <nav className="nav padd15">
      
      <a href="#home" className="navLogo">
        <h2>Jano Melul</h2>
      </a>
      <div className="navMenu" id="nav-menu">
        
        <ul className="navList">
          <li className="navItem">
            <a href="#home" onClick={linkMenu} className="navLink activeLink">Home</a>
          </li>
          <li className="navItem">
            <a href="#about" onClick={linkMenu} className="navLink">About</a>
          </li>
          <li className="navItem">
            <a href="#portfolio" onClick={linkMenu} className="navLink">Portfolio</a>
          </li>
          <li className="navItem">
            <a href="#contact" onClick={linkMenu} className="navLink">Contact</a>
          </li>
        </ul>
        <div className="navClose" id="nav-close" onClick={closeMenu}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
     
      <div className="navBtns">
       
        <i onClick={openThemeModal} className="fa-solid fa-palette changeTheme"></i>
        
        <div className="navToggle" id="nav-toggle" onClick={showMenu}>
          <i className="fas fa-border-all"></i>
        </div>
      </div>
    </nav>
  </header>

  
  <main className="mainContent">
   
    <section id="home" className="home">
      <div className="container">
        <div className="intro">
          <div className="presentation">
            <p className="hello">Hola, mi nombre es</p>
            <h1 className="name">Jano Melul</h1>
            <h2 className="front">Desarrollador Front End</h2>
            <p className="description">Soy una persona apasionada e interesada por la tecnología. Me encanta estar en
              constante
              aprendizaje y desarrollándome como profesional, mejorando mis habilidades técnicas y blandas. Busco una
              oportunidad laboral en la que poder crecer en un entorno colaborativo.</p>
            <button className="cv btn">Descargar CV</button>
          </div>
          <div className="imgContainer">
            <img className="programming" src={Programming} alt='Programando' />
          </div>
          
        </div>
        
      </div>
      
      <div className="scrollDown">
        <a href="#home" className="mouseWrapper">
          <span>Scroll Down</span>
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </a>
      </div>
    </section>
    
    <section className="about" id="about">
      <div className="container">
        
        <h2 className="sectionTitle padd15">
          About Me
        </h2>
        <div className="row">
          <div className="aboutImg padd15">
            
            <img src={Avatar} alt="avatar" />
          </div>
          <div className="aboutContent padd15">
            <div className="rounded">
              <div className="row">
                <div className="aboutText padd15">
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati natus quidem dolor, quo ex dolores. Nam in fuga ad ab aliquid eaque, ullam explicabo nesciunt perspiciatis temporibus suscipit officia voluptate.
                  </p>
                  <div>
                    <button href="#" className="btn">Download Cv</button>
                  </div>
                </div>
                <div className="skills padd15">
                  <ul className="skillsList">
                    <li>
                      <img src={Html} alt="Html5" />
                      <p>Html5</p>
                    </li>
                    <li>
                      <img src={Css} alt="Css3" />
                      <p>Css3</p>
                    </li>
                    <li>
                      <img src={Js} alt="JavaScript" />
                      <p>JavaScript</p>
                    </li>
                    <li>
                      <img src={ReactJs} alt="React" />
                      <p>React</p>
                    </li>
                    <li>
                      <img src={ReduxJs}alt="Redux" />
                      <p>Redux</p>
                    </li>
                    <li>
                      <img src={NodeJs} alt="Node.js" />
                      <p>Node.js</p>
                    </li>
                    <li>
                      <img src={MySql} alt="MySql" />
                      <p>MySql</p>
                    </li>
                    <li>
                      <img src={Git} alt="Git" />
                      <p>Git</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
    
    <section className="portfolio section" id="portfolio">
      <div className="container">
        
        <h2 className="sectionTitle padd15">Portfolio</h2>
        <div className="row">
          <div className="portfolioFilter padd15">
            <div className="portfolioFilterInner">
              <button className="button active">Todos</button>
              <button className="button">React</button>
              <button className="button">JavaScript</button>
              <button className="button">Node.js</button>
            </div>
          </div>
        </div>
        <div className="row">
          {
              projects.map((project) => {
              return <Project key={project.id} projectName={project.projectName} projectImg={project.projectImg} projectTecnologies={project.projectTecnologies}/>
              })
          }
          
          
          
          
        </div>
      </div>
    </section>
    
    <section className="contact section" id="contact">
      <div className="container">
      
      <h2 className="sectionTitle padd15">Contacto</h2>
      <div className="row">
        <div className="contactBox padd15">
          <div className="contactData">
            <div className="contactInformation">
              <h3 className="contactSubtitle">Call us for instant support</h3>
              <span className="contactDescription">
                <i className="fa-brands fa-whatsapp contactIcon"></i>
                +341 683-5032
              </span>
            </div>
              <div className="contactInformation">
              <h3 className="contactSubtitle">Write us by mail</h3>
              <span className="contactDescription">
                <i className="fa-solid fa-envelope contactIcon"></i>
                jannomelul@gmail.com
              </span>
            </div>
          </div>
        </div>
        <form action="" className="contactForm padd15">
          <div className="contactInputs">
            <div className="contactContent">
              <input type="email" className="contactInput" />
              <label htmlFor="" className="contactLabel">Email</label>
              <span></span>
            </div>
            <div className="contactContent">
              <input type="text" className="contactInput" />
              <label htmlFor="" className="contactLabel">Asunto</label>
              <span></span>
            </div>
            <div className="contactContent contactArea">
              <textarea name="" id="" cols="30" rows="10" className="contactInput"></textarea>
              <label htmlFor="" className="contactLabel">Mensaje</label>
              <span></span>
            </div>
          </div>
          <button type="submit" className="btn">Enviar Mensaje</button>
        </form>
      </div>
    </div>
    </section>
  </main>
  <footer className="footer">
    <div className="container">
      <div className="footerText padd15">
        <p>&copy; Jano Melul</p>
      </div>
    </div>
  </footer>
  <div id="customizeTheme" className="customizeTheme" onClick={closeThemeModal}>
    <div className="card">
      <h2>Customize your view</h2>
      <p>Manage your font size, color, and background</p>
      <div className="fontSize">
        <h3>Font Size</h3>
        <div>
          <h6>Aa</h6>
          <div onClick={sizeChange} className="chooseSize">
            <span className="fontSize1"></span>
            <span className="fontSize2"></span>
            <span className="fontSize3 active"></span>
            <span className="fontSize4"></span>
          </div>
          <h3>Aa</h3>
        </div>
      </div>

      <div className="color">
        <h3>Color</h3>
        <div onClick={chooseColor} className="chooseColor">
          <span className="color1"></span>
          <span className="color2"></span>
          <span className="color3 active"></span>
          <span className="color4"></span>
          <span className="color5"></span>
        </div>
      </div>

      <div className="background">
        <h3>Background</h3>
        <div className="chooseBg">
          <div onClick={bg1Btn} id="bg1" className="bg1">
            <span></span>
            <h5 htmlFor="bg1">Light</h5>
          </div>
          <div onClick={bg2Btn} id="bg2" className="bg2 active">
            <span></span>
            <h5 htmlFor="bg2">Dim</h5>
          </div>
          <div onClick={bg3Btn} id="bg3" className="bg3">
            <span></span>
            <h5 htmlFor="bg3">Dark</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}

export default App;
