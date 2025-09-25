"use client"

import React, { useRef, useEffect, forwardRef, useImperativeHandle } from "react"
import { cn } from "@/lib/utils"

export interface CSSBoxRef {
  showTop: () => void
  showFront: () => void
  showBack: () => void
  showLeft: () => void
  showRight: () => void
  showBottom: () => void
  reset: () => void
}

interface CSSBoxProps {
  width?: number
  height?: number
  depth?: number
  perspective?: number
  draggable?: boolean
  initialRotationX?: number
  initialRotationY?: number
  faces: {
    front?: React.ReactNode
    back?: React.ReactNode
    left?: React.ReactNode
    right?: React.ReactNode
    top?: React.ReactNode
    bottom?: React.ReactNode
  }
  className?: string
  style?: React.CSSProperties
}

const CSSBox = forwardRef<CSSBoxRef, CSSBoxProps>(
  (
    {
      width = 200,
      height = 200,
      depth = 200,
      perspective = 1000,
      draggable = false,
      initialRotationX = 0,
      initialRotationY = 0,
      faces,
      className,
      style,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const startY = useRef(0)
    const currentRotationX = useRef(initialRotationX)
    const currentRotationY = useRef(initialRotationY)

    useImperativeHandle(ref, () => ({
      showTop: () => {
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateX(-90deg) rotateY(0deg)`
        }
      },
      showFront: () => {
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
        }
      },
      showBack: () => {
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateX(0deg) rotateY(180deg)`
        }
      },
      showLeft: () => {
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateX(0deg) rotateY(-90deg)`
        }
      },
      showRight: () => {
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateX(0deg) rotateY(90deg)`
        }
      },
      showBottom: () => {
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateX(90deg) rotateY(0deg)`
        }
      },
      reset: () => {
        if (containerRef.current) {
          containerRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`
          currentRotationX.current = 0
          currentRotationY.current = 0
        }
      },
    }))

    const handleMouseDown = (e: React.MouseEvent) => {
      if (!draggable) return
      isDragging.current = true
      startX.current = e.clientX
      startY.current = e.clientY
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return
      
      const deltaX = e.clientX - startX.current
      const deltaY = e.clientY - startY.current
      
      currentRotationY.current += deltaX * 0.5
      currentRotationX.current -= deltaY * 0.5
      
      containerRef.current.style.transform = `rotateX(${currentRotationX.current}deg) rotateY(${currentRotationY.current}deg)`
      
      startX.current = e.clientX
      startY.current = e.clientY
    }

    const handleMouseUp = () => {
      isDragging.current = false
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    useEffect(() => {
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }, [])

    // Apply initial rotation on mount
    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${initialRotationX}deg) rotateY(${initialRotationY}deg)`
      }
    }, [initialRotationX, initialRotationY])

    const faceStyle = (rotateX: number, rotateY: number, translateZ: number): React.CSSProperties => ({
      position: "absolute",
      width: "100%",
      height: "100%",
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
      backfaceVisibility: "hidden",
    })

    return (
      <div
        className={cn("relative", className)}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          perspective: `${perspective}px`,
          ...style,
        }}
      >
        <div
          ref={containerRef}
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            cursor: draggable ? "grab" : "default",
          }}
          onMouseDown={handleMouseDown}
        >
          {/* Front face */}
          {faces.front && (
            <div style={faceStyle(0, 0, depth / 2)}>
              {faces.front}
            </div>
          )}
          
          {/* Back face */}
          {faces.back && (
            <div style={faceStyle(0, 180, depth / 2)}>
              {faces.back}
            </div>
          )}
          
          {/* Right face */}
          {faces.right && (
            <div style={faceStyle(0, 90, width / 2)}>
              {faces.right}
            </div>
          )}
          
          {/* Left face */}
          {faces.left && (
            <div style={faceStyle(0, -90, width / 2)}>
              {faces.left}
            </div>
          )}
          
          {/* Top face */}
          {faces.top && (
            <div style={faceStyle(90, 0, height / 2)}>
              {faces.top}
            </div>
          )}
          
          {/* Bottom face */}
          {faces.bottom && (
            <div style={faceStyle(-90, 0, height / 2)}>
              {faces.bottom}
            </div>
          )}
        </div>
      </div>
    )
  }
)

CSSBox.displayName = "CSSBox"

export default CSSBox
