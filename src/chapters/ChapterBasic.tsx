import { CodeBlock } from '../components/CodeBlock';

export function ChapterBasic() {
  return (
    <section id="basic" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold shadow-lg">5</div>
        <h2 className="text-3xl font-bold text-white">Perintah Dasar Git</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-bold text-pink-400 mb-3">📋 git status</h3>
          <p className="text-gray-300 mb-3">Cek status file — mana yang berubah, mana yang sudah di-staging:</p>
          <CodeBlock code={`git status

# Output contoh:
# On branch main
# Changes not staged for commit:
#   modified:   index.html
#   modified:   style.css
# Untracked files:
#   script.js`} title="Cek status" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-green-400 mb-3">➕ git add</h3>
          <p className="text-gray-300 mb-3">Masukkan file ke staging area (siap untuk di-commit):</p>
          <CodeBlock code={`# Tambah file tertentu
git add index.html
git add style.css

# Tambah SEMUA file yang berubah sekaligus
git add .

# Tambah semua file dengan ekstensi tertentu
git add *.js`} title="Tambah ke staging" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-blue-400 mb-3">💾 git commit</h3>
          <p className="text-gray-300 mb-3">Simpan snapshot perubahan dengan pesan deskriptif:</p>
          <CodeBlock code={`# Commit dengan pesan
git commit -m "menambahkan fitur login"

# Commit semua file yang sudah tracked + pesan (shortcut)
git commit -am "fix bug pada halaman home"

# Commit dengan pesan multi-line
git commit -m "feat: tambah fitur register" -m "- form validasi
- email verification
- password strength checker"`} title="Commit perubahan" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-3">🚀 git push</h3>
          <p className="text-gray-300 mb-3">Upload commit lokal ke GitHub:</p>
          <CodeBlock code={`# Push ke branch utama
git push origin main

# Push pertama kali (set upstream)
git push -u origin main

# Setelah set upstream, cukup:
git push`} title="Push ke GitHub" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50">
          <h3 className="text-lg font-bold text-white mb-4">🔄 Alur Dasar Git (Yang Paling Sering Dipakai)</h3>
          <div className="flex flex-col md:flex-row items-center gap-3 text-center">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex-1 w-full">
              <p className="text-xl mb-1">✏️</p>
              <p className="font-semibold text-red-300 text-sm">Edit File</p>
              <p className="text-gray-500 text-xs mt-1">Ubah kode kamu</p>
            </div>
            <div className="text-xl text-gray-500 rotate-90 md:rotate-0">→</div>
            <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex-1 w-full">
              <p className="text-xl mb-1">📦</p>
              <p className="font-semibold text-yellow-300 text-sm">git add .</p>
              <p className="text-gray-500 text-xs mt-1">Stage perubahan</p>
            </div>
            <div className="text-xl text-gray-500 rotate-90 md:rotate-0">→</div>
            <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 flex-1 w-full">
              <p className="text-xl mb-1">💾</p>
              <p className="font-semibold text-green-300 text-sm">git commit</p>
              <p className="text-gray-500 text-xs mt-1">Simpan snapshot</p>
            </div>
            <div className="text-xl text-gray-500 rotate-90 md:rotate-0">→</div>
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 flex-1 w-full">
              <p className="text-xl mb-1">🚀</p>
              <p className="font-semibold text-blue-300 text-sm">git push</p>
              <p className="text-gray-500 text-xs mt-1">Upload ke GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
