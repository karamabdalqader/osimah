"use client";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useMagnetic } from "@/lib/use-magnetic";

function ShaderCircle() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -60]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vs = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const fs = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){
        return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0;
      }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff=center-uv;
        float len=length(diff);
        len+=variation(diff,vec2(0.,1.),5.,2.);
        len-=variation(diff,vec2(1.,0.),5.,2.);
        float circle=smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      void main(){
        vec2 uv=gl_FragCoord.xy/iResolution.xy;
        float aspect=iResolution.x/iResolution.y;
        uv.x=(uv.x-0.5)*aspect+0.5;
        float radius=.46;
        vec2 center=vec2(.5);
        float m1=paintCircle(uv,center,radius,.035).r;
        float m2=paintCircle(uv,center,radius-.018,.01).r;
        float m3=paintCircle(uv,center,radius+.018,.005).r;
        float mask=clamp(m1+m2+m3,0.0,1.0);
        vec2 v=rotate2d(iTime)*uv;
        float pulse=0.5+0.5*sin(iTime*0.7+length(v)*4.0);
        vec3 teal=vec3(0.082,0.847,0.733);
        vec3 deep=vec3(0.031,0.533,0.478);
        vec3 fg=mix(deep,teal,pulse);
        vec3 color=mix(vec3(1.),fg,mask);
        gl_FragColor=vec4(color,1.);
      }`;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return sh;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uT = gl.getUniformLocation(program, "iTime");
    const uR = gl.getUniformLocation(program, "iResolution");

    let raf = 0;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    const render = (t: number) => {
      gl.uniform1f(uT, t * 0.001);
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(render);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <motion.div ref={wrapRef} className="hero__visual" style={{ y }}>
      <canvas ref={canvasRef} className="hero__canvas" />
    </motion.div>
  );
}

const TITLE_LINES = [
  ["Enabling", "the"],
  ["Kingdom\u2019s"],
  ["digital", "future."],
];

function TitleReveal() {
  const reduce = useReducedMotion();
  return (
    <h1 className="serif hero__title mt-6">
      {TITLE_LINES.map((line, li) => (
        <span key={li} className="hero__title-row">
          {line.map((word, wi) => {
            const isAccent = word.startsWith("Kingdom");
            const inner = isAccent ? <em>{word}</em> : word;
            const delay = (li * line.length + wi) * 0.08 + 0.05;
            return (
              <span key={wi} className="hero__word-mask">
                <motion.span
                  className="hero__word"
                  initial={reduce ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                  animate={reduce ? { opacity: 1 } : { y: "0%", opacity: 1 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
                >
                  {inner}
                  {wi < line.length - 1 ? "\u00A0" : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const ctaRef = useMagnetic<HTMLAnchorElement>(0.3, 110);
  const reduce = useReducedMotion();

  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero__grid">
          <div>
            <motion.div
              className="eyebrow eyebrow-dot"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              A Saudi Technology House · Est. 2017
            </motion.div>
            <TitleReveal />
            <motion.p
              className="hero__sub"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            >
              Osimah Digital builds end-to-end digital experiences for Saudi Arabia&rsquo;s
              ministries, giga-projects and leading enterprises — uniting global platforms,
              regional expertise, and a family of brands under one trusted house.
            </motion.p>
            <motion.div
              className="hero__ctas"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
              <a ref={ctaRef} href="#contact" className="btn btn--primary">
                Start a project
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
              <a href="#projects" className="btn btn--ghost">
                See our work
              </a>
            </motion.div>
          </div>
          <ShaderCircle />
        </div>
      </div>
    </section>
  );
}
