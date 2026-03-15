import { CodeBlock } from '../components/CodeBlock';

export function ChapterConflict() {
  return (
    <section id="conflict" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold shadow-lg">9</div>
        <h2 className="text-3xl font-bold text-white">Mengatasi Conflict</h2>
      </div>

      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 mb-6">
        <p className="text-red-300 text-sm">
          ⚡ <strong>Conflict</strong> terjadi saat 2 orang edit file yang SAMA di baris yang SAMA. Git bingung mau pakai yang mana.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-red-400 mb-3">🔍 Tampilan Conflict di File</h3>
          <CodeBlock code={`<<<<<<< HEAD
// Ini kode kamu (versi lokal)
console.log("Hello dari lokal");
=======
// Ini kode dari GitHub (versi remote)
console.log("Hello dari GitHub");
>>>>>>> origin/main`} title="Contoh conflict di file" language="text" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-green-400 mb-3">🛠️ Cara Menyelesaikan</h3>
          <CodeBlock code={`# 1. Buka file yang conflict
# 2. Pilih kode mana yang mau dipakai
#    (hapus marker <<<, ===, >>> nya)
# 3. Hasil akhir misalnya:

console.log("Hello dari lokal - sudah diperbaiki");

# 4. Save file, lalu:
git add .
git commit -m "fix: resolve merge conflict"
git push origin main`} title="Resolve conflict" />
        </div>

        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <p className="text-blue-300 text-sm">
            💡 <strong>Tips:</strong> VS Code punya fitur conflict resolver bawaan! 
            Tinggal klik "Accept Current", "Accept Incoming", atau "Accept Both".
          </p>
        </div>
      </div>
    </section>
  );
}

export function ChapterGitignore() {
  return (
    <section id="gitignore" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center text-white font-bold shadow-lg">10</div>
        <h2 className="text-3xl font-bold text-white">File .gitignore</h2>
      </div>

      <p className="text-gray-300 mb-4">File yang memberitahu Git file/folder mana yang TIDAK perlu di-track:</p>

      <CodeBlock code={`# Buat file .gitignore di root project
# Isi contoh untuk project Node.js:

# Dependencies
node_modules/

# Environment variables (PENTING! jangan push password)
.env
.env.local

# Build output
dist/
build/

# IDE settings
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Log files
*.log
npm-debug.log*`} title=".gitignore contoh" language="text" />

      <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mt-4">
        <p className="text-yellow-300 text-sm">
          ⚠️ <strong>PENTING:</strong> File <code className="bg-yellow-800/50 px-1 rounded">.env</code> yang berisi API key, password, secret 
          HARUS dimasukkan ke .gitignore! Jangan sampai ke-push ke GitHub!
        </p>
      </div>
    </section>
  );
}

export function ChapterLog() {
  return (
    <section id="log" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white font-bold shadow-lg">11</div>
        <h2 className="text-3xl font-bold text-white">Git Log & History</h2>
      </div>

      <CodeBlock code={`# Lihat history commit
git log

# Lihat history ringkas (1 baris per commit)
git log --oneline

# Lihat history dengan graph (visual branch)
git log --oneline --graph --all

# Lihat history file tertentu
git log -- index.html

# Lihat perubahan detail per commit
git log -p

# Lihat 5 commit terakhir
git log -5

# Lihat siapa yang edit baris per baris
git blame index.html`} title="Lihat history" />

      <div className="mt-4">
        <h3 className="text-lg font-bold text-amber-400 mb-3">⏪ Undo / Kembali ke Versi Sebelumnya</h3>
        <CodeBlock code={`# Undo perubahan file yang belum di-add
git checkout -- index.html
# Atau cara baru:
git restore index.html

# Undo git add (unstage)
git reset HEAD index.html
# Atau cara baru:
git restore --staged index.html

# Undo commit terakhir (keep changes)
git reset --soft HEAD~1

# Undo commit terakhir (hapus changes)
git reset --hard HEAD~1

# Kembali ke commit tertentu (HATI-HATI!)
git reset --hard abc1234`} title="Undo perubahan" />
      </div>
    </section>
  );
}

