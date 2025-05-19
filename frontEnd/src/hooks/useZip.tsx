import JSZip from 'jszip'
import { useRef, useState } from 'react'

const useZip = () => {
  const zipRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState([])
  const [name, setName] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const extractZipFile = () => {
    const zip = zipRef.current?.files?.[0]
    if (!zip) return
    console.log(zipRef.current?.files?.[0])
    setName(zip?.name.split('.')[0] || '')

    setLoading(true)
    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target?.result
        const zip = await JSZip.loadAsync(arrayBuffer)
        const fileData = []

        for (const fileName in zip.files) {
          const file = zip.files[fileName]
          if (!file.dir) {
            const content = await file.async('string')
            fileData.push({ name: fileName, content })
          }
        }
        setFiles(fileData)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    reader.readAsArrayBuffer(zip)
  }

  return { zipRef, extractZipFile, files, loading, name }
}

export default useZip
