'use client'
import * as React from 'react'
import { useRotateMatrix } from '../hooks/useRotateMatrix'

export function MatrixForm() {
  const [value, setValue] = React.useState<string>('')

  const { matrixRotate, error, onRotateMatrix } = useRotateMatrix()

  const onHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setValue(value)
  }

  return (
    <div className="mx-[auto] my-[0] w-[400px] mt-4">
      <input
        className="flex w-full h-[40px] rounded-md border border-input bg-background px-4 pr-3 text-sm
            ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        value={value}
        onChange={onHandle}
        aria-label="input-matrix"
        type="text"
      />
      <button
        className="p-1.5 rounded-lg bg-black text-white mt-4 w-full hover:bg-gray-800 focus:outline-none"
        data-testid="button-container"
        onClick={() => onRotateMatrix(value)}
      >
        rotate matrix
      </button>
      <div className="mt-2 bg-gray-200 w-full h-8 flex items-center justify-center">
        {JSON.stringify(matrixRotate)}
      </div>
      {error && (
        <div
          className="text-[red] mt-2 w-full flex items-center justify-center text-[14px]"
          data-testid="error-container"
        >
          {error}
        </div>
      )}
    </div>
  )
}
