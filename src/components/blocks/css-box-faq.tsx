"use client"

import React, { useRef } from "react"
import CSSBox, { CSSBoxRef } from "./css-box"
import { theme } from "@/lib/theme"

export default function CSSBoxFAQ() {
  const cubeRef = useRef<CSSBoxRef>(null)
  const [initialRotation, setInitialRotation] = React.useState({ x: 0, y: 0 })

  // Set random initial rotation on mount
  React.useEffect(() => {
    const randomX = Math.random() * 360
    const randomY = Math.random() * 360
    setInitialRotation({ x: randomX, y: randomY })
  }, [])

  // Face component with exact same star pattern as background and white borders
  const Face = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`w-full h-full relative overflow-hidden border-2 border-white/30 ${className}`}>
      {/* Background with exact same star pattern as FAQ page */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 15px 25px, ${theme.colors.star.opacity60}, transparent),
            radial-gradient(1px 1px at 45px 85px, ${theme.colors.star.opacity40}, transparent),
            radial-gradient(1px 1px at 75px 15px, ${theme.colors.star.opacity80}, transparent),
            radial-gradient(1px 1px at 105px 65px, ${theme.colors.star.opacity50}, transparent),
            radial-gradient(1px 1px at 135px 35px, ${theme.colors.star.opacity70}, transparent),
            radial-gradient(1px 1px at 165px 95px, ${theme.colors.star.opacity30}, transparent),
            radial-gradient(1px 1px at 195px 55px, ${theme.colors.star.opacity90}, transparent),
            radial-gradient(1px 1px at 225px 25px, ${theme.colors.star.opacity40}, transparent),
            radial-gradient(1px 1px at 255px 75px, ${theme.colors.star.opacity60}, transparent),
            radial-gradient(1px 1px at 285px 45px, ${theme.colors.star.opacity80}, transparent),
            radial-gradient(1px 1px at 315px 15px, ${theme.colors.star.opacity50}, transparent),
            radial-gradient(1px 1px at 345px 85px, ${theme.colors.star.opacity70}, transparent),
            radial-gradient(1px 1px at 375px 35px, ${theme.colors.star.opacity30}, transparent),
            radial-gradient(1px 1px at 405px 65px, ${theme.colors.star.opacity90}, transparent),
            radial-gradient(1px 1px at 435px 25px, ${theme.colors.star.opacity40}, transparent),
            radial-gradient(1px 1px at 465px 75px, ${theme.colors.star.opacity60}, transparent),
            radial-gradient(1px 1px at 495px 45px, ${theme.colors.star.opacity80}, transparent),
            radial-gradient(1px 1px at 525px 15px, ${theme.colors.star.opacity50}, transparent),
            radial-gradient(1px 1px at 555px 85px, ${theme.colors.star.opacity70}, transparent),
            radial-gradient(1px 1px at 585px 35px, ${theme.colors.star.opacity30}, transparent),
            radial-gradient(1px 1px at 615px 65px, ${theme.colors.star.opacity90}, transparent),
            radial-gradient(1px 1px at 645px 25px, ${theme.colors.star.opacity40}, transparent),
            radial-gradient(1px 1px at 675px 75px, ${theme.colors.star.opacity60}, transparent),
            radial-gradient(1px 1px at 705px 45px, ${theme.colors.star.opacity80}, transparent),
            radial-gradient(1px 1px at 735px 15px, ${theme.colors.star.opacity50}, transparent),
            radial-gradient(1px 1px at 765px 85px, ${theme.colors.star.opacity70}, transparent),
            radial-gradient(1px 1px at 795px 35px, ${theme.colors.star.opacity30}, transparent),
            radial-gradient(1px 1px at 825px 65px, ${theme.colors.star.opacity90}, transparent),
            radial-gradient(1px 1px at 855px 25px, ${theme.colors.star.opacity40}, transparent),
            radial-gradient(1px 1px at 885px 75px, ${theme.colors.star.opacity60}, transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '900px 100px',
          opacity: 0.6,
          animation: 'twinkle 4s ease-in-out infinite alternate'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  )

  return (
    <div className="fixed top-[25%] right-[13%] z-30">
      <CSSBox
        ref={cubeRef}
        width={252} // 280 * 0.9 (10% reduction)
        height={252} // 280 * 0.9 (10% reduction)
        depth={252} // 280 * 0.9 (10% reduction)
        perspective={1000}
        draggable
        className="drop-shadow-2xl"
        initialRotationX={initialRotation.x}
        initialRotationY={initialRotation.y}
        faces={{
          front: (
            <Face>
              <div className="text-left">
                <h3 className="text-xl font-playfair font-extralight text-white leading-tight">
                  A Very Serious<br />Company
                </h3>
              </div>
            </Face>
          ),
          back: (
            <Face>
              <div className="text-left">
                <h3 className="text-xl font-playfair font-extralight text-white leading-tight">
                  A Very Serious<br />Company
                </h3>
              </div>
            </Face>
          ),
          left: (
            <Face>
              <div className="text-center">
                <p className="text-base font-playfair font-light text-white/90 leading-relaxed">
                  How can we<br />help you?
                </p>
              </div>
            </Face>
          ),
          right: (
            <Face>
              <div className="text-center">
                <p className="text-base font-playfair font-light text-white/90 leading-relaxed">
                  How can we<br />help you?
                </p>
              </div>
            </Face>
          ),
          top: (
            <Face>
              <div className="text-center">
                <p className="text-lg font-playfair font-light text-white/90 italic">
                  Seriously?
                </p>
              </div>
            </Face>
          ),
          bottom: (
            <Face>
              <div className="text-center">
                <p className="text-lg font-playfair font-light text-white/90 italic">
                  Seriously?
                </p>
              </div>
            </Face>
          ),
        }}
      />
    </div>
  )
}
