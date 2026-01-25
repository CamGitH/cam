import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function CVUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setMessage(null);
    } else {
      setMessage({ type: 'error', text: 'Please select a valid PDF file' });
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setMessage(null);

    try {
      const timestamp = Date.now();
      const fileName = `cv-${timestamp}.pdf`;

      const { error: uploadError } = await supabase.storage
        .from('cv-files')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw uploadError;
      }

      setMessage({ type: 'success', text: 'CV uploaded successfully!' });
      setFile(null);

      const fileInput = document.getElementById('cv-file-input') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error: any) {
      console.error('Error uploading CV:', error);
      setMessage({ type: 'error', text: error.message || 'Failed to upload CV' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload CV</h1>
          <p className="text-slate-600">Upload your CV PDF file to make it available for download</p>
        </div>

        <div className="space-y-6">
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
            <label htmlFor="cv-file-input" className="cursor-pointer block">
              <Upload className="mx-auto text-slate-400 mb-3" size={48} />
              <p className="text-slate-700 font-medium mb-1">
                {file ? file.name : 'Click to select PDF file'}
              </p>
              <p className="text-sm text-slate-500">Only PDF files are accepted</p>
            </label>
            <input
              id="cv-file-input"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {file && (
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <FileText className="text-blue-500" size={24} />
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900">{file.name}</p>
                <p className="text-xs text-slate-600">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
          )}

          {message && (
            <div
              className={`flex items-center gap-3 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              {message.type === 'success' ? (
                <CheckCircle className="text-green-500" size={24} />
              ) : (
                <AlertCircle className="text-red-500" size={24} />
              )}
              <p
                className={`text-sm font-medium ${
                  message.type === 'success' ? 'text-green-900' : 'text-red-900'
                }`}
              >
                {message.text}
              </p>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {uploading ? 'Uploading...' : 'Upload CV'}
          </button>
        </div>

        <div className="mt-8 p-4 bg-slate-50 rounded-lg">
          <p className="text-xs text-slate-600">
            <strong>Note:</strong> The uploaded CV will replace any existing CV file and will be
            available for download on your portfolio website.
          </p>
        </div>
      </div>
    </div>
  );
}
