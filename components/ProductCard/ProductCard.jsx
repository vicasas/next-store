import PropTypes from 'prop-types'
import styles from './ProductCard.module.css'

const ProductCard = ({ name, description }) => (
  <a href='#!' className={styles.card}>
    <h3>{name}</h3>
    <p>{description}</p>
  </a>
)

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductCard
