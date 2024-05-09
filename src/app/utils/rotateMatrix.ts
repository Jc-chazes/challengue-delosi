export function rotateMatrix(matrix: number[][]) {
    const currentMatrix = [...matrix]
    const matrixLength = currentMatrix.length

    for (let x = 0; x < matrixLength / 2; x++) {
        for (let y = x; y < matrixLength - x - 1; y++) {
            let temp = currentMatrix[x][y]

            currentMatrix[x][y] = currentMatrix[y][matrixLength - 1 - x]

            currentMatrix[y][matrixLength - 1 - x] =
                currentMatrix[matrixLength - 1 - x][matrixLength - 1 - y]

            currentMatrix[matrixLength - 1 - x][matrixLength - 1 - y] =
                currentMatrix[matrixLength - 1 - y][x]

            currentMatrix[matrixLength - 1 - y][x] = temp
        }
    }

    return currentMatrix
}