import ProductCard from './ProductCard'
import { products } from '../../data/products'
import './Products.css'

export default function Products() {
  return (
    <section id="products">
      <div className="products-header">
        <div className="section-label"><span className="industries-badge-dot">✦</span> Product Lineup</div>
        <h2 className="section-title">
          Hardware Built for<br />
          <span className="products-title-accent">Every Environment</span>
        </h2>
      </div>

      <div className="products-grid">
        {products.map((product, i) => (
          <ProductCard key={product.id} product={product} delay={i * 0.07} />
        ))}
      </div>
    </section>
  )
}
