import React from 'react';
import { FileText, Download, CheckCircle, Briefcase, Calendar } from 'lucide-react';

const Reports = () => {
  const reportsData = [
    { id: 1, title: 'Annual Impact Report 2024', type: 'Report', date: 'Dec 2024', size: '2.4 MB' },
    { id: 2, title: 'Youth GBV Awareness Final Project', type: 'Project', date: 'Oct 2024', size: '1.8 MB' },
    { id: 3, title: 'Regional Training Facility Construction', type: 'Bid Complete', date: 'Aug 2024', size: 'N/A' },
    { id: 4, title: 'Q2 Financial Summary', type: 'Report', date: 'Jul 2024', size: '1.1 MB' },
  ];

  return (
    <div className="pt-[80px] lg:pt-[100px] min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Page Hero */}
      <section className="relative py-[80px] lg:py-[120px] bg-slate-50 dark:bg-slate-900/30 overflow-hidden border-b border-slate-200 dark:border-slate-800/50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-blue/10 dark:bg-sygo-blue/20 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sygo-pink/10 dark:bg-sygo-pink/20 blur-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1280px] relative z-10 text-center">
          <h1 className="text-[40px] md:text-[56px] font-bold text-sygo-purple dark:text-white mb-[24px] leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sygo-pink to-sygo-blue">Reports & Bids</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-slate-600 dark:text-slate-300 max-w-[800px] mx-auto leading-relaxed">
            Transparency and accountability are at the core of what we do. Explore our latest reports, completed projects, and awarded bids.
          </p>
        </div>
      </section>

      {/* Modern Reports & Bids Section */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="container mx-auto px-6 lg:px-[96px] max-w-[1000px]">
          
          <div className="space-y-[16px]">
            {reportsData.map((item) => (
              <div key={item.id} className="group bg-white dark:bg-slate-900/50 rounded-[20px] p-[24px] md:p-[32px] shadow-sm hover:shadow-xl border border-slate-100 dark:border-slate-800 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px]">
                
                <div className="flex items-start gap-[20px]">
                  <div className={`w-[56px] h-[56px] rounded-[16px] flex items-center justify-center flex-shrink-0 transition-colors ${
                    item.type === 'Report' ? 'bg-sygo-blue/10 text-sygo-blue group-hover:bg-sygo-blue group-hover:text-white' : 
                    item.type === 'Bid Complete' ? 'bg-sygo-green/10 text-sygo-green group-hover:bg-sygo-green group-hover:text-white' : 
                    'bg-sygo-purple/10 text-sygo-purple group-hover:bg-sygo-purple group-hover:text-white'
                  }`}>
                    {item.type === 'Report' && <FileText size={28} />}
                    {item.type === 'Bid Complete' && <CheckCircle size={28} />}
                    {item.type === 'Project' && <Briefcase size={28} />}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-[12px] mb-[8px]">
                      <span className={`text-[12px] font-bold uppercase tracking-wider px-[10px] py-[4px] rounded-full ${
                        item.type === 'Report' ? 'bg-sygo-blue/10 text-sygo-blue' : 
                        item.type === 'Bid Complete' ? 'bg-sygo-green/10 text-sygo-green' : 
                        'bg-sygo-purple/10 text-sygo-purple'
                      }`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-[6px] text-slate-400 text-[13px] font-medium">
                        <Calendar size={14} />
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-[20px] md:text-[22px] font-bold text-sygo-purple dark:text-white group-hover:text-sygo-pink transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <button className="w-full md:w-auto flex items-center justify-center gap-[8px] px-[24px] py-[12px] rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-sygo-pink hover:border-sygo-pink hover:text-white transition-all font-semibold">
                  {item.type === 'Bid Complete' ? 'View Details' : 'Download PDF'}
                  {item.type !== 'Bid Complete' && <Download size={18} />}
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Reports;
