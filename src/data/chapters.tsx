import { BookOpen, Download, Settings, FolderPlus, GitBranch, Upload, ArrowDownToLine, GitMerge, AlertTriangle, FileX, History, Lightbulb, Zap, Star, Workflow } from 'lucide-react';

export interface Chapter {
  id: string;
  title: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export const chapters: Chapter[] = [
  { id: 'intro', title: 'Apa itu Git & GitHub', icon: <BookOpen size={16} /> },
  { id: 'install', title: 'Instalasi Git', icon: <Download size={16} /> },
  { id: 'config', title: 'Konfigurasi Awal', icon: <Settings size={16} /> },
  { id: 'new-repo', title: 'Membuat Repository', icon: <FolderPlus size={16} /> },
  { id: 'basic', title: 'Perintah Dasar Git', icon: <GitBranch size={16} /> },
  { id: 'edit-push', title: 'Edit Lokal & Push ke GitHub', icon: <Upload size={16} />, highlight: true },
  { id: 'clone-pull', title: 'Clone, Pull & Fetch', icon: <ArrowDownToLine size={16} /> },
  { id: 'branching', title: 'Branching & Merging', icon: <GitMerge size={16} /> },
  { id: 'conflict', title: 'Mengatasi Conflict', icon: <AlertTriangle size={16} /> },
  { id: 'gitignore', title: 'File .gitignore', icon: <FileX size={16} /> },
  { id: 'log', title: 'Git Log & History', icon: <History size={16} /> },
  { id: 'workflow', title: 'Alur Kerja (Workflow)', icon: <Workflow size={16} /> },
  { id: 'tips', title: 'Tips & Trik Pro', icon: <Lightbulb size={16} /> },
  { id: 'cheatsheet', title: 'Cheat Sheet', icon: <Zap size={16} /> },
  { id: 'faq', title: 'FAQ & Troubleshoot', icon: <Star size={16} /> },
];
