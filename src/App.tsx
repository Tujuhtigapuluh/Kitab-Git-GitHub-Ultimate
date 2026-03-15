import { useState, useEffect } from 'react';
import { Menu, X, GitBranch, ChevronUp, Search } from 'lucide-react';
import { chapters } from './data/chapters';
import { ChapterIntro } from './chapters/ChapterIntro';
import { ChapterInstall } from './chapters/ChapterInstall';
import { ChapterConfig } from './chapters/ChapterConfig';
import { ChapterNewRepo } from './chapters/ChapterNewRepo';
import { ChapterBasic } from './chapters/ChapterBasic';
import { ChapterEditPush } from './chapters/ChapterEditPush';
import { ChapterClonePull } from './chapters/ChapterClonePull';
import { ChapterBranching } from './chapters/ChapterBranching';
import { ChapterConflict, ChapterGitignore, ChapterLog, ChapterWorkflow, ChapterTips, ChapterCheatSheet, ChapterFAQ } from './chapters/ChapterRemaining';

export function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      const sections = chapters.map(ch => ch.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredChapters = chapters.filter(ch =>
    ch.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0a0e17] text-gray-200">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/95 backdrop-blur-xl border-b border-gray-800/50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <GitBranch size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">Kitab Git</span>
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-72 bg-[#0d1117] border-r border-gray-800/50 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-5 border-b border-gray-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <GitBranch size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-white text-lg">Kitab Git</h1>
              <p className="text-xs text-gray-500">Panduan Lengkap Git & GitHub</p>
            </div>
          </div>
          
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Cari bab..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg pl-9 pr-3 py-2 text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>
        </div>

        <nav className="p-3">
          <div className="space-y-0.5">
            {filteredChapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => scrollToSection(chapter.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 text-left ${
                  activeSection === chapter.id
                    ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                } ${chapter.highlight ? 'ring-1 ring-yellow-500/30' : ''}`}
              >
                <span className={activeSection === chapter.id ? 'text-orange-400' : 'text-gray-600'}>
                  {chapter.icon}
                </span>
                <span className="truncate">{chapter.title}</span>
                {chapter.highlight && (
                  <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 font-bold shrink-0">
                    ⭐
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        <div className="p-4 m-3 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
          <p className="text-xs text-gray-400">
            📖 Kitab ini mencakup semua yang kamu butuhkan untuk menguasai Git & GitHub dari nol.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72 pt-16 lg:pt-0">
        {/* Hero Section */}
        <div className="relative overflow-hidden border-b border-gray-800/50">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="relative px-6 md:px-12 py-16 md:py-24 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              <GitBranch size={14} />
              <span>Panduan Lengkap 2024</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              📖 Kitab{' '}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Git & GitHub
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Panduan lengkap dari nol sampai mahir. Semua perintah Git yang kamu butuhkan untuk push kode ke GitHub tanpa error! 🚀
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => scrollToSection('edit-push')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-0.5"
              >
                ⭐ Edit & Push ke GitHub
              </button>
              <button
                onClick={() => scrollToSection('intro')}
                className="px-6 py-3 rounded-xl bg-gray-800 text-gray-300 font-semibold hover:bg-gray-700 transition-all border border-gray-700/50"
              >
                Mulai dari Awal →
              </button>
            </div>
          </div>
        </div>

        {/* Chapter Content */}
        <div className="px-6 md:px-12 py-12 max-w-4xl mx-auto space-y-20">
          <ChapterIntro />
          <div className="border-t border-gray-800/50" />
          <ChapterInstall />
          <div className="border-t border-gray-800/50" />
          <ChapterConfig />
          <div className="border-t border-gray-800/50" />
          <ChapterNewRepo />
          <div className="border-t border-gray-800/50" />
          <ChapterBasic />
          <div className="border-t border-gray-800/50" />
          
          {/* Highlighted section */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-3xl blur-sm" />
            <div className="relative">
              <ChapterEditPush />
            </div>
          </div>
          
          <div className="border-t border-gray-800/50" />
          <ChapterClonePull />
          <div className="border-t border-gray-800/50" />
          <ChapterBranching />
          <div className="border-t border-gray-800/50" />
          <ChapterConflict />
          <div className="border-t border-gray-800/50" />
          <ChapterGitignore />
          <div className="border-t border-gray-800/50" />
          <ChapterLog />
          <div className="border-t border-gray-800/50" />
          <ChapterWorkflow />
          <div className="border-t border-gray-800/50" />
          <ChapterTips />
          <div className="border-t border-gray-800/50" />
          <ChapterCheatSheet />
          <div className="border-t border-gray-800/50" />
          <ChapterFAQ />
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800/50 px-6 md:px-12 py-8 text-center">
          <p className="text-gray-600 text-sm">
            📖 Kitab Git & GitHub — Dibuat dengan ❤️ untuk developer Indonesia
          </p>
          <p className="text-gray-700 text-xs mt-2">
            Terus belajar, terus berkembang! 🚀
          </p>
        </footer>
      </main>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/25 hover:bg-orange-600 transition-all hover:-translate-y-1 z-40"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}
