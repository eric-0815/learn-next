import Link from "next/link"
import { useRouter } from "next/router"

function Home() {

  const router = useRouter()

  const handleClick = () => {
    console.log('Placing your order')
    router.push('/product')
  }

  return(
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <p>Blog</p>
      </Link>
      <Link href='/product'>
        <p>Products</p>
      </Link>
      <Link href='/users'>
        <p>Users</p>
      </Link>
      <Link href='/posts'>
        <p>Posts</p>
      </Link>
      <button onClick={handleClick}>
        Place Order
      </button>
    </div>
  ) 
}

export default Home
