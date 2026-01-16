'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

function QuoteForm() {
  const searchParams = useSearchParams()
  const { cart, clearCart } = useCart()
  const fromCart = searchParams.get('from') === 'cart'
  const productId = searchParams.get('product')

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    
    try {
      // Prepare products list for email
      let productsText = ''
      if (fromCart && cart.length > 0) {
        productsText = cart.map(item => 
          `- ${item.name} (Qty: ${item.quantity}) - ${item.price}`
        ).join('\n')
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        // Customer Information
        from_name: `${formData.firstName} ${formData.lastName}`,
        customer_email: formData.email,
        customer_phone: formData.phone,
        company_name: formData.company,
        job_title: formData.jobTitle || 'Not provided',
        country: formData.country,
        
        // Request Details
        message: formData.message || 'No additional message provided',
        products_list: productsText || 'No products selected - Direct quote request',
        total_items: cart.length,
        
        // Metadata
        request_date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        request_source: fromCart ? 'Cart' : productId ? 'Product Page' : 'Direct Request',
        
        // For reply email
        reply_to: formData.email,
      }

      // Send email using EmailJS
const response = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  templateParams
)
      console.log('Email sent successfully:', response)
      
      setSubmitStatus('success')
      
      // Clear cart if coming from cart
      if (fromCart) {
        clearCart()
      }
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        country: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting quote:', error)
      setSubmitStatus('error')
      setErrorMessage('Failed to send quote request. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="card p-12 max-w-2xl w-full text-center animate-scale-in">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for your interest. Our team will review your request and get back to you within 24 hours with a customized quote.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            A confirmation email has been sent to <strong>{formData.email || 'your email address'}</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn btn-primary">
              Browse More Products
            </Link>
            <button 
              onClick={() => setSubmitStatus('idle')}
              className="btn btn-outline"
            >
              Submit Another Quote
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (submitStatus === 'error') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center p-6">
        <div className="card p-12 max-w-2xl w-full text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Submission Failed</h2>
          <p className="text-lg text-gray-600 mb-4">{errorMessage}</p>
          <p className="text-sm text-gray-500 mb-8">
            You can contact us directly at <a href="mailto:sales@engrity.com" className="text-blue-600 hover:underline">sales@engrity.com</a> or call <a href="tel:+17808006297" className="text-blue-600 hover:underline">+1 (780) 800-6297</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setSubmitStatus('idle')}
              className="btn btn-primary"
            >
              Try Again
            </button>
            <Link href="/products" className="btn btn-outline">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="heading-1 mb-4">Request a Quote</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below and our team will provide you with a customized quote tailored to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Your Company Inc."
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="input"
                        placeholder="Engineering Manager"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="input"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="JP">Japan</option>
                        <option value="CN">China</option>
                        <option value="IN">India</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Information</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your project and requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="input resize-none"
                    placeholder="Please provide details about your application, timeline, quantity requirements, and any specific technical needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner mr-3" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our privacy policy
                </p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Products Summary */}
            {fromCart && cart.length > 0 && (
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Products ({cart.length})
                </h3>
                <div className="space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-start text-sm border-b border-gray-100 pb-3">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 line-clamp-1">{item.name}</p>
                        <p className="text-gray-600 text-xs">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-gray-900 text-sm ml-2">{item.price}</p>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                      Total {cart.reduce((sum, item) => sum + item.quantity, 0)} items
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Info */}
            <div className="card p-6">
              <h3 className="font-bold text-gray-900 mb-4">Need Help?</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:sales@engrity.com" className="text-blue-600 hover:underline">
                      sales@engrity.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+17808006297" className="text-blue-600 hover:underline">
                      +1 (780) 800-6297
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="card p-6 bg-blue-50 border-blue-200">
              <h3 className="font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Customized pricing for your needs',
                  'Technical consultation included',
                  'Volume discounts available',
                  'Flexible payment terms',
                  'Expert support & training',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="spinner" /></div>}>
      <QuoteForm />
    </Suspense>
  )
}