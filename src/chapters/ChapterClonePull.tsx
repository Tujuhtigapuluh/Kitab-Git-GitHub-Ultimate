import { CodeBlock } from '../components/CodeBlock';

export function ChapterClonePull() {
  return (
    <section id="clone-pull" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">7</div>
        <h2 className="text-3xl font-bold text-white">Clone, Pull & Fetch</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-teal-400 mb-3">📥 git clone</h3>
          <p className="text-gray-300 mb-3">Download seluruh repository dari GitHub ke komputer kamu:</p>
          <CodeBlock code={`# Clone via HTTPS
git clone https://github.com/username/repo-name.git

# Clone via SSH (kalau sudah setup SSH key)
git clone git@github.com:username/repo-name.git

# Clone ke folder dengan nama berbeda
git clone https://github.com/username/repo-name.git nama-folder-baru`} title="Clone repository" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-blue-400 mb-3">⬇️ git pull</h3>
          <p className="text-gray-300 mb-3">Ambil perubahan terbaru dari GitHub DAN langsung gabungkan ke file lokal:</p>
          <CodeBlock code={`# Pull dari branch main
git pull origin main

# Pull dari branch saat ini (kalau sudah set upstream)
git pull

# Pull dengan rebase (history lebih bersih)
git pull --rebase origin main`} title="Pull perubahan" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-3">📡 git fetch</h3>
          <p className="text-gray-300 mb-3">Ambil info perubahan dari GitHub TANPA menggabungkan (cuma cek aja):</p>
          <CodeBlock code={`# Fetch dari remote
git fetch origin

# Lihat perbedaan sebelum merge
git diff main origin/main

# Kalau oke, merge manual
git merge origin/main`} title="Fetch & review" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50">
          <h3 className="text-lg font-bold text-white mb-4">🤔 Pull vs Fetch — Apa Bedanya?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="font-bold text-blue-300 mb-2">git pull</p>
              <p className="text-gray-400 text-sm">= fetch + merge</p>
              <p className="text-gray-300 text-sm mt-2">Download + langsung gabungkan ke file lokal. Cepat tapi bisa bikin conflict.</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="font-bold text-purple-300 mb-2">git fetch</p>
              <p className="text-gray-400 text-sm">= download info saja</p>
              <p className="text-gray-300 text-sm mt-2">Cuma download info, belum merge. Lebih aman, bisa review dulu sebelum merge.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
