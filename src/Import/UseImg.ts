import { useEffect, useState } from 'react'
interface UseImageLayout {
    loading: boolean,
    error: null,
    image: undefined
}
const UseImg = (fileName: string) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [image, setImage] = useState(undefined)
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../Assets/Img/${fileName}`) // change relative path to suit your needs
                setImage(response.default)
            } catch (err: any) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchImage()
    }, [fileName])
    const layout: UseImageLayout = {
        loading,
        error,
        image,
    }
    return layout
}

export default UseImg