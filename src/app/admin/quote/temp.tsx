// "use client";

// import React, { useState, useMemo } from 'react';
// import { 
//   FileText, Plus, Trash2, User, Settings, 
//   DollarSign, Package, Globe, Printer, 
//   Eye, Edit3, ClipboardList, ShieldCheck
// } from 'lucide-react';

// // --- Types ---
// interface LineItem {
//   id: string;
//   partNumber: string;
//   description: string;
//   qty: number;
//   unitPrice: number;
// }

// interface ExtraCharge {
//   label: string;
//   amount: number;
// }

// const EngrityBuilder: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<'details' | 'items' | 'charges' | 'rep'>('details');
//   const [viewMode, setViewMode] = useState<'edit' | 'preview'>('edit');

//   // --- Quote State ---
//   const [quoteNum, setQuoteNum] = useState('Q-051326-CM');
//   const [subject, setSubject] = useState('Olympus IPLEX GT/GX Videoscope – 6MM OM Scope');
//   const [issueDate, setIssueDate] = useState('2026-05-12');
//   const [expiryDate, setExpiryDate] = useState('2026-06-11');
//   const [payTerms, setPayTerms] = useState('Pending Credit Check');
//   const [refCode, setRefCode] = useState('051326CM');

//   const [clientName, setClientName] = useState('Mr. Syukur Hidayat');
//   const [clientEmail, setClientEmail] = useState('syukur1970@gmail.com');
//   const [clientPhone, setClientPhone] = useState('+62812-1400-6200');
//   const [clientAddr, setClientAddr] = useState('Blok Kamis Rt 002 - Rw 002\nMaja Utara - Maja - Majalengka - Jawa Barat Indonesia- 45461');

//   const [repName, setRepName] = useState('Charliegh Moore');
//   const [repEmail, setRepEmail] = useState('sales@engrity.com');
//   const [repPhone, setRepPhone] = useState('(587) 252-5695');

//   const [gstRate, setGstRate] = useState(5);
//   const [pstRate, setPstRate] = useState(0);

//   const [items, setItems] = useState<LineItem[]>([
//     {
//       id: '1',
//       partNumber: 'IV9620G',
//       qty: 1,
//       unitPrice: 22275.50,
//       description: 'IV9620G IPLEX G Series 6MM 2.0M SCOPE.\nScope unit for IPLEX GT/GX Videoscope System.\nModel Number: IV9620G.\nScope Diameter: 6.0mm.\nScope Working Length: 2.0m.\nIncludes instruction manual and tip adapter case. Tip adapters sold separately.\nLead Time: 5 Business Days.'
//     },
//     {
//       id: '2',
//       partNumber: 'IV9000GX-B-S',
//       qty: 1,
//       unitPrice: 42785.75,
//       description: 'IV9000G IPLEX GX BASE UNIT w/ Batteries and Charger.\nLoaded with stereo measurement. IPLEX GX base is a body that requires an IPLEX G SERIES SCOPE to operate.\nLead Time: 30 Business Days.'
//     }
//   ]);

//   const [charges, setCharges] = useState<ExtraCharge[]>([{ label: 'Shipping', amount: 227.37 }]);
//   const [terms, setTerms] = useState(`• Changes, additions or deletions from this package quotation may cause pricing adjustments.
// • Prices quotes are in CAD unless otherwise stated in this quotation.
// • Engrity will prepay and add shipping costs unless your carrier collect account number is provided.
// • All Applicable taxes will apply. Please provide tax exempt form if applicable.`);

//   // --- Calculations ---
//   const totals = useMemo(() => {
//     const sub = items.reduce((acc, item) => acc + (item.qty * item.unitPrice), 0);
//     const extra = charges.reduce((acc, c) => acc + c.amount, 0);
//     const gst = (sub + extra) * (gstRate / 100);
//     const pst = (sub + extra) * (pstRate / 100);
//     return { sub, extra, gst, pst, grand: sub + extra + gst + pst };
//   }, [items, charges, gstRate, pstRate]);

//   const formatCurrency = (val: number) => 
//     new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(val);

