import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Media.css'


// import image1 from '../src/assets/onepage1.png'
// import image2 from '../src/assets/onepage2.png'
// import image3 from '../src/assets/onepage3.png'


function App() {

  const [show, setshow] = useState(true)
  const [show_2, setshow_2] = useState(true)


  // page on scroll opecity 

  useEffect(() => {
    const handleScroll = () => {
      const allpages = document.querySelectorAll("#allpages");
  
      allpages.forEach((page, index) => {
        const pageTop = page.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (pageTop < windowHeight) {
          page.style.opacity = "1"; // Fully visible
          page.style.transform = "translateY(0)";
          page.style.transition = "opacity 0.8s ease, transform 0.7s ease";
        } else {
          page.style.opacity = "0"; // Hidden
          page.style.transform = "translateY(60px)";
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  // anchor tag slowely slide

  window.onload = function () {
    const container = document.querySelector('.big_5');
    if (container) {
      container.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.onclick = function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        };
      });
    }
  };




  // Star animation on page 3

  const stars = document.querySelectorAll(".Star");
  let currentstars = null;

  stars.forEach(star => {
    star.addEventListener('mouseenter', (star) => {
      currentstars = star.target;
      currentstars.style.cursor = "grabbing";
      currentstars.style.position = "absolute";
      console.log("jgvhtrdr")


    });
  });

  const handleStarMove = (e) => {
    if (currentstars) {
      currentstars.style.left = e.clientX + "px";
      currentstars.style.top = e.clientY + "px";
      currentstars.style.position = "absolute";
      // currentstars.style.Top = "100px";
    }
  };

  const handleStarUp = () => {
    currentstars = null;
  };

  document.addEventListener('mousemove', handleStarMove);
  document.addEventListener('mouseup', handleStarUp);



  // const images = [image1, image2, image3];

  // const [selectedimage, setselectedimage] = useState(0)
  // const [allimages, setallimages] = useState([image1, image2, image3])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setselectedimage(selectedimage => selectedimage > 2 ? 0 : selectedimage + 1)  a rite pan lakhi sakay

      // setselectedimage((prevIndex) => (prevIndex + 1) % allimages.length);  img hot atli var slide thatu rahse

  //   }, 5000)
  //   return () => clearInterval(interval);
  // }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const image = document.querySelector('.Big_Book img');


      if (scrollPosition > 0) {
        image.style.marginBottom = `${scrollPosition / 5}px`;
        image.style.marginTop = '380px';
      } else {
        image.style.marginTop = `${-scrollPosition / 10}px`;
        image.style.marginBottom = '0px';
      }
    };


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





    //  sticker location change

  useEffect(() => {


    let stickers = document.querySelectorAll(".sticker");
    let currentSticker = null;

    stickers.forEach(sticker => {
      sticker.addEventListener('mouseenter', (sticker) => {
        currentSticker = sticker.target;

      });
    });


    document.addEventListener('mousemove', (e) => {
      if (currentSticker) {
        currentSticker.style.left = e.clientX + "px";
        currentSticker.style.top = e.clientY + "px";
        currentSticker.style.cursor = "grabbing";
        currentSticker.style.position = "absolute";
        currentSticker.style.bottom = "100px";


      }
    });

    document.addEventListener('mouseup', () => {
      currentSticker = null;
    });




  }, []);



  return (
    <>

      <div className="main" >
        <div className="page1">
          <div className="big">
            <div className="left">
              <h2 className="edition">2024 EDITION</h2>
              <h1>Designing Digital<br />Products For Kids</h1>
              <h3>Deliver user Experience that Delight Kids,<br />Parents and Teacher</h3>
              <h4>A comprehensive Guide to beautiful, usable, ethical,<br />Digital Experience for Kids</h4>

              <div className="buy"

                onMouseEnter={() => setshow(false)}
                onMouseLeave={() => setshow(true)}

              >

                {show ? (<img id="img2" src="/buy_2.png" alt="Buy Button Hover" />

                ) : (
                  <img id="img1" src="/buy_1.png" alt="Buy Button Default" />
                )}

                <div className="product">
                  <img id="product" src="/product_hunt.png" alt="Product Hunt" />
                </div>


              </div>


            </div>

            <div>

              <img id="book" src="/book.png" alt="Book" />


              <img className="sticker" id="sticker1" src="/gamification new.png" alt="Gamification Sticker" />
              <img className="sticker" id="sticker2" src="/Interaction.png" alt="Interaction Sticker" />
              <img className="sticker" id="sticker3" src="/marketing.png" alt="Marketing Sticker" />
              <img className="sticker" id="sticker4" src="/safty_.png" alt="Safety Sticker" />
              <img className="sticker" id="sticker5" src="/UI.png" alt="UI Sticker" />
              <img className="sticker" id="sticker6" src="/user.png" alt="User Testing Sticker" />
              <img className="sticker" id="sticker7" src="/UX.png" alt="UX Sticker" />

            </div>



          </div>
        </div>

        <div className='page2' id='allpages'>

          <div className='big_2'>

            <div className='slide_container'>

              <div className='slides'>


                <div id='slide1'>

                  <img className='allslide' src="/slide1.jpeg" alt="" />
                  <img className='allslide' src="/slide2.png" alt="" />
                  <img className='allslide' src="/slide3.png" alt="" />
                  <img className='allslide' src="/slide4.png" alt="" />
                  <img className='allslide' src="/slide5.png" alt="" />

                </div>


                <div id='slide1'>

                  <img className='allslide' src="/slide1.jpeg" alt="" />
                  <img className='allslide' src="/slide2.png" alt="" />
                  <img className='allslide' src="/slide3.png" alt="" />
                  <img className='allslide' src="/slide4.png" alt="" />
                  <img className='allslide' src="/slide5.png" alt="" />

                </div>


                <div id='slide1'>

                  <img className='allslide' src="/slide1.jpeg" alt="" />
                  <img className='allslide' src="/slide2.png" alt="" />
                  <img className='allslide' src="/slide3.png" alt="" />
                  <img className='allslide' src="/slide4.png" alt="" />
                  <img className='allslide' src="/slide5.png" alt="" />

                </div>

              </div>



              <div className='slides'>


                <div id='slide2'>

                  <img className='allslide' src="/slide6.avif" alt="" />
                  <img className='allslide' src="/slide7.png" alt="" />
                  <img className='allslide' src="/slide8.png" alt="" />
                  <img className='allslide' src="/slide9.png" alt="" />
                  <img className='allslide' src="/slide10.png" alt="" />

                </div>


                <div id='slide2'>

                  <img className='allslide' src="/slide6.avif" alt="" />
                  <img className='allslide' src="/slide7.png" alt="" />
                  <img className='allslide' src="/slide8.png" alt="" />
                  <img className='allslide' src="/slide9.png" alt="" />
                  <img className='allslide' src="/slide10.png" alt="" />

                </div>


                <div id='slide2'>

                  <img className='allslide' src="/slide6.avif" alt="" />
                  <img className='allslide' src="/slide7.png" alt="" />
                  <img className='allslide' src="/slide8.png" alt="" />
                  <img className='allslide' src="/slide9.png" alt="" />
                  <img className='allslide' src="/slide10.png" alt="" />

                </div>

              </div>


              <div className='slides'>


                <div id='slide1'>

                  <img className='allslide' src="/slide11.png" alt="" />
                  <img className='allslide' src="/slide5.png" alt="" />
                  <img className='allslide' src="/slide13.png" alt="" />
                  <img className='allslide' src="/slide14.png" alt="" />
                  <img className='allslide' src="/slide15.png" alt="" />

                </div>


                <div id='slide1'>


                  <img className='allslide' src="/slide11.png" alt="" />
                  <img className='allslide' src="/slide5.png" alt="" />
                  <img className='allslide' src="/slide13.png" alt="" />
                  <img className='allslide' src="/slide14.png" alt="" />
                  <img className='allslide' src="/slide15.png" alt="" />

                </div>


                <div id='slide1'>


                  <img className='allslide' src="/slide11.png" alt="" />
                  <img className='allslide' src="/slide5.png" alt="" />
                  <img className='allslide' src="/slide13.png" alt="" />
                  <img className='allslide' src="/slide14.png" alt="" />
                  <img className='allslide' src="/slide15.png" alt="" />

                </div>

              </div>




            </div>

            <div className='compadium'>

              <h4>A full compendium covering research, development, UX design, UI design, interaction, animation, character design, user testing and marketing.</h4>

              <div className='buy_2'

                onMouseEnter={() => setshow_2(false)}
                onMouseLeave={() => setshow_2(true)}


              >
                {show_2 ? (
                  <img id='btn_2' src="/btn_2.png" alt="" srcset="" />
                ) : (

                  <img id='btn_1' src="/btn_1.png" alt="" srcset="" />
                )}

              </div>

            </div>


          </div>

        </div>


        <div className='page3' id="allpages">

          <div className='big_3_left'>


            <img id='star1' className='Star' src="Start.png" alt="" srcset="" />
            <p>250+ pages of best practices, tips, guidelines and information, based on scientific studies and decades of experience.</p>

            <img id='star2' className='Star' src="Start.png" alt="" srcset="" />

            <p>Interviews with industry experts, including people from Netflix, PBS Kids, Toca Boca, and more.</p>

            <img id='star3' className='Star' src="Start.png" alt="" srcset="" />

            <p>Practical tips and real-world advice to really put into practice what you read.</p>

            <img id='star4' className='Star' src="Start.png" alt="" srcset="" />

            <p>Usability and accessibility information that will make you a better, more inclusive designer on any kind of product, not just for kids.</p>

          </div>

          <div className='big_3_right'>


            <div className="slider-container">

              <div className="slider">

                <img src="/onepage1.png" alt={`Slide1`} width={600} height={430} className="slide" />

                <img src="/onepage2.png" alt={`Slide1`} width={600} height={430} className="slide" />


                <img src="/onepage3.png" alt={`Slide1`} width={600} height={430} className="slide" />


              </div>



              <div className="slider">

                <img src="/onepage1.png" alt={`Slide1`} width={600} height={430} className="slide" />

                <img src="/onepage2.png" alt={`Slide1`} width={600} height={430} className="slide" />

                <img src="/onepage3.png" alt={`Slide1`} width={600} height={430} className="slide" />

              </div>



              <div className="slider">

                <img src="/onepage1.png" alt={`Slide1`} width={600} height={430} className="slide" />

                <img src="/onepage2.png" alt={`Slide1`} width={600} height={430} className="slide" />


                <img src="/onepage3.png" alt={`Slide1`} width={600} height={430} className="slide" />

              </div>




            </div>


            {/* <img style={{ width: "100%", height: "100%" }} src={allimages[selectedimage]} /> */}


          </div>

        </div>

        <div className='page4' id="allpages">

          <div className='big_4' >

            <div className='Big_Book' >

              <img src="/Big_Book.avif" alt="" srcset="" />

            </div>

          </div>

        </div>



        <div className='page5' id="allpages">


          <div className='big_5' >

            <div class="circle-container1">
              <div class="circle" >
                <a href="#hover_1" > 1  Chapter</a>
              </div>
            </div>
            <div class="circle-container2">
              <div class="circle">
                <a href="#hover_2" > 2  Chapter</a>
              </div>
            </div>

            <div class="circle-container3">
              <div class="circle">
                <a href="#hover_3" > 3  Chapter</a>
              </div>
            </div>
            <div class="circle-container4">
              <div class="circle">
                <a href="#hover_4" > 4  Chapter</a>
              </div>
            </div>

            <div class="circle-container5">
              <div class="circle">
                <a href="#hover_5" > 5  Chapter</a>
              </div>
            </div>
            <div class="circle-container6">
              <div class="circle">
                <a href="#hover_6" > 6  Chapter</a>
              </div>
            </div>

            <div class="circle-container7">
              <div class="circle">
                <a href="#hover_7" > 7  Chapter</a>
              </div>
            </div>


            <div className='multiple_motivation' >

              <div className='find_motivation' id='hover_1'>

                <h2 >Find the Right Motivation</h2>

                <p>Why designing digital products for kids? There are several opportunities, from a business and a design perspective. In this chapter you'll discover some of them to help you find yours.

                </p>

              </div>

              <div className='find_motivation' id='hover_2'>

                <h2>Before You Start, Know the Industry</h2>

                <p>Knowing the market, the opportunities and how to exploit them and obstacles and how to overcome them. What's out there already? What is working and what is not? Many products claim to be "educational", but what does it really mean? What is the right balance between education and entertainment?

                </p>

              </div>

              <div className='find_motivation' id='hover_3'>

                <h2>Know Your Target Audience</h2>

                <p>The main peculiarity of digital products for kids is their target. You won't deal with just kids, but with their parents (a.k.a. the ones who have the money) and the teachers. How can you please such a diverse audience? What is each of these targets looking for in a product for children?

                </p>

              </div>

              <div className='find_motivation' id='hover_4'>

                <h2>Concept</h2>

                <p>Establishing a solid foundation for your product is of uttermost importance for its success. Understanding which platform to choose depending on your target audience, for example: is it going to be a native app or a web app? But also where to look for ideas, passive vs. active learning, and, if educational, what subjects work best.

                </p>

              </div>

              <div className='find_motivation' id='hover_5'>

                <h2>Gamification</h2>

                <p>Gamification is not just a layer you place on top of the experience at the end of the design process. It's a strategy that requires careful planning and must be embedded in the UX since the very beginning. But what does constitute an effective gamification? What are the ingredients at our disposal and how can we make the best out of them?

                </p>

              </div>

              <div className='find_motivation' id='hover_6'>

                <h2>Safety Measures</h2>

                <p>In children's products, safety must be a priority. There are legal and ethical implications to consider. Protecting the young users when interacting with our product must be on top of our mind and here are the things you should know and the best practices you should follow.



                </p>

              </div>

              <div className='find_motivation' id='hover_7'>

                <h2>User Testing with Kids</h2>

                <p>User testing with children is not the same as with adults. There are many things to keep in mind when conducting user interviews with kids, from getting parent's consent, to make them feel at ease and establish a empathic connection with them, while, at the same time, providing a neutral feedback to their observations to avoid swaying the test results.

                </p>

              </div>

            </div>


          </div>

        </div>


        <div className='page6' id="allpages">


          <div className='big_6' >

            <div className='icon'>
              <img src="icon.gif" alt="" srcset="" />
            </div>



            <div className='about_text'>
              <h2>About the Author</h2>

              <p>Rubens Cantuni is an Italian digital product designer with 16 years of experience across two continents.
              </p> <br></br>


              <p>Winner of an Emmy Award in the “Outstanding Interactive” category, a Webby Award nomination, and several Parents' Choice Awards and Teachers Choice Awards with his work on digital products for children.
              </p> <br></br>


              <p>He also writes about design on Medium, and has a past experience as a character designer and illustrator, freelancing for many companies worldwide, including Nike, Foot Locker, Hasbro, Apple, BBC, and more.
              </p> <br></br>

            </div>

          </div>


        </div>




        {/* Stickers */}


      </div>




    </>
  )
}

export default App
