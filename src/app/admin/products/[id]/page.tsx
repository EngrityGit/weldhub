'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getProductById } from '@/lib/products'
import type { Product } from '@/types'

interface ProductFormState extends Partial<Product> {
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    canonicalUrl: string;
  };
  specifications: Record<string, string>;
  features: string[];
  applications: string[];
  images: string[];
  videos: any[];
}

export default function AdminProductEditPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params?.id as string
  const isNew = productId === 'new'

  const [loading, setLoading] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [activeTab, setActiveTab] = useState<'basic' | 'details' | 'media' | 'seo'>('basic')
  
  // Initialized with default nested structures to prevent "undefined" errors
  const [formData, setFormData] = useState<ProductFormState>({
    name: '',
    slug: '',
    description: '',
    longDescription: '',
    price: 'Request a Quote',
    category: '',
    brand: '',
    badge: '',
    images: [],
    videos: [],
    specifications: {},
    features: [],
    applications: [],
    inStock: true,
    featured: false,
    createdAt: new Date().toISOString().split('T')[0],
    seo: {
      title: '',
      description: '',
      keywords: [],
      ogImage: '',
      canonicalUrl: ''
    }
  })

  // Temporary inputs
  const [featureInput, setFeatureInput] = useState('')
  const [applicationInput, setApplicationInput] = useState('')
  const [specKey, setSpecKey] = useState('')
  const [specValue, setSpecValue] = useState('')
  const [keywordInput, setKeywordInput] = useState('')
  const [imageUrlInput, setImageUrlInput] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDuration, setVideoDuration] = useState('')
  const [videoThumbnail, setVideoThumbnail] = useState('')

  const [uploadingImage, setUploadingImage] = useState(false)

  useEffect(() => {
    if (!isNew && productId) {
      const product = getProductById(productId)
      if (product) {
        // Merge fetched product with defaults to ensure nested objects exist
        setFormData({
          ...product,
          seo: product.seo || { title: '', description: '', keywords: [], ogImage: '', canonicalUrl: '' },
          specifications: product.specifications || {},
          features: product.features || [],
          applications: product.applications || [],
          images: product.images || [],
          videos: product.videos || []
        } as ProductFormState)
      } else {
        router.push('/admin/products')
      }
    }
  }, [productId, isNew, router])

  const handleInputChange = (field: keyof ProductFormState, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSeoChange = (field: keyof ProductFormState['seo'], value: any) => {
    setFormData(prev => ({
      ...prev,
      seo: { ...prev.seo, [field]: value }
    }))
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  const handleNameChange = (name: string) => {
    setFormData(prev => ({
      ...prev,
      name,
      slug: isNew || !prev.slug ? generateSlug(name) : prev.slug
    }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploadingImage(true)
    try {
      const data = new FormData()
      Array.from(files).forEach(file => data.append('images', file))

      const response = await fetch('/api/admin/upload-images', {
        method: 'POST',
        body: data
      })

      if (response.ok) {
        const { urls } = await response.json()
        setFormData(prev => ({
          ...prev,
          images: [...prev.images, ...urls]
        }))
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Failed to upload images')
    } finally {
      setUploadingImage(false)
    }
  }

  const addImageUrl = () => {
    if (imageUrlInput.trim()) {
      setFormData(prev => ({ ...prev, images: [...prev.images, imageUrlInput.trim()] }))
      setImageUrlInput('')
    }
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const addVideo = () => {
    if (videoUrl && videoTitle) {
      setFormData(prev => ({
        ...prev,
        videos: [...prev.videos, {
          url: videoUrl,
          title: videoTitle,
          duration: videoDuration || '0:00',
          thumbnail: videoThumbnail || prev.images[0] || ''
        }]
      }))
      setVideoUrl(''); setVideoTitle(''); setVideoDuration(''); setVideoThumbnail('')
    }
  }

  const removeVideo = (index: number) => {
    setFormData(prev => ({ ...prev, videos: prev.videos.filter((_, i) => i !== index) }))
  }

  const addFeature = () => {
    if (featureInput.trim()) {
      setFormData(prev => ({ ...prev, features: [...prev.features, featureInput.trim()] }))
      setFeatureInput('')
    }
  }

  const removeFeature = (index: number) => {
    setFormData(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }))
  }

  const addApplication = () => {
    if (applicationInput.trim()) {
      setFormData(prev => ({ ...prev, applications: [...prev.applications, applicationInput.trim()] }))
      setApplicationInput('')
    }
  }

  const removeApplication = (index: number) => {
    setFormData(prev => ({ ...prev, applications: prev.applications.filter((_, i) => i !== index) }))
  }

  const addSpecification = () => {
    if (specKey.trim() && specValue.trim()) {
      setFormData(prev => ({
        ...prev,
        specifications: { ...prev.specifications, [specKey.trim()]: specValue.trim() }
      }))
      setSpecKey(''); setSpecValue('')
    }
  }

  const removeSpecification = (key: string) => {
    setFormData(prev => {
      const newSpecs = { ...prev.specifications }
      delete newSpecs[key]
      return { ...prev, specifications: newSpecs }
    })
  }

  const addKeyword = () => {
    if (keywordInput.trim()) {
      setFormData(prev => ({
        ...prev,
        seo: { ...prev.seo, keywords: [...prev.seo.keywords, keywordInput.trim()] }
      }))
      setKeywordInput('')
    }
  }

  const removeKeyword = (index: number) => {
    setFormData(prev => ({
      ...prev,
      seo: { ...prev.seo, keywords: prev.seo.keywords.filter((_, i) => i !== index) }
    }))
  }

  const handleSave = async () => {
    setSaveStatus('saving')
    setLoading(true)

    try {
      if (!formData.name || !formData.slug || !formData.category || !formData.brand) {
        alert('Please fill in all required fields')
        setSaveStatus('error')
        setLoading(false)
        return
      }

      const response = await fetch('/api/admin/products', {
        method: isNew ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSaveStatus('saved')
        setTimeout(() => router.push('/admin/products'), 1500)
      } else {
        setSaveStatus('error')
      }
    } catch (error) {
      console.error('Save error:', error)
      setSaveStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setSaveStatus('idle'), 3000)
    }
  }

  const categories = ['Thermal Imaging', 'Weld Cameras', 'Inspection Systems', 'Robotic Arms', 'Robot Controllers']
  const brands = ['Xiris', 'Weldmatic']
  const badges = ['PREMIUM', 'INDUSTRIAL', 'COMPACT', 'NEW', 'PRECISION']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/products" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {isNew ? 'Add New Product' : 'Edit Product'}
                </h1>
                <p className="text-sm text-gray-600">{formData.name || 'Untitled Product'}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {saveStatus === 'saved' && (
                <div className="flex items-center gap-2 text-green-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Saved</span>
                </div>
              )}
              <Link href="/admin/products" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </Link>
              <button
                onClick={handleSave}
                disabled={loading}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Save Product'}
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-4 border-b border-gray-200">
            {['basic', 'details', 'media', 'seo'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-4 py-2 border-b-2 capitalize transition-colors ${
                  activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'basic' && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => handleInputChange('slug', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg font-mono text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="">Select Category</option>
                      {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Brand *</label>
                    <select
                      value={formData.brand}
                      onChange={(e) => handleInputChange('brand', e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="">Select Brand</option>
                      {brands.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-lg font-semibold mb-4">Features</h2>
                  <div className="flex gap-2 mb-4">
                    <input
                      type="text"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addFeature()}
                      className="flex-1 px-4 py-2 border rounded-lg"
                      placeholder="Enter feature..."
                    />
                    <button onClick={addFeature} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Add</button>
                  </div>
                  <div className="space-y-2">
                    {formData.features.map((f, i) => (
                      <div key={i} className="flex justify-between bg-gray-50 p-2 rounded">
                        <span>{f}</span>
                        <button onClick={() => removeFeature(i)} className="text-red-600">Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-semibold">Images</h2>
                <input
                  type="file"
                  multiple
                  onChange={handleImageUpload}
                  disabled={uploadingImage}
                  className="w-full"
                />
                <div className="grid grid-cols-3 gap-4">
                  {formData.images.map((img, i) => (
                    <div key={i} className="relative aspect-square">
                      <Image src={img} alt="Product" fill className="object-cover rounded-lg" />
                      <button onClick={() => removeImage(i)} className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded">X</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'seo' && (
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                <h2 className="text-lg font-semibold">SEO</h2>
                <div>
                  <label className="block text-sm font-medium">Meta Title</label>
                  <input
                    type="text"
                    value={formData.seo.title}
                    onChange={(e) => handleSeoChange('title', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Meta Description</label>
                  <textarea
                    value={formData.seo.description}
                    onChange={(e) => handleSeoChange('description', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={3}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold mb-4">Status</h3>
              <div className="flex items-center justify-between mb-4">
                <span>Featured</span>
                <button
                  onClick={() => handleInputChange('featured', !formData.featured)}
                  className={`w-11 h-6 rounded-full transition-colors ${formData.featured ? 'bg-blue-600' : 'bg-gray-200'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform transform ${formData.featured ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span>In Stock</span>
                <button
                  onClick={() => handleInputChange('inStock', !formData.inStock)}
                  className={`w-11 h-6 rounded-full transition-colors ${formData.inStock ? 'bg-green-600' : 'bg-red-600'}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform transform ${formData.inStock ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}