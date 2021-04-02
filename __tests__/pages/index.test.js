import { render, renderer } from '../testUtils'
import Index from '../../pages/index'

describe('Index', () => {
  test('matches snapshot', () => {
    const tree = renderer.create(<Index />).toJSON();
    expect(tree).toMatchSnapshot();
  })

  test('render', () => {
    render(<Index />)
  })
})
