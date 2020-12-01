import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

// Here you would fetch and return the user
const useUser = () => ({ session: null, loading: false })

export default function loginCheck() {
    const [ session, loading ] = useSession()
    const router = useRouter()
    
    useEffect(() => {
      if (!(session || loading)) {
        router.push('/')
      }
    }, [session, loading])
    }