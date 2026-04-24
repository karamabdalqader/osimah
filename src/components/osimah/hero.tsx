"use client";
import { useEffect, useRef } from "react";

function ShaderCircle() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
        uv.x*=1.5; uv.x-=0.25;
        float mask=0.0;
        float radius=.35;
        vec2 center=vec2(.5);
        mask+=paintCircle(uv,center,radius,.035).r;
        mask+=paintCircle(uv,center,radius-.018,.01).r;
        mask+=paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        vec3 fg=vec3(v.x,v.y,.7-v.y*v.x);
        vec3 color=mix(vec3(1.),fg,mask);
        color=mix(color,vec3(1.),paintCircle(uv,center,radius,.003).r);
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
    <div className="hero__visual">
      <canvas ref={canvasRef} className="hero__canvas" />
    </div>
  );
}

const MARQUEE = [
  "Branding", "UX Design", "UI Design", "Front-end", "Back-end",
  "Integrations", "Server Config", "Security", "Deployment",
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell">
        <div className="hero__grid">
          <div>
            <div className="eyebrow eyebrow-dot">A Saudi Technology House · Est. 2017</div>
            <h1 className="serif hero__title mt-6">
              Enabling the <em>Kingdom&rsquo;s</em> digital future.
            </h1>
            <p className="hero__sub">
              Osimah Digital builds end-to-end digital experiences for Saudi Arabia&rsquo;s
              ministries, giga-projects and leading enterprises — uniting global platforms,
              regional expertise, and a family of brands under one trusted house.
            </p>
            <div className="hero__ctas">
              <a href="#contact" className="btn btn--primary">
                Start a conversation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
              <a href="#projects" className="btn btn--ghost">
                See selected work
              </a>
            </div>
          </div>
          <ShaderCircle />
        </div>

        <div className="hero__marquee">
          <div className="hero__marquee-track">
            {[...MARQUEE, ...MARQUEE].map((w, i) => (
              <span key={i} className="hero__marquee-item">{w}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
