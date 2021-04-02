import { render } from '../../__tests__/testUtils'
import ProductCard from './ProductCard'

describe('ProductCard', () => {
  test('render', () => {
    render(<ProductCard name='Lorem Ipsum' description='Lorem ipsum dolor sit amet' />)
  })
})
