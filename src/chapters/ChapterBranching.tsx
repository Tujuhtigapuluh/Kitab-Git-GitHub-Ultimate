import { CodeBlock } from '../components/CodeBlock';

export function ChapterBranching() {
  return (
    <section id="branching" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">8</div>
        <h2 className="text-3xl font-bold text-white">Branching & Merging</h2>
      </div>

      <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
        <p className="text-indigo-300 text-sm">
          🌿 <strong>Branch</strong> = cabang. Bayangkan pohon — kamu bisa buat cabang baru untuk fitur baru tanpa merusak cabang utama (main).
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-indigo-400 mb-3">🌿 Membuat & Pindah Branch</h3>
          <CodeBlock code={`# Lihat semua branch
git branch

# Buat branch baru
git branch fitur-login

# Pindah ke branch baru
git checkout fitur-login

# SHORTCUT: Buat + pindah sekaligus
git checkout -b fitur-login

# Cara baru (Git 2.23+)
git switch -c fitur-login`} title="Kelola branch" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-green-400 mb-3">🔀 Merge Branch</h3>
          <p className="text-gray-300 mb-3">Gabungkan branch fitur ke branch main:</p>
          <CodeBlock code={`# 1. Pindah ke branch tujuan (main)
git checkout main

# 2. Merge branch fitur ke main
git merge fitur-login

# 3. Push hasil merge ke GitHub
git push origin main

# 4. Hapus branch yang sudah selesai (opsional)
git branch -d fitur-login`} title="Merge branch" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-3">🌐 Push Branch ke GitHub</h3>
          <CodeBlock code={`# Push branch baru ke GitHub
git push origin fitur-login

# Set upstream untuk branch
git push -u origin fitur-login

# Hapus branch di GitHub (remote)
git push origin --delete fitur-login`} title="Branch di GitHub" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50">
          <h3 className="text-lg font-bold text-white mb-4">📊 Visualisasi Branching</h3>
          <div className="font-mono text-sm text-gray-300 space-y-1 overflow-x-auto">
            <p><span className="text-green-400">main</span>     ● ── ● ── ● ──────── ● ── ● (branch utama)</p>
            <p>                    {'\\'}               /</p>
            <p><span className="text-blue-400">fitur</span>              ● ── ● ── ●  (branch fitur)</p>
            <p className="text-gray-500 mt-3 text-xs">↑ buat branch    ↑ kerja di fitur    ↑ merge ke main</p>
          </div>
        </div>
      </div>
    </section>
  );
}
