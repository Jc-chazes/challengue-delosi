import type { Metadata } from 'next'
import './globals.css'
import { MatrixForm } from './component/MatrixForm'

export const metadata: Metadata = {
  title: 'Rotate Matrix',
  description: 'Rotate Matrix in counterclockwise direction',
}

export default function Home() {
  return <MatrixForm />
}
