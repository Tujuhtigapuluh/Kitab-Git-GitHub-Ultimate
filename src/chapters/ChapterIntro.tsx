

export function ChapterIntro() {
  return (
    <section id="intro" className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold shadow-lg">1</div>
        <h2 className="text-3xl font-bold text-white">Apa itu Git & GitHub?</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
          <h3 className="text-xl font-bold text-orange-400 mb-3">🔧 Git</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">Git</strong> adalah sistem kontrol versi (Version Control System) yang digunakan untuk melacak perubahan pada kode/file. 
            Git bekerja secara <strong className="text-orange-300">lokal di komputer kamu</strong>.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-orange-400 mt-1">▸</span> Melacak setiap perubahan file
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-orange-400 mt-1">▸</span> Bisa kembali ke versi sebelumnya
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-orange-400 mt-1">▸</span> Kolaborasi dengan tim
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-orange-400 mt-1">▸</span> Bekerja offline
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
          <h3 className="text-xl font-bold text-purple-400 mb-3">🌐 GitHub</h3>
          <p className="text-gray-300 leading-relaxed">
            <strong className="text-white">GitHub</strong> adalah platform hosting repository Git secara <strong className="text-purple-300">online/cloud</strong>. 
            Tempat menyimpan kode di internet agar bisa diakses dari mana saja.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-purple-400 mt-1">▸</span> Hosting repository online
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-purple-400 mt-1">▸</span> Kolaborasi tim dari seluruh dunia
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-purple-400 mt-1">▸</span> Issue tracking & project management
            </li>
            <li className="flex items-start gap-2 text-gray-300">
              <span className="text-purple-400 mt-1">▸</span> GitHub Pages, Actions, dll
            </li>
          </ul>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-700/50 mb-6">
        <h3 className="text-lg font-bold text-white mb-4">📊 Analogi Sederhana</h3>
        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex-1">
            <p className="text-2xl mb-2">💻</p>
            <p className="font-semibold text-orange-300">Git (Lokal)</p>
            <p className="text-gray-400 text-sm mt-1">Seperti "Save As" versi canggih di komputer kamu</p>
          </div>
          <div className="text-2xl text-gray-500">→</div>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex-1">
            <p className="text-2xl mb-2">☁️</p>
            <p className="font-semibold text-blue-300">GitHub (Cloud)</p>
            <p className="text-gray-400 text-sm mt-1">Seperti Google Drive khusus untuk kode</p>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
        <p className="text-blue-300 text-sm">
          💡 <strong>Singkatnya:</strong> Git = alat di komputer kamu. GitHub = tempat simpan online. 
          Kamu pakai Git untuk mengelola versi kode, lalu push ke GitHub agar tersimpan di cloud.
        </p>
      </div>
    </section>
  );
}
