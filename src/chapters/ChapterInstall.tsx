import { CodeBlock } from '../components/CodeBlock';

export function ChapterInstall() {
  return (
    <section id="install" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold shadow-lg">2</div>
        <h2 className="text-3xl font-bold text-white">Instalasi Git</h2>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
          <h3 className="text-xl font-bold text-blue-400 mb-3">🪟 Windows</h3>
          <ol className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span>Download Git dari <strong className="text-blue-300">https://git-scm.com/download/win</strong></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span>Jalankan installer, klik Next-Next sampai selesai (default setting sudah cukup)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span>Buka <strong className="text-white">Git Bash</strong> atau <strong className="text-white">CMD/PowerShell</strong></span>
            </li>
          </ol>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-500/10 to-gray-400/10 border border-gray-500/20">
          <h3 className="text-xl font-bold text-gray-300 mb-3">🍎 macOS</h3>
          <CodeBlock code="# Menggunakan Homebrew
brew install git

# Atau download dari website
# https://git-scm.com/download/mac" title="Install di macOS" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
          <h3 className="text-xl font-bold text-orange-400 mb-3">🐧 Linux (Ubuntu/Debian)</h3>
          <CodeBlock code="sudo apt update
sudo apt install git" title="Install di Linux" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
          <h3 className="text-lg font-bold text-green-400 mb-3">✅ Cek Instalasi</h3>
          <p className="text-gray-300 mb-3">Setelah install, pastikan Git sudah terpasang:</p>
          <CodeBlock code="git --version
# Output: git version 2.43.0 (atau versi terbaru)" title="Verifikasi instalasi" />
        </div>
      </div>
    </section>
  );
}
