import { useState } from 'react'
import { Button } from '../components/Button'

function CounterPage() {
  const [count, setCount] = useState(0)

  return (
    <section>
    <div className="m-10 p-10">
    <h1 className="text-3xl font-bold underline">
      Counter page 
    </h1>
    <div className="my-10 py-10">
    <Button primary={true} label={'-'} onClick={() => {setCount(count - 1)}}></Button>
    {count}
    <Button primary={true} label={'+'} onClick={() => {setCount(count + 1)}}></Button>
    </div>
    </div>
    </section>
  )
}

export default CounterPage;
