import React, { useState } from "react";
import { Save, X } from "lucide-react";

export default function DataRecordForm({
  schema,
  record,
  onSave,
  onCancel,
}) {
  const [formData, setFormData] = useState(record || {});
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const properties = schema?.properties || {};
  const required = schema?.required || [];

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await onSave(formData);
    } catch (err) {
      setError(err.message || "Save failed");
    }
    setSaving(false);
  };

  const renderField = (key, prop) => {
    const value = formData[key] ?? prop.default ?? "";

    // Enum → select
    if (prop.enum) {
      return (
        <select
          value={value}
          onChange={(e) => handleChange(key, e.target.value)}
          className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none"
        >
          <option value="">— Select —</option>
          {prop.enum.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    }

    // Boolean → toggle
    if (prop.type === "boolean") {
      return (
        <button
          type="button"
          onClick={() => handleChange(key, !value)}
          className={`px-3 py-1.5 text-[10px] font-mono tracking-wider border ${
            value
              ? "border-ignition bg-ignition/10 text-ignition"
              : "border-titanium/20 text-titanium"
          }`}
        >
          {value ? "TRUE" : "FALSE"}
        </button>
      );
    }

    // Number
    if (prop.type === "number" || prop.type === "integer") {
      return (
        <input
          type="number"
          value={value}
          onChange={(e) =>
            handleChange(key, e.target.value === "" ? "" : Number(e.target.value))
          }
          className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none"
        />
      );
    }

    // Date
    if (prop.format === "date") {
      return (
        <input
          type="date"
          value={value ? String(value).slice(0, 10) : ""}
          onChange={(e) => handleChange(key, e.target.value)}
          className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none"
        />
      );
    }

    // Default: text
    return (
      <textarea
        value={value}
        onChange={(e) => handleChange(key, e.target.value)}
        rows={2}
        className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none resize-y"
      />
    );
  };

  const sortedKeys = Object.keys(properties).sort((a, b) => {
    const ar = required.includes(a) ? 0 : 1;
    const br = required.includes(b) ? 0 : 1;
    return ar - br;
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {sortedKeys.map((key) => (
        <div key={key}>
          <label className="text-[9px] font-mono text-titanium tracking-wider block mb-1">
            {key.toUpperCase()}
            {required.includes(key) && (
              <span className="text-ignition"> *</span>
            )}
            {properties[key].description && (
              <span className="text-titanium/40 ml-2 normal-case">
                — {properties[key].description}
              </span>
            )}
          </label>
          {renderField(key, properties[key])}
        </div>
      ))}

      {error && (
        <div className="border border-ignition/40 bg-ignition/5 px-3 py-2 text-[11px] font-mono text-ignition">
          {error}
        </div>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="flex items-center gap-1.5 px-4 py-2 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors disabled:opacity-50"
        >
          <Save size={12} />
          {saving ? "SAVING..." : "SAVE RECORD"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex items-center gap-1.5 px-4 py-2 border border-titanium/30 text-[10px] font-mono tracking-[0.15em] text-titanium hover:text-signal-white hover:border-titanium/60 transition-colors"
        >
          <X size={12} />
          CANCEL
        </button>
      </div>
    </form>
  );
}