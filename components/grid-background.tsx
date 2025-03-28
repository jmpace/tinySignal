"use client"

import { useEffect, useState } from "react"

export function GridBackground() {
  const [mounted, setMounted] = useState(false)
  const [blinkingCells, setBlinkingCells] = useState(new Set())

  // Only run on client-side
  useEffect(() => {
    setMounted(true)

    // Create a set of random cells to blink
    const cells = new Set()
    const totalCells = 50 * 50
    const cellsToAnimate = Math.floor(totalCells * 0.15) // Animate 15% of cells

    while (cells.size < cellsToAnimate) {
      const cellIndex = Math.floor(Math.random() * totalCells)
      cells.add(cellIndex)
    }

    setBlinkingCells(cells)

    // Start an interval to toggle cell blinking
    const intervalId = setInterval(() => {
      // Add some new cells and remove some existing ones
      const updatedCells = new Set([...cells])
      
      // Remove some cells (about 20% of animated cells)
      for (const cell of updatedCells) {
        if (Math.random() < 0.2) {
          updatedCells.delete(cell)
        }
      }
      
      // Add some new cells
      const cellsToAdd = Math.floor(totalCells * 0.03) // 3% of total cells
      while (updatedCells.size < cells.size + cellsToAdd) {
        const cellIndex = Math.floor(Math.random() * totalCells)
        updatedCells.add(cellIndex)
      }
      
      setBlinkingCells(updatedCells)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  // Don't render anything on server
  if (!mounted) return null

  // Create a grid of cells
  const rows = 50
  const cols = 50
  const cells = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cellIndex = i * cols + j
      const cellId = `${i}-${j}`
      const isBlinking = blinkingCells.has(cellIndex)
      
      cells.push(
        <div
          key={cellId}
          className="border-r border-b border-slate-200/40 dark:border-slate-800/40"
          style={{ 
            backgroundColor: isBlinking ? 'rgba(100, 149, 237, 0.15)' : 'transparent',
            boxShadow: isBlinking ? 'inset 0 0 2px rgba(100, 149, 237, 0.3)' : 'none',
            transition: 'all 1.5s ease-in-out'
          }}
        />,
      )
    }
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid w-full h-full" 
           style={{ 
             gridTemplateColumns: `repeat(${cols}, 1fr)`, 
             gridTemplateRows: `repeat(${rows}, 1fr)` 
           }}>
        {cells}
      </div>
    </div>
  )
}