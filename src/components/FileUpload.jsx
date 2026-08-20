import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }
      if (!['image/jpeg', 'image/png', 'application/pdf'].includes(selectedFile.type)) {
        alert('Only JPG, PNG, or PDF files are allowed');
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="custom-dashed p-xl bg-surface-container-lowest flex flex-col items-center justify-center text-center space-y-md cursor-pointer active:scale-[0.98] transition-transform" onClick={() => document.getElementById('file-input').click()}>
      <input
        accept="image/*,application/pdf"
        className="hidden"
        id="file-input"
        type="file"
        onChange={handleFileChange}
      />
      {!file ? (
        <div className="flex flex-col items-center" id="upload-placeholder">
          <div className="bg-primary-fixed p-md rounded-full mb-md">
            <span className="material-symbols-outlined text-on-primary text-[32px]">cloud_upload</span>
          </div>
          <p className="font-body-base font-semibold text-on-surface">Ketuk untuk unggah bukti transfer</p>
          <p className="text-xs text-on-surface-variant mt-1">JPG, PNG atau PDF (Maks. 5MB)</p>
        </div>
      ) : (
        <div className="w-full space-y-md" id="preview-container">
          <div className="relative rounded-lg overflow-hidden border border-border">
            <img
              className="w-full h-48 object-cover"
              src={preview}
              alt="Uploaded file preview"
            />
            <button
              className="absolute top-2 right-2 bg-on-surface/50 text-white p-1 rounded-full backdrop-blur-sm"
              onClick={handleRemoveFile}
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <p className="text-xs text-on-surface-variant truncate font-mono" id="filename-display">
            {file.name}
          </p>
        </div>
      )}
    </div>
  );
}
