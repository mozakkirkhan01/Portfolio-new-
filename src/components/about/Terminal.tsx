import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
  } from "@/components/ui/terminal";
  import Link from "next/link";
  
  export function TerminalDemo() {
    return (
      <Terminal>
        <TypingAnimation>&gt; Loading About Me...</TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Welcome to my digital space.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Passionate about web development & innovation.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2500} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Skilled in MERN stack & modern UI/UX.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3000} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Always learning & pushing boundaries.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3500} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Enthusiastic about building high-performance applications.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Open to collaborations & new opportunities.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Turning ideas into reality with code.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5000} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Striving for clean, efficient, and scalable solutions.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span className="text-[3.1vw] sm:text-[1vw] " >✔ Let's create something amazing together!</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Get in Touch:</span>
          <Link href={"#email"} className="pl-2" >Email: mozakkirkhan337@gmail.com</Link>
          <Link href={"https://www.linkedin.com/in/mozakkir_khan/"} target="_blank" className="pl-2" >LinkedIn: linkedin.com/mozakkir_khan</Link>
        </AnimatedSpan>
  
        <TypingAnimation delay={6500} className="text-muted-foreground">
          Thank you for visiting my About page! 🚀
        </TypingAnimation>
  
       
      </Terminal>
    );
  }
