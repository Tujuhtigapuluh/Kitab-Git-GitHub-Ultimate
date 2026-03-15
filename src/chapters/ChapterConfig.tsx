import { CodeBlock } from '../components/CodeBlock';

export function ChapterConfig() {
  return (
    <section id="config" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">3</div>
        <h2 className="text-3xl font-bold text-white">Konfigurasi Awal Git</h2>
      </div>

      <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
        <p className="text-yellow-300 text-sm">
          ⚠️ <strong>WAJIB dilakukan setelah install!</strong> Git perlu tahu siapa kamu agar setiap commit tercatat atas nama kamu.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">👤 Set Nama & Email</h3>
          <CodeBlock code={`# Set nama kamu (akan muncul di setiap commit)
git config --global user.name "Nama Kamu"

# Set email (HARUS sama dengan email GitHub kamu!)
git config --global user.email "emailkamu@gmail.com"`} title="Konfigurasi identitas" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">🔍 Cek Konfigurasi</h3>
          <CodeBlock code={`# Lihat semua konfigurasi
git config --list

# Lihat nama yang terdaftar
git config user.name

# Lihat email yang terdaftar
git config user.email`} title="Verifikasi konfigurasi" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-3">🔑 Setup SSH Key (Opsional tapi Recommended)</h3>
          <p className="text-gray-300 mb-3">Agar tidak perlu login terus saat push ke GitHub:</p>
          <CodeBlock code={`# 1. Generate SSH Key
ssh-keygen -t ed25519 -C "emailkamu@gmail.com"
# Tekan Enter 3x (pakai default setting)

# 2. Copy SSH Key
# Windows:
clip < ~/.ssh/id_ed25519.pub
# macOS:
pbcopy < ~/.ssh/id_ed25519.pub
# Linux:
cat ~/.ssh/id_ed25519.pub
# (copy output-nya manual)

# 3. Buka GitHub → Settings → SSH Keys → New SSH Key
# Paste key yang sudah di-copy

# 4. Test koneksi
ssh -T git@github.com
# Output: Hi username! You've successfully authenticated`} title="Setup SSH Key" />
        </div>

        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <p className="text-green-300 text-sm">
            💡 <strong>Tips:</strong> Dengan SSH Key, kamu tidak perlu input username & password setiap kali push. 
            Kalau belum setup SSH, kamu bisa pakai HTTPS + Personal Access Token.
          </p>
        </div>
      </div>
    </section>
  );
}
