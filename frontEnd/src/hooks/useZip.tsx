import JSZip from 'jszip'
import { useRef, useState } from 'react'

const useZip = () => {
  const zipRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<{ name: string; content: string }[]>([])
  const [name, setName] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const extractZipFile = () => {
    const zipFile = zipRef.current?.files?.[0]
    if (!zipFile) return

    setName(zipFile.name.split('.')[0] || '')
    setLoading(true)

    const reader = new FileReader()
    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target?.result
        if (!arrayBuffer) throw new Error('Failed to read zip file')

        const zip = await JSZip.loadAsync(arrayBuffer)
        const extractedFiles: { name: string; content: string }[] = []

        for (const fileName in zip.files) {
          const file = zip.files[fileName]
          // Skip folders or files inside folders
          if (!file.dir && !fileName.includes('/')) {
            const content = await file.async('string')
            extractedFiles.push({ name: fileName, content })
          }
        }

        setFiles(extractedFiles)
      } catch (err) {
        console.error('Error extracting zip:', err)
      } finally {
        setLoading(false)
      }
    }

    reader.readAsArrayBuffer(zipFile)
  }

  return { zipRef, extractZipFile, files, loading, name, setFiles }
}

export default useZip
