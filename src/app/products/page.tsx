import ProductsList from "@/components/product/ProductsList"

const Products = ({}) => {
  return (
    <section className="container space-y-12">
      {/* TODO: Products Filter  */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-medium ">
          Browse Stunning Products
        </h1>
        <p className="md:text-base opacity-50">
          A collection of high-performing and well-designed Framer templates to
          set up your website
        </p>
      </div>
      <ProductsList query={{ category: "UI", limit: 10, sort: "asc" }} />
    </section>
  )
}

export default Products
