export interface Section {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  content: ContentBlock[];
}

export interface ContentBlock {
  type: "text" | "code" | "warning" | "tip" | "info" | "steps" | "table";
  title?: string;
  value: string;
  lang?: string;
}

export const sections: Section[] = [
  {
    id: "pengenalan",
    icon: "🌟",
    title: "Pengenalan Git & GitHub",
    subtitle: "Apa itu Git dan GitHub?",
    content: [
      {
        type: "text",
        value:
          "**Git** adalah sistem kontrol versi terdistribusi (Distributed Version Control System) yang digunakan untuk melacak perubahan pada kode sumber selama pengembangan perangkat lunak. Git memungkinkan banyak developer bekerja bersama pada proyek yang sama tanpa saling mengganggu.",
      },
      {
        type: "text",
        value:
          "**GitHub** adalah platform hosting berbasis web untuk repositori Git. GitHub menyediakan antarmuka web, kontrol akses, fitur kolaborasi seperti bug tracking, feature requests, task management, dan wiki untuk setiap proyek.",
      },
      {
        type: "info",
        title: "Perbedaan Git vs GitHub",
        value:
          "• **Git** = Software/tool di komputer lokal kamu\n• **GitHub** = Platform online untuk menyimpan repositori Git\n• Git bisa digunakan tanpa GitHub\n• GitHub membutuhkan Git untuk beroperasi",
      },
      {
        type: "tip",
        title: "Kenapa harus pakai Git?",
        value:
          "✅ Melacak setiap perubahan kode\n✅ Bisa kembali ke versi sebelumnya\n✅ Kolaborasi tim jadi mudah\n✅ Backup kode otomatis\n✅ Standar industri untuk developer",
      },
    ],
  },
  {
    id: "instalasi",
    icon: "⚙️",
    title: "Instalasi Git",
    subtitle: "Cara install Git di berbagai OS",
    content: [
      {
        type: "text",
        value: "## Windows",
      },
      {
        type: "steps",
        title: "Langkah Instalasi di Windows",
        value:
          "1. Download Git dari https://git-scm.com/download/win\n2. Jalankan installer (.exe)\n3. Ikuti wizard instalasi (gunakan pengaturan default)\n4. Pastikan \"Git Bash\" tercentang\n5. Klik Install dan tunggu selesai",
      },
      {
        type: "text",
        value: "## macOS",
      },
      {
        type: "code",
        lang: "bash",
        title: "Install via Homebrew",
        value: "# Install Homebrew dulu (jika belum)\n/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"\n\n# Install Git\nbrew install git",
      },
      {
        type: "text",
        value: "## Linux (Ubuntu/Debian)",
      },
      {
        type: "code",
        lang: "bash",
        title: "Install di Linux",
        value: "sudo apt update\nsudo apt install git",
      },
      {
        type: "text",
        value: "## Verifikasi Instalasi",
      },
      {
        type: "code",
        lang: "bash",
        title: "Cek versi Git",
        value: "git --version\n# Output: git version 2.xx.x",
      },
    ],
  },
  {
    id: "konfigurasi",
    icon: "🔧",
    title: "Konfigurasi Awal",
    subtitle: "Setup identitas dan preferensi Git",
    content: [
      {
        type: "text",
        value:
          "Setelah install Git, langkah pertama adalah mengkonfigurasi identitas kamu. Ini penting karena setiap commit Git menggunakan informasi ini.",
      },
      {
        type: "code",
        lang: "bash",
        title: "Set Nama & Email (WAJIB)",
        value:
          '# Set nama kamu\ngit config --global user.name "Nama Kamu"\n\n# Set email (gunakan email yang sama dengan GitHub)\ngit config --global user.email "email@example.com"',
      },
      {
        type: "code",
        lang: "bash",
        title: "Konfigurasi Tambahan (Opsional)",
        value:
          '# Set default branch name\ngit config --global init.defaultBranch main\n\n# Set editor default\ngit config --global core.editor "code --wait"  # VS Code\n\n# Aktifkan warna pada output\ngit config --global color.ui auto\n\n# Set credential helper (agar tidak perlu login terus)\ngit config --global credential.helper store',
      },
      {
        type: "code",
        lang: "bash",
        title: "Cek Semua Konfigurasi",
        value: "# Lihat semua config\ngit config --list\n\n# Lihat config tertentu\ngit config user.name\ngit config user.email",
      },
      {
        type: "warning",
        title: "Penting!",
        value:
          "Pastikan email yang kamu set sama dengan email akun GitHub kamu, agar commit tercatat sebagai kontribusi di profil GitHub kamu.",
      },
    ],
  },
  {
    id: "akun-github",
    icon: "🐙",
    title: "Setup Akun GitHub",
    subtitle: "Buat akun dan koneksi ke Git lokal",
    content: [
      {
        type: "steps",
        title: "Membuat Akun GitHub",
        value:
          "1. Buka https://github.com\n2. Klik **Sign Up**\n3. Masukkan email, password, dan username\n4. Verifikasi email kamu\n5. Pilih plan Free (gratis sudah cukup!)",
      },
      {
        type: "text",
        value: "## Autentikasi GitHub",
      },
      {
        type: "text",
        value:
          "Mulai Agustus 2021, GitHub tidak lagi mendukung autentikasi password untuk operasi Git. Kamu perlu menggunakan **Personal Access Token (PAT)** atau **SSH Key**.",
      },
      {
        type: "code",
        lang: "bash",
        title: "Metode 1: Personal Access Token (PAT)",
        value:
          "# 1. Buka GitHub → Settings → Developer Settings\n#    → Personal Access Tokens → Tokens (classic)\n# 2. Klik \"Generate new token\"\n# 3. Beri nama, set expiration, centang scope \"repo\"\n# 4. Copy token yang dihasilkan\n\n# 5. Saat push pertama kali, masukkan:\n#    Username: username-github-kamu\n#    Password: paste-token-kamu-di-sini",
      },
      {
        type: "code",
        lang: "bash",
        title: "Metode 2: SSH Key (Rekomendasi)",
        value:
          '# 1. Generate SSH Key\nssh-keygen -t ed25519 -C "email@example.com"\n\n# 2. Tekan Enter untuk semua prompt (default)\n\n# 3. Tambahkan ke SSH agent\neval "$(ssh-agent -s)"\nssh-add ~/.ssh/id_ed25519\n\n# 4. Copy public key\ncat ~/.ssh/id_ed25519.pub\n# Copy output-nya\n\n# 5. Buka GitHub → Settings → SSH and GPG keys\n#    → New SSH key → Paste key → Add SSH key\n\n# 6. Test koneksi\nssh -T git@github.com\n# Output: Hi username! You\'ve successfully authenticated',
      },
      {
        type: "tip",
        title: "Rekomendasi",
        value:
          "Gunakan SSH Key untuk kenyamanan jangka panjang. Sekali setup, kamu tidak perlu login lagi setiap kali push/pull.",
      },
    ],
  },
  {
    id: "repo-baru",
    icon: "📁",
    title: "Membuat Repository",
    subtitle: "Buat repo baru dari awal",
    content: [
      {
        type: "text",
        value: "## Cara 1: Buat Repo di GitHub lalu Clone",
      },
      {
        type: "steps",
        title: "Langkah-langkah",
        value:
          '1. Buka GitHub → klik tombol **"+"** → **New repository**\n2. Isi nama repository (contoh: `proyek-saya`)\n3. Tambahkan deskripsi (opsional)\n4. Pilih **Public** atau **Private**\n5. Centang **"Add a README file"**\n6. Pilih **.gitignore** template (sesuai bahasa)\n7. Pilih **License** (opsional)\n8. Klik **Create repository**',
      },
      {
        type: "code",
        lang: "bash",
        title: "Clone ke Komputer Lokal",
        value:
          "# Via HTTPS\ngit clone https://github.com/username/proyek-saya.git\n\n# Via SSH (jika sudah setup SSH)\ngit clone git@github.com:username/proyek-saya.git\n\n# Masuk ke folder proyek\ncd proyek-saya",
      },
      {
        type: "text",
        value: "## Cara 2: Buat Repo Lokal lalu Push ke GitHub",
      },
      {
        type: "code",
        lang: "bash",
        title: "Init Repo Lokal & Push ke GitHub",
        value:
          '# 1. Buat folder proyek\nmkdir proyek-saya\ncd proyek-saya\n\n# 2. Inisialisasi Git\ngit init\n\n# 3. Buat file pertama\necho "# Proyek Saya" > README.md\n\n# 4. Add & Commit\ngit add .\ngit commit -m "Initial commit"\n\n# 5. Buat repo KOSONG di GitHub (JANGAN centang README)\n#    Lalu hubungkan:\ngit remote add origin https://github.com/username/proyek-saya.git\n\n# 6. Push ke GitHub\ngit branch -M main\ngit push -u origin main',
      },
      {
        type: "warning",
        title: "Perhatian!",
        value:
          "Jika memilih Cara 2, saat membuat repo di GitHub **JANGAN** centang opsi apapun (README, .gitignore, License). Biarkan repo kosong agar tidak terjadi konflik saat push pertama.",
      },
    ],
  },
  {
    id: "perintah-dasar",
    icon: "💻",
    title: "Perintah Dasar Git",
    subtitle: "Command yang paling sering digunakan",
    content: [
      {
        type: "text",
        value: "## Alur Kerja Dasar Git",
      },
      {
        type: "info",
        title: "Siklus Git",
        value:
          "**Working Directory** → `git add` → **Staging Area** → `git commit` → **Repository Lokal** → `git push` → **GitHub (Remote)**",
      },
      {
        type: "code",
        lang: "bash",
        title: "git status - Cek Status",
        value:
          "# Lihat status file (modified, staged, untracked)\ngit status\n\n# Versi singkat\ngit status -s",
      },
      {
        type: "code",
        lang: "bash",
        title: "git add - Tambah ke Staging",
        value:
          "# Tambah file tertentu\ngit add namafile.txt\n\n# Tambah semua file yang berubah\ngit add .\n\n# Tambah semua file dengan ekstensi tertentu\ngit add *.js\n\n# Tambah folder tertentu\ngit add src/",
      },
      {
        type: "code",
        lang: "bash",
        title: "git commit - Simpan Perubahan",
        value:
          '# Commit dengan pesan\ngit commit -m "pesan commit kamu"\n\n# Commit langsung (skip staging untuk file yang sudah tracked)\ngit commit -am "pesan commit"\n\n# Ubah pesan commit terakhir\ngit commit --amend -m "pesan baru"',
      },
      {
        type: "code",
        lang: "bash",
        title: "git log - Lihat Riwayat",
        value:
          "# Lihat riwayat commit\ngit log\n\n# Versi singkat\ngit log --oneline\n\n# Dengan grafik\ngit log --oneline --graph --all\n\n# Lihat 5 commit terakhir\ngit log -5",
      },
      {
        type: "code",
        lang: "bash",
        title: "git diff - Lihat Perubahan",
        value:
          "# Lihat perubahan yang belum di-staging\ngit diff\n\n# Lihat perubahan yang sudah di-staging\ngit diff --staged\n\n# Bandingkan 2 commit\ngit diff commit1 commit2",
      },
      {
        type: "table",
        title: "Rangkuman Perintah Dasar",
        value:
          "Perintah|Fungsi\ngit init|Inisialisasi repo baru\ngit clone|Salin repo dari remote\ngit status|Cek status file\ngit add|Tambah file ke staging\ngit commit|Simpan perubahan\ngit log|Lihat riwayat commit\ngit diff|Lihat perubahan file",
      },
    ],
  },
  {
    id: "push-pull",
    icon: "🔄",
    title: "Push & Pull",
    subtitle: "Sinkronisasi dengan GitHub",
    content: [
      {
        type: "code",
        lang: "bash",
        title: "git push - Upload ke GitHub",
        value:
          "# Push ke remote (pertama kali)\ngit push -u origin main\n\n# Push selanjutnya (cukup ini saja)\ngit push\n\n# Push branch tertentu\ngit push origin nama-branch\n\n# Force push (HATI-HATI!)\ngit push --force",
      },
      {
        type: "code",
        lang: "bash",
        title: "git pull - Download dari GitHub",
        value:
          "# Pull perubahan terbaru\ngit pull\n\n# Pull dari branch tertentu\ngit pull origin main\n\n# Pull dengan rebase (lebih bersih)\ngit pull --rebase",
      },
      {
        type: "code",
        lang: "bash",
        title: "git fetch - Cek Update Tanpa Merge",
        value:
          "# Fetch semua update dari remote\ngit fetch\n\n# Fetch dari remote tertentu\ngit fetch origin\n\n# Lihat perbedaan setelah fetch\ngit diff main origin/main",
      },
      {
        type: "code",
        lang: "bash",
        title: "git remote - Kelola Remote",
        value:
          "# Lihat remote yang terhubung\ngit remote -v\n\n# Tambah remote baru\ngit remote add origin https://github.com/user/repo.git\n\n# Ubah URL remote\ngit remote set-url origin https://github.com/user/repo-baru.git\n\n# Hapus remote\ngit remote remove origin",
      },
      {
        type: "warning",
        title: "⚠️ Jangan Force Push!",
        value:
          "`git push --force` akan menimpa riwayat di remote. Hanya gunakan jika kamu benar-benar tahu apa yang kamu lakukan dan tidak ada orang lain yang bekerja di branch yang sama.",
      },
    ],
  },
  {
    id: "edit-push",
    icon: "⭐",
    title: "Edit Lokal & Push ke GitHub",
    subtitle: "Cara edit file lokal dan push ke repo yang sudah ada",
    content: [
      {
        type: "info",
        title: "💡 Pertanyaan Umum",
        value:
          "\"Kalau file lokal di-edit, lalu mau push ke GitHub yang sudah ada filenya, bagaimana caranya?\"\n\nJawabannya sangat sederhana! Ikuti langkah di bawah ini.",
      },
      {
        type: "text",
        value: "## Skenario: Kamu sudah punya repo di GitHub dan sudah di-clone ke komputer lokal",
      },
      {
        type: "code",
        lang: "bash",
        title: "Langkah Lengkap: Edit → Push",
        value:
          '# ============================================\n# LANGKAH 1: Pastikan kamu di folder proyek\n# ============================================\ncd proyek-saya\n\n# ============================================\n# LANGKAH 2: Pull dulu (ambil update terbaru)\n# ============================================\ngit pull origin main\n\n# ============================================\n# LANGKAH 3: Edit file sesuka hati kamu\n# ============================================\n# - Buka file dengan editor (VS Code, Notepad++, dll)\n# - Edit, tambah, hapus file sesuka kamu\n# - Simpan file\n\n# ============================================\n# LANGKAH 4: Cek file apa saja yang berubah\n# ============================================\ngit status\n\n# ============================================\n# LANGKAH 5: Tambahkan ke staging\n# ============================================\ngit add .\n\n# ============================================\n# LANGKAH 6: Commit (simpan perubahan)\n# ============================================\ngit commit -m "Update: deskripsi perubahan kamu"\n\n# ============================================\n# LANGKAH 7: Push ke GitHub\n# ============================================\ngit push origin main',
      },
      {
        type: "tip",
        title: "🎯 Rumus Singkat yang Wajib Diingat",
        value:
          "```\ngit pull          ← Ambil update terbaru\n(edit file)       ← Kerja di lokal\ngit add .         ← Stage semua perubahan\ngit commit -m \"\" ← Simpan dengan pesan\ngit push          ← Upload ke GitHub\n```\n\nIni adalah **workflow paling dasar** yang akan kamu gunakan setiap hari sebagai developer!",
      },
      {
        type: "warning",
        title: "Kalau Terjadi Konflik Saat Push",
        value:
          "Jika muncul error saat push, biasanya karena ada perubahan di GitHub yang belum kamu pull. Solusinya:\n\n1. `git pull origin main` (pull dulu)\n2. Selesaikan konflik jika ada\n3. `git add .`\n4. `git commit -m \"Resolve conflict\"`\n5. `git push origin main`",
      },
      {
        type: "code",
        lang: "bash",
        title: "Contoh Kasus Nyata",
        value:
          '# Kamu punya repo kitab-git-github di GitHub\n# dan sudah di-clone ke komputer\n\n# 1. Masuk ke folder\ncd kitab-git-github\n\n# 2. Pull update terbaru\ngit pull\n\n# 3. Edit file index.html, style.css, dll\n#    (pakai VS Code atau editor lain)\n\n# 4. Cek perubahan\ngit status\n# Output:\n#   modified: index.html\n#   modified: style.css\n#   new file: gambar/logo.png\n\n# 5. Add semua\ngit add .\n\n# 6. Commit\ngit commit -m "Update tampilan dan tambah logo"\n\n# 7. Push\ngit push\n\n# ✅ SELESAI! Cek GitHub, file sudah terupdate!',
      },
    ],
  },
  {
    id: "branching",
    icon: "🌿",
    title: "Branching (Percabangan)",
    subtitle: "Bekerja di cabang terpisah",
    content: [
      {
        type: "text",
        value:
          "**Branch** adalah cabang terpisah dari kode utama. Dengan branch, kamu bisa mengembangkan fitur baru tanpa mengganggu kode yang sudah stabil di branch `main`.",
      },
      {
        type: "code",
        lang: "bash",
        title: "Membuat & Pindah Branch",
        value:
          "# Lihat semua branch\ngit branch\n\n# Buat branch baru\ngit branch nama-branch\n\n# Pindah ke branch\ngit checkout nama-branch\n\n# Buat & langsung pindah (shortcut)\ngit checkout -b nama-branch\n\n# Cara baru (Git 2.23+)\ngit switch nama-branch\ngit switch -c nama-branch-baru",
      },
      {
        type: "code",
        lang: "bash",
        title: "Push Branch ke GitHub",
        value:
          "# Push branch baru ke remote\ngit push -u origin nama-branch\n\n# Push selanjutnya\ngit push",
      },
      {
        type: "code",
        lang: "bash",
        title: "Hapus Branch",
        value:
          "# Hapus branch lokal\ngit branch -d nama-branch\n\n# Force hapus branch lokal\ngit branch -D nama-branch\n\n# Hapus branch remote\ngit push origin --delete nama-branch",
      },
      {
        type: "tip",
        title: "Best Practice Penamaan Branch",
        value:
          "• `feature/nama-fitur` → untuk fitur baru\n• `bugfix/nama-bug` → untuk perbaikan bug\n• `hotfix/nama-fix` → untuk fix urgent\n• `release/v1.0` → untuk persiapan release",
      },
    ],
  },
  {
    id: "merge",
    icon: "🔀",
    title: "Merge & Rebase",
    subtitle: "Menggabungkan branch",
    content: [
      {
        type: "code",
        lang: "bash",
        title: "Merge Branch",
        value:
          "# Pindah ke branch tujuan (biasanya main)\ngit checkout main\n\n# Merge branch fitur ke main\ngit merge nama-branch\n\n# Merge tanpa fast-forward (buat merge commit)\ngit merge --no-ff nama-branch",
      },
      {
        type: "code",
        lang: "bash",
        title: "Menangani Merge Conflict",
        value:
          '# Saat merge conflict terjadi:\n# 1. Buka file yang conflict\n# 2. Cari tanda conflict:\n#    <<<<<<< HEAD\n#    kode dari branch saat ini\n#    =======\n#    kode dari branch yang di-merge\n#    >>>>>>> nama-branch\n\n# 3. Edit file, hapus tanda conflict, pilih kode yang benar\n# 4. Save file\n\n# 5. Add & Commit\ngit add .\ngit commit -m "Resolve merge conflict"',
      },
      {
        type: "code",
        lang: "bash",
        title: "Rebase (Alternatif Merge)",
        value:
          "# Rebase branch fitur ke main\ngit checkout fitur-branch\ngit rebase main\n\n# Interactive rebase (untuk merapikan commit)\ngit rebase -i HEAD~3  # 3 commit terakhir",
      },
      {
        type: "info",
        title: "Merge vs Rebase",
        value:
          "• **Merge**: Membuat commit baru yang menggabungkan dua branch. Riwayat commit terlihat bercabang.\n• **Rebase**: Memindahkan commit ke atas branch target. Riwayat commit terlihat linear/bersih.\n\nUntuk pemula, gunakan **merge** yang lebih aman.",
      },
    ],
  },
  {
    id: "gitignore",
    icon: "🚫",
    title: "File .gitignore",
    subtitle: "Abaikan file yang tidak perlu di-track",
    content: [
      {
        type: "text",
        value:
          "File `.gitignore` berisi daftar file/folder yang tidak ingin kamu track di Git. File ini biasanya diletakkan di root folder proyek.",
      },
      {
        type: "code",
        lang: "bash",
        title: "Contoh .gitignore",
        value:
          "# Dependencies\nnode_modules/\nvendor/\n\n# Build output\ndist/\nbuild/\n*.min.js\n*.min.css\n\n# Environment variables (RAHASIA!)\n.env\n.env.local\n.env.production\n\n# IDE / Editor\n.vscode/\n.idea/\n*.swp\n*.swo\n\n# OS files\n.DS_Store\nThumbs.db\n\n# Log files\n*.log\nnpm-debug.log*\n\n# Cache\n.cache/\n.tmp/",
      },
      {
        type: "warning",
        title: "Penting!",
        value:
          "Jangan pernah push file yang berisi informasi rahasia seperti:\n• `.env` (API keys, database password)\n• File credentials\n• Private keys\n\nSelalu masukkan ke `.gitignore` SEBELUM commit pertama!",
      },
      {
        type: "code",
        lang: "bash",
        title: "Jika Sudah Terlanjur Di-track",
        value:
          "# Hapus file dari tracking Git (tapi tetap di komputer)\ngit rm --cached namafile.env\ngit rm --cached -r node_modules/\n\n# Commit perubahan\ngit commit -m \"Remove tracked files\"\n\n# Sekarang file akan diabaikan oleh Git",
      },
    ],
  },
  {
    id: "undo",
    icon: "⏪",
    title: "Undo & Reset",
    subtitle: "Membatalkan perubahan",
    content: [
      {
        type: "code",
        lang: "bash",
        title: "Batalkan Perubahan di Working Directory",
        value:
          "# Batalkan perubahan pada satu file\ngit checkout -- namafile.txt\n\n# Cara baru (Git 2.23+)\ngit restore namafile.txt\n\n# Batalkan semua perubahan\ngit restore .",
      },
      {
        type: "code",
        lang: "bash",
        title: "Unstage File (Keluarkan dari Staging)",
        value:
          "# Unstage file tertentu\ngit reset HEAD namafile.txt\n\n# Cara baru\ngit restore --staged namafile.txt\n\n# Unstage semua\ngit restore --staged .",
      },
      {
        type: "code",
        lang: "bash",
        title: "Reset Commit",
        value:
          '# Soft reset: hapus commit tapi perubahan tetap di staging\ngit reset --soft HEAD~1\n\n# Mixed reset: hapus commit, perubahan di working directory\ngit reset HEAD~1\n\n# Hard reset: hapus commit DAN semua perubahan (BAHAYA!)\ngit reset --hard HEAD~1\n\n# Reset ke commit tertentu\ngit reset --hard abc1234',
      },
      {
        type: "code",
        lang: "bash",
        title: "Revert (Buat Commit Balik yang Aman)",
        value:
          "# Revert commit tertentu (buat commit baru yang membatalkan)\ngit revert abc1234\n\n# Revert commit terakhir\ngit revert HEAD",
      },
      {
        type: "warning",
        title: "⚠️ Hati-hati dengan --hard!",
        value:
          "`git reset --hard` akan menghapus semua perubahan secara permanen. Gunakan `git revert` yang lebih aman karena membuat commit baru tanpa menghapus riwayat.",
      },
    ],
  },
  {
    id: "stash",
    icon: "📦",
    title: "Git Stash",
    subtitle: "Simpan sementara perubahan",
    content: [
      {
        type: "text",
        value:
          "**Git Stash** berguna saat kamu sedang coding tapi perlu pindah branch tanpa commit perubahan yang belum selesai.",
      },
      {
        type: "code",
        lang: "bash",
        title: "Penggunaan Stash",
        value:
          '# Simpan perubahan sementara\ngit stash\n\n# Simpan dengan pesan\ngit stash save "pesan deskripsi"\n\n# Lihat daftar stash\ngit stash list\n\n# Ambil kembali stash terakhir (dan hapus dari stash)\ngit stash pop\n\n# Ambil kembali tanpa hapus dari stash\ngit stash apply\n\n# Ambil stash tertentu\ngit stash apply stash@{2}\n\n# Hapus stash tertentu\ngit stash drop stash@{0}\n\n# Hapus semua stash\ngit stash clear',
      },
      {
        type: "tip",
        title: "Kapan Pakai Stash?",
        value:
          "• Perlu pindah branch tapi kode belum selesai\n• Perlu pull update tapi ada perubahan lokal\n• Mau coba pendekatan lain tanpa kehilangan kode saat ini",
      },
    ],
  },
  {
    id: "pull-request",
    icon: "📬",
    title: "Pull Request (PR)",
    subtitle: "Kontribusi dan review kode",
    content: [
      {
        type: "text",
        value:
          "**Pull Request (PR)** adalah fitur GitHub untuk mengajukan perubahan dari satu branch ke branch lain. PR memungkinkan review kode sebelum digabungkan.",
      },
      {
        type: "steps",
        title: "Membuat Pull Request",
        value:
          "1. Buat branch baru: `git checkout -b feature/fitur-baru`\n2. Coding dan commit perubahan\n3. Push branch: `git push -u origin feature/fitur-baru`\n4. Buka GitHub → repository kamu\n5. Klik **\"Compare & pull request\"** (banner kuning)\n6. Isi judul dan deskripsi PR\n7. Pilih reviewer (opsional)\n8. Klik **\"Create pull request\"**",
      },
      {
        type: "steps",
        title: "Review & Merge PR",
        value:
          "1. Reviewer membaca kode dan memberikan komentar\n2. Jika ada revisi, push commit baru ke branch yang sama\n3. Setelah disetujui, klik **\"Merge pull request\"**\n4. Klik **\"Confirm merge\"**\n5. Hapus branch yang sudah di-merge (opsional)",
      },
      {
        type: "text",
        value: "## Kontribusi ke Proyek Open Source",
      },
      {
        type: "steps",
        title: "Fork & Pull Request",
        value:
          "1. **Fork** repository di GitHub (tombol Fork di kanan atas)\n2. **Clone** fork kamu: `git clone https://github.com/kamu/repo.git`\n3. Buat **branch** baru\n4. **Edit** kode dan commit\n5. **Push** ke fork kamu\n6. Buat **Pull Request** dari fork ke repo asli",
      },
    ],
  },
  {
    id: "github-pages",
    icon: "🌐",
    title: "GitHub Pages",
    subtitle: "Deploy website gratis di GitHub",
    content: [
      {
        type: "text",
        value:
          "**GitHub Pages** adalah fitur gratis dari GitHub untuk hosting website statis. Cocok untuk portfolio, dokumentasi, atau landing page.",
      },
      {
        type: "steps",
        title: "Deploy ke GitHub Pages",
        value:
          "1. Buat repository di GitHub (contoh: `username.github.io` atau `nama-proyek`)\n2. Push kode website kamu ke repository\n3. Buka **Settings** → **Pages**\n4. Pilih **Source**: Deploy from a branch\n5. Pilih **Branch**: `main` dan folder `/ (root)` atau `/docs`\n6. Klik **Save**\n7. Tunggu beberapa menit\n8. Website live di `https://username.github.io/nama-proyek/`",
      },
      {
        type: "code",
        lang: "bash",
        title: "Deploy dengan GitHub Actions (Untuk Framework)",
        value:
          '# Untuk React/Vite, tambahkan base di vite.config.ts:\n# base: "/nama-repo/"\n\n# Lalu buat file .github/workflows/deploy.yml\n# GitHub akan otomatis build dan deploy',
      },
      {
        type: "tip",
        title: "Tips GitHub Pages",
        value:
          "• Repo bernama `username.github.io` akan tampil di `https://username.github.io`\n• Repo lainnya akan tampil di `https://username.github.io/nama-repo`\n• Pastikan ada file `index.html` di root\n• GitHub Pages gratis untuk repo public",
      },
    ],
  },
  {
    id: "workflow",
    icon: "🔁",
    title: "Workflow Harian",
    subtitle: "Alur kerja sehari-hari sebagai developer",
    content: [
      {
        type: "code",
        lang: "bash",
        title: "🌅 Pagi - Mulai Kerja",
        value:
          '# 1. Pindah ke branch utama\ngit checkout main\n\n# 2. Pull update terbaru\ngit pull\n\n# 3. Buat branch untuk fitur/task hari ini\ngit checkout -b feature/fitur-hari-ini',
      },
      {
        type: "code",
        lang: "bash",
        title: "🏗️ Siang - Coding",
        value:
          '# Coding... coding... coding...\n\n# Commit berkala (setiap selesai satu bagian)\ngit add .\ngit commit -m "Add form validation"\n\n# Coding lagi...\ngit add .\ngit commit -m "Add error handling"\n\n# Push ke remote (backup)\ngit push -u origin feature/fitur-hari-ini',
      },
      {
        type: "code",
        lang: "bash",
        title: "🌆 Sore - Selesai Kerja",
        value:
          '# 1. Pastikan semua sudah di-commit\ngit status\n\n# 2. Push terakhir\ngit push\n\n# 3. Buat Pull Request di GitHub\n# 4. Minta review dari rekan tim\n\n# 5. Setelah di-merge, bersihkan branch lokal\ngit checkout main\ngit pull\ngit branch -d feature/fitur-hari-ini',
      },
      {
        type: "tip",
        title: "Tips Pesan Commit yang Baik",
        value:
          "• Gunakan bahasa Inggris\n• Mulai dengan kata kerja: Add, Fix, Update, Remove, Refactor\n• Jelaskan APA yang berubah, bukan BAGAIMANA\n\nContoh baik:\n✅ `Add user authentication`\n✅ `Fix login button not responding`\n✅ `Update README with API docs`\n\nContoh buruk:\n❌ `update`\n❌ `fix bug`\n❌ `changes`",
      },
    ],
  },
  {
    id: "troubleshoot",
    icon: "🔥",
    title: "Troubleshooting",
    subtitle: "Solusi masalah yang sering terjadi",
    content: [
      {
        type: "code",
        lang: "bash",
        title: "❌ Error: failed to push - rejected",
        value:
          '# Masalah: Ada perubahan di remote yang belum di-pull\n# Solusi:\ngit pull --rebase origin main\ngit push\n\n# Atau jika ada conflict:\ngit pull origin main\n# (resolve conflict)\ngit add .\ngit commit -m "Resolve conflict"\ngit push',
      },
      {
        type: "code",
        lang: "bash",
        title: "❌ Error: fatal: not a git repository",
        value:
          "# Masalah: Kamu belum di dalam folder git\n# Solusi:\n# Pastikan kamu di folder yang benar\ncd nama-folder-proyek\n\n# Atau inisialisasi git\ngit init",
      },
      {
        type: "code",
        lang: "bash",
        title: "❌ Error: Permission denied (publickey)",
        value:
          '# Masalah: SSH key belum di-setup\n# Solusi:\n# 1. Generate SSH key\nssh-keygen -t ed25519 -C "email@example.com"\n\n# 2. Tambah ke SSH agent\neval "$(ssh-agent -s)"\nssh-add ~/.ssh/id_ed25519\n\n# 3. Copy dan tambahkan ke GitHub\ncat ~/.ssh/id_ed25519.pub\n# Paste di GitHub → Settings → SSH Keys',
      },
      {
        type: "code",
        lang: "bash",
        title: "❌ Error: merge conflict",
        value:
          '# Masalah: Dua orang mengubah file yang sama\n# Solusi:\n# 1. Buka file yang conflict\n# 2. Cari dan edit bagian:\n#    <<<<<<< HEAD\n#    kode kamu\n#    =======\n#    kode orang lain\n#    >>>>>>> branch-lain\n# 3. Pilih kode yang benar, hapus tanda conflict\n# 4. Save file\ngit add .\ngit commit -m "Resolve merge conflict"',
      },
      {
        type: "code",
        lang: "bash",
        title: "❌ Tidak sengaja commit file besar/rahasia",
        value:
          "# Hapus file dari riwayat git\ngit filter-branch --force --index-filter \\\n  'git rm --cached --ignore-unmatch path/to/file' \\\n  --prune-empty --tag-name-filter cat -- --all\n\n# Force push\ngit push --force\n\n# Atau gunakan BFG Repo Cleaner (lebih mudah)\n# https://rtyley.github.io/bfg-repo-cleaner/",
      },
    ],
  },
  {
    id: "cheatsheet",
    icon: "📋",
    title: "Cheat Sheet",
    subtitle: "Rangkuman semua perintah penting",
    content: [
      {
        type: "table",
        title: "Setup & Konfigurasi",
        value:
          "Perintah|Fungsi\ngit init|Buat repo baru\ngit clone <url>|Clone repo dari remote\ngit config --global user.name|Set nama\ngit config --global user.email|Set email",
      },
      {
        type: "table",
        title: "Perubahan & Commit",
        value:
          "Perintah|Fungsi\ngit status|Cek status\ngit add .|Stage semua file\ngit commit -m \"msg\"|Commit dengan pesan\ngit diff|Lihat perubahan\ngit log --oneline|Riwayat singkat",
      },
      {
        type: "table",
        title: "Branch & Merge",
        value:
          "Perintah|Fungsi\ngit branch|Lihat branch\ngit checkout -b <name>|Buat & pindah branch\ngit merge <branch>|Merge branch\ngit branch -d <name>|Hapus branch",
      },
      {
        type: "table",
        title: "Remote & Sync",
        value:
          "Perintah|Fungsi\ngit push|Upload ke remote\ngit pull|Download & merge\ngit fetch|Download tanpa merge\ngit remote -v|Lihat remote",
      },
      {
        type: "table",
        title: "Undo & Reset",
        value:
          "Perintah|Fungsi\ngit restore <file>|Batalkan perubahan\ngit restore --staged <file>|Unstage file\ngit reset --soft HEAD~1|Undo commit (keep changes)\ngit reset --hard HEAD~1|Undo commit (hapus semua)\ngit revert <commit>|Revert commit (aman)\ngit stash|Simpan sementara",
      },
    ],
  },
];
