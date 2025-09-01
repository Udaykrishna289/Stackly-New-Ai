import React from 'react'
import AfterHeroApi from './AfterHeroApi'

export default function AfterApi() {
  return (
    <div>
      <AfterHeroApi />
    </div>
  )
}

// import React, { useContext } from 'react'
// import AfterHeroApi from './AfterHeroApi'
// import { UserContext } from '@context/UserContext'

// export default function AfterApi() {
//   const { userInfo } = useContext(UserContext)
//   console.log('AfterApi userInfo:', userInfo) // Debug line
  
//   return (
//     <div>
//       <AfterHeroApi />
//     </div>
//   )
// }