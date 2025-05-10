# Ediel Fancy UI


### Step 1 installation

```shell
  npm i ediel-fancy-ui
```


### Step 2 Import the styles into the root of the application

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'ediel-fancy-ui/dist/ediel-fancy-ui.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ... */}
  </StrictMode>,
)

```


### Step 3 start using the components

```tsx
import { FC } from 'react';
import { Button, Stack, Text, type ButtonProps } from 'ediel-fancy-ui';

export const App = () => {

  const variants: ButtonProps['variant'][] = ['default', 'primary', 'success', 'warning', 'danger'];


  return (
    <div className='flex flex-col justify-center items-center min-h-screen w-1/2 mx-auto gap-4'>
      <Text
        size='lg'
        className='text-center pb-5 font-bold pt-5'
        as='h2'
      >
          Your Text here
      </Text>
     
     <Stack>
        {
          variants.map(item => (
            <Button key={item} variant={item} >{ item }</Button>
          ))
        }
     </Stack>
      
    </div>
  )
}

```
