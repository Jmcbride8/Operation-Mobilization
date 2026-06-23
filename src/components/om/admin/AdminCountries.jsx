import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Plus, Trash2, RefreshCw } from "lucide-react";

export default function AdminCountries() {
  const queryClient = useQueryClient();
  const [adding, setAdding] = useState(false);
  const [newCountry, setNewCountry] = useState({ name: "", code: "", missionaries: 0, display_order: 0 });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const { data: countries = [], isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const result = await base44.entities.Country.list();
      return result.sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
    },
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["countries"] });

  const handleAdd = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await base44.entities.Country.create({
        name: newCountry.name.trim(),
        code: newCountry.code.trim().toUpperCase(),
        missionaries: parseInt(newCountry.missionaries) || 0,
        display_order: parseInt(newCountry.display_order) || 0,
      });
      setNewCountry({ name: "", code: "", missionaries: 0, display_order: 0 });
      setAdding(false);
      await invalidate();
    } catch (err) {
      setError(err.message || "Failed to add country");
    }
    setSaving(false);
  };

  const handleUpdate = async (id, field, value) => {
    const update = { [field]: field === "missionaries" || field === "display_order" ? (parseInt(value) || 0) : value };
    if (field === "code") update.code = value.toUpperCase();
    try {
      await base44.entities.Country.update(id, update);
      await invalidate();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this country?")) return;
    try {
      await base44.entities.Country.delete(id);
      await invalidate();
    } catch (err) {
      alert("Delete failed: " + err.message);
    }
  };

  const total = countries.reduce((sum, c) => sum + (c.missionaries || 0), 0);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-titanium/20 border-t-ignition rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-mono text-titanium tracking-wider">
            {countries.length} COUNTRIES · {total.toLocaleString()} TOTAL MISSIONARIES
          </span>
          <button onClick={invalidate} className="text-titanium hover:text-signal-white transition-colors">
            <RefreshCw size={14} />
          </button>
        </div>
        <button
          onClick={() => setAdding(!adding)}
          className="flex items-center gap-1.5 px-4 py-2 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors"
        >
          <Plus size={12} />
          ADD COUNTRY
        </button>
      </div>

      {/* Add form */}
      {adding && (
        <form onSubmit={handleAdd} className="border border-titanium/20 p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
              <label className="text-[9px] font-mono text-titanium tracking-wider block mb-1">COUNTRY NAME *</label>
              <input
                type="text"
                required
                value={newCountry.name}
                onChange={(e) => setNewCountry({ ...newCountry, name: e.target.value })}
                className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none"
                placeholder="e.g. India"
              />
            </div>
            <div>
              <label className="text-[9px] font-mono text-titanium tracking-wider block mb-1">CODE (ISO 2) *</label>
              <input
                type="text"
                required
                maxLength={2}
                value={newCountry.code}
                onChange={(e) => setNewCountry({ ...newCountry, code: e.target.value })}
                className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none uppercase"
                placeholder="IN"
              />
            </div>
            <div>
              <label className="text-[9px] font-mono text-titanium tracking-wider block mb-1">MISSIONARIES *</label>
              <input
                type="number"
                required
                value={newCountry.missionaries}
                onChange={(e) => setNewCountry({ ...newCountry, missionaries: e.target.value })}
                className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none"
                placeholder="0"
              />
            </div>
            <div>
              <label className="text-[9px] font-mono text-titanium tracking-wider block mb-1">DISPLAY ORDER</label>
              <input
                type="number"
                value={newCountry.display_order}
                onChange={(e) => setNewCountry({ ...newCountry, display_order: e.target.value })}
                className="w-full bg-background border border-titanium/20 px-2 py-1.5 text-[11px] font-mono text-signal-white focus:border-ignition focus:outline-none"
                placeholder="0"
              />
            </div>
          </div>
          {error && (
            <div className="border border-ignition/40 bg-ignition/5 px-3 py-2 text-[11px] font-mono text-ignition">{error}</div>
          )}
          <div className="flex gap-2">
            <button type="submit" disabled={saving} className="px-4 py-2 bg-ignition text-[10px] font-heading font-bold tracking-[0.15em] text-white hover:bg-ignition/90 transition-colors disabled:opacity-50">
              {saving ? "SAVING..." : "SAVE COUNTRY"}
            </button>
            <button type="button" onClick={() => setAdding(false)} className="px-4 py-2 border border-titanium/30 text-[10px] font-mono tracking-[0.15em] text-titanium hover:text-signal-white hover:border-titanium/60 transition-colors">
              CANCEL
            </button>
          </div>
        </form>
      )}

      {/* Table */}
      {countries.length === 0 ? (
        <div className="text-center py-20 text-[11px] font-mono text-titanium">
          No countries yet. Add countries to populate the scrolling ticker.
        </div>
      ) : (
        <div className="overflow-x-auto border border-titanium/20">
          <table className="w-full">
            <thead>
              <tr className="border-b border-titanium/20 bg-signal-white/[0.02]">
                <th className="text-left px-3 py-2 text-[9px] font-mono text-titanium tracking-wider">FLAG</th>
                <th className="text-left px-3 py-2 text-[9px] font-mono text-titanium tracking-wider">COUNTRY</th>
                <th className="text-left px-3 py-2 text-[9px] font-mono text-titanium tracking-wider">CODE</th>
                <th className="text-right px-3 py-2 text-[9px] font-mono text-titanium tracking-wider">MISSIONARIES</th>
                <th className="text-right px-3 py-2 text-[9px] font-mono text-titanium tracking-wider">ORDER</th>
                <th className="text-right px-3 py-2 text-[9px] font-mono text-titanium tracking-wider">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c) => (
                <tr key={c.id} className="border-b border-titanium/10 hover:bg-signal-white/[0.02] transition-colors">
                  <td className="px-3 py-2">
                    <span className="text-2xl leading-none" style={{ fontFamily: "Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif" }}>
                      {c.code ? String.fromCodePoint(...c.code.toUpperCase().split("").map((ch) => 0x1f1e6 + ch.charCodeAt(0) - 65)) : "🏳️"}
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      value={c.name || ""}
                      onChange={(e) => handleUpdate(c.id, "name", e.target.value)}
                      className="bg-transparent border border-transparent hover:border-titanium/20 focus:border-ignition focus:outline-none px-1 py-0.5 text-[11px] font-mono text-signal-white w-full"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      maxLength={2}
                      value={c.code || ""}
                      onChange={(e) => handleUpdate(c.id, "code", e.target.value)}
                      className="bg-transparent border border-transparent hover:border-titanium/20 focus:border-ignition focus:outline-none px-1 py-0.5 text-[11px] font-mono text-signal-white w-16 uppercase"
                    />
                  </td>
                  <td className="px-3 py-2 text-right">
                    <input
                      type="number"
                      value={c.missionaries || 0}
                      onChange={(e) => handleUpdate(c.id, "missionaries", e.target.value)}
                      className="bg-transparent border border-transparent hover:border-titanium/20 focus:border-ignition focus:outline-none px-1 py-0.5 text-[11px] font-mono text-ignition font-bold text-right w-24"
                    />
                  </td>
                  <td className="px-3 py-2 text-right">
                    <input
                      type="number"
                      value={c.display_order || 0}
                      onChange={(e) => handleUpdate(c.id, "display_order", e.target.value)}
                      className="bg-transparent border border-transparent hover:border-titanium/20 focus:border-ignition focus:outline-none px-1 py-0.5 text-[11px] font-mono text-signal-white/70 text-right w-20"
                    />
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button onClick={() => handleDelete(c.id)} className="text-titanium hover:text-ignition transition-colors">
                      <Trash2 size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-titanium/30 bg-signal-white/[0.02]">
                <td colSpan={3} className="px-3 py-2 text-[10px] font-mono text-titanium tracking-wider text-right">TOTAL</td>
                <td className="px-3 py-2 text-right text-[12px] font-mono font-bold text-ignition">{total.toLocaleString()}</td>
                <td colSpan={2}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}

      <div className="text-[10px] font-mono text-titanium/40 tracking-wider">
        Tip: Use "Display Order" to control the sequence countries appear in the ticker (lower = first).
      </div>
    </div>
  );
}