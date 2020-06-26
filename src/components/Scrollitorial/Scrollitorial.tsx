import * as React from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface IScrollitorialProps {

};


const Scrollitorial = (props: IScrollitorialProps) => {

  React.useEffect(() => {

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false
      });
    });


    ScrollTrigger.create({
      snap: 1 / 4 // snap whole page to the closest section!
    });


  });



  return <>
    <div className="description panel" style={{height:"100%", backgroundColor:"blue"}}>
      <div style={{position: "absolute", x: "100px", y: "100px"}}><h1>Layered pinning</h1>
        <p>Use pinning to layer panels on top of each other as you scroll.</p>
        <div className="scroll-down">Scroll down<div className="arrow"></div></div>
      </div>
    </div>


    <section className="panel" style={{height:"100%", backgroundColor:"red"}}>
      ONE
    </section>
    <section className="panel"  style={{height:"100%", backgroundColor:"orange"}}>
      TWO
    </section>
    <section className="panel"  style={{height:"100%", backgroundColor:"purple"}}>
      THREE
    </section>
    <section className="panel"  style={{height:"100%", backgroundColor:"green"}}>
      FOUR
    </section>
  </>
};

export default Scrollitorial;