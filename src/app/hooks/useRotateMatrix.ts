import { rotateMatrix } from '../utils/rotateMatrix'
import * as React from 'react'

export function useRotateMatrix() {
  const [matrixRotate, setMatrixRotate] = React.useState<number[][]>([[]])
  const [error, setError] = React.useState<string>('')

  const isValidateMatrix = (matrix: number[][]) => {
    if (!Array.isArray(matrix)) {
      setError('Matrix is not array')
      return false
    }

    if (Array.isArray(matrix) && matrix.length === 0) {
      setError('Matrix is empty')
      return false
    }

    const isSquareMatrix = matrix.every((row) => row.length === matrix.length)

    if (!isSquareMatrix) {
      setError('Matrix is not square')
      return false
    }
    return true
  }

  const onRotateMatrix = (value: string) => {
    try {
      const matrix = JSON.parse(value)
      if (isValidateMatrix(matrix)) {
        const result = rotateMatrix(matrix)
        setMatrixRotate(result)
        setError('')
      }
    } catch (e) {
      setError('Matrix is not valid')
    }
  }

  return { matrixRotate, error, onRotateMatrix }
}
