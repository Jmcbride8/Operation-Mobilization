import React, { useRef, useState } from "react";
import { base44 } from "@/api/base44Client";
import { Upload, Save, Check } from "lucide-react";

export default function ImageEditCard({ img, onSaved }) {
  const [url, setUrl] = useState(img.url);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState(false);
  const fileRef = useRef(null);

  const dirty = url !== img.url;

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      if (img.id) {
        await base44.entities.SiteImage.update(img.id, { url });
      } else {
        await base44.entities.SiteImage.create({
          key: img.key,
          url,
          label: img.label,
          category: img.category,
        });
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      onSaved?.();
    } catch (err) {
      console.error("Save failed:", err);
    }
    setSaving(false);
  };

  const handleUpload = async (file) => {
    setUploading(true);
    try {
      const result = await base44.integrations.Core.UploadFile({ file });
      setUrl(result.file_url);
    } catch (err) {
      console.error("Upload failed:", err);
    }
    setUploading(false);
  };

  return (
    <div className="border border-titanium/20 bg-obsidian group">
      {/* Preview */}
      <div className="relative h-36 overflow-hidden border-b border-titanium/20">
        <img
          src={url || img.url}
          alt={img.label}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = img.url;
          }}
        />
        <div className="absolute inset-0 bg-obsidian/20" />
        <span className="absolute top-2 left-2 text-[9px] font-mono text-signal-white bg-obsidian/80 px-1.5 py-0.5">
          {img.category}
        </span>
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-obsidian/80">
            <span className="text-[10px] font-mono text-ignition tracking-wider animate-pulse">
              UPLOADING...
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 space-y-2">
        <div>
          <span className="text-[9px] font-mono text-titanium tracking-wider block">
            KEY
          </span>
          <span className="text-[11px] font-mono text-signal-white break-all">
            {img.key}
          </span>
        </div>
        <div>
          <span className="text-[9px] font-mono text-titanium tracking-wider block">
            LABEL
          </span>
          <span className="text-[11px] font-mono text-signal-white/70">
            {img.label}
          </span>
        </div>

        {/* URL input */}
        <div>
          <span className="text-[9px] font-mono text-titanium tracking-wider block mb-1">
            URL
          </span>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[10px] font-mono text-signal-white focus:border-ignition focus:outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <button
            onClick={() => fileRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-1 px-2 py-1.5 border border-titanium/30 text-[9px] font-mono tracking-wider text-titanium hover:text-signal-white hover:border-titanium/60 transition-colors disabled:opacity-50"
          >
            <Upload size={11} />
            UPLOAD
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleUpload(file);
              e.target.value = "";
            }}
          />
          <button
            onClick={handleSave}
            disabled={!dirty || saving}
            className="flex items-center gap-1 px-2 py-1.5 text-[9px] font-mono tracking-wider bg-ignition text-white hover:bg-ignition/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {saved ? <Check size={11} /> : <Save size={11} />}
            {saved ? "SAVED" : saving ? "SAVING..." : "SAVE"}
          </button>
        </div>
      </div>
    </div>
  );
}