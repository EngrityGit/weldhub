import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('images') as File[]

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      )
    }

    const uploadedUrls: string[] = []

    // Ensure upload directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'images', 'products')
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        continue // Skip non-image files
      }

      // Generate unique filename
      const timestamp = Date.now()
      const randomString = Math.random().toString(36).substring(7)
      const extension = file.name.split('.').pop()
      const filename = `${timestamp}-${randomString}.${extension}`

      // Convert File to Buffer
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // Save file
      const filepath = path.join(uploadDir, filename)
      await writeFile(filepath, buffer)

      // Add URL to results
      uploadedUrls.push(`/images/products/${filename}`)
    }

    return NextResponse.json({
      success: true,
      urls: uploadedUrls
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Failed to upload images' },
      { status: 500 }
    )
  }
}