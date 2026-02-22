'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function SplineScene() {
  return (
    <div className="w-full h-[80vh]">
      <Spline scene="https://prod.spline.design/ckF1wsRQgAKdZI3P/scene.splinecode" />
    </div>
  );
}
