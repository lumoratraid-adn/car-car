import { useEffect } from 'react';

export function Loader({ onFinish }:{ onFinish?: ()=>void }){
  useEffect(()=>{
    // prevent body scroll while loader is visible
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return ()=>{
      document.body.style.overflow = prev || '';
    };
  },[])

  return (
    <div aria-hidden={false} role="status" className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black loader-overlay">
      <div style={{['--loader-scale' as any]: 'clamp(0.6, 10vmin, 1.2)'}} className="flex flex-col items-center gap-6">
        <div className="gearbox" aria-hidden="true">
        <div className="overlay" />
        <div className="gear one">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
        <div className="gear two">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
        <div className="gear three">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
        <div className="gear four large">
          <div className="gear-inner">
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
        </div>
        </div>
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-white">Auto Vibe</div>
          <div className="text-sm text-gray-400 mt-1">Premium Car Care — Loading...</div>
        </div>
      </div>
    </div>
  )
}

export default Loader
