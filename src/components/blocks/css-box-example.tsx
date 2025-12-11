"use client"

import React, { useRef } from "react"
import CSSBox, { CSSBoxRef } from "./css-box"
import { Button } from "@/components/ui/button"

export default function CSSBoxExample() {
  const cubeRef = useRef<CSSBoxRef>(null)

  // Star component for decoration
  const Star = ({ className = "" }: { className?: string }) => (
    <div className={`absolute ${className}`}>
      <div className="w-1 h-1 bg-white rounded-full animate-twinkle" />
    </div>
  )

  // Face component with consistent styling
  const Face = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {/* Background with stars */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <Star className="top-4 left-4" />
        <Star className="top-8 right-6" />
        <Star className="bottom-6 left-8" />
        <Star className="bottom-4 right-4" />
        <Star className="top-1/2 left-1/4" />
        <Star className="top-1/3 right-1/3" />
        <Star className="bottom-1/3 left-1/3" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        {children}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <div className="text-center">
        <h2 className="text-3xl font-playfair font-extralight text-white mb-2">
          3D CSS Box
        </h2>
        <p className="text-white/80 text-lg">
          A Very Serious Company Cube
        </p>
      </div>

      <CSSBox
        ref={cubeRef}
        width={280}
        height={280}
        depth={280}
        perspective={1000}
        draggable
        className="drop-shadow-2xl"
        faces={{
          front: (
            <Face>
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-extralight text-white leading-tight">
                  A Very Serious<br />Company
                </h3>
              </div>
            </Face>
          ),
          back: (
            <Face>
              <div className="text-center">
                <h3 className="text-2xl font-playfair font-extralight text-white leading-tight">
                  A Very Serious<br />Company
                </h3>
              </div>
            </Face>
          ),
          left: (
            <Face>
              <div className="text-center">
                <p className="text-lg font-playfair font-light text-white/90 leading-relaxed">
                  We take simple<br />ideas seriously
                </p>
              </div>
            </Face>
          ),
          right: (
            <Face>
              <div className="text-center">
                <p className="text-lg font-playfair font-light text-white/90 leading-relaxed">
                  We take simple<br />ideas seriously
                </p>
              </div>
            </Face>
          ),
          top: (
            <Face>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/40 rounded-full animate-pulse" />
                </div>
                <p className="text-sm font-playfair font-light text-white/80">
                  Serious
                </p>
              </div>
            </Face>
          ),
          bottom: (
            <Face>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white/40 rounded-full animate-pulse" />
                </div>
                <p className="text-sm font-playfair font-light text-white/80">
                  Company
                </p>
              </div>
            </Face>
          ),
        }}
      />

      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={() => cubeRef.current?.showTop()}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          Show Top
        </Button>
        <Button
          onClick={() => cubeRef.current?.showFront()}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          Show Front
        </Button>
        <Button
          onClick={() => cubeRef.current?.showBack()}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          Show Back
        </Button>
        <Button
          onClick={() => cubeRef.current?.showLeft()}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          Show Left
        </Button>
        <Button
          onClick={() => cubeRef.current?.showRight()}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          Show Right
        </Button>
        <Button
          onClick={() => cubeRef.current?.showBottom()}
          className="bg-white/10 hover:bg-white/20 text-white border-white/20"
        >
          Show Bottom
        </Button>
        <Button
          onClick={() => cubeRef.current?.reset()}
          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
