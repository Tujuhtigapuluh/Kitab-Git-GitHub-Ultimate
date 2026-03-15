import { CodeBlock } from '../components/CodeBlock';

export function ChapterEditPush() {
  return (
    <section id="edit-push" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-white font-bold shadow-lg">6</div>
        <h2 className="text-3xl font-bold text-white">Edit File Lokal & Push ke GitHub</h2>
      </div>

      <div className="p-5 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-2 border-yellow-500/30 mb-8">
        <p className="text-yellow-200 text-lg font-semibold mb-2">⭐ INI JAWABAN PERTANYAAN KAMU!</p>
        <p className="text-gray-300">
          Cara edit file di lokal lalu push ke GitHub yang sudah ada filenya — <strong className="text-white">tanpa error!</strong>
        </p>
      </div>

      <div className="space-y-8">
        {/* Skenario 1 */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20">
          <h3 className="text-xl font-bold text-green-400 mb-4">✅ Skenario 1: Kamu SUDAH punya repo lokal yang terhubung ke GitHub</h3>
          <p className="text-gray-300 mb-4">Ini skenario paling umum. Kamu sudah clone atau sudah setup remote sebelumnya.</p>
          
          <CodeBlock code={`# LANGKAH LENGKAP (ANTI ERROR):

# 1. Masuk ke folder project kamu
cd nama-project

# 2. PENTING! Pull dulu perubahan terbaru dari GitHub
#    (biar gak conflict kalau ada perubahan di GitHub)
git pull origin main

# 3. Edit file sesuka kamu di text editor / VS Code
#    (edit index.html, style.css, atau file apapun)

# 4. Cek file mana aja yang berubah
git status

# 5. Tambahkan semua perubahan ke staging
git add .

# 6. Commit dengan pesan yang jelas
git commit -m "update: edit tampilan halaman home"

# 7. Push ke GitHub! 🚀
git push origin main`} title="⭐ Langkah lengkap edit & push (ANTI ERROR)" />

          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 mt-4">
            <p className="text-green-300 text-sm font-semibold">
              🔑 KUNCI ANTI ERROR: Selalu <code className="bg-green-800/50 px-1.5 py-0.5 rounded">git pull</code> DULU sebelum mulai edit! 
              Ini memastikan file lokal kamu sinkron dengan GitHub.
            </p>
          </div>
        </div>

        {/* Skenario 2 */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20">
          <h3 className="text-xl font-bold text-blue-400 mb-4">📥 Skenario 2: Repo ada di GitHub tapi BELUM ada di komputer kamu</h3>
          <p className="text-gray-300 mb-4">Kamu punya repo di GitHub tapi belum download ke komputer.</p>
          
          <CodeBlock code={`# 1. Clone repository dari GitHub ke komputer
git clone https://github.com/username/nama-project.git

# 2. Masuk ke folder
cd nama-project

# 3. Edit file sesuka kamu...

# 4. Add, commit, push!
git add .
git commit -m "update: perubahan dari komputer lokal"
git push origin main`} title="Clone → Edit → Push" />
        </div>

        {/* Skenario 3 */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-violet-500/5 border border-purple-500/20">
          <h3 className="text-xl font-bold text-purple-400 mb-4">🔗 Skenario 3: Folder lokal BELUM terhubung ke GitHub yang sudah ada</h3>
          <p className="text-gray-300 mb-4">Kamu punya folder project di komputer DAN repo di GitHub tapi belum terhubung.</p>
          
          <CodeBlock code={`# 1. Masuk ke folder project
cd nama-project

# 2. Inisialisasi Git (kalau belum)
git init

# 3. Hubungkan dengan repo GitHub
git remote add origin https://github.com/username/nama-project.git

# 4. Ambil data dari GitHub
git fetch origin

# 5. Gabungkan dengan file lokal
#    (allow-unrelated-histories kalau history berbeda)
git pull origin main --allow-unrelated-histories

# 6. Selesaikan conflict kalau ada, lalu:
git add .
git commit -m "merge: gabungkan lokal dengan GitHub"
git push origin main`} title="Hubungkan folder lokal dengan GitHub" />
        </div>

        {/* Skenario 4: Yang sering bikin error */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20">
          <h3 className="text-xl font-bold text-red-400 mb-4">🚨 Kalau Dapat Error Saat Push</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-red-300 mb-2">Error: "rejected - non-fast-forward"</p>
              <p className="text-gray-400 text-sm mb-2">Artinya: Ada perubahan di GitHub yang belum kamu pull.</p>
              <CodeBlock code={`# SOLUSI: Pull dulu, baru push
git pull origin main --rebase
git push origin main`} title="Fix: rejected error" />
            </div>

            <div>
              <p className="text-sm font-semibold text-red-300 mb-2">Error: "fatal: refusing to merge unrelated histories"</p>
              <p className="text-gray-400 text-sm mb-2">Artinya: History Git lokal dan GitHub berbeda.</p>
              <CodeBlock code={`# SOLUSI: Tambah flag allow-unrelated-histories
git pull origin main --allow-unrelated-histories
# Selesaikan conflict kalau ada
git add .
git commit -m "merge histories"
git push origin main`} title="Fix: unrelated histories" />
            </div>

            <div>
              <p className="text-sm font-semibold text-red-300 mb-2">Error: "fatal: remote origin already exists"</p>
              <p className="text-gray-400 text-sm mb-2">Artinya: Remote sudah pernah ditambahkan.</p>
              <CodeBlock code={`# SOLUSI: Hapus remote lama, tambah ulang
git remote remove origin
git remote add origin https://github.com/username/nama-project.git
git push -u origin main`} title="Fix: remote already exists" />
            </div>
          </div>
        </div>

        {/* Visual Flow */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-800/80 to-gray-700/50 border border-gray-600/30">
          <h3 className="text-lg font-bold text-white mb-4">📊 Alur Lengkap (Visual)</h3>
          <div className="font-mono text-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-32 text-right text-gray-500">GitHub</span>
              <span className="text-gray-600">│</span>
              <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-300">repo online ☁️</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-right text-gray-500"></span>
              <span className="text-yellow-500">↕ pull / push</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-right text-gray-500">Local Repo</span>
              <span className="text-gray-600">│</span>
              <span className="px-3 py-1 rounded bg-green-500/20 text-green-300">.git folder 💾</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-right text-gray-500"></span>
              <span className="text-yellow-500">↑ commit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-right text-gray-500">Staging Area</span>
              <span className="text-gray-600">│</span>
              <span className="px-3 py-1 rounded bg-yellow-500/20 text-yellow-300">git add 📦</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-right text-gray-500"></span>
              <span className="text-yellow-500">↑ add</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-32 text-right text-gray-500">Working Dir</span>
              <span className="text-gray-600">│</span>
              <span className="px-3 py-1 rounded bg-red-500/20 text-red-300">file kamu ✏️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
