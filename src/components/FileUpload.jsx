import { useRef } from 'react';

export default function FileUpload({ files, setFiles }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  return (
    <div className="space-y-md">
      <div className="space-y-xs">
        <label className="font-label-caps text-label-caps text-on-surface-variant ml-xs">Bukti Pembayaran</label>
        <div
          className="w-full bg-surface border-2 border-dashed border-outline-variant rounded-xl py-md px-md text-body-base text-center cursor-pointer hover:border-primary transition-all"
          onClick={() => fileInputRef.current.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*,.pdf"
            multiple
          />
          <span className="material-symbols-outlined text-[24px] text-outline mb-xs">upload_file</span>
          <p className="text-body-base text-on-surface-variant">Klik untuk unggah atau seret dan lepas file</p>
          <p className="text-body-sm text-outline">Format: JPG, PNG, PDF (Maks. 5MB)</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-xs">
          <p className="font-label-caps text-label-caps text-on-surface-variant ml-xs">File yang diunggah</p>
          <div className="space-y-xs">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-surface-container-low rounded-lg p-xs">
                <div className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[18px] text-outline">description</span>
                  <span className="text-body-base text-on-surface truncate max-w-[200px]">{file.name}</span>
                </div>
                <button
                  type="button"
                  className="p-xs text-on-surface-variant hover:bg-surface-container rounded-full transition-colors duration-200 flex items-center justify-center"
                  onClick={() => handleRemoveFile(index)}
                >
                  <span className="material-symbols-outlined text-md">close</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