//   // --- PDF Generation (No Pixelation) ---
//   const downloadPDF = async () => {
//     const html2pdf = (await import('html2pdf.js')).default;
//     const element = document.getElementById('quote-document');
//     const opt = {
//       margin: 0,
//       filename: `Engrity_Quote_${quoteNum}.pdf`,
//       image: { type: 'jpeg', quality: 1 },
//       html2canvas: { scale: 4, useCORS: true, letterRendering: true },
//       jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
//       pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
//     };
//     html2pdf().set(opt).from(element).save();
//   };

//   return (
//     <div className="flex flex-col h-screen bg-slate-100 text-slate-700 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      
//       {/* NAVBAR */}
//       <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shrink-0 z-30 shadow-sm">
//         <div className="flex items-center gap-3">
//           <Globe className="text-blue-600 w-5 h-5" />
//           <h1 className="text-xs font-semibold uppercase tracking-widest text-slate-400">
//             Admin Portal <span className="mx-2 text-slate-200">|</span> 
//             <span className="text-slate-900 font-black italic">Engrity Group Inc.</span>
//           </h1>
//         </div>

//         <div className="flex items-center gap-3">
//           <div className="flex bg-slate-100 p-1 rounded-xl lg:hidden">
//              <button onClick={() => setViewMode('edit')} className={`px-4 py-2 rounded-lg text-xs font-bold ${viewMode === 'edit' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>Edit</button>
//              <button onClick={() => setViewMode('preview')} className={`px-4 py-2 rounded-lg text-xs font-bold ${viewMode === 'preview' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500'}`}>Preview</button>
//           </div>
//           <button onClick={downloadPDF} className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg active:scale-95">
//             <Printer size={14} /> Download PDF
//           </button>
//         </div>
//       </nav>

//       <main className="flex flex-1 overflow-hidden p-4 lg:p-6 gap-6">
        
//         {/* LEFT: FORM EDITOR */}
//         <aside className={`${viewMode === 'preview' ? 'hidden' : 'flex'} lg:flex w-full lg:w-[480px] flex-col bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden`}>
//           <div className="flex border-b">
//             {(['details', 'items', 'charges', 'rep'] as const).map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`flex-1 py-4 text-[10px] font-bold uppercase tracking-widest transition-all border-b-4 ${
//                   activeTab === tab ? 'border-blue-600 text-blue-600 bg-slate-50' : 'border-transparent text-slate-400'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
//             {activeTab === 'details' && (
//               <div className="space-y-6">
//                 <SectionHeader icon={ClipboardList} title="Quote Details" />
//                 <div className="grid grid-cols-2 gap-4">
//                   <InputField label="Quote Number" value={quoteNum} onChange={setQuoteNum} />
//                   <InputField label="Internal Ref" value={refCode} onChange={setRefCode} />
//                 </div>
//                 <InputField label="Subject" value={subject} onChange={setSubject} />
//                 <div className="grid grid-cols-2 gap-4">
//                   <InputField label="Issue Date" type="date" value={issueDate} onChange={setIssueDate} />
//                   <InputField label="Expiry Date" type="date" value={expiryDate} onChange={setExpiryDate} />
//                 </div>
//                 <div className="pt-6 border-t">
//                   <SectionHeader icon={User} title="Client Address" />
//                   <div className="space-y-4 mt-4">
//                     <InputField label="Client Name" value={clientName} onChange={setClientName} />
//                     <InputField label="Email" value={clientEmail} onChange={setClientEmail} />
//                     <div className="flex flex-col gap-1.5">
//                       <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Address</label>
//                       <textarea rows={4} className="border border-slate-200 rounded-xl p-3 text-sm outline-none bg-slate-50 font-medium" value={clientAddr} onChange={e => setClientAddr(e.target.value)} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'items' && (
//               <div className="space-y-4">
//                 <SectionHeader icon={Package} title="Equipment List" />
//                 {items.map((item, idx) => (
//                   <div key={item.id} className="p-5 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-3 relative">
//                     <button onClick={() => setItems(items.filter(i => i.id !== item.id))} className="absolute top-4 right-4 text-slate-300 hover:text-red-500"><Trash2 size={14}/></button>
//                     <div className="grid grid-cols-3 gap-3">
//                       <div className="col-span-2"><InputField label="Part #" value={item.partNumber} onChange={v => { const n = [...items]; n[idx].partNumber = v; setItems(n); }} /></div>
//                       <InputField label="Qty" type="number" value={item.qty.toString()} onChange={v => { const n = [...items]; n[idx].qty = parseInt(v) || 0; setItems(n); }} />
//                     </div>
//                     <textarea className="w-full border border-slate-200 rounded-xl p-3 text-xs outline-none bg-white font-medium" rows={3} value={item.description} onChange={e => { const n = [...items]; n[idx].description = e.target.value; setItems(n); }} />
//                     <InputField label="Unit Price" type="number" value={item.unitPrice.toString()} onChange={v => { const n = [...items]; n[idx].unitPrice = parseFloat(v) || 0; setItems(n); }} />
//                   </div>
//                 ))}
//                 <button onClick={() => setItems([...items, { id: Date.now().toString(), partNumber: '', qty: 1, unitPrice: 0, description: '' }])} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-xs hover:border-blue-300 hover:text-blue-600 transition-all">+ Add Product</button>
//               </div>
//             )}

