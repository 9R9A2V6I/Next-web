

export default function ProductDetails({
  params, }: {
    params: { productid: string };
  }
) {
  return (
    <div><h1>
      Details of About Product {params.productid}</h1></div>
  )
}
