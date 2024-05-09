/**
 * @jest-environment jsdom
 */

import { MatrixForm } from '@/app/component/MatrixForm'
import { fireEvent, render } from '@testing-library/react'

describe('Rotate matrix', () => {
  const MATRIX = '[[1,2,3],[4,5,6],[7,8,9]]'
  const ROTATE_MATRIX = '[[3,6,9],[2,5,8],[1,4,7]]'
  const NON_SQUARE_MATRIX = '[1,2,3]'

  it('should return the inverted matrix in the counterclockwise direction.', () => {
    const { getByTestId, getByText, getByLabelText } = render(<MatrixForm />)

    const input = getByLabelText('input-matrix')

    fireEvent.change(input, { target: { value: MATRIX } })

    const container = getByTestId('button-container')

    fireEvent.click(container)

    expect(getByText(ROTATE_MATRIX)).toBeInTheDocument()
  })

  it('should return error if you do not enter a correct matrix', () => {
    const { getByTestId, getByText, getByLabelText } = render(<MatrixForm />)

    const input = getByLabelText('input-matrix')

    fireEvent.change(input, { target: { value: NON_SQUARE_MATRIX } })

    const container = getByTestId('button-container')

    fireEvent.click(container)

    expect(getByTestId('error-container')).toBeInTheDocument()

    expect(getByText('Matrix is not square')).toBeInTheDocument()
  })
})