//             {activeTab === 'charges' && (
//               <div className="space-y-6">
//                 <SectionHeader icon={DollarSign} title="Taxes & Charges" />
//                 <div className="grid grid-cols-2 gap-4">
//                   <InputField label="GST %" value={gstRate.toString()} onChange={v => setGstRate(parseFloat(v) || 0)} />
//                   <InputField label="PST %" value={pstRate.toString()} onChange={v => setPstRate(parseFloat(v) || 0)} />
//                 </div>
//                 {charges.map((c, idx) => (
//                   <div key={idx} className="flex gap-2">
//                     <div className="flex-1"><InputField label="Label" value={c.label} onChange={v => { const nc = [...charges]; nc[idx].label = v; setCharges(nc); }} /></div>
//                     <div className="w-24"><InputField label="Amount" value={c.amount.toString()} onChange={v => { const nc = [...charges]; nc[idx].amount = parseFloat(v) || 0; setCharges(nc); }} /></div>
//                   </div>
//                 ))}
//                 <div className="flex flex-col gap-1.5 pt-4">
//                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Legal Terms</label>
//                   <textarea rows={8} className="border border-slate-200 rounded-xl p-4 text-xs outline-none bg-white font-medium" value={terms} onChange={e => setTerms(e.target.value)} />
//                 </div>
//               </div>
//             )}

//             {activeTab === 'rep' && (
//                <div className="space-y-6">
//                 <SectionHeader icon={Settings} title="Representative" />
//                 <InputField label="Full Name" value={repName} onChange={setRepName} />
//                 <InputField label="Email" value={repEmail} onChange={setRepEmail} />
//                 <InputField label="Phone" value={repPhone} onChange={setRepPhone} />
//                </div>
//             )}
//           </div>
//         </aside>

//         {/* RIGHT: PREVIEW AREA */}
//         <section className={`${viewMode === 'edit' ? 'hidden' : 'flex'} lg:flex flex-1 overflow-hidden flex-col items-center`}>
//           <div className="w-full overflow-y-auto px-4 custom-scrollbar pb-20 pt-4">
            
//             {/* US LETTER DOCUMENT (8.5 x 11 in) */}
//             <div 
//               id="quote-document" 
//               className="bg-white mx-auto shadow-2xl relative flex flex-col text-[11px] leading-relaxed text-slate-600"
//               style={{ width: '8.5in', minHeight: '11in', padding: '0.75in' }}
//             >
              
