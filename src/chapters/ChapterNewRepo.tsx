import { CodeBlock } from '../components/CodeBlock';

export function ChapterNewRepo() {
  return (
    <section id="new-repo" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">4</div>
        <h2 className="text-3xl font-bold text-white">Membuat Repository</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-4">📁 Cara 1: Buat Repo Lokal → Push ke GitHub</h3>
          
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <p className="text-sm font-semibold text-gray-400 mb-2">STEP 1: Buat folder project & inisialisasi Git</p>
              <CodeBlock code={`# Buat folder baru
mkdir nama-project
cd nama-project

# Inisialisasi Git di folder ini
git init
# Output: Initialized empty Git repository in .../nama-project/.git/`} title="Inisialisasi repository" />
            </div>

            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <p className="text-sm font-semibold text-gray-400 mb-2">STEP 2: Buat file & commit pertama</p>
              <CodeBlock code={`# Buat file README
echo "# Nama Project" > README.md

# Tambahkan ke staging
git add .

# Commit pertama
git commit -m "first commit"`} title="Commit pertama" />
            </div>

            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <p className="text-sm font-semibold text-gray-400 mb-2">STEP 3: Buat repository di GitHub (lewat website)</p>
              <div className="text-gray-300 space-y-2 text-sm">
                <p>1. Buka <strong className="text-cyan-300">github.com</strong> → klik tombol <strong className="text-white">"+"</strong> → <strong className="text-white">"New repository"</strong></p>
                <p>2. Isi nama repository (sama dengan nama folder)</p>
                <p>3. <strong className="text-yellow-300">JANGAN</strong> centang "Initialize with README" (karena sudah ada di lokal)</p>
                <p>4. Klik <strong className="text-green-300">"Create repository"</strong></p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <p className="text-sm font-semibold text-gray-400 mb-2">STEP 4: Hubungkan lokal dengan GitHub & Push</p>
              <CodeBlock code={`# Hubungkan dengan repository GitHub
git remote add origin https://github.com/username/nama-project.git

# Rename branch jadi main (standard GitHub)
git branch -M main

# Push ke GitHub!
git push -u origin main`} title="Push ke GitHub" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8">
          <h3 className="text-xl font-bold text-purple-400 mb-4">📦 Cara 2: Clone Repo dari GitHub</h3>
          <p className="text-gray-300 mb-3">Kalau repository sudah ada di GitHub dan kamu mau download ke komputer:</p>
          <CodeBlock code={`# Clone repository
git clone https://github.com/username/nama-project.git

# Masuk ke folder project
cd nama-project

# Sekarang kamu bisa mulai coding!`} title="Clone repository" />
        </div>
      </div>
    </section>
  );
}
