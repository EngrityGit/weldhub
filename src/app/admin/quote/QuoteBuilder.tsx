"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, Plus, Trash2, Download, User, Settings, 
  DollarSign, MapPin, Mail, Phone, Eye, Edit3, 
  ChevronRight, Printer, Package, CreditCard, Globe
} from 'lucide-react';

// --- Types ---
interface LineItem {
  id: string;
  partNumber: string;
  description: string;
  qty: number;
  unitPrice: number;
}

interface ExtraCharge {
  label: string;
  amount: number;
}

const QuoteBuilder: React.FC = () => {
  // --- UI State ---
  const [activeTab, setActiveTab] = useState<'details' | 'items' | 'charges' | 'rep'>('details');
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit'); // For mobile toggle

  // --- Quote State ---
  const [quoteNum, setQuoteNum] = useState('Q-051326-CM');
  const [subject, setSubject] = useState('Olympus IPLEX GT/GX Videoscope – 6MM OM Scope');
  const [issueDate, setIssueDate] = useState('2026-05-12');
  const [expiryDate, setExpiryDate] = useState('2026-06-11');
  const [payTerms, setPayTerms] = useState('Pending Credit Check');
  const [currency, setCurrency] = useState('CAD');
  const [refCode, setRefCode] = useState('051326CM');

  const [clientName, setClientName] = useState('Mr. Syukur Hidayat');
  const [clientEmail, setClientEmail] = useState('syukur1970@gmail.Com');
  const [clientPhone, setClientPhone] = useState('+62812-1400-6200');
  const [clientAddr, setClientAddr] = useState('Blok Kamis Rt 002 - Rw 002\nMaja Utara - Maja - Majalengka - Jawa Barat Indonesia- 45461');

  const [repName, setRepName] = useState('Charliegh Moore');
  const [repEmail, setRepEmail] = useState('sales@engrity.com');
  const [repPhone, setRepPhone] = useState('(587) 252-5695');

  const [gstRate, setGstRate] = useState(5);
  const [pstRate, setPstRate] = useState(0);

  const [items, setItems] = useState<LineItem[]>([
    {
      id: '1',
      partNumber: 'IV9620G',
      qty: 1,
      unitPrice: 22275.50,
      description: 'IV9620G IPLEX G Series 6MM 2.0M SCOPE.\nScope unit for IPLEX GT/GX Videoscope System.\nModel Number: IV9620G.\nScope Diameter: 6.0mm.\nScope Working Length: 2.0m.\nIncludes instruction manual and tip adapter case. Tip adapters sold separately.\nLead Time: 5 Business Days.'
    },
    {
      id: '2',
      partNumber: 'IV9000GX-B-S',
      qty: 1,
      unitPrice: 42785.75,
      description: 'IV9000G IPLEX GX BASE UNIT w/ Batteries and Charger.\nLoaded with stereo measurement. IPLEX GX base is a body that requires an IPLEX G SERIES SCOPE to operate.\nLead Time: 30 Business Days.'
    }
  ]);

  const [charges, setCharges] = useState<ExtraCharge[]>([{ label: 'Shipping', amount: 227.37 }]);
  const [terms, setTerms] = useState(`• Changes, additions or deletions from this package quotation may cause pricing adjustments.
• Prices quotes are in CAD unless otherwise stated in this quotation. Shipping charges will be added to your invoice at the time of shipment. Engrity will prepay and add shipping costs unless your carrier collect account number is provided.
• All Applicable taxes will apply. If you are tax exempt please provide tax exempt form along with your purchase order.`);

  // --- Calculations ---
  const subtotal = items.reduce((acc, item) => acc + (item.qty * item.unitPrice), 0);
  const chargesTotal = charges.reduce((acc, c) => acc + c.amount, 0);
  const gstAmount = (subtotal + chargesTotal) * (gstRate / 100);
  const pstAmount = (subtotal + chargesTotal) * (pstRate / 100);
  const grandTotal = subtotal + chargesTotal + gstAmount + pstAmount;

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(val);

  // --- PDF Logic ---
  const downloadPDF = async () => {
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('quote-document');
    const opt = {
      margin: 0,
      filename: `Engrity-Quote-${quoteNum}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 3, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b px-4 md:px-8 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="font-bold text-lg tracking-tight leading-none text-slate-800">Engrity WeldHub</h1>

          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile View Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-lg lg:hidden">
            <button 
              onClick={() => setViewMode('edit')}
              className={`px-3 py-1.5 rounded-md flex items-center gap-2 text-xs font-bold transition-all ${viewMode === 'edit' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              <Edit3 size={14} /> Edit
            </button>
            <button 
              onClick={() => setViewMode('preview')}
              className={`px-3 py-1.5 rounded-md flex items-center gap-2 text-xs font-bold transition-all ${viewMode === 'preview' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}
            >
              <Eye size={14} /> View
            </button>
          </div>

          <button 
            onClick={downloadPDF}
            className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all transform active:scale-95"
          >
            <Printer size={16} /> Print PDF
          </button>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 overflow-hidden flex-col lg:flex-row my-2 md:my-4 mx-2 md:mx-4 rounded-2xl border bg-white shadow-xl">
        
        {/* EDITOR (LEFT SIDE) */}
        <aside className={`${viewMode === 'preview' ? 'hidden' : 'flex'} lg:flex w-full lg:w-[480px] flex-col border-r bg-slate-50/50 overflow-hidden`}>
          <div className="flex p-2 gap-1 bg-white border-b overflow-x-auto no-scrollbar">
            {[
              { id: 'details', label: 'Client', icon: User },
              { id: 'items', label: 'Items', icon: Package },
              { id: 'charges', label: 'Charges', icon: DollarSign },
              { id: 'rep', label: 'Rep', icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                <tab.icon size={14} /> {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 custom-scrollbar">
            {activeTab === 'details' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <SectionHeader icon={FileText} title="Quote Information" />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Quote Number" value={quoteNum} onChange={setQuoteNum} />
                  <InputField label="Reference ID" value={refCode} onChange={setRefCode} />
                </div>
                <InputField label="Subject Heading" value={subject} onChange={setSubject} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Issue Date" type="date" value={issueDate} onChange={setIssueDate} />
                  <InputField label="Expiry Date" type="date" value={expiryDate} onChange={setExpiryDate} />
                </div>

                <div className="pt-4 border-t border-slate-200"></div>
                <SectionHeader icon={User} title="Client Details" />
                <InputField label="Full Name" value={clientName} onChange={setClientName} />
                <InputField label="Email Address" type="email" value={clientEmail} onChange={setClientEmail} />
                <InputField label="Phone Number" value={clientPhone} onChange={setClientPhone} />
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase ml-1">Client Address</label>
                  <textarea 
                    rows={4} 
                    className="w-full border-2 border-slate-100 rounded-xl p-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all resize-none"
                    value={clientAddr} 
                    onChange={e => setClientAddr(e.target.value)} 
                  />
                </div>
              </div>
            )}

            {activeTab === 'items' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-left-4">
                <SectionHeader icon={Package} title="Line Items" />
                {items.map((item, idx) => (
                  <div key={item.id} className="group p-5 border-2 border-slate-100 rounded-2xl bg-white hover:border-blue-200 transition-all shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-2 py-1 rounded">ITEM {idx + 1}</span>
                      <button 
                        onClick={() => setItems(items.filter(i => i.id !== item.id))}
                        className="text-slate-300 hover:text-red-500 transition-colors"
                      ><Trash2 size={16} /></button>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-3">
                        <div className="col-span-2">
                          <InputField label="Part Number" value={item.partNumber} onChange={val => {
                              const newItems = [...items]; newItems[idx].partNumber = val; setItems(newItems);
                          }} />
                        </div>
                        <InputField label="Qty" type="number" value={item.qty.toString()} onChange={val => {
                            const newItems = [...items]; newItems[idx].qty = parseInt(val) || 0; setItems(newItems);
                        }} />
                    </div>
                    <div className="mb-3">
                      <label className="text-[11px] font-bold text-slate-500 uppercase ml-1">Description</label>
                      <textarea className="w-full border-2 border-slate-100 rounded-xl p-2 text-xs focus:border-blue-500 outline-none" rows={3} value={item.description} onChange={e => {
                          const newItems = [...items]; newItems[idx].description = e.target.value; setItems(newItems);
                      }} />
                    </div>
                    <InputField label="Unit Price (CAD)" type="number" value={item.unitPrice.toString()} onChange={val => {
                        const newItems = [...items]; newItems[idx].unitPrice = parseFloat(val) || 0; setItems(newItems);
                    }} />
                  </div>
                ))}
                <button 
                   onClick={() => setItems([...items, { id: Date.now().toString(), partNumber: '', qty: 1, unitPrice: 0, description: '' }])}
                   className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add New Line Item
                </button>
              </div>
            )}

            {activeTab === 'charges' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <SectionHeader icon={DollarSign} title="Taxes & Logic" />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="GST %" type="number" value={gstRate.toString()} onChange={v => setGstRate(parseFloat(v))} />
                  <InputField label="PST %" type="number" value={pstRate.toString()} onChange={v => setPstRate(parseFloat(v))} />
                </div>
                
                <SectionHeader icon={CreditCard} title="Additional Charges" />
                {charges.map((c, idx) => (
                    <div key={idx} className="flex gap-2 items-end">
                        <div className="flex-1"><InputField label="Label" value={c.label} onChange={v => { const nc = [...charges]; nc[idx].label = v; setCharges(nc); }} /></div>
                        <div className="w-28"><InputField label="Amount" type="number" value={c.amount.toString()} onChange={v => { const nc = [...charges]; nc[idx].amount = parseFloat(v) || 0; setCharges(nc); }} /></div>
                    </div>
                ))}

                <SectionHeader icon={FileText} title="Terms & Conditions" />
                <textarea rows={8} className="w-full border-2 border-slate-100 rounded-xl p-4 text-xs text-slate-600 outline-none focus:border-blue-500" value={terms} onChange={e => setTerms(e.target.value)} />
              </div>
            )}

            {activeTab === 'rep' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
                <SectionHeader icon={User} title="Sales Representative" />
                <InputField label="Rep Name" value={repName} onChange={setRepName} />
                <InputField label="Rep Email" value={repEmail} onChange={setRepEmail} />
                <InputField label="Rep Phone" value={repPhone} onChange={setRepPhone} />
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-xs text-blue-700 leading-relaxed font-medium">
                    This info appears on the right side of the quote header to let the client know who prepared the document.
                  </p>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* PREVIEW (RIGHT SIDE) */}
        <section className={`${viewMode === 'edit' ? 'hidden' : 'flex'} lg:flex flex-1 bg-slate-200/50 overflow-hidden items-center justify-center p-4 md:p-10`}>
          <div className="w-full h-full overflow-auto flex justify-center custom-scrollbar">
            
            {/* The actual A4 Page */}
            <div id="quote-document" className="bg-white w-[210mm] min-h-[297mm] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-[15mm] flex flex-col text-[11px] leading-relaxed text-slate-800">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-10 pb-10 border-b-2 border-slate-100">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-[900] text-blue-700 tracking-tighter mb-0">Engrity Group Inc.</h2>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">Quality Inspection & Asset Integrity</p>
                  </div>
                  <div className="space-y-0.5 text-slate-500">
                    <p className="font-bold text-slate-800">Engrity Group Inc.</p>
                    <p>201-9403 63 Ave NW, Edmonton, AB T6E 0G2</p>
                    <p>Phone: 1 (780) 800-6297</p>
                    <p>Email: info@engrity.com</p>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                  <div className="bg-blue-00 text-white px-5 py-2 rounded-lg font-black text-xs mb-4 uppercase tracking-widest">Quotation</div>
                  <div className="space-y-1.5 font-medium">
                    <p>Quote Number: <span className="font-bold text-slate-900 ml-2">{quoteNum}</span></p>
                    <p>Date of Issue: <span className="font-bold text-slate-900 ml-2">{issueDate}</span></p>
                    <p>Expiration Date: <span className="font-bold text-slate-900 ml-2">{expiryDate}</span></p>
                    <p>Payment Terms: <span className="font-bold text-slate-900 ml-2">{payTerms}</span></p>
                    <p>Currency: <span className="font-bold text-slate-900 ml-2">{currency}</span></p>
                    <p>Reference: <span className="font-bold text-slate-900 ml-2">{refCode}</span></p>
                  </div>
                </div>
              </div>

              {/* Client and Rep */}
              <div className="grid grid-cols-2 gap-12 mb-10 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                <div className="space-y-2">
                  <h4 className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-3">Prepared For</h4>
                  <p className="text-sm font-bold text-slate-900">{clientName}</p>
                  <p className="whitespace-pre-line text-slate-600 font-medium">{clientAddr}</p>
                  <div className="flex flex-col gap-0.5 pt-2 border-t border-slate-200">
                    <p className="text-blue-700 font-semibold">{clientEmail}</p>
                    <p className="text-slate-500">{clientPhone}</p>
                  </div>
                </div>
                <div className="space-y-2 border-l border-slate-200 pl-12">
                  <h4 className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mb-3">Sales Contact</h4>
                  <p className="text-sm font-bold text-slate-900">{repName}</p>
                  <p className="text-slate-500 font-medium">Sales Representative</p>
                  <div className="flex flex-col gap-0.5 pt-2 border-t border-slate-200">
                    <p className="text-blue-700 font-semibold">{repEmail}</p>
                    <p className="text-slate-500">{repPhone}</p>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="mb-8">
                <div className=" text-black p-3 rounded-lg flex items-center gap-3">
                   <div className="bg-white p-1.5 rounded-md"><FileText size={14}/></div>
                   <span className="font-bold uppercase text-[12px] tracking-wider">Subject: {subject}</span>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-900 text-[9px] font-black uppercase text-slate-900 tracking-widest">
                      <th className="px-2 py-3 text-left w-8">#</th>
                      <th className="px-2 py-3 text-left w-32">Part Number</th>
                      <th className="px-2 py-3 text-left">Description Details</th>
                      <th className="px-2 py-3 text-center w-12">Qty</th>
                      <th className="px-2 py-3 text-right w-24">Unit Price</th>
                      <th className="px-2 py-3 text-right w-24">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id} className="border-b border-slate-100 align-top group">
                        <td className="px-2 py-4 text-slate-400 font-black">{i + 1}</td>
                        <td className="px-2 py-4 font-bold text-blue-700">{item.partNumber}</td>
                        <td className="px-2 py-4">
                          <div className="whitespace-pre-line text-slate-600 leading-relaxed font-medium">
                            {item.description}
                          </div>
                        </td>
                        <td className="px-2 py-4 text-center font-bold">{item.qty}</td>
                        <td className="px-2 py-4 text-right font-medium">{formatCurrency(item.unitPrice)}</td>
                        <td className="px-2 py-4 text-right font-black text-slate-900">{formatCurrency(item.qty * item.unitPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary and Terms */}
              <div className="mt-auto grid grid-cols-2 gap-12 pt-10">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">Additional Terms</h4>
                    <div className="text-[10px] text-slate-500 font-medium whitespace-pre-line space-y-1">
                      {terms}
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-xl">
                    <p className="text-[10px] text-blue-800 font-bold leading-relaxed italic">
                      "This Quote remains valid for 30 days from the date of creation and is subject to the availability of technicians."
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between py-2 border-b border-slate-100 font-bold text-slate-500">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  {charges.map((c, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-slate-100 font-bold text-slate-500">
                      <span>{c.label}</span>
                      <span>{formatCurrency(c.amount)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-2 border-b border-slate-100 font-bold text-slate-500">
                    <span>GST ({gstRate}%)</span>
                    <span>{formatCurrency(gstAmount)}</span>
                  </div>
                  <div className="flex justify-between py-4 text-xl font-bold text-blue-700">
                    <span>Grand Total</span>
                    <span>{formatCurrency(grandTotal)}</span>
                  </div>
                  <div className="bg-slate-900 text-white p-5 rounded-2xl mt-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:rotate-12 transition-transform">
                      <CreditCard size={48} />
                    </div>
                    <p className="text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-1">To Place an Order</p>
                    <p className="text-[11px] font-medium opacity-80 mb-2">Email purchase order to:</p>
                    <p className="text-sm font-bold text-white underline  tracking-tight">sales@engrity.com</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-16 pt-6 border-t-2 border-slate-100 flex justify-between items-center text-[9px] font-black uppercase text-slate-400 tracking-[0.2em]">
                <p>Engrity Group Inc. · WeldHub Marketplace</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @media print {
          .no-print { display: none; }
        }
      `}</style>
    </div>
  );
};

// --- Helper Components ---
const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="bg-white shadow-sm border p-1.5 rounded-lg text-blue-600">
      <Icon size={16} />
    </div>
    <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight">{title}</h3>
  </div>
);

const InputField = ({ label, value, onChange, type = "text" }: { label: string, value: string, onChange: (v: string) => void, type?: string }) => (
  <div className="flex flex-col gap-1.5 flex-1">
    <label className="text-[11px] font-bold text-slate-500 uppercase ml-1 tracking-wide">{label}</label>
    <input 
      type={type}
      className="w-full border-2 border-slate-100 bg-white rounded-xl p-3 text-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all font-medium"
      value={value} 
      onChange={e => onChange(e.target.value)} 
    />
  </div>
);

export default QuoteBuilder;