//               {/* BRAND HEADER */}
//               <div className="flex justify-between items-start mb-10 pb-10 border-b border-slate-100">
//                 <div className="space-y-8">
//                   <div>
//                     <h2 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">Engrity Group Inc.</h2>
//                     <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-3 leading-none">Asset Integrity & Industrial Marketplace</p>
//                   </div>
//                   <div className="text-[11px] font-medium text-slate-500 space-y-1 leading-tight">
//                     <p className="text-slate-800 font-semibold mb-1">Engrity Group Inc.</p>
//                     <p>201-9403 63 Ave NW, Edmonton, AB T6E 0G2</p>
//                     <p>Phone: 1 (780) 800-6297</p>
//                     <p className="text-blue-600">info@engrity.com</p>
//                   </div>
//                 </div>

//                 <div className="text-right">
//                   <div className="text-5xl font-black text-slate-50 uppercase tracking-tighter italic mb-4 leading-none select-none">QUOTE</div>
//                   <div className="space-y-1.5 font-medium text-slate-900">
//                     <p className="text-lg font-semibold text-slate-900 mb-2">Quote #{quoteNum}</p>
//                     <div className="text-[10px] uppercase tracking-widest space-y-1">
//                       <p className="text-slate-400 font-semibold">Issue Date: <span className="text-slate-900 ml-1">{issueDate}</span></p>
//                       <p className="text-slate-400 font-semibold">Valid Until: <span className="text-slate-900 ml-1">{expiryDate}</span></p>
//                       <p className="text-blue-600 font-bold mt-4 tracking-tighter italic">Ref: {refCode}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* CLIENT & REP INFORMATION */}
//               <div className="grid grid-cols-2 gap-12 mb-10">
//                 <div className="space-y-3">
//                   <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">Prepared For</h4>
//                   <div className="font-medium text-slate-700">
//                     <p className="text-slate-900 font-semibold text-sm mb-1">{clientName}</p>
//                     <p className="whitespace-pre-line leading-relaxed opacity-80">{clientAddr}</p>
//                     <p className="text-blue-600 mt-2 font-semibold">{clientEmail}</p>
//                     <p className="opacity-80">{clientPhone}</p>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1">Sales Contact</h4>
//                   <div className="font-medium text-slate-700">
//                     <p className="text-slate-900 font-semibold text-sm mb-1">{repName}</p>
//                     <p className="opacity-80">Sales Representative</p>
//                     <p className="text-blue-600 mt-2 font-semibold">{repEmail}</p>
//                     <p className="opacity-80">{repPhone}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* SUBJECT BOX */}
//               <div className="mb-8 font-semibold text-base text-slate-800 tracking-tight leading-none bg-slate-50 p-4 border border-slate-100 text-center rounded-xl">
//                 {subject}
//               </div>

