import ProductsList from '@/components/ProductsList'
import Title from '@/components/Title'

async function getData(name) {
  const res = await fetch('https://jsonserver.reactbd.com/' + name)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export default async function Home() {
  const products = await getData('phone')
  return (
    <main className='min-h-screen '>
      <Title title={'Get your Favorite phone'} />
      <ProductsList data={products} />
    </main>
  )
}