export function ChapterWorkflow() {
  return (
    <section id="workflow" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold shadow-lg">12</div>
        <h2 className="text-3xl font-bold text-white">Alur Kerja (Workflow)</h2>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
          <h3 className="text-lg font-bold text-emerald-400 mb-4">🔄 Workflow Harian (Solo Developer)</h3>
          <CodeBlock code={`# Pagi: Mulai kerja
git pull origin main          # Sync dengan GitHub

# Siang: Coding...
# Edit file-file kamu...

# Sore: Save progress
git add .                     # Stage semua perubahan
git commit -m "feat: halaman dashboard"  # Commit
git push origin main          # Push ke GitHub

# Selesai! ✅`} title="Workflow harian" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20">
          <h3 className="text-lg font-bold text-blue-400 mb-4">👥 Workflow Tim (Feature Branch)</h3>
          <CodeBlock code={`# 1. Buat branch untuk fitur baru
git checkout -b fitur-payment

# 2. Coding di branch fitur...
git add .
git commit -m "feat: integrasi payment gateway"

# 3. Push branch ke GitHub
git push -u origin fitur-payment

# 4. Buat Pull Request di GitHub
#    (Review kode bareng tim)

# 5. Setelah di-approve, merge via GitHub
# 6. Update lokal
git checkout main
git pull origin main

# 7. Hapus branch yang sudah selesai
git branch -d fitur-payment`} title="Feature branch workflow" />
        </div>

        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <h3 className="text-sm font-bold text-purple-300 mb-2">📝 Konvensi Commit Message</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-green-500/20 text-green-300">feat: fitur baru</span>
            <span className="px-2 py-1 rounded bg-red-500/20 text-red-300">fix: perbaikan bug</span>
            <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300">docs: dokumentasi</span>
            <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300">style: tampilan/CSS</span>
            <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300">refactor: kode</span>
            <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-300">chore: maintenance</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChapterTips() {
  return (
    <section id="tips" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-lg">13</div>
        <h2 className="text-3xl font-bold text-white">Tips & Trik Pro</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <h4 className="font-bold text-yellow-400 mb-2">🏷️ Git Stash</h4>
          <p className="text-gray-400 text-xs mb-2">Simpan sementara tanpa commit</p>
          <CodeBlock code={`git stash            # Simpan
git stash pop        # Ambil kembali
git stash list       # Lihat daftar`} />
        </div>
        
        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <h4 className="font-bold text-green-400 mb-2">🏷️ Git Tag</h4>
          <p className="text-gray-400 text-xs mb-2">Tandai versi release</p>
          <CodeBlock code={`git tag v1.0.0
git tag -a v1.0.0 -m "Release 1.0"
git push origin v1.0.0`} />
        </div>

        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <h4 className="font-bold text-blue-400 mb-2">📝 Git Alias</h4>
          <p className="text-gray-400 text-xs mb-2">Shortcut command</p>
          <CodeBlock code={`git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.st status
# Sekarang: git co = git checkout`} />
        </div>

        <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
          <h4 className="font-bold text-purple-400 mb-2">🔍 Git Diff</h4>
          <p className="text-gray-400 text-xs mb-2">Lihat perubahan detail</p>
          <CodeBlock code={`git diff              # Belum di-stage
git diff --staged     # Sudah di-stage
git diff main..fitur  # Antar branch`} />
        </div>
      </div>
    </section>
  );
}

export function ChapterCheatSheet() {
  return (
    <section id="cheatsheet" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">14</div>
        <h2 className="text-3xl font-bold text-white">Cheat Sheet</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Perintah</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium">Fungsi</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {[
              ['git init', 'Inisialisasi repository baru'],
              ['git clone <url>', 'Download repository dari GitHub'],
              ['git status', 'Cek status file'],
              ['git add .', 'Stage semua perubahan'],
              ['git commit -m "msg"', 'Commit dengan pesan'],
              ['git push origin main', 'Upload ke GitHub'],
              ['git pull origin main', 'Download & merge dari GitHub'],
              ['git branch', 'Lihat semua branch'],
              ['git checkout -b <name>', 'Buat & pindah branch baru'],
              ['git merge <branch>', 'Gabungkan branch'],
              ['git log --oneline', 'Lihat history ringkas'],
              ['git stash', 'Simpan sementara'],
              ['git remote -v', 'Lihat remote repository'],
              ['git diff', 'Lihat perubahan'],
              ['git reset --soft HEAD~1', 'Undo commit terakhir'],
              ['git fetch origin', 'Download info tanpa merge'],
            ].map(([cmd, desc], i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                <td className="py-2.5 px-4">
                  <code className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded text-xs font-mono">{cmd}</code>
                </td>
                <td className="py-2.5 px-4 text-gray-400">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ChapterFAQ() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold shadow-lg">15</div>
        <h2 className="text-3xl font-bold text-white">FAQ & Troubleshoot</h2>
      </div>

      <div className="space-y-4">
        {[
          {
            q: 'Kenapa git push ditolak (rejected)?',
            a: 'Karena ada perubahan di GitHub yang belum kamu pull. Solusi: git pull --rebase origin main, lalu git push lagi.'
          },
          {
            q: 'Bagaimana cara menghapus file dari GitHub tapi tetap ada di lokal?',
            a: 'Tambahkan ke .gitignore, lalu: git rm --cached nama-file, git commit, git push.'
          },
          {
            q: 'Kenapa minta username/password terus?',
            a: 'Setup SSH Key atau gunakan Git Credential Manager. Untuk HTTPS, buat Personal Access Token di GitHub Settings.'
          },
          {
            q: 'Bagaimana cara membatalkan git add?',
            a: 'Gunakan: git restore --staged nama-file (atau git restore --staged . untuk semua file).'
          },
          {
            q: 'Apa bedanya git reset --soft dan --hard?',
            a: '--soft: undo commit tapi perubahan tetap ada di staging. --hard: undo commit DAN hapus semua perubahan (hati-hati!).'
          },
          {
            q: 'Bagaimana cara ganti remote URL?',
            a: 'git remote set-url origin https://github.com/username/repo-baru.git'
          },
          {
            q: 'File besar tidak bisa di-push?',
            a: 'GitHub limit 100MB per file. Gunakan Git LFS (Large File Storage) atau masukkan ke .gitignore.'
          },
          {
            q: 'Cara force push (menimpa GitHub)?',
            a: 'git push --force origin main — HATI-HATI! Ini akan menimpa semua perubahan di GitHub. Hanya gunakan kalau kamu yakin!'
          },
        ].map((item, i) => (
          <details key={i} className="group rounded-xl border border-gray-700/50 bg-gray-800/30 overflow-hidden">
            <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-800/50 transition-colors">
              <span className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold shrink-0">?</span>
              <span className="text-white font-medium text-sm">{item.q}</span>
              <span className="ml-auto text-gray-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 pl-13">
              <p className="text-gray-400 text-sm pl-9">{item.a}</p>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-center">
        <p className="text-2xl mb-2">🎉</p>
        <h3 className="text-xl font-bold text-green-400 mb-2">Selamat! Kamu Sudah Belajar Git!</h3>
        <p className="text-gray-400 text-sm">
          Dengan menguasai perintah-perintah di atas, kamu sudah bisa mengelola project dengan Git & GitHub secara profesional.
          <br />Terus praktik dan jangan takut experiment! 💪
        </p>
      </div>
    </section>
  );
}