//               {/* TABLE BLOCK */}
//               <div className="flex-1">
//                 <table className="w-full text-left border-collapse table-fixed">
//                   <thead>
//                     <tr className="text-[9px] font-bold text-slate-900 uppercase tracking-widest border-b border-slate-900 bg-slate-50/50">
//                       <th className="px-3 py-4 w-10">#</th>
//                       <th className="px-3 py-4 w-36">Part Number</th>
//                       <th className="px-3 py-4">Detailed Description</th>
//                       <th className="px-3 py-4 w-12 text-center">Qty</th>
//                       <th className="px-3 py-4 w-28 text-right">Unit Price</th>
//                     </tr>
//                   </thead>
//                   <tbody className="font-medium text-slate-600">
//                     {items.map((item, i) => (
//                       <tr key={item.id} className="border-b border-slate-100 align-top break-inside-avoid">
//                         <td className="px-3 py-6 text-slate-300 font-bold">{i + 1}</td>
//                         <td className="px-3 py-6 font-semibold text-slate-900">{item.partNumber}</td>
//                         <td className="px-3 py-6 text-[10.5px] leading-relaxed pr-6 whitespace-pre-line opacity-90">{item.description}</td>
//                         <td className="px-3 py-6 text-center">{item.qty}</td>
//                         <td className="px-3 py-6 text-right text-slate-900 font-semibold">{formatCurrency(item.unitPrice)}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               {/* TERMS & SUMMARY */}
//               <div className="mt-12 pt-10 border-t border-slate-900 grid grid-cols-2 gap-16 break-inside-avoid">
//                 <div className="space-y-6">
//                   <div>
//                     <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Additional Terms</h4>
//                     <p className="text-[10px] text-slate-500 font-medium whitespace-pre-line leading-relaxed italic opacity-80">{terms}</p>
//                   </div>
//                   <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-[10px] font-semibold text-blue-800 leading-relaxed italic">
//                     "This quotation remains valid for 30 calendar days and is subject to inventory availability."
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex justify-between py-2 border-b border-slate-100 font-semibold text-slate-400">
//                     <span className="uppercase text-[9px] tracking-widest">Subtotal</span>
//                     <span className="text-slate-900">{formatCurrency(totals.sub)}</span>
//                   </div>
//                   {charges.map((c, idx) => (
//                     <div key={idx} className="flex justify-between py-2 border-b border-slate-100 font-semibold text-slate-400">
//                       <span className="uppercase text-[9px] tracking-widest">{c.label}</span>
//                       <span className="text-slate-900">{formatCurrency(c.amount)}</span>
//                     </div>
//                   ))}
//                   <div className="flex justify-between py-2 border-b border-slate-100 font-semibold text-slate-400">
//                     <span className="uppercase text-[9px] tracking-widest">GST/HST ({gstRate}%)</span>
//                     <span className="text-slate-900">{formatCurrency(totals.gst)}</span>
//                   </div>
//                   <div className="flex justify-between items-center py-6 text-xl font-medium text-slate-900 pt-8">
//                     <span className="uppercase tracking-tighter text-sm italic opacity-30 font-semibold">Total Due</span>
//                     <span className="text-blue-700 font-black tracking-tighter">{formatCurrency(totals.grand)}</span>
//                   </div>
//                   <div className="bg-slate-900 text-white p-6 rounded-2xl mt-4">
//                      <p className="text-[8px] uppercase tracking-widest font-bold text-blue-400 mb-2">Order Placement</p>
//                      <p className="text-[11px] font-medium opacity-80">Email Purchase Order to:</p>
//                      <p className="text-sm font-semibold underline decoration-blue-600 underline-offset-4 mt-1 leading-none">info@engrity.com</p>
//                   </div>
//                 </div>
//               </div>

//               {/* DYNAMIC FOOTER PAGINATION */}
//               <div className="mt-auto pt-8 flex justify-between items-end border-t border-slate-100 text-[9px] font-bold uppercase tracking-[0.3em] text-slate-300">
//                 <p>Engrity Group Inc. · Asset Integrity Solutions</p>
//                 <p className="page-number font-bold"></p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

//         .custom-scrollbar::-webkit-scrollbar { width: 5px; height: 5px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
//         .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        
//         .break-inside-avoid {
//           page-break-inside: avoid;
//           break-inside: avoid;
//         }

//         @media print {
//           body { 
//             background: white; 
//             counter-reset: page;
//           }
//           .page-number:after {
//             counter-increment: page;
//             content: "Page " counter(page) " of 1";
//           }
//           #quote-document {
//             width: 8.5in !important;
//             padding: 0.75in !important;
//             box-shadow: none !important;
//             margin: 0 !important;
//           }
//         }
        
//         /* Default for screen preview */
//         .page-number:after { content: "Page 1 of 1"; }
//       `}</style>
//     </div>
//   );
// };

// // --- Helper UI Components ---
// const SectionHeader = ({ icon: Icon, title }: { icon: any, title: string }) => (
//   <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
//     <div className="p-2 bg-slate-100 text-blue-600 rounded-lg"><Icon size={14} /></div>
//     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{title}</span>
//   </div>
// );

// const InputField = ({ label, value, onChange, type = "text" }: { label: string, value: string, onChange: (v: string) => void, type?: string }) => (
//   <div className="flex flex-col gap-1.5 flex-1">
//     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">{label}</label>
//     <input 
//       type={type} 
//       className="border border-slate-200 rounded-xl p-3 text-sm focus:border-blue-500 outline-none transition-all font-semibold bg-slate-50/50"
//       value={value} 
//       onChange={e => onChange(e.target.value)} 
//     />
//   </div>
// );

// export default EngrityBuilder;