import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import path from 'path'

const PRODUCTS_FILE = path.join(process.cwd(), 'lib', 'products.ts')

// Helper to read current products
async function readProducts() {
  try {
    const content = await readFile(PRODUCTS_FILE, 'utf-8')
    // Parse the TypeScript file to extract products array
    const match = content.match(/export const products: Product\[\] = (\[[\s\S]*?\])\n\n/)
    if (match) {
      // This is a simplified approach - in production, use proper TS parsing
      const productsJson = match[1]
      return JSON.parse(productsJson)
    }
    return []
  } catch (error) {
    console.error('Error reading products:', error)
    return []
  }
}

// Helper to write products
async function writeProducts(products: any[]) {
  try {
    const content = await readFile(PRODUCTS_FILE, 'utf-8')
    const beforeProducts = content.substring(0, content.indexOf('export const products'))
    const afterProducts = content.substring(content.indexOf('\n\n// Helper functions'))
    
    const newContent = `${beforeProducts}export const products: Product[] = ${JSON.stringify(products, null, 2)}${afterProducts}`
    
    await writeFile(PRODUCTS_FILE, newContent, 'utf-8')
    return true
  } catch (error) {
    console.error('Error writing products:', error)
    return false
  }
}

// GET - Fetch all products
export async function GET(request: NextRequest) {
  try {
    const products = await readProducts()
    return NextResponse.json({ products })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

// POST - Create new product
export async function POST(request: NextRequest) {
  try {
    const newProduct = await request.json()
    
    // Generate ID
    newProduct.id = Date.now().toString()
    
    // Validate required fields
    if (!newProduct.name || !newProduct.slug || !newProduct.category || !newProduct.brand) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const products = await readProducts()
    products.push(newProduct)
    
    const success = await writeProducts(products)
    
    if (success) {
      return NextResponse.json({
        success: true,
        product: newProduct
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to save product' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Create product error:', error)
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    )
  }
}

// PUT - Update existing product
export async function PUT(request: NextRequest) {
  try {
    const updatedProduct = await request.json()
    
    if (!updatedProduct.id) {
      return NextResponse.json(
        { error: 'Product ID required' },
        { status: 400 }
      )
    }

    const products = await readProducts()
    const index = products.findIndex((p: any) => p.id === updatedProduct.id)
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    products[index] = updatedProduct
    
    const success = await writeProducts(products)
    
    if (success) {
      return NextResponse.json({
        success: true,
        product: updatedProduct
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to update product' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Update product error:', error)
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    )
  }
}

// DELETE - Remove product
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { error: 'Product ID required' },
        { status: 400 }
      )
    }

    const products = await readProducts()
    const filteredProducts = products.filter((p: any) => p.id !== id)
    
    if (products.length === filteredProducts.length) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    const success = await writeProducts(filteredProducts)
    
    if (success) {
      return NextResponse.json({
        success: true,
        message: 'Product deleted'
      })
    } else {
      return NextResponse.json(
        { error: 'Failed to delete product' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Delete product error:', error)
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    )
  }
}