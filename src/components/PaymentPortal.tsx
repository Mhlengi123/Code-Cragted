import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, Lock, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function PaymentPortal() {
  const [amount, setAmount] = useState('15000');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ success: boolean; txId?: string } | null>(null);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setResult(null);

    try {
      const response = await fetch('/api/payment/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          currency: 'ZAR',
          reference: `CC-ENGAGEMENT-${Date.now()}`
        })
      });

      const data = await response.json();
      
      // Artificial delay for "processing" feel
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (data.success) {
        setResult({ success: true, txId: data.transactionId });
      } else {
        throw new Error('System Variance');
      }
    } catch (error) {
      setResult({ success: false });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto px-4 md:px-8 space-y-12">
      <div className="space-y-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent flex items-center gap-2">
          <Lock size={12} /> Secure Infrastructure
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-primary uppercase leading-none">
          STRATEGIC <span className="text-accent italic">CAPITAL</span> TRANSFER
        </h1>
        <p className="font-serif text-slate-500 text-lg italic max-w-2xl leading-relaxed">
          Authorized portal for project settlement and retainer deployment. All transactions are encrypted and audited for technical integrity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white border border-slate-100 p-8 shadow-2xl space-y-8">
          <form onSubmit={handlePayment} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Capital Commitment (ZAR)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-primary font-bold">R</span>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-slate-50 border-0 border-b-2 border-slate-100 p-4 pl-10 focus:ring-0 focus:border-accent transition-colors font-serif text-2xl font-black text-primary"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/5 rounded flex items-center justify-center">
                  <CreditCard className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-primary">Secure Card Processing</p>
                  <p className="text-[9px] font-serif text-slate-500 italic">256-bit SSL Encrypted Transaction</p>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-primary text-white py-6 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-accent transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
              >
                {isProcessing ? (
                  <>PROCESSING <Loader2 size={16} className="animate-spin" /></>
                ) : (
                  <>AUTHORIZE SETTLEMENT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </div>
          </form>

          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 border ${result.success ? 'bg-green-50 border-green-100 text-green-800' : 'bg-red-50 border-red-100 text-red-800'} flex items-start gap-4`}
            >
              <div className="mt-1">
                {result.success ? <CheckCircle2 size={20} /> : <Lock size={20} />}
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest">
                  {result.success ? 'Transaction Accomplished' : 'Authorization Variance'}
                </p>
                <p className="text-[10px] font-serif italic mt-1">
                  {result.success 
                    ? `Audit Reference: ${result.txId}. A confirmation receipt has been dispatched to your corporate email.`
                    : 'System declined the transaction request. Please verify credentials or contact project lead.'}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="space-y-8">
          <div className="bg-primary p-10 text-white space-y-6">
            <h3 className="text-lg font-black uppercase tracking-tighter italic flex items-center gap-3">
              <ShieldCheck className="text-accent" /> Financial Integrity
            </h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-4">
                <div className="w-1 h-1 bg-accent mt-2 rounded-full flex-shrink-0" />
                <p className="text-xs font-serif italic leading-relaxed">Direct synchronization with institutional banking gateways.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-1 h-1 bg-accent mt-2 rounded-full flex-shrink-0" />
                <p className="text-xs font-serif italic leading-relaxed">Zero-retention data policy for sensitive financial credentials.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-1 h-1 bg-accent mt-2 rounded-full flex-shrink-0" />
                <p className="text-xs font-serif italic leading-relaxed">Automated tax compliance and digital asset ownership transfer.</p>
              </li>
            </ul>
          </div>

          <div className="p-10 border border-slate-100 bg-slate-50/50">
             <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Strategic Contact</p>
             <p className="text-xs font-serif text-slate-500 italic leading-relaxed">
               For alternative settlement methods (Wire Transfer, BTC), please engage our strategic team at <span className="text-primary font-bold">mathonsimhlengi8@gmail.com</span>.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
